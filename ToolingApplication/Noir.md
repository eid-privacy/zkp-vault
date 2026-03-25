---
type: tooling_application
subtype: circuit_dsl
status: active
year: 2020
tags:
  - zkp
  - circuit-dsl
  - acir
  - frameworks
  - implementations
---

# Noir

URL:: https://noir-lang.org/docs/
Github:: https://github.com/noir-lang/noir

## Description
A Rust-like domain-specific language for writing ZKP circuits. Compiles to [[ACIR]], which is then proved by a backend (default: [[Barretenberg]]). Designed for developer ergonomics — no PhD required. Very actively maintained by Aztec Protocol but moves fast and has frequent breaking changes.

## Evaluation

| Criterion | Value |
| - | - |
| Based on | [[ACIR]] + [[Barretenberg]] ([[UltraHonk]]) |
| Easiness | easy |
| Fast and short (<1s, <1MB) | yes |
| Post-quantum | no (Barretenberg is pairing-based) |
| Mobile and web | possible (libraries for older versions exist; not tested by C4DT) |
| Maintained | yes — very active, but moves a lot |
| Open source | yes |
| Security review | no |
| secp256k1 signature + sha256 | yes |

## Notes
Very complex internally — implements a full compiler pipeline with optimizations. Potential for bugs. More trusted alternatives (e.g., Circom) exist for stability. The mobile/web story relies on third-party WASM builds.

## Based on
[[ACIR]], [[UltraHonk]]

## Resources
- Docs: [[Noir-Docs]]
- Blog:
