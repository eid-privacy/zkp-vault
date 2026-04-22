---
type: theoretical_model
tags:
  - zkp
  - theory
  - overview
---

[Home](../README.md) > [Theoretical Models](README.md) > ZK-Proof-Taxonomy

# ZK Proof Taxonomy: Abstraction Levels

ZKP systems can be organized by the level of abstraction at which the statement is expressed and composed. From low to high:

| Level | Statement expressed as… | Typical proof size | Examples |
|---|---|---|---|
| Native Sigma | Algebraic relation over a group | O(statement) — not succinct | [[Proof-Systems-for-DL]], [[Camenisch-Michels-Safe-Primes]] |
| Composed (CP-SNARK) | Statement about a committed value from another system | O(1) | [[LegoGroth16]] |
| Circuit-based | Arithmetic circuit / constraint system | O(1) to O(log n) | [[Groth16]], [[PLONK]], [[Bulletproofs]], [[Spartan]] |
| ZK VM | Arbitrary program execution trace | O(1) to O(log n) | [[RISC-Zero]], [[SP1]], [[OpenVM]] |

---

## 1. Native Sigma Protocols

Proofs expressed directly as algebraic relations over a group. The statement is a conjunction/disjunction of discrete-log-style relations, often over Pedersen commitments. No circuit compilation needed — the proof structure mirrors the algebraic statement.

**Key property:** the prover works directly on the group elements, not on a circuit representation. Composition is via AND/OR rules and equality of committed values across statements.

### Core papers

| Paper | What it covers |
|---|---|
| [[Dam04-Sigma-Protocols]] | Foundational treatment: three-move structure, special soundness, HVZK, AND/OR composition |
| [[CS97-DL-Proofs]] | Notation and proof systems for general DL statements; equality of exponents across commitments |
| [[CM99-Safe-Primes]] | Proving properties of committed integers (prime products); illustrates range/product proofs over Pedersen |
| [[Ped91-Commitments]] | The commitment scheme underlying most sigma protocols |
| [[FS86-Fiat-Shamir]] | Transform making sigma protocols non-interactive |
| [[ZKP21-Sigma-Standard]] | Standardization proposal for sigma-based ZK proofs |

### Content pages
- [[Sigma-Protocols-Damgard]] — structural foundation
- [[Proof-Systems-for-DL]] — Camenisch-Stadler framework
- [[Camenisch-Michels-Safe-Primes]] — prime and range proofs
- [[Pedersen-Commitments]] — commitment scheme
- [[Sigma-Protocols-Proposal]] — standardization effort

---

## 2. Composed Proofs (Commit-and-Prove SNARKs)

A commit-and-prove SNARK (CP-SNARK) lets two proof systems share a witness via a commitment. System A commits to a value and proves a sigma-level property; System B takes the same commitment and proves a circuit-level property — without the prover re-exposing the witness. This bridges the sigma and circuit worlds.

**Key property:** modularity. The witness is committed once; each component proof system proves its own part of the statement.

### Core papers

| Paper | What it covers |
|---|---|
| [[CFQW19-LegoSNARK]] | The CP-SNARK framework; LegoGroth16 instantiation; formal composition theorems |

### Content pages
- [[LegoGroth16]] — Groth16-based CP-SNARK

---

## 3. Circuit-Based Proofs

The statement is compiled to an arithmetic circuit (R1CS, PLONKish, or AIR). The prover works on the constraint system, not the original algebraic statement. Enables general computation at the cost of a compilation step.

**Key property:** generality — any efficiently computable predicate can be expressed. Proof size is succinct (O(1) or O(log n)) regardless of circuit size.

### Families

| Family | Arithmetic layer | Compiler | Example systems |
|---|---|---|---|
| Pairing-based SNARKs | [[R1CS]] | KZG / pairings | [[Groth16]], [[Pinocchio]], [[Sonic]] |
| PLONK-based | [[PLONKish]] | KZG or IPA | [[PLONK]], [[HyperPlonk]], [[UltraHonk]] |
| IOP-based (transparent) | [[R1CS]] / [[AIR]] | FRI / hashing | [[BCRSVW19-Aurora|Aurora]], [[Ligero]], [[FRI]], [[Spartan]] |
| Inner-product / Bulletproofs | [[R1CS]] | IPA | [[Bulletproofs]], [[Hyrax]] |

---

## 4. ZK VMs

Instead of compiling a single statement to a circuit, a ZK VM proves the correct execution of an arbitrary program on a general-purpose instruction set (RISC-V, MIPS, custom ISA). The proof is over the execution trace.

**Key property:** programmer-facing. The developer writes ordinary programs; the VM generates the ZKP. Highest abstraction level, highest prover overhead.

| System | ISA | Proof system backend |
|---|---|---|
| [[RISC-Zero]] | RISC-V | STARK (FRI) |
| [[SP1]] | RISC-V | PLONK / FRI |
| [[OpenVM]] | RISC-V extensions | STARK |
| [[Pico]] | RISC-V | STARK |
| [[Valida]] | Custom | STARK |

---

## Related overviews
- [[ZK-Families-Overview]] — taxonomy by arithmetic layer and cryptographic compiler
