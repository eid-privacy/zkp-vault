---
type: tooling_application
subtype: library
status: active
year: 2020
tags:
  - zkp
  - library
  - go
  - groth16
  - plonk
  - frameworks
  - implementations
---

# gnark

URL::
Github:: https://github.com/ConsenSys/gnark

## Description
A Go library for writing and proving ZKP circuits using Groth16 or PLONK. Excellent performance: SHA-256 circuit proves in 0.5s with a 190-byte proof. Clean API for defining constraints in Go. Not compiled to WASM — server/backend use only.

## Evaluation

| Criterion | Value |
| - | - |
| Based on | [[Groth16]], [[PLONK]] |
| Easiness | easy to medium — circuits written in Go |
| Fast and short (<1s, <1MB) | yes — 190 bytes for SHA-256 circuit, 0.5s prove time |
| Post-quantum | no |
| Mobile and web | no — not compiled to WASM |
| Maintained | yes — very active |
| Open source | yes |
| Security review | yes — 9 audits |
| secp256k1 signature + sha256 | yes — standard library contains both |

## Notes
Best choice if the backend is Go-based and small proof size + fast verification is the priority. The no-WASM limitation means it cannot run in a browser — prover must be server-side.

## Based on
[[Groth16]], [[PLONK]]

## Resources
- Docs: [[gnark-Docs]]
- Blog:
