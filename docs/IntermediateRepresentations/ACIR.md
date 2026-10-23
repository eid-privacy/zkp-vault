---
type: intermediate_representation
tags:
  - zkp
  - circuit
---

[Home](../README.md) > [Intermediate Representations](README.md) > ACIR

# ACIR — Abstract Circuit Intermediate Representation

## Description
The intermediate representation used by [[Noir]]. ACIR is a backend-agnostic circuit representation that sits between Noir's frontend (Rust-like language) and the backend prover (e.g., [[Barretenberg]]). It supports both arithmetic constraints and "blackbox" functions (SHA-256, ECDSA, etc.) that are handled natively by the backend. This separation lets Noir target multiple proving backends.

## From Noir to a Proof
1. **Compile** (`nargo compile`): Noir source is lowered through an SSA IR into a program artifact. The artifact holds one or more ACIR functions, the constrained circuit, together with Brillig bytecode for unconstrained code.
2. **Execute** (`nargo execute`): the **ACVM** (Abstract Circuit Virtual Machine) takes the inputs and solves the witness. It walks the ACIR opcodes in order and runs Brillig code to compute hints.
3. **Prove:** the backend, e.g. [[Barretenberg]], translates ACIR into its own constraint system (Plonkish gates for [[UltraHonk]]) and proves it against the solved witness.

`nargo compile --print-acir` shows the bytecode: `EXPR` lines are arithmetic constraints, `BLACKBOX` lines are black-box calls and `BRILLIG CALL` lines are unconstrained calls.

## ACIR vs. Brillig
- **ACIR** opcodes are *constraints* that end up in the circuit.
- **Brillig** is a register-based bytecode for `unconstrained` functions. It runs only during witness generation, to compute values that are expensive to derive inside a circuit (inverses, divisions, sorting, decompositions), and produces **no constraints**. ACIR must then check the returned values. Forgetting such a check is a classic soundness bug.
- ACIR can call Brillig (`BrilligCall`), but Brillig cannot call ACIR.
- A proving backend can ignore Brillig: the ACVM has already folded its results into the witness.

## Opcodes
The main opcodes are `AssertZero(Expression)`, `BlackBoxFuncCall`, `MemoryInit`/`MemoryOp` (ROM/RAM arrays), `BrilligCall` and `Call` (to other ACIR functions). The arithmetic constraint is a quadratic expression:

```rust
pub struct Expression<F> {
    pub mul_terms: Vec<(F, Witness, Witness)>,      // Σ q_M · w_i · w_j
    pub linear_combinations: Vec<(F, Witness)>,     // Σ q_L · w_k
    pub q_c: F,                                     // constant
}
// AssertZero(e):  Σ q_M·w_i·w_j + Σ q_L·w_k + q_c = 0
```

In ACIR terminology gates are *opcodes* and wires are *(partial) witnesses*. The compiler can bound the expression width to match a backend's gate width.

**Mapping to R1CS.** An expression with at most one multiplication term is exactly one [[R1CS]] row:

```
(q_M · w_i) · (w_j) = −(Σ q_L · w_k + q_c)
```

Expressions with several products need one auxiliary witness tᵢ = w_a·w_b, and one extra row, per additional product. For a sumcheck-based R1CS backend such as [[Spartan]], `EXPR` opcodes therefore translate almost directly. [[CCS]] can absorb them in the same way.

## Black-box Functions
Black-box opcodes delegate common, SNARK-unfriendly operations to the backend, which implements them with optimised gadgets or lookups:
- range checks (`RANGE`), `AND`, `XOR`;
- hashes and permutations: SHA-256 compression, Blake2s/Blake3, Keccak-f[1600], Poseidon2;
- signatures and curve operations: ECDSA over secp256k1/secp256r1, multi-scalar multiplication and embedded-curve addition;
- AES-128 and recursive proof verification.

Each black-box shows up as a **single opcode**, so ACIR opcode counts hugely understate circuit size. An ECDSA verification is one opcode in ACIR but tens of thousands of gates or constraints in the backend. Use the backend's gate count (e.g. `bb gates`) to measure real cost.

## Opcode Order and Witness Solving
The order of opcodes does not matter for the *constraint system*, which is just a set of equations. It matters a lot for *witness solving*. The ACVM processes opcodes one after another, and each `AssertZero` must have at most one still-unknown witness when it is reached, so that it can be solved linearly. The compiler therefore emits opcodes in a dependency (topological) order. Values that cannot be solved this way, such as w = a/b or bit decompositions, are computed by Brillig hints and then constrained.

## Implementing a New Backend
A backend that consumes ACIR needs to:
1. deserialize the program and map witness indices and public inputs/outputs;
2. translate every `AssertZero` expression into native constraints (R1CS rows, Plonkish gates, …);
3. handle `MemoryInit`/`MemoryOp`, either with lookup/RAM arguments or by expanding them into arithmetic;
4. implement the **black-box functions** it wants to support with its own gadgets, or reject programs that use unsupported ones;
5. read the witness that the ACVM solved (`nargo execute`). Brillig needs no support.

## Used by Proof Systems
[[UltraHonk]] (via [[Barretenberg]])

## Supported by Tools
[[Noir]], [[Barretenberg]]

## Resources
- Spec: [[noir-lang-noir]]
- Docs: [[Noir-Docs]]
- Code: [[AztecProtocol-aztec-packages]]
- Explainer: [[noirs-circuit-backend]]
