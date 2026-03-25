---
type: proof_system
status: research
year: 1986
abbreviation: FS
authors:
  - Amos Fiat
  - Adi Shamir
tags:
  - zkp
  - interactive-proof
  - transformation
  - non-interactive
---

# Fiat-Shamir Transformation

Paper:: How to prove yourself
DOI:: 10.1007/3-540-47721-7_12

## Description
Converts interactive identification and proof protocols into non-interactive ones by replacing the verifier's random challenge with a cryptographic hash of the prover's commitment. A fundamental technique used throughout modern ZKP systems. Relies on the Random Oracle Model (ROM).

## Technical Characteristics

**Complexity:**
- Prover: Same as interactive protocol + one hash evaluation
- Verifier: Same as interactive protocol + one hash evaluation
- Proof Size: Single-round (non-interactive)
- Setup: transparent

**Security:**
- Assumption: computational (Random Oracle Model)
- Post-quantum: depends on underlying protocol and hash function
- Basis: ROM, hardness of underlying interactive protocol

## Dependencies
Based on: [[GMR85-Knowledge-Complexity]], [[Sigma-Protocols-Damgard]]
Circuit representation:

## Applications
Used by: [[PLONK]], [[Groth16]], [[Bulletproofs]], nearly all non-interactive ZKP systems

## Resources
- Paper: https://link.springer.com/content/pdf/10.1007/3-540-47721-7_12.pdf
- Code:
- Explainer:
