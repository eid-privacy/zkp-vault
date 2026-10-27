---
type: resource
subtype: paper
cite_as: QCY21-Blind-ECDSA
year: 2021
authors:
  - Xianrui Qin
  - Cailing Cai
  - Tsz Hon Yuen
url: "https://eprint.iacr.org/2021/1449"
tags:
  - signatures
  - elliptic-curves
  - cryptography
related:
  - FLM22-ZKAttest
  - FS24-Longfellow
doi: "10.1007/978-3-030-88428-4_16"
citations: 10
citations_updated: 2026-10-27
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > QCY21-Blind-ECDSA

# One-more Unforgeability of Blind ECDSA (Qin, Cai, Yuen 2021)

## Summary
Gives the first formal security analysis of one-more unforgeability for blind ECDSA, where the issuer signs without seeing the message and the user obtains a standard ECDSA signature. Describes an ROS-style attack (the ECDSA-ROS problem), a generic construction from additively homomorphic encryption plus a ZK proof (about 40x more bandwidth-efficient than prior work), and a proof in a new algebraic bijective random oracle model. Relevant for e-ID because it shows how blind, unlinkable issuance could be retrofitted onto the ECDSA infrastructure already deployed in wallets and secure elements.

## Related resources

- [[FS24-Longfellow|Anonymous Credentials from ECDSA (Frigo & shelat 2024)]] (paper, 2024)
- [[FLM22-ZKAttest|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys (Faz-Hernández, Ladd, Maram 2022)]] (paper, 2022)
