---
type: theoretical_model
tags:
  - zkp
  - theory
  - complexity-theory
  - interactive-proof
  - pcp
---

[Home](../README.md) > [Theoretical Models](README.md) > Limits-of-Probabilistic-Proofs

# Limits of Probabilistic Proofs

## Description
This note collects structural results showing what can be assumed "for free" in probabilistic proofs and what cannot be achieved. Together they explain several design choices of practical systems: public coins, perfect completeness, arguments instead of proofs, and repetition strategies.

## Public vs. private coins
- **Goldwasser–Sipser (1986):** private coins add no power, since IP[k] ⊆ AM[k+2]. Any private-coin interactive proof can be simulated by a public-coin (Arthur–Merlin) protocol with two extra rounds. The proof uses a set lower-bound protocol based on pairwise-independent hashing.
- **Babai–Moran:** a constant number of AM rounds collapses to two, AM[k] = AM.
- **Why it matters:** [[Fiat-Shamir]] and the BCS transform ([[Kilian-Merkle]]) require public-coin protocols, because the verifier's messages are replaced by hashes. All IOP/PIOP-based SNARKs are public-coin.

## Perfect completeness
- **Fürer–Goldreich–Mansour–Sipser–Zachos (1989):** every IP/AM protocol can be converted to one with **perfect completeness**, i.e. the honest prover always convinces, at a small cost in rounds and soundness. Completeness error can therefore be assumed to be zero without loss of generality. Perfect completeness is also what most SNARK constructions provide.

## Parallel repetition
- **Single-prover interactive proofs:** sequential repetition reduces soundness error to ε^k. Parallel repetition also reduces it exponentially, keeping the number of rounds.
- **Computationally sound arguments:** parallel repetition can *fail* to reduce soundness for general multi-round arguments (Bellare–Impagliazzo–Naor 1997). It does work for 3-message and for public-coin arguments.
- **Two-prover games / MIPs:** the error does not drop to ε^k in general (Feige's counterexamples). **Raz's parallel repetition theorem** (1998) still gives exponential decay, at a rate that depends on the answer length. This is a key tool for PCP-based hardness results.
- **Zero knowledge:** parallel repetition preserves honest-verifier ZK but not necessarily full ZK (Goldreich–Krawczyk). Fiat–Shamir'd Σ-protocols therefore rely on HVZK, with the challenge chosen by the hash.

## Limitations of IPs
- **Communication:** if a language has an IP in which the prover sends few bits, it can be decided in time roughly exponential in that number (Goldreich–Håstad; Goldreich–Vadhan–Wigderson). NP-complete problems therefore have no IPs with polylogarithmic communication unless NP has quasi-polynomial-time randomized algorithms. **Succinct proofs for NP must be arguments**, i.e. computationally sound.
- **Prover efficiency:** IP = PSPACE needs a PSPACE-powerful prover. Doubly-efficient IPs exist for bounded-depth ([[GKR]]) and bounded-space computations (Reingold–Rothblum–Rothblum), but not, as far as is known, for all of NP with a polynomial-time prover.
- **Statistical ZK:** SZK ⊆ AM ∩ coAM (Fortnow; Aiello–Håstad). NP-complete problems thus have no statistical ZK proofs unless the polynomial hierarchy collapses. ZK for NP needs computational ZK or computational soundness.

## Limitations of PCPs and IOPs
- **Few queries, perfect completeness:** a 2-query PCP with O(log n) randomness over a binary alphabet and with perfect completeness can only capture P, because the checks form a 2-SAT instance that is solvable in polynomial time. NP-hardness needs ≥ 3 queries (Håstad's 3-bit PCP) or imperfect completeness.
- **Proof length:** PCPs (and IOPs) for SAT whose length is polynomial in the *witness* size rather than the instance size would give instance compression. That implies coNP ⊆ NP/poly and collapses the polynomial hierarchy (Fortnow–Santhanam; Harnik–Naor). IOPs achieve linear length in the *instance* size (see [[IOP]]).
- **Randomness bounds length:** a verifier with r random coins and q queries can only ever read q·2^r positions. PCP[O(log n), O(1)] therefore implies polynomial-length proofs, and NP ⊆ PCP[o(log n), o(log n)] would imply P = NP (Arora–Safra), so the randomness and query parameters of the PCP theorem are essentially optimal.

## Hardness of approximation
The PCP theorem is equivalent to NP-hardness of *gap* constraint satisfaction, which turns proof-checking results into inapproximability results:
- MAX-3SAT: (7/8 + ε)-approximation is NP-hard (Håstad), and the random assignment already achieves 7/8, so this is tight.
- Label Cover with Raz's parallel repetition gives strong hardness for Set Cover (≈ ln n), Clique and others.
- The Unique Games Conjecture (Khot) would settle the approximability of MAX-CUT, Vertex Cover and many other problems.

## Built upon by
[[PCP]], [[IOP]], [[Fiat-Shamir]], [[Complexity-Classes-Map]]

## Resources
- Paper: [[GMR85-ZK-Complexity]]
- Paper: [[BGKW88-MIP]]
- Book: [[Thaler-Proofs-Arguments-ZK]]
- Course: [[Chiesa-Foundations-Probabilistic-Proofs]]
- Course: [[MIT-6-5630-Advanced-Topics-Cryptography]]
