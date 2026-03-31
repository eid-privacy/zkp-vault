---
type: proof_system
status: research
year: 2013
authors:
  - Bryan Parno
  - Jon Howell
  - Craig Gentry
  - Mariana Raykova
paper: Pinocchio - Nearly Practical Verifiable Computation
doi: 10.1109/sp.2013.47
tags:
  - zkp
  - snark
  - r1cs
  - qap
  - trusted-setup
---

[Home](../README.md) > [Proof Systems](README.md) > Pinocchio

# Pinocchio

## Description
The first end-to-end system that made verifiable computation with SNARKs almost practical. Introduced the full pipeline: compile a computation to a circuit, reduce to R1CS, then to QAP (Quadratic Arithmetic Program), and prove using bilinear pairings. Directly preceded Groth16.

## Technical Characteristics

**Complexity:**
- Prover: O(n log n) where n = circuit size
- Verifier: O(1) (constant-time verification)
- Proof Size: ~288 bytes
- Setup: trusted (per-circuit CRS)

**Security:**
- Assumption: computational (q-PKE, q-PDH assumptions)
- Post-quantum: no (pairing-based)
- Basis: Bilinear pairings, QAP

## Dependencies
Based on: [[NIZK-Blum]], [[QSP-GGPR13]]
Circuit representation: [[R1CS]]

## Applications
Used by: [[Groth16]]

## Resources
- Paper: [[PHGR13-Pinocchio]]
- Code:
- Explainer:
