---
type: tooling_application
subtype: circuit_dsl
tags:
  - zkp
  - circuit
---

[Home](../README.md) > [Tooling & Applications](README.md) > Circuits

# Arithmetic Circuits

## Description
The primary computational model for ZKP systems. A computation is expressed as a directed acyclic graph of addition and multiplication gates over a prime field. The prover's job is to supply a satisfying assignment (witness) to all wires; the verifier checks that the constraints hold without learning the witness. Most ZKP backends — whether SNARK or STARK — operate over some form of arithmetic circuit or a close equivalent ([[R1CS]], [[PLONKish]], [[AIR]]).

## Circuit → Proof pipeline

```
High-level program
      ↓  (compiler / DSL)
Arithmetic circuit  (gates + wires over 𝔽_p)
      ↓  (arithmetization)
Constraint system  (R1CS / PLONKish / AIR)
      ↓  (proof system)
ZK proof
```

## Circuit DSLs in this vault

| Tool | Arithmetization | Backend |
|------|----------------|---------|
| [[ToolingApplication/Circom2]] | [[R1CS]] | [[Groth16]], [[PLONK]] |
| [[ToolingApplication/Noir]] | [[PLONKish]] | [[UltraHonk]] (Barretenberg) |
| [[ToolingApplication/ZoKrates]] | [[R1CS]] | [[Groth16]], [[PLONK]] |
| [[ToolingApplication/gnark]] | [[R1CS]] / [[PLONKish]] | Groth16, PLONK |
| [[ToolingApplication/Halo2]] | [[PLONKish]] | IPA / KZG |

## See also
- [[R1CS]], [[PLONKish]], [[AIR]] — the main arithmetization formats
- [[ToolingApplication/zkVM]] — alternative model: prove execution of a program directly
