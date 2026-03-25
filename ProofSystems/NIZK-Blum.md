---
type: proof_system
status: research
year: 1988
authors:
  - Manuel Blum
  - Paul Feldman
  - Silvio Micali
tags:
  - zkp
  - interactive-proof
  - non-interactive
  - foundational
---

# Non-Interactive Zero-Knowledge and Its Applications

Paper:: Non-Interactive Zero-Knowledge and Its Applications
DOI:: 10.1145/62212.62222

## Description
The genesis paper for non-interactive zero-knowledge proofs. Introduces the Common Reference String (CRS) model in which prover and verifier share a public string to enable non-interactive proofs. Foundational for all SNARK systems that use a trusted setup (CRS).

## Technical Characteristics

**Complexity:**
- Prover: Polynomial
- Verifier: Polynomial
- Proof Size: Non-interactive
- Setup: trusted (CRS model)

**Security:**
- Assumption: computational
- Post-quantum: no (original formulation)
- Basis: CRS model, hardness assumptions

## Dependencies
Based on: [[GMR85-Knowledge-Complexity]]
Circuit representation:

## Applications
Used by: [[Groth16]], [[Pinocchio]], [[QSP-GGPR13]] — all trusted-setup SNARKs

## Resources
- Paper: https://dl.acm.org/doi/pdf/10.1145/62212.62222
- Code:
- Explainer:
