---
type: resource
subtype: code
year: 2026
authors:
  - eid-privacy project
url: "https://github.com/eid-privacy/zkp-android-spartan"
tags:
  - eid
  - implementations
  - prover-backend
---

[Home](../../README.md) > [Resources](../README.md) > [code](README.md) > eid-privacy-zkp-android-spartan

# eid-privacy/zkp-android-spartan

## Summary
Experimental Android app from the eid-privacy project that generates and verifies ZK proofs on the phone: Noir circuits from eid-privacy/spartan-backend are proven with a Spartan-style backend in Rust, called from Kotlin via UniFFI. Its main purpose is benchmarking on-device proving and verification for the e-ID circuits `c0200_swiyu_jwt` and `c0202_sicpa_backend_constant`.
