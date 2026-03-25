---
type: proof_system
status: production
year: 2023
tags:
  - zkp
  - snark
  - plonk-family
---

# HONK

Paper:: HONK (Aztec Protocol internal)
DOI:: N/A

## Description
An intermediate proving system in the PLONK family developed by Aztec. Builds on top of [[TurboPLONK]] and introduces new optimizations toward UltraHonk. Part of the evolution: PLONK → TurboPLONK → UltraPLONK → HONK → UltraHonk.

## Technical Characteristics

**Complexity:**
- Prover: O(n log n)
- Verifier: O(1)
- Proof Size: Compact
- Setup: trusted (universal CRS)

**Security:**
- Assumption: computational (AGM + KZG)
- Post-quantum: no
- Basis: [[PLONK]] family

## Dependencies
Based on: [[TurboPLONK]], [[plookup]]
Circuit representation: [[PLONKish]]

## Applications
Used by: [[UltraHonk]], [[Barretenberg]]

## Resources
- Code:
- Explainer: [[Plonk-Family-Note]]