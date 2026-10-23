---
type: proof_system
status: production
year: 2024
abbreviation: HLP24
authors:
  - Ulrich Haböck
  - David Levit
  - Shahar Papini
predecessors: []
paper: Circle STARKs
doi:
tags:
  - zkp
  - stark
  - transparent
  - post-quantum
  - reed-solomon
---

[Home](../README.md) > [Proof Systems](README.md) > Circle-STARKs

# Circle STARKs

## Description
A variant of [[zk-STARKs]] that runs efficiently over the Mersenne prime **p = 2³¹ − 1 (M31)**. M31 arithmetic is very fast on CPUs and GPUs: 32-bit limbs, and reduction modulo 2³¹ − 1 is a shift plus an add. Classical STARKs, however, need a multiplicative subgroup of order 2^k for FFTs and [[FRI]] folding. For M31, p − 1 = 2·(2³⁰ − 1) has 2-adicity 1, so such subgroups do not exist.

Circle STARKs replace the multiplicative group with the **circle curve** x² + y² = 1 over 𝔽_p. Its points form a cyclic group of order **p + 1 = 2³¹**, under the group law (x₀, y₀)·(x₁, y₁) = (x₀x₁ − y₀y₁, x₀y₁ + x₁y₀). Every power-of-two size up to 2³¹ is therefore available for evaluation domains.

**Pipeline (classic → circle):**

```
AIR → univariate polynomialization → Merkle commitment → FRI
AIR → circle polynomialization     → Merkle commitment → Circle FRI
```

1. **Circle polynomials.** Trace columns are interpolated over a "standard position" coset of a circle subgroup. The resulting polynomials are bivariate in (x, y), taken modulo x² + y² − 1 and of bounded degree. They play the role of univariate low-degree polynomials, and their evaluations form *circle codes*, which are Reed–Solomon-like codes on the circle.
2. **Circle FFT.** The first step splits f = f₀(x) + y·f₁(x) along the y-coordinate. Each later step applies the doubling map x ↦ 2x² − 1, which halves the domain. This gives an O(n log n) FFT without any multiplicative 2-adic structure.
3. **Constraints and quotients.** As in AIR-based STARKs, transition constraints are combined and divided by the vanishing polynomial of the trace domain. A DEEP-style out-of-domain sampling step is adapted to the circle setting.
4. **Circle FRI.** Folding first uses the y-split and then repeated x ↦ 2x² − 1 projections. It proves proximity to the circle code with O(log n) rounds, followed by [[Fiat-Shamir]].

Verifier challenges are drawn from a degree-4 extension of M31 (QM31, about 124 bits), since the 31-bit base field alone is too small for soundness.

## Technical Characteristics

**Complexity:**
- Prover: O(n log n), with a fast constant factor thanks to M31 arithmetic
- Verifier: O(log² n)
- Proof Size: O(log² n) (hash paths dominate)
- Setup: transparent

**Security:**
- Assumption: collision-resistant hashing (random oracle model)
- Post-quantum: yes (hash-based)
- Basis: Reed–Solomon-style proximity testing over the circle group

## Dependencies
Based on: [[FRI]], [[zk-STARKs]], [[Kilian-Merkle]] (Merkle commitments + BCS compilation)
Circuit representation: [[AIR]]

## Applications
Used by: StarkWare's Stwo prover; Plonky3 (M31 / circle-STARK back-end)

## Resources
- Paper: [[HLP24-Circle-STARKs]]
- Paper: [[BBHR18-FRI]]
- Paper: [[BBHR18-STARK]]
- Code: [[Plonky3-Plonky3]]
