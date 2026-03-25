---
type: intermediate_representation
tags:
  - zkp
  - circuit
  - stark
  - arithmetization
  - mathematics
---

# AIR — Algebraic Intermediate Representation

## Description
The arithmetization used by STARK-based proof systems. A computation is expressed as a sequence of state transitions (an execution trace), with polynomial constraints checking that each transition is valid. The prover commits to the trace as a polynomial and the [[FRI]] protocol proves the low-degree constraint. Naturally suited for sequential computations and VM execution traces.

## Used by Proof Systems
[[zk-STARKs]], [[FRI]]

## Supported by Tools
[[RISC-Zero]], [[SP1]], [[OpenVM]], [[Pico]], StarkWare

## Resources
- Spec:
- Explainer: https://starkware.co/stark-101/
