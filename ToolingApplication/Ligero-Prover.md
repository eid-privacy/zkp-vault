---
type: tooling_application
subtype: library
status: active
year: 2023
tags:
  - zkp
  - prover-backend
  - ligero
  - wasm
  - implementations
---

# Ligero Prover (Ligetron)

URL:: https://platform.ligetron.com/marketplace
Github:: https://github.com/ligeroinc/ligero-prover

## Description
Commercial prover from Ligero Inc. based on the [[Ligero]] paper. Supports Rust, Circom, and C++. Open-sourced under Apache-2.0 after a delay. The SHA-256 example produces ~1.9 MB proofs, which exceeds the <1MB target. Originally closed source; open-sourced version available.

## Evaluation

| Criterion | Value |
| - | - |
| Based on | [[Ligero]] |
| Easiness | yes (Rust, Circom, C++ supported) |
| Fast and short (<1s, <1MB) | half — simple examples <1s, SHA-256 proof ~1.9 MB |
| Post-quantum | yes |
| Mobile and web | yes (WASM) |
| Maintained | yes — open-sourced after a delay |
| Open source | yes — Apache-2.0 |
| Security review | no |
| secp256k1 signature + sha256 | yes |

## Notes
- SHA-256 example produces ~1.9 MB proof (with different packing, goes up)
- An OSS alternative based on Ligero: https://github.com/scipr-lab/libiop
- Originally commercial / closed source; open-sourced after a while

## Based on
[[Ligero]]

## Resources
- Docs: https://platform.ligetron.com/marketplace
- Paper: https://acmccs.github.io/papers/p2087-amesA.pdf
