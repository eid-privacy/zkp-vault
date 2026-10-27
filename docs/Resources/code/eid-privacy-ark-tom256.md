---
type: resource
subtype: code
year: 2025
authors:
  - eid-privacy project
url: "https://github.com/eid-privacy/ark-tom256"
tags:
  - elliptic-curves
  - implementations
  - library
---

[Home](../../README.md) > [Resources](../README.md) > [code](README.md) > eid-privacy-ark-tom256

# eid-privacy/ark-tom256

## Summary
The Tom-256 curve for arkworks, from the eid-privacy project. The group order of Tom-256 equals the base-field size of P-256 (secp256r1), so P-256 points can be handled as Tom-256 scalars without emulating foreign-field arithmetic, which is very expensive in a ZKP. This is what makes the Crescent-style ECDSA holder-binding proof cheap in the Spartan backend; see [[Holder-Binding]].
