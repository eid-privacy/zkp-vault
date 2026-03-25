---
type: tooling_application
subtype: zkvm
tags:
  - zkp
  - zkvm
---

# zkVM — Zero-Knowledge Virtual Machine

## Description
A zkVM proves the correct execution of a general-purpose program rather than requiring developers to express their computation as a hand-written arithmetic circuit. The prover takes a program (compiled to a known ISA such as RISC-V or MIPS) and an input, executes it, and produces a ZK proof that the output is correct. This inverts the usual circuit-first workflow: developers write ordinary code, and the zkVM handles the arithmetization internally.

## zkVMs vs Circuit-Based Approaches

| Aspect | Circuit DSL (e.g. Circom, Noir) | zkVM (e.g. RISC Zero, SP1) |
|--------|---------------------------------|----------------------------|
| Developer model | Write explicit constraints | Write ordinary code |
| Arithmetization | Manual, per-circuit | Automatic, per ISA |
| Proof size / speed | Smaller, faster for simple ops | Larger overhead, but improving |
| Flexibility | Optimised for specific operations | General-purpose |
| Maintenance burden | Circuit must mirror logic | Logic lives in one place |

## Arithmetization
zkVMs typically use [[AIR]] (Algebraic Intermediate Representation) to encode CPU execution traces, since AIR naturally captures sequential state transitions. STARK-based backends ([[zk-STARKs]], [[FRI]]) are common. Some (e.g. [[ToolingApplication/SP1]]) use a PLONK-family backend over the execution trace.

## Entries in this vault

| Tool | Backend | ISA |
|------|---------|-----|
| [[ToolingApplication/RISC-Zero]] | zk-STARKs + FRI | RISC-V |
| [[ToolingApplication/SP1]] | PLONK / STARKs | RISC-V |
| [[ToolingApplication/OpenVM]] | STARKs | RISC-V (extensible) |
| [[ToolingApplication/Valida]] | STARKs | Custom |
| [[ToolingApplication/Pico]] | STARKs | RISC-V |
