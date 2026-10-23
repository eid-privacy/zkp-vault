---
type: theoretical_model
year: 1992
authors:
  - Sanjeev Arora
  - Carsten Lund
  - Rajeev Motwani
  - Madhu Sudan
  - Mario Szegedy
  - Shmuel Safra
paper: "Proof Verification and the Hardness of Approximation Problems; Probabilistic Checking of Proofs: A New Characterization of NP"
doi: 10.1145/278298.278306
tags:
  - zkp
  - theory
  - pcp
  - complexity-theory
---

[Home](../README.md) > [Theoretical Models](README.md) > PCP

# Probabilistically Checkable Proofs (PCP)

## Description
In a PCP the prover writes down a fixed proof string π once. The probabilistic verifier reads the input x, tosses r random coins and then reads only **q symbols** of π before accepting or rejecting. Unlike an IP there is no interaction: the proof is static, but it is accessed only through oracle queries.

**Parameters.** A class PCP[ε_c, ε_s, Σ, ℓ, q, r] is given by:

| Parameter | Meaning |
|---|---|
| ε_c | completeness error (0 = perfect completeness) |
| ε_s | soundness error |
| Σ | proof alphabet (often {0,1}) |
| ℓ | proof length |
| q | query complexity |
| r | randomness complexity |
| pt, vt | prover / verifier running time |

The shorthand PCP[r, q] fixes ε_c = 0, ε_s = 1/2 and Σ = {0,1}. A trivial bound is ℓ ≤ q·2^r, since the verifier can only ever read that many positions.

**Landmark results.**
- **NP ⊆ PCP[poly(n), O(1)]**: an exponential-length proof based on the Hadamard code. It uses linearity testing and local correction (see [[Linearity-and-Low-Degree-Testing]]) to check quadratic equations / R1CS.
- **NEXP = PCP[poly(n), poly(n)]** (Babai–Fortnow–Lund): this follows from MIP = NEXP. Multi-prover proofs and PCPs are closely related, because a PCP oracle is a prover that cannot adapt to earlier queries ([[BGKW88-MIP]]).
- **PCP theorem: NP = PCP[O(log n), O(1)]** (Arora–Safra; Arora–Lund–Motwani–Sudan–Szegedy 1992). Every NP statement has a polynomial-length proof that can be checked by reading a constant number of bits.
- **Short PCPs:** NTIME(T) has PCPs of length T·polylog(T), with polylog(T) queries and verifier time poly(n, log T) (Ben-Sasson–Sudan, Dinur). This "succinct verification" is what makes PCPs useful for delegating computation.

## Proof techniques
- **Algebraic route:** arithmetize the computation, encode the witness as a low-degree (Reed–Muller) polynomial, use low-degree tests and the sumcheck protocol, and query a few points.
- **Proof composition:** an *outer* PCP with small randomness but many queries is composed with an *inner* PCP. The inner PCP checks the outer verifier's decision predicate on the q symbols it would read, without reading them all. Repeating this reduces queries to O(1).
- **Robust PCPs:** soundness is strengthened so that, on false statements, the symbols the verifier reads are on average *far* (in Hamming distance) from any accepting view, not just rejected. Robustness is what lets composition work.
- **PCPs of proximity (PCPP) / assignment testers:** the verifier also gets *oracle* access to the input and reads only a few bits of it. It accepts inputs in the language and rejects inputs that are δ-far from the language. PCPPs are the natural inner verifiers in composition. IOPs of proximity such as [[FRI]] play the same role in practice.
- **Combinatorial route (Dinur 2007):** gap amplification on constraint graphs gives an alternative proof of the PCP theorem.

## Significance
- **Hardness of approximation:** the PCP theorem is equivalent to NP-hardness of gap-constraint satisfaction. Examples: MAX-3SAT has no PTAS unless P = NP, and Håstad's 3-query PCP makes (7/8 + ε)-approximation NP-hard (see [[Limits-of-Probabilistic-Proofs]]).
- **Succinct arguments:** Kilian's protocol and Micali's CS proofs ([[Kilian-Merkle]]) compile any PCP into a succinct argument by Merkle-committing to π.
- **Practicality:** concretely efficient PCPs are hard to build, because proofs are long and the constants are large. Practical systems instead use [[IOP|interactive oracle proofs]] (IOP = IP + PCP) or linear PCPs ([[Groth16]]-style SNARKs).

## Built upon by
[[Linearity-and-Low-Degree-Testing]], [[IOP]], [[Kilian-Merkle]], [[Holography-Preprocessing]], [[Limits-of-Probabilistic-Proofs]], [[Complexity-Classes-Map]]

## Resources
- Paper: [[BGKW88-MIP]]
- Paper: [[LFKN92-Sumcheck]]
- Book: [[Thaler-Proofs-Arguments-ZK]] (PCPs, linear PCPs and their compilation to arguments)
- Course: [[Chiesa-Foundations-Probabilistic-Proofs]]
- Course: [[MIT-6-5630-Advanced-Topics-Cryptography]]
