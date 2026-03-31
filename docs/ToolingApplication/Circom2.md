---
type: tooling_application
subtype: circuit_dsl
status: active
year: 2020
tags:
  - zkp
  - circuit-dsl
  - r1cs
  - snark
  - implementations
---

[Home](../README.md) > [Tooling & Applications](README.md) > Circom2

# Circom 2

URL::
Github:: https://github.com/iden3/circom

## Description
A domain-specific language for writing R1CS-based ZKP circuits, paired with snarkjs for proof generation. Pre-defined circuit libraries (e.g., circomlib) cover SHA-256, ECDSA, and more. More trusted than Noir for production use, though the core compiler has slower maintenance. Backbone of the iden3/Polygon ID identity stack.

## Evaluation

| Criterion | Value |
| - | - |
| Based on | [[Groth16]] / [[PLONK]] (via snarkjs) |
| Easiness | so-so — pre-defined circuits are provided |
| Fast and short (<1s, <1MB) | unclear — likely optimized for blockchain |
| Post-quantum | no |
| Mobile and web | yes (WASM) |
| Maintained | ecosystem yes; core compiler slower (PRs without team response) |
| Open source | yes |
| Security review | no |
| secp256k1 signature + sha256 | hash yes, signature maybe |

## Notes
More trusted than Noir due to longer track record. The iden3 ecosystem builds heavily on Circom but is very application-specific (not a general alternative to other tools).

## Based on
[[R1CS]], [[Groth16]]

## Resources
- Docs: [[Circom2-Docs]]
- Blog:
