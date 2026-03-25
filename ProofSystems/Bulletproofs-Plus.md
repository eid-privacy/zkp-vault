---
type: proof_system
status: research
year: 2020
authors:
  - Heewon Chung
  - Kyoohyung Han
  - Chanyang Ju
  - Myungsun Kim
  - Jae Hong Seo
tags:
  - zkp
  - transparent
  - range-proof
  - logarithmic
---

# Bulletproofs+

Paper:: Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger
DOI:: 10.1109/access.2022.3167806

## Description
An improvement over [[Bulletproofs]] with shorter proof sizes and better efficiency for privacy-enhanced distributed ledger applications. Achieves tighter bounds on proof size for range proofs.

## Technical Characteristics

**Complexity:**
- Prover: O(n log n)
- Verifier: O(n)
- Proof Size: O(log n) — shorter than Bulletproofs
- Setup: transparent

**Security:**
- Assumption: computational (discrete log)
- Post-quantum: no
- Basis: Weighted inner product argument

## Dependencies
Based on: [[Bulletproofs]]
Circuit representation: [[R1CS]]

## Applications
Used by:

## Resources
- Paper: https://eprint.iacr.org/2020/735
- Code:
- Explainer:
