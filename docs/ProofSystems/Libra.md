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
tags:
  - zkp
  - snark
  - transparent
  - gkr
---

[Home](../README.md) > [Proof Systems](README.md) > Libra

# Libra

Paper:: Succinct Zero-Knowledge Proofs with Optimal Prover Computation
DOI:: 10.1007/978-3-030-26954-8_24

## Description
Achieves optimal (linear-time) prover computation for zkSNARKs using the GKR protocol as a foundation. Combines GKR-based sumcheck with polynomial commitments to obtain a succinct, zero-knowledge proof with the fastest known prover.

## Technical Characteristics

**Complexity:**
- Prover: O(n) — optimal linear time
- Verifier: O(n) (polylogarithmic for structured circuits)
- Proof Size: O(log n)
- Setup: transparent

**Security:**
- Assumption: computational
- Post-quantum: depends on commitment scheme
- Basis: GKR protocol, sumcheck

## Dependencies
Based on: GKR protocol
Circuit representation:

## Applications
Used by:

## Resources
- Paper: [[BCRSVW19-Aurora]]
- Code:
- Explainer:
