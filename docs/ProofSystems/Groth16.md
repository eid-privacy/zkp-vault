---
type: proof_system
status: production
year: 2016
authors:
  - Jens Groth
paper: On the Size of Pairing-based Non-interactive Arguments
doi: 10.1007/978-3-662-49896-5_11
tags:
  - zkp
  - snark
  - trusted-setup
  - pairing
---

[Home](../README.md) > [Proof Systems](README.md) > Groth16

# Groth16

## Description
Set a new benchmark for proof size and verification speed that remains the gold standard for many applications. Produces the smallest proofs (3 group elements, ~128–192 bytes) with very fast verification. Requires a circuit-specific trusted setup. Used in Zcash and many other production systems.

## Technical Characteristics

**Complexity:**
- Prover: O(n log n)
- Verifier: O(1) — 3 pairing operations
- Proof Size: ~192 bytes (3 elliptic curve points)
- Setup: trusted (circuit-specific CRS)

**Security:**
- Assumption: computational (q-PKE, AGM)
- Post-quantum: no (pairing-based)
- Basis: Bilinear pairings over BN254 or BLS12-381

## Dependencies
Based on: [[QSP-GGPR13]], [[Pinocchio]]
Circuit representation: [[R1CS]]

## Applications
Used by: [[gnark]], [[Circom2]], [[Docknetwork]], Zcash

## Resources
- Paper: [[Gro16-Groth16]]
- Code:
- Explainer: [[groth16]]