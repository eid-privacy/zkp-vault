---
type: theoretical_model
tags:
  - zkp
  - overview
---

[Home](../README.md) > [ZKPs](README.md) > Framework-Decision-Guide

# Framework Decision Guide

Evaluation criteria and a shortlist of ZKP frameworks for e-ID credential proofs (from the eid-privacy project).

**Evaluation criteria**

The columns below were evaluated in the eid-privacy project ([[GHE25-MS2]]). [[BL26-SoK-AnonCreds]] adds questions worth asking of any candidate:

- **Is it actually zero-knowledge?** Many systems built for blockchains target succinctness only, and some zkVMs are not ZK.
- **Prover time on a phone**, not proof size or verifier time, is the bottleneck for credentials ([[ZKP-on-Mobile]]).
- **Security level**: some fast results use reduced security (Longfellow: 86 bits).
- **Setup and assumptions**: trusted setup vs. transparent, pairing-based vs. hash-based ([[ZK-Families-Overview]]).
- **Assurance**: audits, known bugs, formal verification ([[Soundness-Bugs-and-Audits]]).
- **Extensibility**: tailored circuits are fast but hard to extend to new statements.

**Framework shortlist**

| Framework | Ease | Fast | PQ | Mobile | Maintained | Audited | Sign+Hash |
|---|---|---|---|---|---|---|---|
| [Noir](../CircuitTooling/Noir.md) | Easy | Yes | No | Possible | Yes | No | Yes |
| [Circom 2](../CircuitTooling/Circom2.md) | Medium | Unclear | No | WASM | Mixed | No | Hash only |
| [gnark](../CircuitTooling/gnark.md) | Medium | Yes | No | No | Yes | Yes (9×) | Yes |
| [RISC Zero](../zkVM/RISC-Zero.md) | Medium | Mixed | Yes | Verifier | Yes | Yes | Yes |
| [Docknetwork](../Sigma/Docknetwork.md) | Medium | Yes | Partial | Yes | Mixed | No | Yes |
| [Ligero Prover](../CircuitTooling/Ligero-Prover.md) | Easy | Partial | Yes | WASM | Yes | No | Yes |
| [Halo2](../CircuitTooling/Halo2.md) | Hard | Unclear | No | Unknown | Some | No | Hash only |
| [Spartan](../CircuitTooling/Spartan-Framework.md) | Low-level | Yes | No | Likely | Mixed | No | Yes |

**Background reading (recommended order)**

1. [ZK Families Overview](../TheoreticalModels/ZK-Families-Overview.md) — understand the landscape
2. [Proof Systems](../ProofSystems/README.md) — read the system your shortlisted framework is built on
3. [Intermediate Representations](../IntermediateRepresentations/README.md) — understand what your circuit compiles to
4. [Resources](../Resources/README.md) — Thaler book for depth, Evolution of ZKPs for history
