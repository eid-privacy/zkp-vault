---
type: proof_system
status: production
year: 2023
paper: TurboPLONK (proposal)
tags:
  - zkp
  - snark
---

[Home](../README.md) > [Proof Systems](README.md) > TurboPLONK

# TurboPLONK

## Description
An extension of PLONK that adds support for custom gates, allowing programmers to define their own constraint types beyond the standard fan-in-2 addition and multiplication gates. Enables more efficient circuits for specific operations (e.g., range checks, elliptic curve ops).

## Technical Characteristics

**Complexity:**
- Prover: O(n log n)
- Verifier: O(1)
- Proof Size: ~500 bytes
- Setup: trusted (universal CRS)

**Security:**
- Assumption: computational (AGM + KZG)
- Post-quantum: no
- Basis: [[PLONK]], custom gate selectors

## Dependencies
Based on: [[PLONK]]
Circuit representation: [[PLONKish]]

## Applications
Used by: [[UltraHonk]], [[Barretenberg]]

## Resources
- Paper: [[GW19b-TurboPlonk]]
- Code:
- Explainer: [[Plonk-Family-Note]]