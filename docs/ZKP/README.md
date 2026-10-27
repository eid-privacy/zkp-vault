---
type: theoretical_model
tags:
  - zkp
  - overview
---

[Home](../README.md) > ZKPs

# Zero-Knowledge Proofs

A zero-knowledge proof convinces a verifier that a statement is true without revealing anything else — for e-ID, for example, that a credential carries a valid issuer signature and the holder is over 18, without showing the credential. Proof systems fall into three families, by how the statement is expressed ([[ZK-Proof-Taxonomy]]):

| Family | Statement expressed as… | Typical use |
|---|---|---|
| [Sigma proofs](../Sigma/README.md) | Algebraic relations over a group (discrete log, commitments) | BBS / CL / PS anonymous credentials |
| [Circuit-based proofs](../ProofSystems/README.md) | Arithmetic circuit / constraint system | Proofs over existing ECDSA credentials (Longfellow, Crescent, our Spartan backend) |
| [zkVMs](../zkVM/README.md) | Execution trace of an arbitrary program | General verifiable computation |

Beyond identity, ZKPs are used for private payments (Zcash, Monero), blockchain scaling (zk-rollups, zkEVMs) and verifiable computation in general.

## Choosing, Auditing and Reading

Practical guides across all families. The [Framework Decision Guide](Framework-Decision-Guide.md) compares Noir, Circom, gnark, RISC Zero, Docknetwork, Ligero, Halo2 and Spartan for e-ID credential proofs, and lists what to check in any candidate. [Soundness Bugs and Audits](Soundness-Bugs-and-Audits.md) covers what goes wrong in practice — under-constrained circuits, Fiat–Shamir mistakes, the Longfellow review findings — and links our external security review. [ZKP Papers](ZKP-Papers.md) ranks the vault's ZKP papers by citations into foundation, relevant and other papers.

## Foundations

The theory behind all three families, in [Foundations](../TheoreticalModels/README.md): the [interactive proof model](../TheoreticalModels/Interactive-Proof-Model.md) and the papers that defined zero knowledge ([GMR85](../TheoreticalModels/GMR85-Knowledge-Complexity.md), [NIZK](../TheoreticalModels/NIZK-Blum.md), [Fiat–Shamir](../TheoreticalModels/Fiat-Shamir.md)); complexity results ([IP = PSPACE](../TheoreticalModels/IP-PSPACE.md), [PCP](../TheoreticalModels/PCP.md), [IOP](../TheoreticalModels/IOP.md)); the tools modern SNARKs are built from ([Schwartz–Zippel](../TheoreticalModels/Schwartz-Zippel.md), [Kilian, Merkle and BCS](../TheoreticalModels/Kilian-Merkle.md), [MPC-in-the-head](../TheoreticalModels/MPC-in-the-Head.md)); and [pairing-friendly curves](../TheoreticalModels/Pairing-Friendly-Curves.md). [ZK Families Overview](../TheoreticalModels/ZK-Families-Overview.md) compares SNARKs, STARKs, Bulletproofs and others, including trusted setup and security assumptions.

## Sigma Proofs

Proofs written directly as algebraic relations, in [Sigma Proofs](../Sigma/README.md): [Pedersen commitments](../Sigma/Pedersen-Commitments.md), [Sigma protocols](../Sigma/Sigma-Protocols-Damgard.md) and their [standardisation](../Sigma/Sigma-Protocols-Proposal.md), [proofs about discrete logarithms](../Sigma/Proof-Systems-for-DL.md) and [committed integers](../Sigma/Camenisch-Michels-Safe-Primes.md), and [ZKAttest](../Sigma/ZKAttest.md) for proofs about ECDSA keys. Commit-and-prove constructions such as [LegoGroth16](../Sigma/LegoGroth16.md) bridge Sigma proofs and circuits. [Docknetwork](../Sigma/Docknetwork.md) is the library we used for BBS-based credentials.

## Circuit-Based Proofs

General-purpose proofs over arithmetic circuits, in three parts. [Proof Systems](../ProofSystems/README.md) goes from early SNARKs ([Pinocchio](../ProofSystems/Pinocchio.md), [Groth16](../ProofSystems/Groth16.md)) through the PLONK family and transparent systems ([FRI](../ProofSystems/FRI.md), [zk-STARKs](../ProofSystems/zk-STARKs.md), [Bulletproofs](../ProofSystems/Bulletproofs.md), [Ligero](../ProofSystems/Ligero.md), [Spartan](../ProofSystems/Spartan.md)) to the ECDSA-credential systems [Crescent](../ProofSystems/Crescent.md) and [Longfellow](../ProofSystems/Longfellow.md). [Intermediate Representations](../IntermediateRepresentations/README.md) explains what circuits compile to: [R1CS](../IntermediateRepresentations/R1CS.md), [AIR](../IntermediateRepresentations/AIR.md), [PLONKish](../IntermediateRepresentations/PLONKish.md), [CCS](../IntermediateRepresentations/CCS.md) and Noir's [ACIR](../IntermediateRepresentations/ACIR.md). [Circuit Tooling](../CircuitTooling/README.md) covers the languages and libraries to write them: [Noir](../CircuitTooling/Noir.md), [Circom](../CircuitTooling/Circom2.md), [gnark](../CircuitTooling/gnark.md), [Halo2](../CircuitTooling/Halo2.md), [Barretenberg](../CircuitTooling/Barretenberg.md) and others.

## zkVMs

[zkVMs](../zkVM/README.md) prove the execution of ordinary programs compiled to an instruction set such as RISC-V, instead of hand-written circuits. The [concept note](../zkVM/zkVM.md) compares them with circuit DSLs; entries cover [RISC Zero](../zkVM/RISC-Zero.md), [SP1](../zkVM/SP1.md), [OpenVM](../zkVM/OpenVM.md), [Pico](../zkVM/Pico.md), [Valida](../zkVM/Valida.md) and [Powdr](../zkVM/Powdr.md). Many target verifiable computation and are not zero-knowledge by default.

## Anonymous Credentials

How to use these proofs for e-ID, in [Anonymous Credentials](../AnonymousCredentials/README.md), based on the Bormann–Lehmann SoK: the two families (multi-message signatures with Sigma proofs vs. general-purpose ZKPs over ECDSA) and the [features](../AnonymousCredentials/AC-Features.md) they enable. Notes cover [selective disclosure](../AnonymousCredentials/Selective-Disclosure.md), [unlinkable credentials](../AnonymousCredentials/Unlinkable-Anonymous-Credentials.md), [pairing-free credentials](../AnonymousCredentials/Pairing-Free-ACs.md), [holder binding](../AnonymousCredentials/Holder-Binding.md), [predicate proofs](../AnonymousCredentials/Predicate-Proofs.md), [revocation](../AnonymousCredentials/Revocation-in-eID.md) with [signed lists](../AnonymousCredentials/Signed-Revocation-Lists.md) and [PIR](../AnonymousCredentials/Private-Information-Retrieval-for-eID.md), [performance on phones](../AnonymousCredentials/ZKP-on-Mobile.md) and [post-quantum security](../AnonymousCredentials/Post-Quantum-and-eID.md).
