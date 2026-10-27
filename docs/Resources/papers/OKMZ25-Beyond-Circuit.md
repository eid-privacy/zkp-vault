---
type: resource
subtype: paper
cite_as: OKMZ25-Beyond-Circuit
year: 2025
authors:
  - Michele Orrù
  - George Kadianakis
  - Mary Maller
  - Greg Zaverucha
url: "https://eprint.iacr.org/2024/265"
tags:
  - sigma
  - snark
  - lookup
  - elliptic-curves
related:
  - KMN23-Sigmabus
  - COPZ22-DLEQ-Across-Groups
  - BL26-SoK-AnonCreds
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > OKMZ25-Beyond-Circuit

# Beyond the Circuit: How to Minimize Foreign Arithmetic in ZKP Circuits (Orrù, Kadianakis, Maller, Zaverucha 2025)

## Summary
Gives techniques for embedding "foreign" arithmetic (operations modulo a different prime than the constraint system's field, such as Boolean operations, non-native fields or public-key operations) in zero-knowledge efficiently. It covers equality of discrete logs across groups, scalar multiplication without in-circuit elliptic-curve operations, and proofs of AES encryption, combining rejection sampling, Sigma protocols and lookups. Directly relevant to ECDSA-P256 holder binding, where non-native curve arithmetic dominates circuit cost. Published in IACR Communications in Cryptology 2025.

## Related resources

- [[COPZ22-DLEQ-Across-Groups|Proofs of discrete logarithm equality across groups (Chase, Orrù, Perrin, Zaverucha 2022)]] (paper, 2022)
- [[KMN23-Sigmabus|Sigmabus: Binding Sigmas in Circuits for Fast Curve Operations (Kadianakis, Maller, Novakovic 2023)]] (paper, 2023)
- [[BL26-SoK-AnonCreds|SoK: Anonymous Credentials for Digital Identity Wallets (Bormann, Lehmann 2026)]] (paper, 2026)
