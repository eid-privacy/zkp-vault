---
type: resource
subtype: paper
cite_as: CLR23-CDLS
year: 2023
authors:
  - Sofia Celi
  - Shai Levin
  - Joe Rowell
url: "https://eprint.iacr.org/2023/1595"
tags:
  - sigma
  - discrete-log
  - elliptic-curves
  - zkp
related:
  - FLM22-ZKAttest
  - COPZ22-DLEQ-Across-Groups
  - LZ26-AnonCreds-Legacy
doi: "10.1007/978-3-031-64381-1_4"
citations: 5
citations_updated: 2026-10-27
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > CLR23-CDLS

# CDLS: Proving Knowledge of Committed Discrete Logarithms with Soundness (Celi, Levin, Rowell 2023)

## Summary
Revisits proofs of knowledge of a committed discrete logarithm across groups (as used e.g. in ZKAttest to prove statements about ECDSA keys), shows soundness issues in prior constructions, and presents CDLS with a sound analysis and an efficient implementation. Relevant to e-ID holder binding where a ZK proof must show that a hidden device key (e.g. P-256) is the one bound to the credential.

## Related resources

- [[LZ26-AnonCreds-Legacy|Device Binding for Anonymous Credentials on Legacy Phones (Lehmann, Zacharakis 2026)]] (paper, 2026)
- [[WOSPG25-Legacy-PoP|Efficient Proofs of Possession for Legacy Signatures (Woo, Ozdemir, Sharp, Pornin, Grubbs 2025)]] (paper, 2025)
- [[COPZ22-DLEQ-Across-Groups|Proofs of discrete logarithm equality across groups (Chase, Orrù, Perrin, Zaverucha 2022)]] (paper, 2022)
- [[FLM22-ZKAttest|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys (Faz-Hernández, Ladd, Maram 2022)]] (paper, 2022)
