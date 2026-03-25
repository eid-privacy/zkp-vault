---
type: proof_system
status: production
year: 2023
tags:
  - zkp
  - snark
  - plonk-family
---

# TurboPLONK

Paper:: TurboPLONK (proposal)
DOI:: N/A

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
- Paper: https://docs.zkproof.org/pages/standards/accepted-workshop3/proposal-turbo_plonk.pdf
- Code:
- Explainer: https://hackmd.io/@learn-zkp/note-plonk-family
