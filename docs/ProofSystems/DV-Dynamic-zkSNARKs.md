---
type: proof_system
status: research
year: 2026
authors:
  - Weijie Wang
  - Charalampos Papamanthou
  - Shravan Srinivasan
  - Dimitrios Papadopoulos
paper: "Designated-Verifier Dynamic zk-SNARKs with Applications to Dynamic Proofs of Index"
doi:
tags:
  - zkp
  - snark
  - non-interactive
  - applications
---

[Home](../README.md) > [Proof Systems](README.md) > DV-Dynamic-zkSNARKs

# Designated-Verifier Dynamic zk-SNARKs

## Description
Introduces dynamic zk-SNARKs: a zk-SNARK augmented with an efficient proof update algorithm so that when the witness changes, the proof can be updated without reproving from scratch. The designated-verifier variant restricts convincing proofs to a single verifier holding secret verification state, enabling sublinear-time proof updates. Applied to dynamic proofs of index — certifying consistency between a set digest and its sorted-index digest — with applications to verifiable dynamic database outsourcing.

## Technical Characteristics

**Complexity:**
- Prover: depends on underlying SNARK
- Verifier: sublinear update (designated verifier holds secret state)
- Proof Size: comparable to underlying SNARK
- Setup: trusted (designated-verifier key)

**Security:**
- Assumption: computational
- Post-quantum: no (follows from underlying SNARK assumptions)
- Basis: standard zk-SNARK + updatable commitment schemes

## Dependencies
Based on: [[Groth16]], [[Sonic]]
Circuit representation: [[R1CS]]

## Applications
Used by: verifiable dynamic database outsourcing, dynamic proofs of index

## Resources
- Paper: [[WPSP26-DV-Dynamic-zkSNARKs]]
- Code:
- Explainer:
