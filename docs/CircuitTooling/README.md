[Home](../README.md) > Circuit Tooling

# Circuit Tooling

Circuit DSLs and proving libraries for circuit-based proofs. zkVMs are in [zkVMs](../zkVM/README.md), Sigma-based libraries in [Sigma Proofs](../Sigma/README.md).

Also includes concept notes on [Circuits](./Circuits.md) and [Sumcheck-based proofs](./SumcheckProofs.md).

## Circuit DSLs

Languages for writing arithmetic circuits without touching the underlying proof system directly.

| Note | Status | Description |
|------|--------|-------------|
| [Noir](./Noir.md) | active | Rust-like DSL by Aztec; compiles to ACIR, targets UltraHonk/Barretenberg |
| [Circom2](./Circom2.md) | active | Template-based circuit language; outputs R1CS; widely used in production |
| [ZoKrates](./ZoKrates.md) | deprecated | Early high-level ZKP DSL; R1CS backend |

## Proving Libraries

Low-level backends and libraries that implement proof systems.

| Note | Status | Description |
|------|--------|-------------|
| [Barretenberg](./Barretenberg.md) | active | Aztec's C++ proving library; implements HONK and UltraHonk; Noir's default backend |
| [Halo2](./Halo2.md) | maintained | Zcash/EFF PLONKish proving system in Rust; wide ecosystem adoption |
| [gnark](./gnark.md) | active | Fast Go library supporting Groth16 and PLONK; production-grade |
| [Spartan Framework](./Spartan-Framework.md) | maintained | Microsoft Research's Rust library for Spartan-based proofs |
| [Ligero Prover](./Ligero-Prover.md) | active | Implementation of the Ligero MPC-in-the-head proof system |
