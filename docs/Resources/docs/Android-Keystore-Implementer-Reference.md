---
type: resource
subtype: doc
authors:
  - Google / Android Open Source Project
url: "https://source.android.com/docs/security/features/keystore/implementer-ref"
tags:
  - hardware
  - eid
  - reference
---

[Home](../../README.md) > [Resources](../README.md) > [docs](README.md) > Android-Keystore-Implementer-Reference

# Android Keystore — KeyMint/Keymaster implementer's reference

## Summary
Android Open Source Project documentation for implementers of the hardware-backed Keystore HAL (KeyMint/Keymaster) running in a TEE or StrongBox secure element: supported algorithms (ECDSA P-256, RSA, AES), key attestation and access-control tags. It defines what a wallet can rely on when binding credentials to a device key — and why only standard ECDSA, not BBS or pairing-based keys, is available in hardware.
