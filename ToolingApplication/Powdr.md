---
type: tooling_application
subtype: library
status: active
year: 2023
tags:
  - zkp
  - optimizer
  - zkvm
  - llvm
  - frameworks
  - implementations
---

# Powdr

URL::
Github:: https://github.com/powdr-labs/powdr

## Description
An optimizer and compiler infrastructure for LLVM-based provers targeting zkVMs. Sits on top of zkVM backends and optimizes programs before proving. Included in the ECDSA zkVM benchmark (116s prove time, 11.5 MB proof). Verification failed in the benchmark.

## Evaluation

| Criterion | Value |
| - | - |
| Based on | vmLLVM-based provers, zkVM backends |
| Easiness | unknown |
| Fast and short (<1s, <1MB) | no — 116s prove, 11.5 MB proof, verification N/A |
| Post-quantum | depends on backend |
| Mobile and web | unknown |
| Maintained | yes |
| Open source | yes |
| Security review | unknown |
| secp256k1 signature + sha256 | unknown |

## Notes
Acts as an optimizer layer rather than a standalone prover. Verification was N/A in the ECDSA benchmark.

## Based on
vmLLVM, various zkVM backends

## Resources
- Docs:
- Blog:
