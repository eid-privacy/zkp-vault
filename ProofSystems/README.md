# Proof Systems

Cryptographic proof systems from foundational theory through modern production SNARKs. Notes cover construction, security assumptions, setup requirements, and proof/verifier complexity.

## Foundational Theory

| Note | Description |
|------|-------------|
| [GMR85 — Knowledge Complexity](./GMR85-Knowledge-Complexity.md) | Goldwasser-Micali-Rackoff (1985): the paper that defined zero-knowledge |
| [NIZK (Blum-Feldman-Micali)](./NIZK-Blum.md) | First non-interactive ZK construction in the common reference string model |
| [Fiat-Shamir Transform](./Fiat-Shamir.md) | Heuristic to compile interactive proofs into non-interactive ones via a hash function |
| [DI06 — Scalable MPC](./DI06-Scalable-MPC.md) | Damgard-Ishai MPC-in-the-head approach (basis of Ligero and descendants) |

## Early SNARKs

| Note | Description |
|------|-------------|
| [QSP / GGPR13](./QSP-GGPR13.md) | Quadratic Span Programs — theoretical basis for practical SNARKs |
| [Pinocchio](./Pinocchio.md) | First practically efficient zk-SNARK; introduced the R1CS/QAP pipeline (2013) |
| [Groth16](./Groth16.md) | Highly efficient pairing-based SNARK with a circuit-specific trusted setup; still widely deployed |

## PLONK Family

| Note | Description |
|------|-------------|
| [PLONK](./PLONK.md) | Universal and updatable trusted-setup SNARK using PLONKish arithmetisation (2019) |
| [TurboPLONK](./TurboPLONK.md) | PLONK extension with custom gates |
| [plookup](./plookup.md) | Lookup argument for efficiently proving table membership inside PLONK |
| [Sonic](./Sonic.md) | Universal SNARK with a universal SRS predating PLONK |
| [HyperPlonk](./HyperPlonk.md) | PLONK variant over multilinear polynomials for improved prover time |
| [HONK](./HONK.md) | Aztec's PLONK successor using Gemini/ShPLONK; production-ready |
| [UltraHonk](./UltraHonk.md) | Ultra-optimised HONK variant used in Noir's default backend |

## Transparent / STARK-based

| Note | Description |
|------|-------------|
| [FRI](./FRI.md) | Fast Reed-Solomon IOP — the polynomial commitment scheme powering zk-STARKs |
| [zk-STARKs](./zk-STARKs.md) | Transparent, post-quantum proofs based on FRI and AIR arithmetisation |

## IOP / Multilinear / Vector Commitments

| Note | Description |
|------|-------------|
| [Bulletproofs](./Bulletproofs.md) | Transparent range proofs and arithmetic circuits; no trusted setup, logarithmic proof size |
| [Bulletproofs+](./Bulletproofs-Plus.md) | Improved Bulletproofs with shorter proofs and faster verification |
| [Ligero](./Ligero.md) | MPC-in-the-head proof system based on linear codes |
| [Ligero++](./Ligero-Plus-Plus.md) | Improved Ligero with better concrete efficiency |
| [Spartan](./Spartan.md) | Transparent SNARK using sum-check and multilinear polynomials; no FFTs |
| [Hyrax](./Hyrax.md) | Doubly-efficient zkSNARK using Pedersen commitments and the sum-check protocol |
| [Libra](./Libra.md) | Linear-time prover SNARK using the sum-check protocol over layered circuits |
