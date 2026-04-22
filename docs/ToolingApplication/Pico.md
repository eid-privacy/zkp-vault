---
type: tooling_application
subtype: zkvm
status: active
year: 2024
github: "https://github.com/brevis-network/pico"
tags:
  - zkp
  - zkvm
  - stark
  - frameworks
  - implementations
---

[Home](../README.md) > [Tooling & Applications](README.md) > Pico

# Pico

## Description
A zkVM by Brevis Network combining Plonky3, SP1, Valida, and RISC0 approaches. Accepts Rust programs compiled to `riscv32im-risc0-zkvm-elf`. Had very slow proof generation in August 2025 benchmarks (141s for ECDSA). Has a Sherlock security audit.

## Evaluation

| Criterion | Value |
| - | - |
| Based on | Plonky3, [[SP1]], Valida, [[RISC-Zero]] |
| Easiness | yes — runs riscv32im-risc0-zkvm-elf binaries |
| Fast and short (<1s, <1MB) | very slow — 141s, 16.4 MB proof for ECDSA (Aug 2025) |
| Post-quantum | yes (STARK-based) |
| Mobile and web | probably — Rust-based |
| Maintained | yes |
| Open source | yes — Apache-2.0 / MIT |
| Security review | yes — Sherlock audit |
| secp256k1 signature + sha256 | yes — per 8ulce28 benchmark |

## Notes
Performance in August 2025 was very poor. May improve. Not recommended for time-sensitive use cases currently.

## Based on
[[zk-STARKs]], Plonky3

## Resources
- Docs:
- Blog:
