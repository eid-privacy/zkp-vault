---
type: proof_system
status: research
year: 2017
abbreviation: AHIV17
authors:
  - Scott Ames
  - Carmit Hazay
  - Yuval Ishai
  - Muthuramakrishnan Venkitasubramaniam
paper: "Ligero: Lightweight Sublinear Arguments Without a Trusted Setup"
doi: 10.1145/3133956.3134104
tags:
  - zkp
  - iop
  - transparent
  - reed-solomon
---

[Home](../README.md) > [Proof Systems](README.md) > Ligero

# Ligero

## Description
A lightweight sublinear argument system with no trusted setup, based on PCPs and Reed-Solomon error-correcting codes. Proof size is O(√n) where n is circuit size. Basis for the Ligetron commercial prover and later improved by [[Ligero-Plus-Plus]].

## Technical Characteristics

**Complexity:**
- Prover: O(n log n)
- Verifier: O(√n)
- Proof Size: O(√n) — sublinear
- Setup: transparent (no trusted setup)

**Security:**
- Assumption: computational (collision-resistant hash functions)
- Post-quantum: yes (hash-based)
- Basis: PCP, Reed-Solomon codes, MPC-in-the-head

## Dependencies
Based on: [[DI06-Scalable-MPC]]
Circuit representation: [[R1CS]]

## Applications
Used by: [[Ligero-Prover]], [[Ligero-Plus-Plus]]

## Resources
- Paper: [[AHIV17-Ligero]]
- Paper (updated): [[AHIV22-Ligero-Ext]]
- Code:
- Explainer:
