---
type: resource
subtype: paper
cite_as: COPZ22-DLEQ-Across-Groups
year: 2022
authors:
  - Melissa Chase
  - Michele Orrù
  - Trevor Perrin
  - Greg Zaverucha
url: "https://eprint.iacr.org/2022/1593"
tags:
  - sigma
  - discrete-log
  - elliptic-curves
  - zkp
related:
  - CS97-DL-Proofs
  - SAS22-ZKAttest
  - CLR23-CDLS
  - LZ26-AnonCreds-Legacy
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > COPZ22-DLEQ-Across-Groups

# Proofs of discrete logarithm equality across groups (Chase, Orrù, Perrin, Zaverucha 2022)

## Summary
Gives sigma-protocol based proofs that the same secret exponent underlies discrete logarithms in two different groups of different (prime) orders, e.g. a P-256 key and a key on a pairing-friendly or other curve. Analyzes soundness carefully with bit-decomposition / range-proof techniques, and gives concrete parameters. Key building block for e-ID holder binding: it lets a credential system on one curve prove possession of a device key (e.g. ECDSA P-256 in a secure element) living on another.

## Related resources

- [[CLR23-CDLS|CDLS: Proving Knowledge of Committed Discrete Logarithms with Soundness (Celi, Levin, Rowell 2023)]] (paper, 2023)
- [[LZ26-AnonCreds-Legacy|Device Binding for Anonymous Credentials on Legacy Phones (Lehmann, Zacharakis 2026)]] (paper, 2026)
- [[CS97-DL-Proofs|Proof Systems for General Statements about Discrete Logarithms (Camenisch-Stadler 1997)]] (paper, 1997)
- [[SAS22-ZKAttest|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys]] (paper, 2022)
