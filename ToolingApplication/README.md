# Tooling & Applications

Concrete tools, libraries, and frameworks for building ZKP applications. Grouped by category.

Also includes concept notes on [zkVMs](./zkVM.md), [Circuits](./Circuits.md), and [Sumcheck-based proofs](./SumcheckProofs.md).

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
| [Docknetwork](./Docknetwork.md) | maintained | Rust crypto library; includes BBS+ signatures and ZK credential primitives |
| [Powdr](./Powdr.md) | active | Modular ZKP stack; supports multiple backends (Halo2, eSTARK, Plonky3) |

## zkVMs

Zero-knowledge virtual machines that prove the execution of arbitrary programs.

| Note | Status | Description |
|------|--------|-------------|
| [RISC-Zero](./RISC-Zero.md) | active | zkVM for RISC-V programs; uses FRI/STARK-based proving |
| [SP1](./SP1.md) | active | Succinct Labs' RISC-V zkVM; targets fast prover with Plonky3 backend |
| [OpenVM](./OpenVM.md) | active | Modular zkVM framework with extensible instruction sets |
| [Pico](./Pico.md) | active | Lightweight zkVM focused on performance and composability |
| [Valida](./Valida.md) | deprecated | Early custom-ISA zkVM from Lita Foundation |
