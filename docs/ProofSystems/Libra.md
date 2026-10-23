---
type: proof_system
status: research
year: 2019
abbreviation: XZZPS19
authors:
  - Tiancheng Xie
  - Jiaheng Zhang
  - Yupeng Zhang
  - Charalampos Papamanthou
  - Dawn Song
paper: Succinct Zero-Knowledge Proofs with Optimal Prover Computation
doi: 10.1007/978-3-030-26954-8_24
tags:
  - zkp
  - snark
  - transparent
---

[Home](../README.md) > [Proof Systems](README.md) > Libra

# Libra

## Description
Achieves optimal (linear-time) prover computation for zkSNARKs using the GKR protocol as a foundation. Combines GKR-based sumcheck with polynomial commitments to obtain a succinct, zero-knowledge proof with the fastest known prover.

## Technical Characteristics

**Complexity:**
- Prover: O(n) — optimal linear time
- Verifier: O(d·log n) for log-space uniform layered circuits of depth d
- Proof Size: O(d·log n)
- Setup: one-time universal trusted setup for the zkVPD polynomial commitment (depends only on the input size, not on the circuit)

**Security:**
- Assumption: computational
- Post-quantum: no (pairing-based zkVPD); depends on commitment scheme in variants
- Basis: [[GKR]] protocol, sumcheck

## Dependencies
Based on: [[GKR]], [[SumcheckProofs]]
Circuit representation: layered arithmetic circuits

## Zero-Knowledge Sumcheck
Plain GKR leaks information: every sumcheck message is a partial sum of a polynomial that depends on the witness. Libra makes GKR zero-knowledge with two masking steps.

- **Masked sumcheck.** To prove H = Σ_{x∈{0,1}^ℓ} f(x), the prover first commits to a random *masking polynomial* g(x) = a₀ + g₁(x₁) + … + g_ℓ(x_ℓ) and sends G = Σ_x g(x). The verifier picks a random ρ. The parties then run the ordinary sumcheck on H + ρ·G = Σ_x (f + ρ·g)(x). The messages are now masked by g, and at the end the prover opens the commitment to g at the random point r, so the verifier can strip g off. Because g is a sum of univariate polynomials, it is small: O(ℓ·deg) coefficients.
- **Masked layer values.** The final sumcheck claims are evaluations Ṽ_i(r) of layer MLEs, and these would also leak. Libra replaces Ṽ_i by a low-degree extension that agrees on the Boolean hypercube but carries extra randomness: Ṽ_i(z) + Z(z)·R_i(z), where Z vanishes on {0,1}^{s_i} and R_i is a small random polynomial. Only the input layer is committed, through the zkVPD.

## White-box vs. black-box use of GKR
- **White-box (Libra):** the GKR/sumcheck protocol itself is modified. The masking polynomials are inserted into the protocol, and only the input layer is committed with a ZK polynomial commitment. The prover keeps GKR's linear time, but every protocol change needs its own security proof.
- **Black-box ([[Longfellow]]):** the sumcheck/GKR prover runs essentially unmodified, with its messages hidden (padded) inside a commitment. A separate proof system ([[Ligero]]) then proves that the verifier's checks on the committed transcript hold, and those checks are linear constraints. ZK and the commitment come from Ligero, so the GKR layer does not need its own ZK analysis.

## Applications
Used by: research prototypes; successor work Virgo (transparent, FRI-based commitment instead of zkVPD) and Virgo++

## Resources
- Paper: [[XZZPS19-Libra]]
- Paper: [[GKR08-Muggles]]
- Code:
- Explainer:
