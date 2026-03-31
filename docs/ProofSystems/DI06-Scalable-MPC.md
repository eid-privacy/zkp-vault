---
type: proof_system
status: research
year: 2006
abbreviation: DI06
authors:
  - Ivan Damgard
  - Yuval Ishai
paper: Scalable Secure Multiparty Computation
doi: 10.1007/11818175_30
tags:
  - zkp
  - interactive-proof
  - mpc
---

[Home](../README.md) > [Proof Systems](README.md) > DI06-Scalable-MPC

# Scalable Secure Multiparty Computation

## Description
Introduces scalable constructions for secure multiparty computation (MPC). While primarily an MPC paper, its techniques for efficient proof systems and commitments in the multi-party setting influenced later ZKP constructions.

## Technical Characteristics

**Complexity:**
- Prover: Polynomial
- Verifier: Polynomial
- Proof Size: Sublinear
- Setup: transparent

**Security:**
- Assumption: computational
- Post-quantum: no (original formulation)
- Basis: Information-theoretic MPC, secret sharing

## Dependencies
Based on: [[Sigma-Protocols-Damgard]], [[Pedersen-Commitments]]
Circuit representation:

## Applications
Used by: [[Ligero]], [[Bulletproofs]]

## Resources
- Paper: [[DI06-Scalable-MPC]]
- Code:
- Explainer:
