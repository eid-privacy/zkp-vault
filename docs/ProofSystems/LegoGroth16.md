---
type: proof_system
status: research
year: 2019
authors:
  - Matteo Campanelli
  - Dario Fiore
  - Anaïs Querol
  - Hadrianus Waldner
paper: "LegoSNARK: Modular Design and Composition of Efficient Zero-Knowledge Proofs"
url: "https://eprint.iacr.org/2019/142"
tags:
  - zkp
  - snark
  - commit-and-prove
  - composition
  - pairing
  - trusted-setup
---

[Home](../README.md) > [Proof Systems](README.md) > LegoGroth16

# LegoGroth16

## Description
A commit-and-prove SNARK (CP-SNARK) built on top of [[Groth16]]. A CP-SNARK proves a statement about a value that has already been committed using a separate commitment scheme (Pedersen or similar), allowing proof systems to be composed modularly: one system commits to a witness, another proves a property of that committed value without re-exposing it.

LegoGroth16 enables efficient cross-system composition: e.g., a sigma protocol proves a property of a committed attribute, and LegoGroth16 proves a circuit statement about the same committed value — all without re-proving the witness.

## Technical Characteristics

**Complexity:**
- Prover: O(n log n), similar to Groth16 with overhead for the commitment link
- Verifier: O(1) — constant number of pairing operations
- Proof Size: compact, close to Groth16 (~200–300 bytes)
- Setup: trusted (circuit-specific CRS, extended with commitment key)

**Security:**
- Assumption: computational (q-PKE, AGM), same as Groth16
- Post-quantum: no (pairing-based)

## Dependencies
Based on: [[Groth16]], [[Pedersen-Commitments]]
Circuit representation: [[R1CS]]
Composition model: commit-and-prove (CP-SNARK)

## Used by
[[Docknetwork]] (credential composition across sigma and SNARK layers)

## Resources
- Paper: [[CFQW19-LegoSNARK]]
