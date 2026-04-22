---
type: proof_system
status: research
year: 2020
authors:
  - Ariel Gabizon
  - Zachary J. Williamson
paper: "plookup: A simplified polynomial protocol for lookup tables"
tags:
  - zkp
  - lookup
---

[Home](../README.md) > [Proof Systems](README.md) > plookup

# plookup

## Description
Introduces efficient lookup table arguments into the PLONK framework. Enables efficient range checks and other operations that are expensive to express as arithmetic constraints. Used in TurboPLONK and UltraPLONK to support non-native field arithmetic and bitwise operations.

## Technical Characteristics

**Complexity:**
- Prover: O(n log n)
- Verifier: O(1)
- Proof Size: Small constant overhead over PLONK
- Setup: trusted (universal CRS, same as PLONK)

**Security:**
- Assumption: computational (AGM + KZG)
- Post-quantum: no
- Basis: Polynomial permutation argument

## Dependencies
Based on: [[PLONK]]
Circuit representation: [[PLONKish]]

## Applications
Used by: [[TurboPLONK]], [[UltraHonk]], [[Halo2]]

## Resources
- Paper: [[GW20-Plookup]]
- Code:
- Explainer:
