---
type: proof_system
status: research
year: 2013
abbreviation: GGPR13
authors:
  - Rosario Gennaro
  - Craig Gentry
  - Bryan Parno
  - Mariana Raykova
paper: Quadratic Span Programs and Succinct NIZKs without PCPs
doi: 10.1007/978-3-642-38348-9_37
tags:
  - zkp
  - snark
  - trusted-setup
---

[Home](../README.md) > [Proof Systems](README.md) > QSP-GGPR13

# QSP: Quadratic Span Programs and Succinct NIZKs without PCPs

## Description
Introduces Quadratic Span Programs (QSP) as an alternative to PCPs for constructing succinct NIZKs. More efficient than PCP-based constructions; directly influenced [[Pinocchio]] and [[Groth16]]. Builds on earlier work by Valiant (TCC 2008) and Bitansky et al. (2012).

## Technical Characteristics

**Complexity:**
- Prover: Subquadratic
- Verifier: O(1)
- Proof Size: More succinct than prior work
- Setup: trusted (CRS)

**Security:**
- Assumption: computational (q-PKE, pairing assumptions)
- Post-quantum: no
- Basis: Bilinear pairings, QSP

## Dependencies
Based on: [[NIZK-Blum]], [[Pinocchio]]
Circuit representation: [[R1CS]]

## Applications
Used by: [[Groth16]]

## Resources
- Paper: [[GGPR12-QSP-SNARK]]
- Code:
- Explainer:
