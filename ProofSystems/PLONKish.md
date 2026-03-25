---
type: proof_system
status: production
year: 2023
tags:
  - zkp
  - plonk-family
  - arithmetization
---

# PLONKish Arithmetization

Paper:: PLONKish (informal — covers multiple PLONK variants)
DOI:: N/A

## Description
The family of PLONK arithmetization variants, including TurboPLONK, UltraPLONK, and HONK. PLONKish generalizes the original PLONK constraint system to support custom gates, lookup arguments, and other extensions. Provides a flexible arithmetization layer for modern SNARK systems.

## Technical Characteristics

**Complexity:**
- Prover: O(n log n) for most variants
- Verifier: O(1)
- Proof Size: ~500 bytes – a few KB depending on variant
- Setup: trusted (universal CRS)

**Security:**
- Assumption: computational
- Post-quantum: no
- Basis: [[PLONK]] family

## Dependencies
Based on: [[PLONK]], [[plookup]]
Circuit representation: [[PLONKish]]

## Applications
Used by: [[Halo2]], [[UltraHonk]], [[Noir]], [[Barretenberg]]

## Resources
- Reference: https://zkjargon.github.io/definitions/plonkish_arithmetization.html
- Code:
- Explainer: https://www.emergentmind.com/topics/plonkish-arithmetization
