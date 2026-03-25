---
type: tooling_application
subtype: zkvm
status: active
year: 2024
tags:
  - zkp
  - zkvm
  - stark
  - plonky3
  - frameworks
  - implementations
---

# OpenVM

URL::
Github:: https://github.com/openvm-org/openvm

## Description
A zkVM based on Plonky3/STARK, building on SP1's architecture. Near-miss on proof size vs. SP1 in benchmarks (4.2 MB for ECDSA, best among zkVMs tested). 5 security audits. Supports secp256k1/signature operations (full scope unclear).

## Evaluation

| Criterion | Value |
| - | - |
| Based on | Plonky3 / STARK, inspired by [[SP1]] |
| Easiness | yes — write standard Rust |
| Fast and short (<1s, <1MB) | near-miss — 2.5s prove, 4.2 MB proof for ECDSA |
| Post-quantum | yes (STARK-based) |
| Mobile and web | probably — Rust-based |
| Maintained | yes — very active |
| Open source | yes — Apache-2.0 / MIT |
| Security review | yes — 5 audits |
| secp256k1 signature + sha256 | yes — not sure if secp256k1 only or also full signature |

## Notes
Best proof size among zkVMs tested in the ECDSA benchmark (4.2 MB vs SP1's 9.3 MB).

## Based on
[[zk-STARKs]], Plonky3

## Resources
- Docs: [[OpenVM-Docs]]
- Blog:
