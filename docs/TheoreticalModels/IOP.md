---
type: theoretical_model
year: 2016
authors:
  - Eli Ben-Sasson
  - Alessandro Chiesa
  - Nicholas Spooner
paper: Interactive Oracle Proofs
doi: 10.1007/978-3-662-53644-5_2
tags:
  - zkp
  - theory
  - iop
  - pcp
  - interactive-proof
---

[Home](../README.md) > [Foundations](README.md) > IOP

# Interactive Oracle Proofs (IOP)

## Description
An IOP combines interaction with oracle access: **IOP = IP + PCP**. The model was introduced by Ben-Sasson–Chiesa–Spooner and, independently, as "interactive PCPs" by Reingold–Rothblum–Rothblum (2016). Over k rounds, the verifier sends public random messages. In each round the prover replies with an *oracle*, a long string, of which the verifier reads only a few positions.

- An [[Interactive-Proof-Model|IP]] is an IOP in which the verifier reads every oracle completely.
- A [[PCP]] is a one-message IOP with no verifier messages.

**Parameters:** IOP[ε_c, ε_s, k, Σ, ℓ, q, r] (rounds k, alphabet Σ, total oracle length ℓ, queries q, randomness r), plus prover and verifier time.

**Why interaction helps:** the best known PCPs have quasi-linear length with large constants. IOPs achieve **linear proof length** and a fast prover: for example, circuits/R1CS and machine computations (NTIME(T)) have IOPs of length O(T), with O(log T) rounds and queries. This is the information-theoretic core of [[zk-STARKs]], Aurora, [[Ligero]] and Fractal.

## Example: linear-length IOP for R1CS (Aurora-style)
The goal is to prove that (A·z) ∘ (B·z) = C·z. Fix a multiplicative subgroup H ⊆ 𝔽 with vanishing polynomial Z_H.
1. **Encode:** the prover sends Reed–Solomon oracles for ẑ (the witness) and ẑ_A, ẑ_B, ẑ_C (the claimed products A·z, B·z, C·z) on a domain L ⊃ H.
2. **Rowcheck:** ẑ_A·ẑ_B − ẑ_C must vanish on H, i.e. be divisible by Z_H. The prover sends the quotient, and the verifier checks the identity at random points of L.
3. **Lincheck:** to check that ẑ_A really encodes A·z, the verifier sends a random linear combination of the rows. This reduces the check to a sum of a polynomial over H, which is verified by **univariate sumcheck**.
4. **Low-degree test:** all oracles are proven close to RS codewords of the right degree with one batched [[FRI]] test, using a random linear combination of the oracles.

**Univariate sumcheck.** For deg f < |H|, Σ_{h ∈ H} f(h) = |H|·f(0), the constant term. For larger degree, write f = Z_H·g + X·p + σ/|H| with deg p < |H| − 1. The claim Σ_{h∈H} f(h) = σ is then proven by sending oracles for g and p and checking this identity at random points, together with a low-degree test.

## Variants
- **IOP of proximity (IOPP):** the verifier has oracle access to the input as well and checks closeness to a code or language. [[FRI]] is an IOPP for Reed–Solomon codes and [[Circle-STARKs|Circle FRI]] one for circle codes.
- **Polynomial IOP (PIOP):** oracles are polynomials and queries are evaluations. Examples are [[PLONK]], Marlin, [[Spartan]] and [[HyperPlonk]]. A PIOP is compiled with a polynomial commitment scheme: KZG (pairings), IPA/Hyrax (discrete log) or FRI/Ligero (hashes).
- **Holographic IOP:** the verifier gets oracle access to a preprocessed encoding of the circuit, which gives sublinear verification (see [[Holography-Preprocessing]]).
- **Zero knowledge:** IOPs admit ZK much more cheaply than IPs. Masking polynomials and bounded-query ZK suffice, because the verifier sees only a few oracle positions.

## Compilation
The BCS transform (Ben-Sasson–Chiesa–Spooner) turns an IOP into a non-interactive succinct argument in the random oracle model. Each oracle is Merkle-committed, and each verifier message is derived by hashing the transcript so far (see [[Kilian-Merkle]], [[Fiat-Shamir]]). Soundness requires the IOP to be *round-by-round* / *state-restoration* sound, not just sound. Since only hashing is used, the resulting arguments are transparent and plausibly post-quantum.

## Built upon by
[[FRI]], [[zk-STARKs]], [[Circle-STARKs]], [[Ligero]], [[PLONK]], [[Spartan]], [[Holography-Preprocessing]], [[Kilian-Merkle]]

## Resources
- Paper: [[BCRSVW19-Aurora]]
- Paper: [[BBHR18-FRI]]
- Paper: [[BBHR18-STARK]]
- Paper: [[AHIV17-Ligero]]
- Code: [[scipr-lab-libiop]]
- Book: [[Thaler-Proofs-Arguments-ZK]]
- Course: [[Chiesa-Foundations-Probabilistic-Proofs]]
