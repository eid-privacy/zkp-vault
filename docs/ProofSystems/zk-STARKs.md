---
type: proof_system
status: production
year: 2018
abbreviation: BBHR18
authors:
  - Eli Ben-Sasson
  - Iddo Bentov
  - Yinon Horesh
  - Michael Riabzev
tags:
  - zkp
  - stark
  - transparent
  - post-quantum
  - scalable
---

[Home](../README.md) > [Proof Systems](README.md) > zk-STARKs

# zk-STARKs

Paper:: Scalable, transparent, and post-quantum secure computational integrity
DOI:: 44557939

## Description
Fully transparent proof system relying only on public randomness and collision-resistant hash functions. Offers scalability for large computations and plausible post-quantum security. No trusted setup. Larger proof sizes than SNARKs but faster prover. Used in StarkWare and RISC Zero.

## Technical Characteristics

**Complexity:**
- Prover: O(n log n)
- Verifier: O(log² n)
- Proof Size: O(log² n) — typically 40–200 KB
- Setup: transparent

**Security:**
- Assumption: computational (collision-resistant hashes)
- Post-quantum: yes
- Basis: [[FRI]], [[AIR]]

## Dependencies
Based on: [[FRI]]
Circuit representation: [[AIR]]

## Applications
Used by: [[RISC-Zero]], [[SP1]], [[OpenVM]], [[Pico]], StarkWare

## Resources
- Paper: [[GKMM18-Updatable-SRS]]
- Code:
- Explainer:
