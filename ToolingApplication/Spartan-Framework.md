---
type: tooling_application
subtype: library
status: maintained
year: 2020
tags:
  - zkp
  - library
  - ecdsa
  - spartan
  - implementations
---

# Spartan (Framework / Implementation)

URL::
Github:: https://github.com/microsoft/Spartan

## Description
Rust implementation of the [[Spartan]] proof system by Microsoft Research. The version of interest for the e-ID project is a fork within Crescent Credentials that adds T-256 (secp256r1) support for ECDSA proof of possession. Clement is working on integrating this with a Noir/ACIR backend.

## Evaluation

| Criterion | Value |
| - | - |
| Based on | [[Spartan]] (R1CS + sumcheck) |
| Easiness | yes for low-level circuits; no for high-level like Noir |
| Fast and short (<1s, <1MB) | yes (SNARK-class) |
| Post-quantum | no (DL-based) |
| Mobile and web | likely yes (Rust → WASM) |
| Maintained | meh — main repo not dead but T-256 fork buried in Crescent |
| Open source | yes |
| Security review | no |
| secp256k1 signature + sha256 | yes |

## Notes
Academic-level maturity. The T-256 fork is the version of interest (ECDSA secp256r1 PoP). Main original repo and a second independent implementation (Spartan2) exist. Open email to Srinath Setty pending reply.

Integration work needed:
- Map ACIR → Spartan matrix
- Integrate blackbox functions (SHA-256, secp256k1 signature verification)
- Handle brillig functions

## Based on
[[Spartan]]

## Resources
- Code (original): [[Spartan-Framework-Code]]
- Code (v2): [[microsoft-Spartan2]]
- Code (Crescent T-256 fork): [[microsoft-crescent-credentials]]
- Blog:
