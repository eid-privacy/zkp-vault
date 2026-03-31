---
type: proof_system
status: research
year: 2019
authors: []
paper: Sonic
doi: 10.1145/3319535.3339817
tags:
  - zkp
  - snark
  - universal-setup
---

[Home](../README.md) > [Proof Systems](README.md) > Sonic

# Sonic

## Description
One of the first universal and updatable SNARK constructions. Directly preceded and inspired [[PLONK]] and Marlin. Uses a universal SRS (structured reference string) that works for all circuits up to a bounded size.

## Technical Characteristics

**Complexity:**
- Prover: O(n log n)
- Verifier: O(1) (with helper) / O(n) (standalone)
- Proof Size: Larger than PLONK
- Setup: trusted (universal CRS)

**Security:**
- Assumption: computational (AGM + KZG)
- Post-quantum: no
- Basis: KZG polynomial commitments

## Dependencies
Based on: [[NIZK-Blum]]
Circuit representation: [[R1CS]]

## Applications
Used by: [[PLONK]]

## Resources
- Paper: [[MBKM19-Sonic]]
- Code: [[Sonic-Code]]
- Explainer:
