---
type: theoretical_model
year: 1985
authors:
  - Shafi Goldwasser
  - Silvio Micali
  - Charles Rackoff
tags:
  - zkp
  - theory
  - interactive-proof
  - mathematics
---

[Home](../README.md) > [Theoretical Models](README.md) > Interactive-Proof-Model

# Interactive Proof Model (IP)

Paper:: The knowledge complexity of interactive proof-systems
DOI:: 10.1145/22145.22178

## Description
Defines a proof as an interaction between a computationally unbounded prover and a probabilistic polynomial-time verifier. The verifier accepts or rejects after exchanging messages. The class IP captures all problems verifiable this way. Foundational for all zero-knowledge protocols.

Key concepts defined:
- **Completeness**: An honest prover can always convince an honest verifier
- **Soundness**: No cheating prover can convince the verifier of a false statement (except with negligible probability)
- **Zero-knowledge**: The verifier learns nothing beyond the validity of the statement

## Significance
Provides the theoretical foundation for all ZKP systems. IP = PSPACE (by Shamir's theorem). All practical ZKP schemes implement or simulate this model, typically made non-interactive via [[Fiat-Shamir]].

Key sub-models:
- **CRS model** (Common Reference String) — used by [[NIZK-Blum]], [[Groth16]]
- **ROM** (Random Oracle Model) — used by [[Fiat-Shamir]] heuristic
- **PIOP** (Polynomial IOP) — used by [[PLONK]], [[Spartan]]
- **IOPP / IOP** (Interactive Oracle Proof) — used by [[FRI]], [[Ligero]]

## Built upon by
[[GMR85-Knowledge-Complexity]], [[Fiat-Shamir]], [[NIZK-Blum]], [[PLONK]], [[Spartan]], [[zk-STARKs]]

## Resources
- Paper: [[GMR85-Knowledge-Complexity-Paper]]
- Explainer: [[Thaler-Proofs-Arguments-ZK]]