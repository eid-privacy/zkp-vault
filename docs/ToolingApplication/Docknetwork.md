---
type: tooling_application
subtype: library
status: maintained
year: 2022
url: "https://github.com/docknetwork/crypto"
github: "https://github.com/docknetwork/crypto"
tags:
  - zkp
  - library
  - eid
  - implementations
---

[Home](../README.md) > [Tooling & Applications](README.md) > Docknetwork

# Docknetwork

## Description
A Rust cryptography library from a startup, combining Bulletproofs, LegoGroth16, ZKAttest, and Pedersen commitments. Used as the base for the C4DT e-ID solution. Ahmed did various PRs; since end of 2025 it has been slow to merge. Academic-quality code but battle-tested for the e-ID use case.

## Evaluation

| Criterion | Value |
| - | - |
| Based on | [[Bulletproofs]], LegoGroth16, [[ZKAttest]], [[Pedersen-Commitments]] |
| Easiness | medium |
| Fast and short (<1s, <1MB) | yes |
| Post-quantum | yes/no (mixed — Bulletproofs: no; hash-based parts: yes) |
| Mobile and web | yes |
| Maintained | medium/bad (slow PR merges since end of 2025) |
| Open source | yes |
| Security review | no |
| secp256k1 signature + sha256 | yes |

## Notes
Current base for the C4DT e-ID ZKP solution. Maintenance concerns are a risk for long-term viability.

## Based on
[[Bulletproofs]], [[Groth16]], [[ZKAttest]], [[Pedersen-Commitments]]

## Resources
- Docs: [[docknetwork-crypto-library]]
- Blog:
