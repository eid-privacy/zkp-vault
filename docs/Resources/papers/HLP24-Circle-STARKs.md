---
type: resource
subtype: paper
cite_as: HLP24-Circle-STARKs
year: 2024
authors:
  - Ulrich Haböck
  - David Levit
  - Shahar Papini
url: "https://eprint.iacr.org/2024/278"
tags:
  - stark
  - reed-solomon
  - transparent
  - post-quantum
related:
  - BBHR18-FRI
  - BBHR18-STARK
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > HLP24-Circle-STARKs

# Circle STARKs (Haböck, Levit, Papini 2024)

## Summary
Adapts STARKs and FRI to work over the circle curve of a prime field p where p+1 is divisible by a large power of two, notably the Mersenne prime 2^31-1, enabling very fast native field arithmetic. It develops circle-group FFTs, a circle version of FRI, and the corresponding AIR machinery. Circle STARKs underpin StarkWare's Stwo prover and show how field choice dominates prover performance for hash-based, post-quantum proof systems.

## Related resources

- [[BBHR18-FRI|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)
- [[BBHR18-STARK|Scalable, Transparent, and Post-Quantum Secure Computational Integrity (Ben-Sasson, Bentov, Horesh, Riabzev 2018)]] (paper, 2018)
