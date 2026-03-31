---
type: tooling_application
subtype: zkvm
status: active
year: 2024
github: "https://github.com/succinctlabs/sp1"
tags:
  - zkp
  - zkvm
  - stark
  - snark
  - frameworks
  - implementations
---

[Home](../README.md) > [Tooling & Applications](README.md) > SP1

# SP1

## Description
A zkVM by Succinct Labs. Write standard Rust and prove execution. Uses a STARK + SNARK (Groth16 on BN254) hybrid for compact final proofs. Outperforms RISC Zero on heavy cryptography (5–10× cycle reduction via precompiles for ECDSA and hashing). Proof sizes are large (~9 MB for ECDSA per benchmark).

## Evaluation

| Criterion | Value |
| - | - |
| Based on | STARK + SNARK ([[Groth16]] on BN254) |
| Easiness | very easy — similar to Noir, write standard Rust |
| Fast and short (<1s, <1MB) | no — proof generation 11s, proof size ~9 MB for ECDSA |
| Post-quantum | no (Groth16 wrapper) |
| Mobile and web | probably — not confirmed |
| Maintained | yes — active issues and PRs |
| Open source | yes — Apache-2.0 / MIT |
| Security review | unknown |
| secp256k1 signature + sha256 | yes — https://github.com/sp1-patches/elliptic-curves |

## Notes
zkVM benchmark comparison for ECDSA signature verification:

| zkVM | Proof Gen (s) | Verify (ms) | Proof Size (bytes) | Exec (ms) |
| - | - | - | - | - |
| SP1 | 11.14 | 763 | 9,277,678 | 55 |
| OpenVM | 2.52 | 885 | 4,173,289 | 166 |
| Pico | 141.17 | 1,081 | 16,436,918 | 615 |
| Valida | 184 | 1,344 | 5,973,657 | 589 |
| Powdr | 116.31 | N/A | 11,477,033 | 740 |

Source: https://github.com/8ulce28/zkVM-ecdsa-benchmark

## Based on
[[zk-STARKs]], [[Groth16]], Plonky3

## Resources
- Docs: [[SP1-Docs]]
- Blog: [[comparative-analysis-of-sp1-and-risc-zero-zero-knowledge]]