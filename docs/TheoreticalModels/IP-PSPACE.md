---
type: theoretical_model
year: 1990
authors:
  - Carsten Lund
  - Lance Fortnow
  - Howard Karloff
  - Noam Nisan
  - Adi Shamir
paper: "Algebraic Methods for Interactive Proof Systems (LFKN); IP = PSPACE (Shamir)"
doi: 10.1145/146585.146609
tags:
  - zkp
  - theory
  - interactive-proof
  - sumcheck
  - complexity-theory
---

[Home](../README.md) > [Foundations](README.md) > IP-PSPACE

# IP = PSPACE

## Description
The class of languages with polynomial-round [[Interactive-Proof-Model|interactive proofs]] is exactly the class of languages decidable in polynomial space. The proof introduced **arithmetization** and the **[[SumcheckProofs|sumcheck protocol]]**, the two techniques at the core of modern SNARKs.

**IP ⊆ PSPACE.** For a fixed input, a polynomial-space machine can explore the game tree of verifier coins and prover messages. It computes the maximum acceptance probability any prover can achieve and compares it to the completeness/soundness thresholds.

**LFKN (1990): #SAT ∈ IP, hence coNP ⊆ IP.**
- *Arithmetization.* Map a Boolean formula φ to a polynomial P_φ over a large field 𝔽 that agrees with φ on {0,1}ⁿ, using x ∧ y ↦ x·y, ¬x ↦ 1 − x, x ∨ y ↦ 1 − (1 − x)(1 − y). For a 3-CNF with m clauses, P_φ has degree O(m).
- *Sumcheck.* The number of satisfying assignments is Σ_{x ∈ {0,1}ⁿ} P_φ(x). The sumcheck protocol verifies this sum with n rounds of univariate messages. The verifier evaluates P_φ only once, at a random point.
- *Soundness.* Each round errs with probability ≤ deg/|𝔽| by [[Schwartz-Zippel]]. Choosing |𝔽| > 2ⁿ (or working modulo a large prime) avoids wrap-around.

**Shamir (1990): PSPACE ⊆ IP via TQBF.** TQBF (true quantified Boolean formulas, ∃x₁ ∀x₂ ∃x₃ … φ) is PSPACE-complete.
- Arithmetize ∀xᵢ as a product (P|ₓᵢ₌₀ · P|ₓᵢ₌₁) and ∃xᵢ as 1 − (1 − P|ₓᵢ₌₀)(1 − P|ₓᵢ₌₁) (or as a sum).
- *Problem:* nested products double the degree with every quantifier, so the univariate messages would have exponential degree.
- *Fix — degree reduction (linearization):* the operator Lᵢ replaces every power xᵢᵏ by xᵢ. This leaves values on Boolean inputs unchanged and makes the polynomial multilinear in xᵢ. Inserting L operators after each quantifier keeps all degrees small.
- The protocol peels off one operator (∀, ∃ or L) per round. Each round is a sumcheck-like step that reduces a claim about the outer expression to a claim about the inner one at a random point. There are O(n²) operators, so the protocol has polynomially many rounds.

## Significance
- Interaction plus randomness is far more powerful than static NP proofs: the verifier can be convinced of coNP and even PSPACE statements.
- The honest prover in Shamir's protocol needs PSPACE power. This motivated **doubly-efficient** interactive proofs, where the prover runs in polynomial time, such as [[GKR]].
- The arithmetization + sumcheck template reappears in MIP = NEXP, the PCP theorem ([[PCP]]), GKR, [[Spartan]], [[HyperPlonk]] and Longfellow.
- The result does not relativize: there are oracles A with coNP^A ⊄ IP^A. Arithmetization is therefore a "non-black-box" technique.

## Built upon by
[[SumcheckProofs]], [[GKR]], [[PCP]], [[Complexity-Classes-Map]]

## Resources
- Paper: [[LFKN92-Sumcheck]]
- Paper: [[GMR85-ZK-Complexity]]
- Book: [[Thaler-Proofs-Arguments-ZK]] (Chapter 4: sumcheck, #SAT and IP = PSPACE)
- Course: [[Chiesa-Foundations-Probabilistic-Proofs]]
- Course: [[MIT-6-5630-Advanced-Topics-Cryptography]]
