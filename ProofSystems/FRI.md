---
type: proof_system
status: research
year: 2018
authors:
  - Eli Ben-Sasson
  - Iddo Bentov
  - Yinon Horesh
  - Michael Riabzev
tags:
  - zkp
  - iop
  - transparent
  - post-quantum
  - reed-solomon
  - mathematics
---

[Home](../README.md) > [Proof Systems](README.md) > FRI

# FRI

Paper:: Fast Reed-Solomon Interactive Oracle Proofs of Proximity
DOI:: 10.4230/LIPIcs.ICALP.2018.14

## Description
Fast Reed-Solomon IOP of Proximity — the core commitment scheme underlying zk-STARKs. Uses Reed-Solomon codes and recursive polynomial folding to achieve logarithmic proof sizes and verification times without any trusted setup or elliptic curves. The cryptographic backbone of [[zk-STARKs]].

## Technical Characteristics

**Complexity:**
- Prover: O(n log² n)
- Verifier: O(log² n)
- Proof Size: O(log² n)
- Setup: transparent

**Security:**
- Assumption: computational (collision-resistant hashes)
- Post-quantum: yes (hash-based)
- Basis: Reed-Solomon proximity testing, Merkle commitments

## Dependencies
Based on: Reed-Solomon codes, hash functions
Circuit representation: [[AIR]]

## Applications
Used by: [[zk-STARKs]], [[RISC-Zero]], [[SP1]], [[OpenVM]]

## Resources
- Paper: [[LIPIcs-ICALP-2018-14]]
- Code:
- Explainer:
