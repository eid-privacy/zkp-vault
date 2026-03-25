---
type: proof_system
status: research
year: 2023
authors:
  - Binyi Chen
  - Benedikt Bünz
  - Dan Boneh
  - Zhenfei Zhang
tags:
  - zkp
  - snark
  - plonk-family
  - linear-time-prover
---

# HyperPlonk

Paper:: HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates
DOI:: 10.1007/978-3-031-30617-4_17

## Description
Extends PLONK to support high-degree custom gates while achieving a linear-time prover using multilinear extensions and sumcheck instead of FFTs. Trades KZG commitments for multilinear commitments to gain linear prover time.

## Technical Characteristics

**Complexity:**
- Prover: O(n) — linear time
- Verifier: O(1)
- Proof Size: Slightly larger than PLONK
- Setup: trusted (universal SRS)

**Security:**
- Assumption: computational
- Post-quantum: no (original uses KZG)
- Basis: Multilinear extensions, sumcheck, [[PLONK]]

## Dependencies
Based on: [[PLONK]], sumcheck protocol
Circuit representation: [[PLONKish]]

## Applications
Used by:

## Resources
- Paper: https://link.springer.com/chapter/10.1007/978-3-031-30617-4_17
- Code:
- Explainer:
