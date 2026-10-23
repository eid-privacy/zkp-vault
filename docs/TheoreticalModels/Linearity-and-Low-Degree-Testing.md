---
type: theoretical_model
year: 1990
authors:
  - Manuel Blum
  - Michael Luby
  - Ronitt Rubinfeld
paper: "Self-Testing/Correcting with Applications to Numerical Problems"
doi: 10.1016/0022-0000(93)90044-W
tags:
  - zkp
  - theory
  - proximity-testing
  - pcp
  - mathematics
---

[Home](../README.md) > [Theoretical Models](README.md) > Linearity-and-Low-Degree-Testing

# Linearity and Low-Degree Testing

## Description
A proximity test decides, by reading only a few entries of a function f, whether f belongs to a code C or is far from every codeword. Proximity tests are the local checks inside [[PCP|PCPs]] and IOPs.

**Distance.** The relative Hamming distance is Δ(f, g) = Pr_x[f(x) ≠ g(x)]. A function f is **δ-close** to C if Δ(f, g) ≤ δ for some g ∈ C, and **δ-far** otherwise. A tester must always accept codewords and must reject δ-far functions with probability Ω(δ), or with constant probability after repetition.

## Linearity testing (BLR)
- **Test:** for f : 𝔽₂ⁿ → 𝔽₂ (or any group homomorphism setting), pick random x, y and check f(x) + f(y) = f(x + y). The test makes 3 queries.
- **Guarantee:** if f passes with probability 1 − ε, then f is ε-close to a linear function. Over 𝔽₂ a Fourier-analytic proof gives Pr[reject] ≥ Δ(f, Lin).
- **Local correction (self-correction):** if f is δ-close to a linear g with δ < 1/4, then g(x) can be recovered at *any* point as f(x + r) − f(r) for a random r, which is correct with probability ≥ 1 − 2δ. The verifier can therefore query "the codeword" at the specific points it needs, even though the oracle may be corrupted there.
- **Use:** the exponential-length (Hadamard) PCP for NP. The proof contains the Hadamard encodings of w and w ⊗ w. The verifier tests linearity, tests consistency between the two encodings with a tensor test, and checks all constraints at once by taking a random linear combination. Every query is locally corrected, and the verifier makes O(1) queries in total.
- **Linear PCPs:** if the honest proof is a linear function π(q) = ⟨q, z⟩ and the verifier's queries are fixed in advance, cryptography can force the prover to answer linearly. Linear-only encodings and pairings do this, which yields the QAP/[[Groth16]]-style SNARKs.

## Low-degree testing
- **Goal:** test whether f : 𝔽ᵐ → 𝔽 is close to a polynomial of total degree ≤ d, i.e. to a Reed–Muller codeword.
- **Univariate (Rubinfeld–Sudan):** pick d + 2 points in arithmetic progression x, x + h, …, x + (d+1)h and check that they lie on a degree-d polynomial, using a linear interpolation identity.
- **Multivariate, line-vs-point:** pick a random line in 𝔽ᵐ and check that f restricted to it agrees with a univariate polynomial of degree ≤ d. Plane-vs-point tests (Raz–Safra) and line-vs-point tests (Arora–Sudan) achieve low soundness error, which is a key ingredient of the algebraic PCP theorem.
- **Reed–Solomon proximity:** testing a univariate Reed–Solomon codeword without help needs about d queries. Interaction removes this cost: [[FRI]] is an IOP of proximity that tests RS codes with O(log d) queries by recursive folding.

## Significance
These tests turn "the prover's oracle is a valid encoding" into a check that costs only a few queries. Combined with [[Schwartz-Zippel]] identity checks on the (corrected) encoding, they give PCPs, IOPs and the code-based polynomial commitments used in [[Ligero]], [[zk-STARKs]] and [[Circle-STARKs]].

## Built upon by
[[PCP]], [[IOP]], [[FRI]], [[Ligero]]

## Resources
- Paper: [[BBHR18-FRI]]
- Book: [[Thaler-Proofs-Arguments-ZK]] (linear PCPs, low-degree tests, FRI)
- Course: [[Chiesa-Foundations-Probabilistic-Proofs]]
- Wiki: [[Wikipedia-Concatenated-Error-Correction-Code]] (code concatenation, used in PCP/IOP code constructions)
