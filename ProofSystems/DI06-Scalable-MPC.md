---
type: proof_system
status: research
year: 2006
abbreviation: DI06
authors:
  - Ivan Damgard
  - Yuval Ishai
tags:
  - zkp
  - interactive-proof
  - mpc
---

# Scalable Secure Multiparty Computation

Paper:: Scalable Secure Multiparty Computation
DOI:: 10.1007/11818175_30

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
- Paper: https://iacr.org/archive/crypto2006/41170496/41170496.pdf
- Code:
- Explainer:
