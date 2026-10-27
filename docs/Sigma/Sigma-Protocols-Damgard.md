---
type: cryptographic_primitive
year: 2010
authors:
  - Ivan Damgard
paper: On Σ-protocols
tags:
  - zkp
  - sigma
  - foundational
  - mathematics
---

[Home](../README.md) > [Sigma Proofs](README.md) > Sigma-Protocols-Damgard

# On Σ-protocols

## Description
A Σ-protocol is a three-move interactive proof: commit, challenge, response. Fundamental building blocks for zero-knowledge proofs about discrete logarithms and related algebraic problems. Can be made non-interactive via [[Fiat-Shamir]].

## Properties
- Completeness: Yes
- Soundness: Special soundness (2-extractability of witness)
- Zero-knowledge: Special honest-verifier zero-knowledge (HVZK)

## Relations over Pedersen Commitments
Let C = g^m·h^r be a [[Pedersen-Commitments|Pedersen commitment]] in a prime-order group with independent generators g, h. Every protocol below has the same three moves: commit T, challenge e, response z = k + e·w. They differ only in *which* linear map is proven.

- **Knowledge of an opening.** The prover sends T = g^a·h^b and, after challenge e, answers z₁ = a + e·m, z₂ = b + e·r. The verifier checks g^{z₁}·h^{z₂} = T·C^e.
- **Equality of committed values.** For C₁ = g^m h^{r₁} and C₂ = g^m h^{r₂}, the prover runs both opening proofs with the *same* randomness a and the *same* response z₁ for m. Alternatively, it proves knowledge of log_h(C₁/C₂) = r₁ − r₂.
- **Linear relations / sums.** Commitments are homomorphic: C₁·C₂ commits to m₁ + m₂. A relation Σ αᵢmᵢ = β is proven by showing that Πᵢ Cᵢ^{αᵢ} · g^{−β} is a commitment to 0, i.e. a power of h, which is a Schnorr proof for base h.
- **Product.** To prove m₃ = m₁·m₂, observe that C₃ = C₂^{m₁}·h^{r₃ − m₁r₂}. The prover shows knowledge of (m₁, r₁) opening C₁ and of (m₁, s) with C₃ = C₂^{m₁}·h^{s}, sharing the response for m₁ across both equations.
- **AND composition.** Run the sub-protocols in parallel with one common challenge.
- **OR composition (Cramer–Damgård–Schoenmakers).** The prover simulates the false branch with a self-chosen challenge e₂ and runs the true branch honestly with e₁ = e − e₂. The verifier checks both transcripts and that e₁ + e₂ = e. This is the basis of bit proofs and simple range proofs (one OR proof per bit), and of ring/set-membership proofs.

**Unifying view (Maurer).** All of these are proofs of knowledge of a preimage w under a group homomorphism φ (φ(w) = y). The prover sends φ(k), and the response is k + e·w. Equalities correspond to shared witness coordinates and AND to a product homomorphism. A single generic proof covers completeness, special soundness and HVZK.

**Why not hash preimages?** Σ-protocols are efficient only for *algebraic* (homomorphic) relations in the group's exponent. SHA-256 or an RSA/ECDSA verification over a different field is not such a relation: it would have to be written as a circuit, with a commitment and a product proof for every multiplication gate. That means tens of thousands of gates, each costing several exponentiations and group elements. The standard approach is to prove such parts with a general-purpose SNARK and use Σ-protocols as cheap "glue" on commitments. Commit-and-prove SNARKs such as [[LegoGroth16]] and systems like [[Crescent]] connect the two worlds.

## Based on
Discrete logarithm / algebraic group settings

## Used by
[[Pedersen-Commitments]], [[Proof-Systems-for-DL]], [[ZKAttest]], [[Camenisch-Michels-Safe-Primes]], [[Sigma-Protocols-Proposal]]

## Resources
- Paper: [[Dam04-Sigma-Protocols]]
- Paper: [[Mau09-Unifying-ZKPoK]]
- Paper: [[Cra97-Modular-Design]] (OR proofs / partial knowledge)
- Paper: [[CS97-DL-Proofs]]
- Explainer: [[Cronokirby-Paper-That-Keeps-Showing-Up]]
