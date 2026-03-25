---
type: proof_system
status: production
year: 2024
tags:
  - zkp
  - snark
  - plonk-family
  - ultraplonk
---

# UltraHonk

Paper:: UltraHonk (Aztec Protocol)
DOI:: N/A

## Description
The current proving backend used by [[Barretenberg]] (and thus [[Noir]]). Faster and shorter proofs than earlier PLONK variants. Combines UltraPLONK's custom gates and lookup arguments with HONK's optimizations. Optimized for blockchain verification: slower prover, very fast verifier.

## Technical Characteristics

**Complexity:**
- Prover: O(n log n)
- Verifier: O(1) — very fast
- Proof Size: Compact (small enough for on-chain verification)
- Setup: trusted (universal CRS)

**Security:**
- Assumption: computational (AGM + KZG)
- Post-quantum: no
- Basis: [[PLONK]], [[TurboPLONK]], [[HONK]], [[plookup]]

## Dependencies
Based on: [[HONK]], [[PLONKish]]
Circuit representation: [[ACIR]] (via Barretenberg)

## Applications
Used by: [[Barretenberg]], [[Noir]]

## Resources
- Code: https://github.com/AztecProtocol/aztec-packages/blob/f9431cdade270f3046c474d7f07e96f74d9d9747/barretenberg/cpp/scripts/audit/audit_scopes/honk_proving_system_audit_scope.md
- Explainer: https://jtriley.substack.com/p/noirs-circuit-backend
