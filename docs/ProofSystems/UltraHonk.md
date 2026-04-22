---
type: proof_system
status: production
year: 2024
paper: UltraHonk (Aztec Protocol)
tags:
  - zkp
  - snark
---

[Home](../README.md) > [Proof Systems](README.md) > UltraHonk

# UltraHonk

## Description
The current proving backend used by [[Barretenberg]] (and thus [[Noir]]). Faster and shorter proofs than earlier PLONK variants. Combines UltraPLONK's custom gates and lookup arguments with HONK's optimizations. Optimized for blockchain verification: slower prover, very fast verifier.

## Technical Characteristics

**Complexity:**
- Prover: O(n log n)
- Verifier: O(1) — very fast
- Proof Size: Compact (small enough for on-chain verification)
- Setup: trusted (universal CRS)

**Security:**
- Assumption: computational (AGM + KZG)
- Post-quantum: no
- Basis: [[PLONK]], [[TurboPLONK]], [[HONK]], [[plookup]]

## Dependencies
Based on: [[HONK]], [[PLONKish]]
Circuit representation: [[ACIR]] (via Barretenberg)

## Applications
Used by: [[Barretenberg]], [[Noir]]

## Resources
- Code: [[AztecProtocol-aztec-packages]]
- Explainer: [[noirs-circuit-backend]]