---
type: resource
subtype: paper
cite_as: GKRRS21-Poseidon
year: 2021
authors:
  - Lorenzo Grassi
  - Dmitry Khovratovich
  - Christian Rechberger
  - Arnab Roy
  - Markus Schofnegger
url: "https://eprint.iacr.org/2019/458"
tags:
  - cryptography
  - circuit
  - arithmetization
related:
  - BBHR18-STARK
citations: 114
citations_updated: 2026-10-27
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > GKRRS21-Poseidon

# Poseidon: A New Hash Function for Zero-Knowledge Proof Systems (Grassi, Khovratovich, Rechberger, Roy, Schofnegger 2021)

## Summary
Designs Poseidon, an arithmetization-friendly hash function operating natively over large prime fields, using the HADES strategy (full and partial S-box rounds) to minimize the number of multiplicative constraints. In R1CS/Plonkish circuits Poseidon costs orders of magnitude fewer constraints than SHA-256, which is why it is widely used for Merkle trees, commitments and nullifiers inside SNARKs, e.g. for revocation or membership proofs in credential systems. (USENIX Security 2021.)

## Related resources

- [[BBHR18-STARK|Scalable, Transparent, and Post-Quantum Secure Computational Integrity (Ben-Sasson, Bentov, Horesh, Riabzev 2018)]] (paper, 2018)
