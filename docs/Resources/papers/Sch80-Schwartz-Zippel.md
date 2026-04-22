---
type: resource
subtype: paper
cite_as: Sch80-Schwartz-Zippel
year: 1980
authors:
  - Jacob T. Schwartz
doi: 10.1145/322217.322225
url: "https://dl.acm.org/doi/10.1145/322217.322225"
tags:
  - mathematics
  - foundational
  - information-theoretic
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > Sch80-Schwartz-Zippel

# Fast Probabilistic Algorithms for Verification of Polynomial Identities

## Summary
Introduces the probabilistic polynomial identity test: evaluate both sides of a purported identity at a uniformly random point over a large field. If the polynomials are distinct, they can agree at at most d points out of |S| for total degree d, so a random test fails with probability ≤ d/|S|. This bound — now universally called the Schwartz-Zippel lemma — is the information-theoretic engine behind the soundness proofs of virtually every polynomial-based interactive proof, from the sumcheck protocol through PLONK and FRI. An independent, slightly earlier formulation appears in Zippel (1979, EUROSAM) for sparse polynomials; the two results are usually cited together.

## Used by
- [[Schwartz-Zippel]]

## Related resources

- [[LFKN92-Sumcheck|Algebraic Methods for Interactive Proof Systems]] (paper, 1992)
- [[BBHR18-FRI|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)
