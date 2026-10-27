---
type: proof_system
status: research
year: 1986
abbreviation: FS
authors:
  - Amos Fiat
  - Adi Shamir
paper: How to prove yourself
doi: 10.1007/3-540-47721-7_12
tags:
  - zkp
  - interactive-proof
  - transformation
  - non-interactive
---

[Home](../README.md) > [Foundations](README.md) > Fiat-Shamir

# Fiat-Shamir Transformation

## Description
Converts interactive identification and proof protocols into non-interactive ones by replacing the verifier's random challenge with a cryptographic hash of the prover's commitment. A fundamental technique used throughout modern ZKP systems. Relies on the Random Oracle Model (ROM).

## Technical Characteristics

**Complexity:**
- Prover: Same as interactive protocol + one hash evaluation
- Verifier: Same as interactive protocol + one hash evaluation
- Proof Size: Single-round (non-interactive)
- Setup: transparent

**Security:**
- Assumption: computational (Random Oracle Model)
- Post-quantum: depends on underlying protocol and hash function
- Basis: ROM, hardness of underlying interactive protocol

## Soundness of the Transformed Protocol
- **Public coins only.** Every verifier message must be uniformly random and public, because it is replaced by H(transcript). Private-coin protocols must first be converted (see [[Limits-of-Probabilistic-Proofs]]).
- **Hash the whole transcript.** Each challenge must bind the statement, the public parameters and *all* previous prover messages ("strong" Fiat–Shamir). Omitting the statement or earlier messages ("weak" Fiat–Shamir) lets a prover choose the statement after seeing the challenge. This has caused real-world forgeries in implementations of PLONK, Bulletproofs and others, known as "Frozen Heart" bugs.
- **Constant-round protocols (Σ-protocols):** security in the ROM follows from special soundness via the forking lemma (Pointcheval–Stern). The extractor rewinds the prover and reprograms the oracle, which loses a polynomial factor in tightness.
- **Multi-round protocols need round-by-round soundness.** A small overall soundness error is not enough. A cheating prover can *grind*: it recomputes the hash for one round until it gets a lucky challenge, then moves to the next round. For example, k sequential repetitions of a 1/2-sound protocol have error 2^{−k} interactively, but after Fiat–Shamir they can be broken with about 2k hash evaluations. *Round-by-round soundness* (Canetti et al. 2019) and the closely related *state-restoration soundness* (BCS16) require every single round to have a small probability of escaping a "doomed" state. The non-interactive error is then about t·ε_rbr for t hash queries.
- **Instantiation is heuristic.** Security is proven only in the ROM. Contrived protocols exist that are secure interactively but insecure under *any* concrete hash function, and recent attacks target FS applied to GKR-style protocols. Concrete hash choice and domain separation matter.

## Knowledge Soundness and Extractors
A *proof of knowledge* guarantees more than "a witness exists": an **extractor** E with black-box (rewinding) access to any prover P* that convinces with probability ε outputs a witness with probability about ε − κ, where κ is the knowledge error.
- **Σ-protocols:** special soundness means that two accepting transcripts with the same commitment and different challenges yield the witness, so the extractor rewinds once with a new challenge.
- **Non-interactive proofs:** the extractor either rewinds and reprograms the random oracle (forking), extracts *straight-line* by observing the prover's oracle queries (Fischlin's transform; Merkle-tree IOP compilers), or uses a trapdoor in the CRS.
- **Simulation-extractability** (extraction even after the adversary has seen simulated proofs) is needed when proofs are composed or must be non-malleable, e.g. in signatures of knowledge and credentials.

## Proximity and δ-Closeness
In IOP-based SNARKs ([[FRI]], [[zk-STARKs]], [[Ligero]]), the verifier never checks that a committed oracle *is* a low-degree polynomial, only that it is **δ-close** to one, i.e. it differs from some codeword on at most a δ fraction of positions. Soundness errors are stated relative to δ and the code rate ρ.
- In the *unique-decoding* regime, δ < (1 − ρ)/2, the close codeword is unique and the analysis is simple.
- Up to the *Johnson bound*, δ < 1 − √ρ, list-decoding arguments are needed.
- Many deployed parameter sets rely on *conjectured* proximity-gap bounds beyond Johnson. Proven bounds give fewer security bits, and grinding (proof-of-work) is often added to make up the difference.

After Fiat–Shamir, the bits of security equal −log₂ of the *per-round* error, not of the overall error.

## Dependencies
Based on: [[GMR85-Knowledge-Complexity]], [[Sigma-Protocols-Damgard]]
Related: [[Kilian-Merkle]] (Micali / BCS compilation of PCPs and IOPs)
Circuit representation:

## Applications
Used by: [[PLONK]], [[Groth16]], [[Bulletproofs]], nearly all non-interactive ZKP systems

## Resources
- Paper: [[FS86-Fiat-Shamir]]
- Paper: [[BBHR18-FRI]]
- Explainer: [[Green-How-To-Prove-False-Statements]]
- Book: [[Thaler-Proofs-Arguments-ZK]] (Fiat–Shamir, round-by-round soundness, knowledge soundness)
- Code:
