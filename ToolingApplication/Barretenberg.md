---
type: tooling_application
subtype: library
status: active
year: 2020
tags:
  - zkp
  - prover-backend
  - plonk
  - implementations
---

# Barretenberg

URL::
Github:: https://github.com/noir-lang/barretenberg

## Description
The default proving backend for [[Noir]]. Implements [[UltraHonk]] (and previously UltraPLONK). Takes [[ACIR]] as input and produces proofs. Optimized for blockchain use cases: slower prover, very fast verifier. Developed by Aztec Protocol.

## Evaluation

| Criterion | Value |
| - | - |
| Based on | [[UltraHonk]] (PLONKish) |
| Easiness | used via Noir — transparent to user |
| Fast and short (<1s, <1MB) | yes (optimized for fast verification) |
| Post-quantum | no |
| Mobile and web | partial — WASM builds exist |
| Maintained | yes — very active |
| Open source | yes |
| Security review | no |
| secp256k1 signature + sha256 | yes |

## Notes
Slower prover than some alternatives. The prover/verifier split is intentional: designed so the verifier can run on-chain (EVM). Not ideal if prover speed is the priority.

## Based on
[[UltraHonk]], [[PLONKish]]

## Resources
- Docs:
- Blog: [[noirs-circuit-backend]]