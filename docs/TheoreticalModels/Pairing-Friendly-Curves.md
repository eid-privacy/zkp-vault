---
type: theoretical_model
tags:
  - pairing
  - elliptic-curves
  - standard
---

[Home](../README.md) > [Foundations](README.md) > Pairing-Friendly-Curves

# Pairing-Friendly Curves

## Description
A pairing-friendly curve is an elliptic curve with an efficiently computable bilinear map between groups. Pairings are needed by BBS, PS and the other efficient multi-show anonymous credentials ([[Unlinkable-Anonymous-Credentials]]), by BLS signatures ([[BLS01-Short-Sigs]]), and by SNARKs such as [[Groth16]] and KZG-based [[PLONK]]. The cryptography is well understood, but the curves are much less deployed and standardised than P-256 ([[BL26-SoK-AnonCreds]]).

## Status
| Curve | Security | Standardisation | Notes |
|---|---|---|---|
| BN254 | ~100 bits (below 128 after recent attacks on BN curves) | ISO, TCG (for DAA in TPM 2.0) | Used by Ethereum precompiles and many SNARK deployments |
| BLS12-381 | ~128 bits | No formal standard; fully specified in IRTF CFRG drafts (pairing-friendly curves, hashing to curves) | De facto standard for BBS and BLS signatures (Ethereum, DFINITY) |
| BLS24-509 | ~192 bits | — | Recommended as the most efficient 192-bit option by [[AFG24-Pairing-Curves-192]] |

Implementations of BLS12-381: blst, arkworks ([[arkworks-rs-algebra]]), Cloudflare CIRCL. A NIST report from 2015 gives an overview of pairing-based cryptography. Phone secure elements and HSMs don't support pairing curves, which is the main deployment obstacle for BBS ([[Hardware-Security-for-eID]], [[Holder-Binding]]); without pairings, see [[Pairing-Free-ACs]].

## Related
- [[Unlinkable-Anonymous-Credentials]]
- [[Pairing-Free-ACs]]
- [[Groth16]]

## Resources
- Paper: [[BL26-SoK-AnonCreds]], [[AFG24-Pairing-Curves-192]], [[BLS01-Short-Sigs]]
- Wiki: [[IRTF-CFRG-BBS-Signatures]]
- Code: [[arkworks-rs-algebra]]
