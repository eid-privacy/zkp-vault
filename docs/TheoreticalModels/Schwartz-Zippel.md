---
type: theoretical_model
year: 1980
authors:
  - Jacob T. Schwartz
  - Richard Zippel
paper: "Fast Probabilistic Algorithms for Verification of Polynomial Identities"
doi: 10.1145/322217.322225
tags:
  - zkp
  - mathematics
  - foundational
  - information-theoretic
---

[Home](../README.md) > [Theoretical Models](README.md) > Schwartz-Zippel

# Schwartz-Zippel Lemma

## Description
A fundamental result in polynomial algebra: a non-zero multivariate polynomial of total degree d, evaluated at a uniformly random point drawn from a set S ⊆ 𝔽, equals zero with probability at most d/|S|.

**Formal statement.** Let f ∈ 𝔽[X_1, …, X_n] be a non-zero polynomial of total degree d, and let S ⊆ 𝔽 be a finite set. If r_1, …, r_n are chosen independently and uniformly at random from S, then:

```
Pr[ f(r_1, …, r_n) = 0 ] ≤ d / |S|
```

**Immediate corollary (polynomial identity testing).** To check whether two polynomials p and q of degree d are identical, evaluate p(r) and q(r) at a single random point r from a set S with |S| >> d. If p ≠ q they differ with probability ≥ 1 − d/|S|; a single evaluation suffices as a randomised identity test.

The result was discovered independently by DeMillo–Lipton (1978), Zippel (1979), and Schwartz (1980).

## Significance in ZKPs
Virtually every polynomial-based interactive proof relies on this lemma for its soundness argument:

- **[[SumcheckProofs|Sumcheck protocol]]**: in each of the n rounds the verifier sends a random challenge; a cheating prover can pass only if each round's univariate polynomial happens to match the honest one at the random point — probability ≤ d/|S| per round.
- **[[PLONK]]**: the verifier checks the quotient identity t(X) = f(X)/Z_H(X) at a single random evaluation point ζ.
- **[[FRI]]**: proximity testing is repeated at random positions; each step uses the lemma to bound the probability of a low-degree polynomial being far from the committed codeword.
- **[[BCRSVW19-Aurora|Aurora]], [[Spartan]], [[HyperPlonk]]**: all reduce constraint satisfaction to polynomial identity checks validated by this lemma.

Working over a large prime field (|𝔽| ≈ 2^{254} for BN254 or BLS12-381 curves) makes d/|𝔽| negligible, so a single random evaluation gives cryptographic-grade soundness.

## Proof sketch
By induction on n. For n = 1, a degree-d univariate has at most d roots, so Pr[f(r) = 0] ≤ d/|S|. For n > 1, write f(X_1, …, X_n) = ∑_{i=0}^{d} X_n^i · g_i(X_1, …, X_{n-1}) where g_d ≠ 0. Fix r_1, …, r_{n-1} first; by the inductive hypothesis g_d(r_1, …, r_{n-1}) ≠ 0 except with probability ≤ (d − deg g_d)/|S|. Conditioned on g_d being non-zero, the remaining univariate in X_n has degree deg g_d and thus at most deg g_d roots. A union bound gives the full ≤ d/|S|.

## Built upon by
[[SumcheckProofs]], [[PLONK]], [[FRI]], [[BCRSVW19-Aurora|Aurora]], [[Spartan]], [[HyperPlonk]]

## Resources
- Paper: [[Sch80-Schwartz-Zippel]]
- Book: [[Thaler-Proofs-Arguments-ZK]] (Chapters 2–3 introduce the lemma and its role in sumcheck)
