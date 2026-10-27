---
type: resource
subtype: paper
cite_as: GKR08-Muggles
year: 2008
authors:
  - Shafi Goldwasser
  - Yael Tauman Kalai
  - Guy N. Rothblum
url: "https://doi.org/10.1145/1374376.1374396"
tags:
  - interactive-proof
  - theory
  - foundational
  - information-theoretic
related:
  - LFKN92-Sumcheck
  - WTSTW17-Hyrax
doi: "10.1145/1374376.1374396"
citations: 484
citations_updated: 2026-10-27
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > GKR08-Muggles

# Delegating Computation: Interactive Proofs for Muggles (Goldwasser, Kalai, Rothblum 2008)

## Summary
Introduces the GKR protocol: an interactive proof for any language computable by log-space uniform layered arithmetic circuits, in which the prover runs in time polynomial in the circuit size and the verifier in time roughly linear in input size plus polynomial in circuit depth. It proceeds layer by layer, reducing a claim about one layer's outputs to a claim about the next via the sum-check protocol. GKR is the backbone of modern linear-time-prover systems (Hyrax, Libra, Virgo, Expander) and of the sum-check-centric line of ZKPs that is attractive for fast credential presentations on mobile devices. (STOC 2008; journal version JACM 2015.)

## Related resources

- [[LFKN92-Sumcheck|Algebraic Methods for Interactive Proof Systems]] (paper, 1992)
- [[WTSTW17-Hyrax|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[XZZPS19-Libra|Libra: Succinct Zero-Knowledge Proofs with Optimal Prover Computation (Xie, Zhang, Zhang, Papamanthou, Song 2019)]] (paper, 2019)
