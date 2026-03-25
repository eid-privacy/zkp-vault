---
type: intermediate_representation
tags:
  - zkp
  - circuit
  - plonk
  - arithmetization
  - mathematics
---

# PLONKish Arithmetization

## Description
The constraint system underlying the PLONK family. Uses a table of columns (wires) and rows (gates), with polynomial constraints checking gate correctness and copy constraints (permutation argument) checking wiring. Supports custom gates (TurboPLONK), lookup arguments (plookup/UltraPLONK), and more. More flexible than R1CS for expressing complex operations efficiently.

## Technical Characteristics

**Complexity:**
- Prover: O(n log n) for most variants
- Verifier: O(1)
- Proof Size: ~500 bytes – a few KB depending on variant
- Setup: trusted (universal CRS)

**Security:**
- Assumption: computational
- Post-quantum: no

## Based On
[[PLONK]], [[plookup]]

## Used by Proof Systems
[[PLONK]], [[TurboPLONK]], [[UltraHonk]], [[HyperPlonk]]

## Supported by Tools
[[Noir]], [[Barretenberg]], [[Halo2]]

## Resources
- Spec: [[plonkish_arithmetization]]
- Explainer: [[plonkish-arithmetization]]