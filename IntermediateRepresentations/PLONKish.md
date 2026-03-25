---
type: intermediate_representation
tags:
  - zkp
  - circuit
  - plonk
---

# PLONKish Arithmetization

## Description
The constraint system underlying the PLONK family. Uses a table of columns (wires) and rows (gates), with polynomial constraints checking gate correctness and copy constraints (permutation argument) checking wiring. Supports custom gates (TurboPLONK), lookup arguments (plookup/UltraPLONK), and more. More flexible than R1CS for expressing complex operations efficiently.

## Used by Proof Systems
[[PLONK]], [[TurboPLONK]], [[UltraHonk]], [[HyperPlonk]], [[PLONKish]]

## Supported by Tools
[[Noir]], [[Barretenberg]], [[Halo2]]

## Resources
- Spec: https://zkjargon.github.io/definitions/plonkish_arithmetization.html
- Explainer: https://www.emergentmind.com/topics/plonkish-arithmetization
