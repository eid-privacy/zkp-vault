---
type: proof_system
status: research
year: 2020
authors:
  - Rishabh Bhadauria
  - Zhiyong Fang
  - Carmit Hazay
  - Muthuramakrishnan Venkitasubramaniam
  - Tiancheng Xie
  - Yupeng Zhang
paper: "Ligero++: A New Optimized Sublinear IOP"
doi: 10.1145/3372297.3417893
tags:
  - zkp
  - iop
  - transparent
  - post-quantum
---

[Home](../README.md) > [Proof Systems](README.md) > Ligero-Plus-Plus

# Ligero++

## Description
Improves [[Ligero]]'s proof size from O(√n) to O(log n) by applying the IOP techniques from Aurora and Virgo on top of Ligero's MPC-in-the-head approach. Uses FRI-based polynomial commitments.

## Technical Characteristics

**Complexity:**
- Prover: O(n log n)
- Verifier: O(log n)
- Proof Size: O(log n) — logarithmic (down from √n in Ligero)
- Setup: transparent

**Security:**
- Assumption: computational (collision-resistant hashes)
- Post-quantum: yes
- Basis: [[FRI]], IOP, [[Ligero]]

## Dependencies
Based on: [[Ligero]], [[FRI]]
Circuit representation:

## Applications
Used by:

## Resources
- Paper: [[BFH+20-Ligero-Plus]]
- Code:
- Explainer:
