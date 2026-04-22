---
type: resource
subtype: paper
cite_as: LFKN92-Sumcheck
year: 1992
authors:
  - Carsten Lund
  - Lance Fortnow
  - Howard Karloff
  - Noam Nisan
doi: 10.1145/146585.146605
url: "https://dl.acm.org/doi/10.1145/146585.146605"
tags:
  - zkp
  - interactive-proof
  - mathematics
  - foundational
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > LFKN92-Sumcheck

# Algebraic Methods for Interactive Proof Systems

## Summary
Introduces the sumcheck protocol, showing that any language in the polynomial hierarchy has an interactive proof system. The sumcheck protocol lets a prover convince a verifier that the sum of a multilinear polynomial over all Boolean inputs equals a claimed value, using only O(n) rounds and a single evaluation of the polynomial at a random point. Together with Shamir's result, this established IP = PSPACE. The sumcheck protocol is now a core building block of modern transparent ZKP systems (GKR, Spartan, HyperPlonk, Libra).

## Used by
- [[SumcheckProofs]]
