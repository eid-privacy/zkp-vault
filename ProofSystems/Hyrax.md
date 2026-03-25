---
type: proof_system
status: research
year: 2017
abbreviation: WTSTW17
authors:
  - Riad S. Wahby
  - Ioanna Tzialla
  - abhi shelat
  - Justin Thaler
  - Michael Walfish
tags:
  - zkp
  - snark
  - transparent
---

# Hyrax

Paper:: Doubly-efficient zkSNARKs without trusted setup
DOI:: 10.1109/sp.2018.00060

## Description
Doubly-efficient zkSNARKs with no trusted setup and lower prover and verifier complexity than prior work. Both prover and verifier run in time sublinear in the circuit size for structured computations. Achieves lower complexity and communication via multilinear extensions.

## Technical Characteristics

**Complexity:**
- Prover: O(n) for structured circuits
- Verifier: O(√n)
- Proof Size: O(√n)
- Setup: transparent

**Security:**
- Assumption: computational (discrete log / Pedersen)
- Post-quantum: no
- Basis: Multilinear extensions, inner product argument

## Dependencies
Based on: [[Bulletproofs]], [[Pedersen-Commitments]]
Circuit representation: [[R1CS]]

## Applications
Used by: [[Spartan]]

## Resources
- Paper: https://eprint.iacr.org/2017/1132.pdf
- Code:
- Explainer:
