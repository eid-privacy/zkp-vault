---
type: tooling_application
subtype: library
status: maintained
year: 2021
url: "https://zcash.github.io/halo2/user/simple-example.html"
github: "https://github.com/zcash/halo2"
tags:
  - zkp
  - library
  - plonk
  - ultraplonk
  - arithmetization
  - implementations
---

[Home](../README.md) > [Tooling & Applications](README.md) > Halo2

# Halo 2

## Description
A Rust library for building ZKP circuits using the [[PLONKish]] arithmetization with recursive proof composition (Halo). No trusted setup (uses IPA instead of KZG). Developed by ZCash. Hard to use — requires deep familiarity with PLONKish constraints. Notable deep-dive available from Trail of Bits.

## Evaluation

| Criterion | Value |
| - | - |
| Based on | UltraPLONK / [[PLONKish]] |
| Easiness | hard |
| Fast and short (<1s, <1MB) | probably |
| Post-quantum | no |
| Mobile and web | not found |
| Maintained | some activity on GitHub |
| Open source | yes — MIT / Apache-2.0 |
| Security review | no |
| secp256k1 signature + sha256 | SHA-256 yes, no signature verification |

## Notes
Quote from Halo document: *"To create a proof of a statement, the prover will need to know the private inputs, and also intermediate values, called advice values, that are used by the circuit."* (Uses "witness" to mean all values the prover supplies, including intermediates.)

## Based on
[[PLONKish]], [[PLONK]]

## Resources
- Docs: [[Halo2-Docs]]
- Blog: [[a-deep-dive-into-axioms-halo2-circuits]]