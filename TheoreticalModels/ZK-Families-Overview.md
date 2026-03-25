---
type: theoretical_model
tags:
  - zkp
  - theory
  - overview
---

# ZK Proof System Families Overview

## Description
ZKP systems can be organized by their arithmetic layer (constraint system), information-theoretic model, and cryptographic compiler. The table below maps the major families.

| ZKP Family | Arithmetic Layer | Information-Theoretic Model | Cryptographic Compiler |
| - | - | - | - |
| zk-SNARKs (Groth16, Marlin) | [[R1CS]] | PIOP (Polynomial IOP) | KZG Polynomial Commitments (EC pairings) |
| zk-STARKs (RISC Zero) | [[AIR]] | IOPP (IOP of Proximity) | [[FRI]] (Hash functions) |
| Bulletproofs | [[R1CS]] | PIOP | IPA (Inner Product Argument) |
| PLONK-based (Halo2, Aztec) | [[PLONKish]] | PIOP | IPA or KZG |
| Spartan | [[R1CS]] | Sumcheck | Hyrax (multilinear commitments) |

## Key Dimensions

**Trusted setup?**
- Yes (per-circuit): [[Groth16]], [[Pinocchio]]
- Yes (universal): [[PLONK]], [[UltraHonk]], [[gnark]]
- No (transparent): [[zk-STARKs]], [[Bulletproofs]], [[Spartan]], [[Ligero]]

**Post-quantum?**
- Yes: [[zk-STARKs]], [[FRI]], [[Ligero]], [[RISC-Zero]]
- No: All pairing-based ([[Groth16]], [[PLONK]]) and DL-based ([[Bulletproofs]])

**Proof size (small to large)**
- Smallest: [[Groth16]] (~192 bytes)
- Medium: [[PLONK]] (~500 bytes), [[UltraHonk]]
- Large: [[Bulletproofs]] (O(log n)), [[zk-STARKs]] (40–200 KB)

## Built upon by
[[GMR85-Knowledge-Complexity]], [[Fiat-Shamir]], [[NIZK-Blum]]

## Resources
- Explainer: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
