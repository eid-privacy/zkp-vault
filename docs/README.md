# ZKP Vault

A knowledge vault covering Zero-Knowledge Proof papers, frameworks, cryptographic primitives, and tooling — from foundational theory to production-ready implementations. Built as an Obsidian notebook and mkDocs site, working toward a blog post on the most important elements of the ZKP ecosystem.

The vault is organized in four ways:

- [Resource Index](#resources-index) — 63 external resources (papers, blogs, books, docs, code) by type and topic
- [The ZK Stack](#the-zk-stack) — from foundational theory down to working tools
- [Framework Decision Guide](#framework-decision-guide) — evaluation criteria and framework comparison for e-ID credential proofs
- [Encyclopedic Index](#encyclopedic-index) — every entry, organized by category

---
 
## Resources Index

| Type | Count | Browse |
|---|---|---|
| Papers | 32 | [Resources/papers](Resources/papers/README.md) |
| Blogs & Explainers | 9 | [Resources/blogs](Resources/blogs/README.md) |
| Books | 1 | [Resources/books](Resources/books/README.md) |
| Wikis & Standards | 1 | [Resources/wikis](Resources/wikis/README.md) |
| Documentation | 13 | [Resources/docs](Resources/docs/README.md) |
| Code & Repositories | 7 | [Resources/code](Resources/code/README.md) |

Full index with by-topic view: [Resources/README.md](Resources/README.md).

---

## The ZK Stack

| Layer | Contents |
|---|---|
| [Theoretical Models](TheoreticalModels/README.md) | Interactive proofs, ZK families |
| [Cryptographic Primitives](CryptographicPrimitives/README.md) | Commitments, Sigma protocols |
| [Proof Systems](ProofSystems/README.md) | Groth16 → PLONK → STARKs → … |
| [Intermediate Repr.](IntermediateRepresentations/README.md) | R1CS · AIR · PLONKish · ACIR |
| [Tooling & Applications](ToolingApplication/README.md) | Noir · Halo2 · RISC Zero · SP1 |
| [Resources](Resources/README.md) | Books, blog posts, papers |
| [Applications](Applications/README.md) | Real-world use cases |

---

## Framework Decision Guide

**Evaluation criteria**

**Framework shortlist**

| Framework | Ease | Fast | PQ | Mobile | Maintained | Audited | Sign+Hash |
|---|---|---|---|---|---|---|---|
| [Noir](ToolingApplication/Noir.md) | Easy | Yes | No | Possible | Yes | No | Yes |
| [Circom 2](ToolingApplication/Circom2.md) | Medium | Unclear | No | WASM | Mixed | No | Hash only |
| [gnark](ToolingApplication/gnark.md) | Medium | Yes | No | No | Yes | Yes (9×) | Yes |
| [RISC Zero](ToolingApplication/RISC-Zero.md) | Medium | Mixed | Yes | Verifier | Yes | Yes | Yes |
| [Docknetwork](ToolingApplication/Docknetwork.md) | Medium | Yes | Partial | Yes | Mixed | No | Yes |
| [Ligero Prover](ToolingApplication/Ligero-Prover.md) | Easy | Partial | Yes | WASM | Yes | No | Yes |
| [Halo2](ToolingApplication/Halo2.md) | Hard | Unclear | No | Unknown | Some | No | Hash only |
| [Spartan](ToolingApplication/Spartan-Framework.md) | Low-level | Yes | No | Likely | Mixed | No | Yes |

**Background reading (recommended order)**

1. [ZK Families Overview](TheoreticalModels/ZK-Families-Overview.md) — understand the landscape
2. [Proof Systems](ProofSystems/README.md) — read the system your shortlisted framework is built on
3. [Intermediate Representations](IntermediateRepresentations/README.md) — understand what your circuit compiles to
4. [Resources](Resources/README.md) — Thaler book for depth, Evolution of ZKPs for history

---

## Encyclopedic Index

### Theoretical Models
- [Interactive Proof Model](TheoreticalModels/Interactive-Proof-Model.md) — formal definition of the IP model (Goldwasser–Micali–Rackoff)
- [ZK Families Overview](TheoreticalModels/ZK-Families-Overview.md) — SNARKs / STARKs / Bulletproofs / PLONK / Spartan compared
- [ZK Proof Taxonomy](TheoreticalModels/ZK-Proof-Taxonomy.md) — abstraction levels from native sigma protocols to zkVMs
- [Schwartz-Zippel Lemma](TheoreticalModels/Schwartz-Zippel.md) — polynomial identity testing, foundational for many ZKP protocols

### Cryptographic Primitives
- [Pedersen Commitments](CryptographicPrimitives/Pedersen-Commitments.md)
- [Sigma Protocols (Damgård)](CryptographicPrimitives/Sigma-Protocols-Damgard.md)
- [Sigma Protocols (Proposal)](CryptographicPrimitives/Sigma-Protocols-Proposal.md)
- [Proof Systems for DL](CryptographicPrimitives/Proof-Systems-for-DL.md)
- [Camenisch-Michels Safe Primes](CryptographicPrimitives/Camenisch-Michels-Safe-Primes.md)
- [ZKAttest](CryptographicPrimitives/ZKAttest.md)

### Proof Systems
- [GMR85 – Knowledge Complexity](ProofSystems/GMR85-Knowledge-Complexity.md) · [Fiat-Shamir](ProofSystems/Fiat-Shamir.md) · [NIZK (Blum)](ProofSystems/NIZK-Blum.md) · [Scalable MPC (DI06)](ProofSystems/DI06-Scalable-MPC.md)
- [QSP/GGPR13](ProofSystems/QSP-GGPR13.md) · [Pinocchio](ProofSystems/Pinocchio.md) · [Groth16](ProofSystems/Groth16.md) · [LegoGroth16](ProofSystems/LegoGroth16.md)
- [Ligero](ProofSystems/Ligero.md) · [Ligero++](ProofSystems/Ligero-Plus-Plus.md) · [Bulletproofs](ProofSystems/Bulletproofs.md) · [Bulletproofs+](ProofSystems/Bulletproofs-Plus.md)
- [FRI](ProofSystems/FRI.md) · [zk-STARKs](ProofSystems/zk-STARKs.md) · [Hyrax](ProofSystems/Hyrax.md) · [Libra](ProofSystems/Libra.md) · [Spartan](ProofSystems/Spartan.md)
- [Sonic](ProofSystems/Sonic.md) · [PLONK](ProofSystems/PLONK.md) · [TurboPLONK](ProofSystems/TurboPLONK.md) · [HyperPLONK](ProofSystems/HyperPlonk.md)
- [plookup](ProofSystems/plookup.md) · [HONK](ProofSystems/HONK.md) · [UltraHONK](ProofSystems/UltraHonk.md)
- [DV Dynamic zk-SNARKs](ProofSystems/DV-Dynamic-zkSNARKs.md)

### Intermediate Representations
- [R1CS](IntermediateRepresentations/R1CS.md) · [AIR](IntermediateRepresentations/AIR.md) · [PLONKish](IntermediateRepresentations/PLONKish.md) · [ACIR](IntermediateRepresentations/ACIR.md)

### Tooling & Applications

| Name | Type | Based on |
|---|---|---|
| [Noir](ToolingApplication/Noir.md) | Circuit DSL | ACIR + Barretenberg (UltraHONK) |
| [Barretenberg](ToolingApplication/Barretenberg.md) | Library | PLONKish / UltraHONK |
| [Circom 2](ToolingApplication/Circom2.md) | Circuit DSL | zk-SNARK / R1CS |
| [gnark](ToolingApplication/gnark.md) | Library | Groth16, PLONK |
| [Halo2](ToolingApplication/Halo2.md) | Library | UltraPLONK / PLONKish |
| [ZoKrates](ToolingApplication/ZoKrates.md) | Circuit DSL | SNARKs (archived) |
| [Docknetwork](ToolingApplication/Docknetwork.md) | Library | Bulletproofs, LegoGroth, ZKAttest |
| [Ligero Prover](ToolingApplication/Ligero-Prover.md) | Library | Ligero |
| [Spartan Framework](ToolingApplication/Spartan-Framework.md) | Library | Spartan |
| [RISC Zero](ToolingApplication/RISC-Zero.md) | zkVM | zk-STARKs |
| [SP1](ToolingApplication/SP1.md) | zkVM | STARK + Groth16 |
| [OpenVM](ToolingApplication/OpenVM.md) | zkVM | Plonky3 / STARK |
| [Pico](ToolingApplication/Pico.md) | zkVM | Plonky3 |
| [Valida](ToolingApplication/Valida.md) | zkVM | Plonky3 (archived) |
| [Powdr](ToolingApplication/Powdr.md) | Optimizer | vmLLVM / zkVM |
| [Arithmetic Circuits](ToolingApplication/Circuits.md) | Concept | — |
| [Sumcheck Protocol](ToolingApplication/SumcheckProofs.md) | Concept | — |
| [zkVM](ToolingApplication/zkVM.md) | Concept overview | — |

### Applications
- [Applications overview](Applications/README.md) — privacy, scalability, enterprise, gaming use cases *(notes not yet written)*

### Resources
See [Resources Index](#resources-index) above for all 63 entries by type and topic.
