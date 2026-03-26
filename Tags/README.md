---
type: tags-index
status: generated
tags: []
---

[Home](../README.md) > Tags

# ZKP Tags

All 68 tag definitions used across the vault.

_This file is auto-generated. Run `devbox run gen-summaries` to update._

## Navigation

| a-e | e-l | l-p | p-s | s-z |
| --- | --- | --- | --- | --- |
| [[#acir]] | [[#elliptic-curves]] | [[#linear-time-prover]] | [[#plonky3]] | [[#standard]] |
| [[#applications]] | [[#explainer]] | [[#llvm]] | [[#post-quantum]] | [[#stark]] |
| [[#arithmetization]] | [[#foundational]] | [[#logarithmic]] | [[#prover-backend]] | [[#theory]] |
| [[#attestation]] | [[#frameworks]] | [[#lookup]] | [[#qap]] | [[#transformation]] |
| [[#book]] | [[#gkr]] | [[#mathematics]] | [[#qsp]] | [[#transparent]] |
| [[#bulletproofs]] | [[#go]] | [[#mpc]] | [[#r1cs]] | [[#trusted-setup]] |
| [[#circuit-dsl]] | [[#groth16]] | [[#noir]] | [[#range-proof]] | [[#tutorials]] |
| [[#circuit]] | [[#history]] | [[#non-interactive]] | [[#reed-solomon]] | [[#ultraplonk]] |
| [[#commitment]] | [[#implementations]] | [[#optimizer]] | [[#reference]] | [[#universal-setup]] |
| [[#cryptography]] | [[#interactive-proof]] | [[#overview]] | [[#scalable]] | [[#use-cases]] |
| [[#deprecated]] | [[#iop]] | [[#pairing]] | [[#sigma]] | [[#wasm]] |
| [[#discrete-log]] | [[#learning]] | [[#papers]] | [[#snark]] | [[#zkp]] |
| [[#ecdsa]] | [[#library]] | [[#plonk-family]] | [[#spartan]] | [[#zkvm]] |
| [[#eid]] | [[#ligero]] | [[#plonk]] |  |  |

## All Tags

| Tag | Description |
|---|---|
| [[acir\|ACIR]] | Abstract Circuit Intermediate Representation — Aztec/Noir's IR that bridges high-level DSL code and backend proof systems like Barretenberg. |
| [[applications\|Applications]] | Tags entries that are end-to-end ZKP applications or application-level designs, as opposed to protocols or tooling. |
| [[arithmetization\|Arithmetization]] | Tags entries about the process of reducing computations to algebraic constraints — the bridge between programs and proof systems. |
| [[attestation\|Attestation]] | Tags entries about attestation — proving properties of credentials or hardware states without revealing the underlying data. |
| [[book\|Book]] | Tags entries that are books or textbooks — including Thaler's 'Proofs, Arguments, and Zero-Knowledge' and other extended reference works. |
| [[bulletproofs\|Bulletproofs]] | Tags the Bulletproofs protocol — a transparent, short proof system without trusted setup, particularly efficient for range proofs and inner-product arguments. |
| [[circuit-dsl\|Circuit DSL]] | Tags domain-specific languages for writing ZK circuits — e.g., Noir, Circom, ZoKrates. These compile down to an IR like R1CS or ACIR. |
| [[circuit\|Circuit]] | Tags entries related to arithmetic circuits — the primary computational model for ZKP systems. Includes circuit design, optimisation, and analysis. |
| [[commitment\|Commitment Scheme]] | Tags cryptographic commitment schemes — binding and hiding primitives that underpin polynomial commitments (KZG, IPA, FRI) used throughout ZKP constructions. |
| [[cryptography\|Cryptography]] | Entries covering classical and modern cryptographic building blocks used in or alongside ZKP systems — hash functions, encryption, commitments, and more. |
| [[deprecated\|Deprecated]] | Tags entries for tools, protocols, or approaches that are no longer actively maintained or have been superseded by newer alternatives. |
| [[discrete-log\|Discrete Logarithm]] | Tags entries relying on the discrete logarithm assumption — the hardness assumption behind Pedersen commitments, Schnorr proofs, and many elliptic-curve-based ZKPs. |
| [[ecdsa\|ECDSA]] | Tags entries related to the Elliptic Curve Digital Signature Algorithm — relevant in the e-ID context where ZKPs must prove knowledge of an ECDSA/secp256k1 signature. |
| [[eid\|e-ID / Digital Identity]] | Tags entries relevant to electronic identity (e-ID) use cases — privacy-preserving credential verification, holder binding, and identity-related ZKP applications. |
| [[elliptic-curves\|Elliptic Curves]] | Tags entries about elliptic curve cryptography as used in ZKPs — curve selection, group operations, and curve-specific optimisations. |
| [[explainer\|Explainer]] | Tags entries whose primary purpose is to explain a concept accessibly — blog posts, write-ups, and tutorials aimed at making ZKPs approachable. |
| [[foundational\|Foundational]] | Marks entries that represent foundational, landmark, or must-know concepts and systems in the ZKP space. Good starting points for newcomers. |
| [[frameworks\|Frameworks]] | Tags entries that are full ZKP frameworks — integrated toolchains combining a DSL, IR, prover backend, and often a verifier — as opposed to standalone libraries. |
| [[gkr\|GKR Protocol]] | Tags the Goldwasser-Kalai-Rothblum (GKR) protocol — an efficient interactive proof for layered arithmetic circuits using the sumcheck protocol. |
| [[go\|Go]] | Tags ZKP libraries, tools, or implementations written in or with bindings for the Go programming language. |
| [[groth16\|Groth16]] | Tags the Groth16 protocol (Groth 2016) — the most widely deployed SNARK, using pairing-based cryptography with a per-circuit trusted setup and extremely small proofs. |
| [[history\|History]] | Tags entries with a historical perspective — tracing the evolution of ZKP systems, key milestones, and chronological development. |
| [[implementations\|Implementations]] | Tags entries that are concrete implementations of proof systems or protocols — as opposed to theoretical descriptions. |
| [[interactive-proof\|Interactive Proof]] | Tags entries about the general interactive proof model (IP), complexity class IP, and multi-round protocols between prover and verifier. |
| [[iop\|Interactive Oracle Proof]] | Tags Interactive Oracle Proofs (IOPs) — a generalised model for proof systems where the verifier has oracle access to the prover's messages. Subsumes PCPs and used in STARK/FRI constructions. |
| [[learning\|Learning]] | Tags entries specifically recommended as learning resources for those new to ZKPs or a specific sub-topic. |
| [[library\|Library]] | Tags entries for reusable ZKP libraries and SDKs — as opposed to full toolchains or end-to-end applications. |
| [[ligero\|Ligero]] | Tags the Ligero proof system — a transparent, MPC-in-the-head-based proof system with linear-size proofs and no trusted setup. |
| [[linear-time-prover\|Linear-Time Prover]] | Tags proof systems where the prover runs in linear time (O(n)) relative to witness/circuit size — a key efficiency property for large-scale applications. |
| [[llvm\|LLVM]] | Tags entries where LLVM infrastructure is used — e.g., compilers that emit LLVM IR as an intermediate step before producing ZK circuits. |
| [[logarithmic\|Logarithmic]] | Tags proof systems achieving logarithmic proof size or verification time relative to circuit size — e.g., IPA-based systems and inner-product argument techniques. |
| [[lookup\|Lookup Argument]] | Tags proof systems and techniques using lookup arguments (e.g., PLOOKUP, LogUp) to efficiently prove table membership, replacing expensive range-check circuits. |
| [[mathematics\|Mathematics]] | Notes emphasising mathematical constructs: group theory, polynomial algebra, finite fields, number theory, and other mathematical tools underpinning ZKPs. |
| [[mpc\|MPC]] | Multi-Party Computation — tags entries about MPC protocols, MPC-in-the-head proof techniques, and MPC-based trusted setup ceremonies. |
| [[noir\|Noir]] | Tags entries specifically about Noir — Aztec's Rust-like circuit DSL and its ecosystem (Barretenberg backend, Nargo toolchain, ACIR). |
| [[non-interactive\|Non-Interactive]] | Tags proof systems that are non-interactive (single message from prover to verifier), typically achieved via the Fiat-Shamir heuristic in the random oracle model. |
| [[optimizer\|Optimizer]] | Tags tools or techniques that optimise ZK circuits or proofs — reducing constraint count, proof size, or proving time. |
| [[overview\|Overview]] | Tags entries that provide a broad survey or overview of a topic — covering multiple systems, comparing approaches, or mapping the landscape. |
| [[pairing\|Pairing-Based Cryptography]] | Tags entries using bilinear pairings over elliptic curves — the foundation of KZG polynomial commitments and pairing-based SNARKs like Groth16. |
| [[papers\|Papers]] | Tags entries that are academic papers or their summaries — the primary research literature for ZKP systems. |
| [[plonk-family\|PLONK Family]] | Tags the broader family of PLONK-derived protocols sharing the permutation-based constraint system: PLONK, TurboPlonk, UltraPlonk, Honk, and variants. |
| [[plonk\|PLONK]] | Tags the original PLONK protocol (Gabizon, Williamson, Ciobotaru 2019) and notes that describe it directly. |
| [[plonky3\|Plonky3]] | Tags Plonky3, the modular ZK proving system toolkit from Polygon/Succinct that combines PLONK-style arithmetization with FRI-based polynomial commitments. |
| [[post-quantum\|Post-Quantum]] | Tags proof systems and primitives believed to be secure against quantum adversaries — typically hash-based (STARKs) or lattice-based constructions. |
| [[prover-backend\|Prover Backend]] | Tags the backend prover component of a ZKP toolchain — responsible for generating proofs given a constraint system and witness. |
| [[qap\|QAP]] | Quadratic Arithmetic Program — the polynomial encoding of R1CS constraints used in the original Groth16/Pinocchio constructions. |
| [[qsp\|QSP]] | Quadratic Span Program — a variant of QAP for Boolean circuits, used in early SNARK constructions. |
| [[r1cs\|R1CS]] | Rank-1 Constraint System — the standard arithmetization used by Groth16, Spartan, and many SNARKs. Tags entries defining or using R1CS. |
| [[range-proof\|Range Proof]] | Tags protocols proving that a secret value lies within a specified range — a common primitive in privacy-preserving applications. |
| [[reed-solomon\|Reed-Solomon Codes]] | Tags entries using Reed-Solomon error-correcting codes — a key component of FRI-based polynomial commitments and STARK constructions. |
| [[reference\|Reference]] | Tags entries serving as reference material — wikis, specification documents, glossaries, and other look-up resources. |
| [[scalable\|Scalable]] | Tags proof systems or tools emphasising scalability — fast proving, parallelism, or efficient recursion for large computations. |
| [[sigma\|Sigma Protocol]] | Tags Sigma (Σ) protocols — three-move interactive proofs (commit, challenge, response) that are the basis of many identification and signature schemes. |
| [[snark\|SNARK]] | Succinct Non-interactive ARguments of Knowledge. Tags proof systems that achieve sub-linear proof size and fast verification, often with a trusted setup. |
| [[spartan\|Spartan]] | Tags the Spartan proof system — a transparent SNARK using sum-check and multilinear extensions with no trusted setup. |
| [[standard\|Standard]] | Tags entries related to standards or standardisation efforts for ZKP systems — IETF drafts, NIST submissions, and interoperability specifications. |
| [[stark\|STARK]] | Scalable Transparent ARguments of Knowledge. Tags proof systems based on FRI and hash-based commitments — transparent (no trusted setup) and post-quantum candidate. |
| [[theory\|Theory]] | Entries focused on theoretical aspects of ZKPs — formal definitions, complexity classes, impossibility results, and mathematical foundations. |
| [[transformation\|Transformation]] | Tags entries describing transformations between proof systems, arithmetizations, or representations — e.g., R1CS → QAP, interactive → non-interactive. |
| [[transparent\|Transparent]] | Tags proof systems with no trusted setup — all randomness is public and verifiable. Includes STARKs, Bulletproofs, Spartan, and FRI-based systems. |
| [[trusted-setup\|Trusted Setup]] | Tags proof systems or tools that require a trusted setup ceremony to generate public parameters. The security of the system depends on the ceremony's integrity. |
| [[tutorials\|Tutorials]] | Tags step-by-step tutorials and hands-on guides for implementing or using ZKP systems. |
| [[ultraplonk\|UltraPlonk]] | Tags the UltraPlonk protocol variant — extends PLONK with lookup arguments and custom gates, used in Aztec's Barretenberg backend. |
| [[universal-setup\|Universal Setup]] | Tags proof systems with a universal trusted setup — parameters are generated once and can be reused across different circuits/programs without a per-circuit ceremony. |
| [[use-cases\|Use Cases]] | Tags entries enumerating or discussing concrete real-world use cases for ZKPs — payments, identity, voting, compliance, and more. |
| [[wasm\|WebAssembly (WASM)]] | Tags entries where WebAssembly is relevant — either as a compilation target for ZK tooling or as an execution environment for verifiers in browsers. |
| [[zkp\|ZKP]] | Root tag for all Zero-Knowledge Proof content in this vault. Applied to essentially every note — use more specific tags to narrow searches. |
| [[zkvm\|zkVM]] | Tags zero-knowledge virtual machines — systems that prove the correct execution of programs (RISC-V, MIPS, EVM) rather than circuits written by hand. |
