---
type: theoretical_model
tags:
  - zkp
  - overview
---

[Home](../README.md) > ZKPs

# Zero-Knowledge Proofs

Zero-knowledge proof systems fall into three families, by how the statement is expressed (see [[ZK-Proof-Taxonomy]]):

| Family | Statement expressed as… | Section |
|---|---|---|
| Sigma proofs | Algebraic relations over a group (discrete log, commitments) | [Sigma Proofs](../Sigma/README.md) |
| Circuit-based proofs | Arithmetic circuit / constraint system | [Proof Systems](../ProofSystems/README.md) · [Intermediate Representations](../IntermediateRepresentations/README.md) · [Circuit Tooling](../CircuitTooling/README.md) |
| zkVMs | Execution trace of an arbitrary program | [zkVMs](../zkVM/README.md) |

The theory behind all three is in [Foundations](../TheoreticalModels/README.md). [Anonymous Credentials](../AnonymousCredentials/README.md) applies them to e-ID.

To choose a framework for e-ID credential proofs, see the [Framework Decision Guide](Framework-Decision-Guide.md); for what can go wrong, see [Soundness Bugs and Audits](Soundness-Bugs-and-Audits.md). The papers in the vault are ranked by citations in [ZKP Papers](ZKP-Papers.md).

Beyond identity, ZKPs are used for private payments (Zcash, Monero), blockchain scaling (zk-rollups, zkEVMs) and verifiable computation in general.
