---
type: proof_system
status: research
year: 2024
abbreviation: FS24
authors:
  - Matteo Frigo
  - abhi shelat
paper: Anonymous Credentials from ECDSA
tags:
  - zkp
  - snark
  - transparent
  - post-quantum
  - eid
  - applications
---

[Home](../README.md) > [Proof Systems](README.md) > Longfellow

# Longfellow

## Description
A transparent ZKP system (no trusted setup) tailored to anonymous credentials for ECDSA-signed documents including JWTs and ISO mDOC. Combines the sumcheck protocol with the Ligero argument system, efficient Reed-Solomon encoding, and specialised circuits for ECDSA verification. Achieves ECDSA proofs in 60 ms and full ISO MDOC proofs in 1.2 s on mobile devices. Post-quantum safe. Developed at Google; open-sourced at github.com/google/longfellow-zk.

## Technical Characteristics

**Complexity:**
- Prover: ~60 ms for bare ECDSA; ~1.17 s full ISO MDOC on mobile
- Verifier: ~0.68 s on Pixel 6 Pro
- Proof Size: ~300 KB
- Setup: transparent (no trusted setup)

**Security:**
- Assumption: information-theoretic (Ligero/Reed-Solomon) + collision-resistant hashing
- Post-quantum: yes
- Basis: [[SumcheckProofs|Sumcheck]], [[Ligero]], Reed-Solomon

## Dependencies
Based on: [[Ligero]], [[SumcheckProofs]]
Circuit representation: [[R1CS]]

## Applications
Relevant to: e-ID anonymous credentials over standard ECDSA infrastructure

## Resources
- Paper: [[FS24-Longfellow]]
