---
type: proof_system
status: production
year: 2017
authors:
  - Benedikt Bünz
  - Greg Maxwell
tags:
  - zkp
  - transparent
  - range-proof
  - logarithmic
---

# Bulletproofs

Paper:: Bulletproofs - Short Proofs for Confidential Transactions and More
DOI:: 10.1109/sp.2018.00020

## Description
Short non-interactive zero-knowledge proofs with logarithmic proof size, no trusted setup, and post-quantum plausible security. Proof size scales logarithmically with circuit size, making them efficient for large batches. Widely used for range proofs in confidential transactions (Monero).

## Technical Characteristics

**Complexity:**
- Prover: O(n log n)
- Verifier: O(n) — linear (not succinct verification)
- Proof Size: O(log n) — logarithmic
- Setup: transparent

**Security:**
- Assumption: computational (discrete log)
- Post-quantum: no (relies on DL)
- Basis: Inner Product Argument (IPA), Pedersen commitments

## Dependencies
Based on: [[Pedersen-Commitments]], [[DI06-Scalable-MPC]]
Circuit representation: [[R1CS]]

## Applications
Used by: [[Bulletproofs-Plus]], [[Docknetwork]], Monero

## Resources
- Paper: [[IACR-2017-1066]]
- Code:
- Explainer:
