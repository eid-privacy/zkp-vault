---
type: proof_system
status: research
year: 2024
abbreviation: PPZ24
authors:
  - Christian Paquin
  - Guru-Vamsi Policharla
  - Greg Zaverucha
paper: "Crescent: Stronger Privacy for Existing Credentials"
tags:
  - zkp
  - snark
  - eid
  - applications
---

[Home](../README.md) > [Proof Systems](README.md) > Crescent

# Crescent

## Description
A modular ZK credential scheme from Microsoft that enables privacy-preserving presentations of existing SD-JWT and X.509 credentials without changes to the issuer infrastructure. Splits proof generation into a one-time offline preparation phase (computing ~593 MB of reusable values, taking ~20 s) and a fast per-presentation phase (~1 s on mobile). Uses Groth16 over the T-256 curve for the circuit proof and Sigma protocols for re-randomisation. Accepted at RWC 2025.

## Technical Characteristics

**Complexity:**
- Prover (online): ~1 s on mobile (after pre-computation)
- Verifier: fast (ms-range)
- Proof Size: compact (Groth16 output)
- Setup: trusted (Groth16 per-circuit setup + Spartan universal)

**Security:**
- Assumption: pairing-based (Groth16) + DL (Sigma / Pedersen)
- Post-quantum: no
- Basis: [[Groth16]], [[Spartan]], [[Sigma-Protocols-Damgard|Sigma protocols]], [[Pedersen-Commitments]]

## Dependencies
Based on: [[Groth16]], [[Spartan]]
Circuit representation: [[R1CS]]
Curve: T-256 (secp256r1-compatible)

## Applications
Used by: [[microsoft-crescent-credentials]]

## Resources
- Paper: [[PPZ24-Crescent]]
- Code: [[microsoft-crescent-credentials]]
