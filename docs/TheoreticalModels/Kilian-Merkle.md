---
type: theoretical_model
year: 1992
authors:
  - Joe Kilian
  - Silvio Micali
paper: "A Note on Efficient Zero-Knowledge Proofs and Arguments (Kilian); Computationally Sound Proofs (Micali)"
doi: 10.1145/129712.129782
tags:
  - zkp
  - theory
  - commitment
  - pcp
  - transformation
  - non-interactive
---

[Home](../README.md) > [Foundations](README.md) > Kilian-Merkle

# Kilian's Protocol, Merkle Commitments and the BCS Transform

## Description
This note covers the standard way to turn an information-theoretic PCP or IOP, whose proof is long but only locally queried, into a short **succinct argument**, using nothing but a collision-resistant hash function.

**Merkle commitment.**
- The prover hashes the leaves of a vector v ∈ Σ^ℓ pairwise up a binary tree, and the root is the commitment.
- Opening position i means revealing vᵢ and its *authentication path*: the O(log ℓ) sibling hashes on the way to the root.
- *Binding* (positional) follows from collision resistance. *Hiding* is obtained by salting each leaf with fresh randomness.
- A Merkle tree is therefore a vector commitment with O(λ·log ℓ)-size openings.

**Kilian's protocol (1992).** This is a 4-message succinct argument for NP from a PCP.
1. V → P: a hash function h, sampled from a collision-resistant family.
2. P → V: the Merkle root of the PCP proof π.
3. V → P: the PCP verifier's random coins, which determine the q query positions.
4. P → V: the queried symbols of π, each with its authentication path. V checks the paths and runs the PCP decision.

The total communication is O(q·λ·log ℓ), i.e. polylogarithmic in the NP witness size. Soundness is *computational*, which makes the protocol an argument: a prover that answers inconsistently with its committed root yields a hash collision. ZK can be added by using a ZK-PCP and hiding leaves.

**Micali's CS proofs (1994).** Applying [[Fiat-Shamir]] to Kilian's protocol in the random oracle model derives the query positions from the hash of the root. The result is the first **non-interactive succinct argument (SNARG)** for NP, with no setup beyond the random oracle.

**BCS transform (Ben-Sasson–Chiesa–Spooner 2016).** This generalises Micali's construction to multi-round [[IOP|IOPs]]. Each prover oracle is Merkle-committed, and each verifier challenge is the hash of the transcript so far, including all previous roots. Soundness in the ROM is about the IOP's **state-restoration soundness** plus a term of order t²/2^λ for an adversary making t hash queries. Merely bounding the soundness error is not enough: a cheating prover can re-sample ("grind") any round's challenge, so each round must individually be hard to cheat (round-by-round soundness). Security also holds in the quantum ROM (Chiesa–Manohar–Spooner 2019).

## Significance
- This is the template behind all hash-based SNARKs: [[zk-STARKs]], [[Circle-STARKs]], Aurora, Fractal, [[Ligero]], [[Ligero-Plus-Plus]] and [[Longfellow]]. The SNARKs are transparent and plausibly post-quantum.
- Proof size is dominated by authentication paths. Engineering techniques reduce it: batched multi-openings, higher-arity trees, Merkle caps, and grinding (proof-of-work) to trade queries for security bits.
- Knowledge soundness is straightforward in the ROM: the extractor reads the prover's hash queries to reconstruct the committed oracles.

## Built upon by
[[FRI]], [[zk-STARKs]], [[Circle-STARKs]], [[Ligero]], [[Longfellow]], [[IOP]]

## Resources
- Paper: [[BBHR18-STARK]]
- Paper: [[BCRSVW19-Aurora]]
- Paper: [[FS86-Fiat-Shamir]]
- Book: [[Thaler-Proofs-Arguments-ZK]] (Kilian/Micali and the IOP-to-SNARK compiler)
- Course: [[Chiesa-Foundations-Probabilistic-Proofs]]
- Course: [[MIT-6-5630-Advanced-Topics-Cryptography]]
