[Home](../README.md) > zkVMs

# zkVMs

Zero-knowledge virtual machines prove the execution of arbitrary programs compiled to a fixed instruction set, instead of hand-written circuits. See the concept note [zkVM](./zkVM.md) for how they compare to circuit DSLs. Note that many zkVMs target verifiable computation and succinctness, and are not zero-knowledge by default.

## Contents

| Note | Status | Description |
|------|--------|-------------|
| [zkVM](./zkVM.md) | concept | What a zkVM is, arithmetization, comparison with circuit DSLs |
| [RISC-Zero](./RISC-Zero.md) | active | zkVM for RISC-V programs; uses FRI/STARK-based proving |
| [SP1](./SP1.md) | active | Succinct Labs' RISC-V zkVM; targets fast prover with Plonky3 backend |
| [OpenVM](./OpenVM.md) | active | Modular zkVM framework with extensible instruction sets |
| [Pico](./Pico.md) | active | Lightweight zkVM focused on performance and composability |
| [Valida](./Valida.md) | deprecated | Early custom-ISA zkVM from Lita Foundation |
| [Powdr](./Powdr.md) | active | Modular ZKP stack; supports multiple backends (Halo2, eSTARK, Plonky3) |
