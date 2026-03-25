---
type: tooling_application
subtype: zkvm
status: active
year: 2022
tags:
  - zkp
  - zkvm
  - stark
  - post-quantum
  - frameworks
  - implementations
---

# RISC Zero

URL:: https://risczero.com/
Github:: https://github.com/risc0/risc0

## Description
A zkVM that lets developers write standard Rust programs compiled to a RISC-V target and prove their execution using [[zk-STARKs]]. No circuit DSL needed. Ideal for complex credential parsing (e.g., ASN.1 in ePassports). The verifier uses WASM; the prover runs server-side. Has security audits.

## Evaluation

| Criterion | Value |
| - | - |
| Based on | [[zk-STARKs]] |
| Easiness | easy to medium — write standard Rust, no circuit DSL |
| Fast and short (<1s, <1MB) | prover fast; proof sizes larger (STARK-based) |
| Post-quantum | yes |
| Mobile and web | yes — verifier uses WASM, prover runs on server |
| Maintained | yes — very active |
| Open source | yes |
| Security review | yes — https://github.com/risc0/rz-security/tree/main/audits |
| secp256k1 signature + sha256 | yes |

## Notes
Verification mechanism not fully understood by C4DT. The zkVM approach is excellent for ergonomics when parsing complex data structures but proof sizes are larger than circuit-based approaches.

## Based on
[[zk-STARKs]], [[AIR]], [[FRI]]

## Resources
- Docs: https://risczero.com/
- Blog: https://medium.com/@gwrx2005/comparative-analysis-of-sp1-and-risc-zero-zero-knowledge-virtual-machines-4abf806daa70
