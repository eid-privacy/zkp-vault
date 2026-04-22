---
type: tags-index
status: generated
generated: true
tags: []
---

[Home](../README.md) > Tags

# ZKP Tags

All 55 tag definitions used across the vault.

_This file is auto-generated. Run `devbox run summaries` to update._

## Navigation

| a-d | e-i | l-o | p-s | s-z |
| --- | --- | --- | --- | --- |
| [[applications]] | [[eid]] | [[learning]] | [[pairing]] | [[stark]] |
| [[arithmetization]] | [[elliptic-curves]] | [[library]] | [[papers]] | [[theory]] |
| [[attestation]] | [[explainer]] | [[linear-time-prover]] | [[post-quantum]] | [[transformation]] |
| [[book]] | [[foundational]] | [[llvm]] | [[prover-backend]] | [[transparent]] |
| [[circuit-dsl]] | [[frameworks]] | [[logarithmic]] | [[range-proof]] | [[trusted-setup]] |
| [[circuit]] | [[go]] | [[lookup]] | [[reed-solomon]] | [[tutorials]] |
| [[commit-and-prove]] | [[history]] | [[mathematics]] | [[reference]] | [[universal-setup]] |
| [[commitment]] | [[implementations]] | [[mpc]] | [[scalable]] | [[use-cases]] |
| [[composition]] | [[information-theoretic]] | [[non-interactive]] | [[sigma]] | [[wasm]] |
| [[cryptography]] | [[interactive-proof]] | [[optimizer]] | [[snark]] | [[zkp]] |
| [[discrete-log]] | [[iop]] | [[overview]] | [[standard]] | [[zkvm]] |

## All Tags

| Tag | Description |
|---|---|
| [[applications|Applications]] | Tags entries that are end-to-end ZKP applications or application-level designs, as opposed to protocols or tooling. |
| [[arithmetization|Arithmetization]] | Tags entries about the process of reducing computations to algebraic constraints — the bridge between programs and proof systems. |
| [[attestation|Attestation]] | Tags entries about attestation — proving properties of credentials or hardware states without revealing the underlying data. |
| [[book|Book]] | Tags entries that are books or textbooks — including Thaler's 'Proofs, Arguments, and Zero-Knowledge' and other extended reference works. |
| [[circuit-dsl|Circuit DSL]] | Tags domain-specific languages for writing ZK circuits — e.g., Noir, Circom, ZoKrates. These compile down to an IR like R1CS or ACIR. |
| [[circuit|Circuit]] | Tags entries related to arithmetic circuits — the primary computational model for ZKP systems. Includes circuit design, optimisation, and analysis. |
| [[commit-and-prove|Commit-and-Prove]] | Tags commit-and-prove SNARKs (CP-SNARKs) — proof systems that prove statements about values already committed to by a separate commitment scheme, enabling modular composition of proof systems. |
| [[commitment|Commitment Scheme]] | Tags cryptographic commitment schemes — binding and hiding primitives that underpin polynomial commitments (KZG, IPA, FRI) used throughout ZKP constructions. |
| [[composition|Proof Composition]] | Tags techniques and systems for composing multiple zero-knowledge proofs — combining sigma protocols via AND/OR rules, commit-and-prove frameworks, or proof system interoperability. |
| [[cryptography|Cryptography]] | Entries covering classical and modern cryptographic building blocks used in or alongside ZKP systems — hash functions, encryption, commitments, and more. |
| [[discrete-log|Discrete Logarithm]] | Tags entries relying on the discrete logarithm assumption — the hardness assumption behind Pedersen commitments, Schnorr proofs, and many elliptic-curve-based ZKPs. |
| [[eid|e-ID / Digital Identity]] | Tags entries relevant to electronic identity (e-ID) use cases — privacy-preserving credential verification, holder binding, and identity-related ZKP applications. |
| [[elliptic-curves|Elliptic Curves]] | Tags entries about elliptic curve cryptography as used in ZKPs — curve selection, group operations, and curve-specific optimisations. |
| [[explainer|Explainer]] | Tags entries whose primary purpose is to explain a concept accessibly — blog posts, write-ups, and tutorials aimed at making ZKPs approachable. |
| [[foundational|Foundational]] | Marks entries that represent foundational, landmark, or must-know concepts and systems in the ZKP space. Good starting points for newcomers. |
| [[frameworks|Frameworks]] | Tags entries that are full ZKP frameworks — integrated toolchains combining a DSL, IR, prover backend, and often a verifier — as opposed to standalone libraries. |
| [[go|Go]] | Tags ZKP libraries, tools, or implementations written in or with bindings for the Go programming language. |
| [[history|History]] | Tags entries with a historical perspective — tracing the evolution of ZKP systems, key milestones, and chronological development. |
| [[implementations|Implementations]] | Tags entries that are concrete implementations of proof systems or protocols — as opposed to theoretical descriptions. |
| [[information-theoretic|Information-Theoretic]] | Marks protocols or constructions whose security holds unconditionally — without relying on computational hardness assumptions. An information-theoretically secure scheme cannot be broken even by a computationally unbounded adversary, and its soundness or hiding properties depend only on the size of the underlying field or randomness space. |
| [[interactive-proof|Interactive Proof]] | Tags entries about the general interactive proof model (IP), complexity class IP, and multi-round protocols between prover and verifier. |
| [[iop|Interactive Oracle Proof]] | Tags Interactive Oracle Proofs (IOPs) — a generalised model for proof systems where the verifier has oracle access to the prover's messages. Subsumes PCPs and used in STARK/FRI constructions. |
| [[learning|Learning]] | Tags entries specifically recommended as learning resources for those new to ZKPs or a specific sub-topic. |
| [[library|Library]] | Tags entries for reusable ZKP libraries and SDKs — as opposed to full toolchains or end-to-end applications. |
| [[linear-time-prover|Linear-Time Prover]] | Tags proof systems where the prover runs in linear time (O(n)) relative to witness/circuit size — a key efficiency property for large-scale applications. |
| [[llvm|LLVM]] | Tags entries where LLVM infrastructure is used — e.g., compilers that emit LLVM IR as an intermediate step before producing ZK circuits. |
| [[logarithmic|Logarithmic]] | Tags proof systems achieving logarithmic proof size or verification time relative to circuit size — e.g., IPA-based systems and inner-product argument techniques. |
| [[lookup|Lookup Argument]] | Tags proof systems and techniques using lookup arguments (e.g., PLOOKUP, LogUp) to efficiently prove table membership, replacing expensive range-check circuits. |
| [[mathematics|Mathematics]] | Notes emphasising mathematical constructs: group theory, polynomial algebra, finite fields, number theory, and other mathematical tools underpinning ZKPs. |
| [[mpc|MPC]] | Multi-Party Computation — tags entries about MPC protocols, MPC-in-the-head proof techniques, and MPC-based trusted setup ceremonies. |
| [[non-interactive|Non-Interactive]] | Tags proof systems that are non-interactive (single message from prover to verifier), typically achieved via the Fiat-Shamir heuristic in the random oracle model. |
| [[optimizer|Optimizer]] | Tags tools or techniques that optimise ZK circuits or proofs — reducing constraint count, proof size, or proving time. |
| [[overview|Overview]] | Tags entries that provide a broad survey or overview of a topic — covering multiple systems, comparing approaches, or mapping the landscape. |
| [[pairing|Pairing-Based Cryptography]] | Tags entries using bilinear pairings over elliptic curves — the foundation of KZG polynomial commitments and pairing-based SNARKs like Groth16. |
| [[papers|Papers]] | Tags entries that are academic papers or their summaries — the primary research literature for ZKP systems. |
| [[post-quantum|Post-Quantum]] | Tags proof systems and primitives believed to be secure against quantum adversaries — typically hash-based (STARKs) or lattice-based constructions. |
| [[prover-backend|Prover Backend]] | Tags the backend prover component of a ZKP toolchain — responsible for generating proofs given a constraint system and witness. |
| [[range-proof|Range Proof]] | Tags protocols proving that a secret value lies within a specified range — a common primitive in privacy-preserving applications. |
| [[reed-solomon|Reed-Solomon Codes]] | Tags entries using Reed-Solomon error-correcting codes — a key component of FRI-based polynomial commitments and STARK constructions. |
| [[reference|Reference]] | Tags entries serving as reference material — wikis, specification documents, glossaries, and other look-up resources. |
| [[scalable|Scalable]] | Tags proof systems or tools emphasising scalability — fast proving, parallelism, or efficient recursion for large computations. |
| [[sigma|Sigma Protocol]] | Tags Sigma (Σ) protocols — three-move interactive proofs (commit, challenge, response) that are the basis of many identification and signature schemes. |
| [[snark|SNARK]] | Succinct Non-interactive ARguments of Knowledge. Tags proof systems that achieve sub-linear proof size and fast verification, often with a trusted setup. |
| [[standard|Standard]] | Tags entries related to standards or standardisation efforts for ZKP systems — IETF drafts, NIST submissions, and interoperability specifications. |
| [[stark|STARK]] | Scalable Transparent ARguments of Knowledge. Tags proof systems based on FRI and hash-based commitments — transparent (no trusted setup) and post-quantum candidate. |
| [[theory|Theory]] | Entries focused on theoretical aspects of ZKPs — formal definitions, complexity classes, impossibility results, and mathematical foundations. |
| [[transformation|Transformation]] | Tags entries describing transformations between proof systems, arithmetizations, or representations — e.g., R1CS → QAP, interactive → non-interactive. |
| [[transparent|Transparent]] | Tags proof systems with no trusted setup — all randomness is public and verifiable. Includes STARKs, Bulletproofs, Spartan, and FRI-based systems. |
| [[trusted-setup|Trusted Setup]] | Tags proof systems or tools that require a trusted setup ceremony to generate public parameters. The security of the system depends on the ceremony's integrity. |
| [[tutorials|Tutorials]] | Tags step-by-step tutorials and hands-on guides for implementing or using ZKP systems. |
| [[universal-setup|Universal Setup]] | Tags proof systems with a universal trusted setup — parameters are generated once and can be reused across different circuits/programs without a per-circuit ceremony. |
| [[use-cases|Use Cases]] | Tags entries enumerating or discussing concrete real-world use cases for ZKPs — payments, identity, voting, compliance, and more. |
| [[wasm|WebAssembly (WASM)]] | Tags entries where WebAssembly is relevant — either as a compilation target for ZK tooling or as an execution environment for verifiers in browsers. |
| [[zkp|ZKP]] | Root tag for all Zero-Knowledge Proof content in this vault. Applied to essentially every note — use more specific tags to narrow searches. |
| [[zkvm|zkVM]] | Tags zero-knowledge virtual machines — systems that prove the correct execution of programs (RISC-V, MIPS, EVM) rather than circuits written by hand. |
