---
type: proof_system
status: production
year: 2019
authors:
  - Ariel Gabizon
  - Zachary J. Williamson
  - Oana Ciobotaru
paper: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge
doi: 201685538
tags:
  - zkp
  - snark
  - universal-setup
  - plonk-family
---

[Home](../README.md) > [Proof Systems](README.md) > PLONK

# PLONK

## Description
Universal and updatable trusted setup SNARK. Unlike Groth16, the same CRS works for any circuit up to a size bound — eliminating per-circuit trusted setup ceremonies. Faster proving time than prior work. Spawned a large family of variants (TurboPLONK, UltraPLONK, HONK, HyperPlonk).

## Technical Characteristics

**Complexity:**
- Prover: O(n log n)
- Verifier: O(1)
- Proof Size: ~500 bytes
- Setup: trusted (universal/updatable CRS)

**Security:**
- Assumption: computational (AGM + KZG)
- Post-quantum: no
- Basis: KZG polynomial commitments, permutation argument

## Dependencies
Based on: [[Sonic]]
Circuit representation: [[PLONKish]]

## Applications
Used by: [[Halo2]], [[TurboPLONK]], [[UltraHonk]], [[HyperPlonk]], [[gnark]]

## Resources
- Paper: [[GWC19-PLONK]]
- Code:
- Explainer: [[Plonk-Family-Note]]
- Vitalik: [[PLONK-Blog]]