---
type: proof_system
status: research
year: 1992
authors:
  - Carsten Lund
  - Lance Fortnow
  - Howard Karloff
  - Noam Nisan
paper: "Algebraic Methods for Interactive Proof Systems"
doi: 10.1145/146585.146605
tags:
  - zkp
  - interactive-proof
  - information-theoretic
  - mathematics
  - foundational
---

[Home](../README.md) > [Tooling & Applications](README.md) > SumcheckProofs

# Sumcheck Protocol

## Description
A fundamental interactive proof protocol that allows a prover to convince a verifier that the sum of a multilinear polynomial f over all Boolean hypercube inputs equals a claimed value c:

```
∑_{x ∈ {0,1}^n} f(x) = c
```

The protocol proceeds in n rounds, one per variable. In round i the prover sends a univariate polynomial g_i(X_i) obtained by summing f over all remaining free variables, and the verifier checks the claimed sum and replies with a random challenge r_i. After n rounds, the verifier must evaluate f at the single random point (r_1, …, r_n) — typically delegated to a polynomial commitment scheme.

Soundness relies purely on the Schwartz-Zippel lemma: a cheating prover can succeed with probability at most nd/|𝔽|, where d is the per-variable degree. No computational assumptions are needed. The protocol is interactive but is made non-interactive by applying the [[Fiat-Shamir]] transform.

The sumcheck protocol is the backbone of many modern transparent ZKP systems. [[Spartan]] uses it directly over R1CS multilinear extensions; [[HyperPlonk]] applies it to PLONKish constraints; [[Libra]] uses it via the GKR protocol.

## Technical Characteristics

**Complexity:**
- Prover: O(n · 2^n) for dense multilinear polynomials; O(|C|) for circuit-derived MLEs via bookkeeping tables
- Verifier: O(n) rounds + one evaluation of f at a random point
- Proof Size: O(n · d) field elements (n rounds, each a degree-d univariate polynomial)
- Setup: transparent

**Security:**
- Assumption: information-theoretic
- Post-quantum: yes (no algebraic hardness assumptions; soundness ≤ nd/|𝔽|)
- Basis: Schwartz-Zippel lemma for polynomial identity testing

## Dependencies
Uses: multilinear extensions (MLEs), [[Fiat-Shamir]] (for non-interactive variant)
Predecessor: [[Interactive-Proof-Model]]

## Applications
Used by: [[Spartan]], [[Hyrax]], [[Libra]], [[HyperPlonk]]

## Resources
- Paper: [[LFKN92-Sumcheck]]
- Book: [[Thaler-Proofs-Arguments-ZK]] (Chapters 4–5 cover sumcheck and GKR in depth)
- Explainer:
