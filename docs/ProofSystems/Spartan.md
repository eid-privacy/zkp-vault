---
type: proof_system
status: research
year: 2019
abbreviation: Setty19
authors:
  - Srinath Setty
paper: Efficient and general-purpose zkSNARKs without trusted setup
doi: 10.1007/978-3-030-56877-1_25
tags:
  - zkp
  - snark
  - transparent
  - r1cs
---

[Home](../README.md) > [Proof Systems](README.md) > Spartan

# Spartan

## Description
Transparent zkSNARK for R1CS without any trusted setup. Uses the sumcheck protocol and multilinear extensions to achieve efficient prover and verifier. Backend of interest for the e-ID project due to fast ECDSA verification via the Crescent fork with T-256 support.

## Technical Characteristics

**Complexity:**
- Prover: O(n log n)
- Verifier: O(log n)
- Proof Size: O(log n)
- Setup: transparent

**Security:**
- Assumption: computational (Hyrax or other multilinear commitments)
- Post-quantum: no (DL-based version)
- Basis: Sumcheck protocol, multilinear extensions, [[Hyrax]]

## Dependencies
Based on: [[Hyrax]]
Circuit representation: [[R1CS]]

## Applications
Used by: [[Spartan-Framework]]

## Resources
- Paper: [[Set19-Spartan]]
- Code: [[Spartan-Code]]
- Code (v2): [[microsoft-Spartan2]]
- Crescent fork (T-256): [[microsoft-crescent-credentials]]
- Explainer:
