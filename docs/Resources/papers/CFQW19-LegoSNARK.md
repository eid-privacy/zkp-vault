---
type: resource
subtype: paper
cite_as: CFQW19-LegoSNARK
year: 2019
authors:
  - Matteo Campanelli
  - Dario Fiore
  - Anaïs Querol
  - Hadrianus Waldner
url: "https://eprint.iacr.org/2019/142"
tags:
  - snark
  - commit-and-prove
  - composition
  - pairing
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > CFQW19-LegoSNARK

# LegoSNARK: Modular Design and Composition of Efficient Zero-Knowledge Proofs (Campanelli et al. 2019)

## Summary
Introduces the commit-and-prove SNARK (CP-SNARK) framework, which allows different proof systems to be composed modularly by sharing committed witnesses. A CP-SNARK proves a statement about a value that has already been committed to by another scheme. LegoGroth16 instantiates this with Groth16 as the inner system, enabling efficient cross-protocol composition without re-proving the same witness from scratch.
