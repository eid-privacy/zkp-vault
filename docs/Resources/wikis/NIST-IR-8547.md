---
type: resource
subtype: wiki
year: 2024
authors:
  - Dustin Moody
  - Ray Perlner
  - Andrew Regenscheid
  - Angela Robinson
  - David Cooper
url: "https://csrc.nist.gov/pubs/ir/8547/ipd"
tags:
  - standard
  - post-quantum
  - signatures
---

[Home](../../README.md) > [Resources](../README.md) > [wikis](README.md) > NIST-IR-8547

# NIST IR 8547: Transition to Post-Quantum Cryptography Standards

## Summary
NIST's draft transition plan (2024) for moving from quantum-vulnerable public-key algorithms (RSA, ECDSA, EdDSA, ECDH) to the post-quantum standards ML-KEM, ML-DSA and SLH-DSA, with deprecation of 112-bit classical security after 2030 and disallowance of quantum-vulnerable algorithms by 2035. [[BL26-SoK-AnonCreds]] uses it to argue that quantum-vulnerable *authentication* (such as the unforgeability of anonymous credentials) can stay in use until a cryptographically relevant quantum computer exists, unlike encryption, which faces harvest-now-decrypt-later attacks.
