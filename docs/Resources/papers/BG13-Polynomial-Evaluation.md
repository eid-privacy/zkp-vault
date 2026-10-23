---
type: resource
subtype: paper
cite_as: BG13-Polynomial-Evaluation
year: 2013
authors:
  - Stephanie Bayer
  - Jens Groth
url: "https://eprint.iacr.org/2015/195"
tags:
  - revocation
  - sigma
  - discrete-log
  - logarithmic
related:
  - BBB+17-Bulletproofs
  - Ped91-Commitments
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > BG13-Polynomial-Evaluation

# Zero-Knowledge Argument for Polynomial Evaluation with Application to Blacklists (Bayer, Groth 2013)

## Summary
Gives a public-coin, 3-move honest-verifier zero-knowledge argument that a committed value is a root (or non-root) of a public polynomial, with communication logarithmic in the polynomial degree and relying only on the discrete-log assumption (EUROCRYPT 2013). This yields membership and non-membership proofs against lists of size n in O(log n), enabling anonymous blacklisting — i.e. a ZK non-revocation proof for e-ID without pairings or trusted setup.

## Related resources

- [[BBB+17-Bulletproofs|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[Ped91-Commitments|Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing (Pedersen 1991)]] (paper, 1991)
