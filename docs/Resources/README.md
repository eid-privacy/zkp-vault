---
type: resources
status: generated
generated: true
tags:
  - zkp
  - papers
  - tutorials
  - learning
---

[Home](../README.md) > Resources

# ZKP Resources

Curated external resources for Zero-Knowledge Proofs — 82 entries across papers, blogs, books, wikis, docs, and code repositories.

_This file is auto-generated. Run `devbox run summaries` to update._

## By Type

- [Papers](./papers/README.md)
- [Blogs & Explainers](./blogs/README.md)
- [Books](./books/README.md)
- [Wikis & Standards](./wikis/README.md)
- [Documentation](./docs/README.md)
- [Code & Repositories](./code/README.md)

## By Topic

| a-d | e-i | l-o | p-s | s-z |
| --- | --- | --- | --- | --- |
| [applications](#applications) | [eid](#eid) | [learning](#learning) | [pairing](#pairing) | [stark](#stark) |
| [arithmetization](#arithmetization) | [elliptic-curves](#elliptic-curves) | [library](#library) | [post-quantum](#post-quantum) | [theory](#theory) |
| [attestation](#attestation) | [explainer](#explainer) | [linear-time-prover](#linear-time-prover) | [prover-backend](#prover-backend) | [transformation](#transformation) |
| [book](#book) | [foundational](#foundational) | [llvm](#llvm) | [range-proof](#range-proof) | [transparent](#transparent) |
| [circuit](#circuit) | [go](#go) | [logarithmic](#logarithmic) | [reed-solomon](#reed-solomon) | [trusted-setup](#trusted-setup) |
| [circuit-dsl](#circuit-dsl) | [history](#history) | [lookup](#lookup) | [reference](#reference) | [tutorials](#tutorials) |
| [commit-and-prove](#commit-and-prove) | [implementations](#implementations) | [mathematics](#mathematics) | [scalable](#scalable) | [universal-setup](#universal-setup) |
| [commitment](#commitment) | [information-theoretic](#information-theoretic) | [mpc](#mpc) | [sigma](#sigma) | [wasm](#wasm) |
| [composition](#composition) | [interactive-proof](#interactive-proof) | [non-interactive](#non-interactive) | [snark](#snark) | [zkp](#zkp) |
| [cryptography](#cryptography) | [iop](#iop) | [overview](#overview) | [standard](#standard) | [zkvm](#zkvm) |
| [discrete-log](#discrete-log) |  |  |  |  |

### applications

- [[eid-privacy-docknetwork-crypto-library|Choosing a Cryptographic Library for Anonymous Credentials (eid-privacy, 2026)]] (blog, 2026)
- [[WPSP26-DV-Dynamic-zkSNARKs|Designated-Verifier Dynamic zk-SNARKs with Applications to Dynamic Proofs of Index (Wang et al. 2026)]] (paper, 2026)
- [[LZ26-AnonCreds-Legacy|Device Binding for Anonymous Credentials on Legacy Phones (Lehmann, Zacharakis 2026)]] (paper, 2026)
- [[KVRSCLT26-EUDIF-Harms|On the (Privacy) Harms of the European Digital Identity Framework (Knabenhans, Veitch, Raynal, Stadler, Chatel, Lueks, Troncoso 2026)]] (paper, 2026)
- [[eid-privacy-poc-report|Proof-of-Concept for ZKPs (eid-privacy, 2026)]] (blog, 2026)
- [[eid-privacy-comparing-zk-systems|Comparing ZK Systems (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-crescent-longfellow|Crescent and Longfellow (eid-privacy, 2025)]] (blog, 2025)
- [[FHLL25-AnonCreds-TrustedHW|Device-Bound Anonymous Credentials With(out) Trusted Hardware (Friedrichs, Harding, Lehmann, Lysyanskaya 2025)]] (paper, 2025)
- [[eid-privacy-swiyu-demo|Open Source SWIYU Demo application (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-privacy-unlinkability|Overview of Privacy and Unlinkability (eid-privacy, 2025)]] (blog, 2025)
- [[GHE25-MS2|Secure and Privacy-Preserving Credentials for E-ID Proof-of-Concept (Gasser, Humbert, Elghareeb 2025)]] (paper, 2025)
- [[LSZ25-Vision|Vision: A Modular Framework for Anonymous Credential Systems (Lehmann, Sidorenko, Zacharakis 2025)]] (paper, 2025)
- [[FS24-Longfellow|Anonymous Credentials from ECDSA (Frigo & shelat 2024)]] (paper, 2024)
- [[PPZ24-Crescent|Crescent: Stronger Privacy for Existing Credentials (Paquin, Policharla, Zaverucha 2024)]] (paper, 2024)
- [[microsoft-crescent-credentials|Microsoft Crescent Credentials (Spartan-t256 Fork)]] (code, 2023)
- [[SAS22-ZKAttest|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys]] (paper, 2022)

### arithmetization

- [[CBBZ23-HyperPlonk|HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates (Chen et al. 2023)]] (paper, 2023)
- [[plonkish-arithmetization|PLONKish Arithmetization]] (blog, 2022)
- [[plonkish_arithmetization|PLONKish Arithmetization — ZK Jargon]] (doc, 2022)
- [[R1CS-Docs|R1CS Explainer (0xPARC / Circom)]] (doc, 2022)
- [[Halo2-Docs|Halo2 Documentation (Zcash)]] (doc, 2021)
- [[AIR-Docs|STARK 101 — AIR Tutorial (StarkWare)]] (doc, 2021)
- [[GW20-Plookup|Plookup: A Simplified Polynomial Protocol for Lookup Tables (Gabizon-Williamson 2020)]] (paper, 2020)
- [[GWC19-PLONK|PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge]] (paper, 2019)
- [[GW19b-TurboPlonk|TurboPLONK Proposal (ZKProof Workshop 3)]] (paper, 2019)

### attestation

- [[SAS22-ZKAttest|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys]] (paper, 2022)

### book

- [[Thaler-Proofs-Arguments-ZK|Proofs, Arguments, and Zero-Knowledge]] (book, 2023)

### circuit

- [[a-deep-dive-into-axioms-halo2-circuits|A Deep Dive into Axiom's Halo2 Circuits]] (blog, 2025)
- [[plonkish-arithmetization|PLONKish Arithmetization]] (blog, 2022)
- [[plonkish_arithmetization|PLONKish Arithmetization — ZK Jargon]] (doc, 2022)
- [[R1CS-Docs|R1CS Explainer (0xPARC / Circom)]] (doc, 2022)

### circuit-dsl

- [[noirs-circuit-backend|Noir's Circuit Backend]] (blog, 2023)
- [[Noir-Docs|Noir Documentation]] (doc, 2022)
- [[noir-lang-noir|noir-lang/noir — ACVM Repository]] (code, 2022)
- [[Circom2-Docs|Circom2 Documentation]] (doc, 2021)
- [[Halo2-Docs|Halo2 Documentation (Zcash)]] (doc, 2021)
- [[ZoKrates-Docs|ZoKrates Documentation]] (doc, 2018)

### commit-and-prove

- [[LSZ25-Vision|Vision: A Modular Framework for Anonymous Credential Systems (Lehmann, Sidorenko, Zacharakis 2025)]] (paper, 2025)
- [[CFQW19-LegoSNARK|LegoSNARK: Modular Design and Composition of Efficient Zero-Knowledge Proofs (Campanelli et al. 2019)]] (paper, 2019)

### commitment

- [[docknetwork-crypto-library|DockNetwork Crypto Library Analysis]] (doc, 2026)
- [[BBB+17-Bulletproofs|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[WTSTW17-Hyrax|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[BBS04-ShortGroupSigs|Short Group Signatures (Boneh, Boyen, Shacham 2004)]] (paper, 2004)
- [[Ped91-Commitments|Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing (Pedersen 1991)]] (paper, 1991)

### composition

- [[LSZ25-Vision|Vision: A Modular Framework for Anonymous Credential Systems (Lehmann, Sidorenko, Zacharakis 2025)]] (paper, 2025)
- [[CFQW19-LegoSNARK|LegoSNARK: Modular Design and Composition of Efficient Zero-Knowledge Proofs (Campanelli et al. 2019)]] (paper, 2019)

### cryptography

- [[LZ26-AnonCreds-Legacy|Device Binding for Anonymous Credentials on Legacy Phones (Lehmann, Zacharakis 2026)]] (paper, 2026)
- [[FHLL25-AnonCreds-TrustedHW|Device-Bound Anonymous Credentials With(out) Trusted Hardware (Friedrichs, Harding, Lehmann, Lysyanskaya 2025)]] (paper, 2025)
- [[GHE25-Taxonomy|Taxonomy for Privacy-Preserving Electronic Identities (Gasser, Humbert, Elghareeb 2025)]] (paper, 2025)
- [[Cryptographic-Principles-Tomescu|Cryptographic Principles (Alin Tomescu)]] (blog, 2021)
- [[BBS04-ShortGroupSigs|Short Group Signatures (Boneh, Boyen, Shacham 2004)]] (paper, 2004)
- [[CM99-Safe-Primes|Proving in Zero-Knowledge that a Number is the Product of Two Safe Primes (Camenisch-Michels 1999)]] (paper, 1999)
- [[CS97-DL-Proofs|Proof Systems for General Statements about Discrete Logarithms (Camenisch-Stadler 1997)]] (paper, 1997)
- [[Ped91-Commitments|Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing (Pedersen 1991)]] (paper, 1991)

### discrete-log

- [[CHJ+20-Bulletproofs-Opt|Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger (Chung et al. 2020)]] (paper, 2020)
- [[BBB+17-Bulletproofs|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[CM99-Safe-Primes|Proving in Zero-Knowledge that a Number is the Product of Two Safe Primes (Camenisch-Michels 1999)]] (paper, 1999)
- [[CS97-DL-Proofs|Proof Systems for General Statements about Discrete Logarithms (Camenisch-Stadler 1997)]] (paper, 1997)
- [[Ped91-Commitments|Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing (Pedersen 1991)]] (paper, 1991)

### eid

- [[eid-privacy-docknetwork-crypto-library|Choosing a Cryptographic Library for Anonymous Credentials (eid-privacy, 2026)]] (blog, 2026)
- [[LZ26-AnonCreds-Legacy|Device Binding for Anonymous Credentials on Legacy Phones (Lehmann, Zacharakis 2026)]] (paper, 2026)
- [[docknetwork-crypto-library|DockNetwork Crypto Library Analysis]] (doc, 2026)
- [[KVRSCLT26-EUDIF-Harms|On the (Privacy) Harms of the European Digital Identity Framework (Knabenhans, Veitch, Raynal, Stadler, Chatel, Lueks, Troncoso 2026)]] (paper, 2026)
- [[eid-privacy-poc-report|Proof-of-Concept for ZKPs (eid-privacy, 2026)]] (blog, 2026)
- [[eid-privacy-zkp-vault|Reading list for ZKP algorithms and implementations (eid-privacy, 2026)]] (blog, 2026)
- [[eid-privacy-comparing-zk-systems|Comparing ZK Systems (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-crescent-longfellow|Crescent and Longfellow (eid-privacy, 2025)]] (blog, 2025)
- [[FHLL25-AnonCreds-TrustedHW|Device-Bound Anonymous Credentials With(out) Trusted Hardware (Friedrichs, Harding, Lehmann, Lysyanskaya 2025)]] (paper, 2025)
- [[eid-privacy-swiyu-demo|Open Source SWIYU Demo application (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-privacy-unlinkability|Overview of Privacy and Unlinkability (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-resources-zkp|Resources on Zero-knowledge Systems and Proofs (eid-privacy, 2025)]] (blog, 2025)
- [[GHE25-MS2|Secure and Privacy-Preserving Credentials for E-ID Proof-of-Concept (Gasser, Humbert, Elghareeb 2025)]] (paper, 2025)
- [[eid-privacy-taxonomy-101|Taxonomy 101 (eid-privacy, 2025)]] (blog, 2025)
- [[GHE25-Taxonomy|Taxonomy for Privacy-Preserving Electronic Identities (Gasser, Humbert, Elghareeb 2025)]] (paper, 2025)
- [[eid-privacy-taxonomy-digital-identity|Taxonomy of digital identity systems (eid-privacy, 2025)]] (blog, 2025)
- [[LSZ25-Vision|Vision: A Modular Framework for Anonymous Credential Systems (Lehmann, Sidorenko, Zacharakis 2025)]] (paper, 2025)
- [[FS24-Longfellow|Anonymous Credentials from ECDSA (Frigo & shelat 2024)]] (paper, 2024)
- [[PPZ24-Crescent|Crescent: Stronger Privacy for Existing Credentials (Paquin, Policharla, Zaverucha 2024)]] (paper, 2024)
- [[microsoft-crescent-credentials|Microsoft Crescent Credentials (Spartan-t256 Fork)]] (code, 2023)

### elliptic-curves

- [[FS24-Longfellow|Anonymous Credentials from ECDSA (Frigo & shelat 2024)]] (paper, 2024)
- [[PPZ24-Crescent|Crescent: Stronger Privacy for Existing Credentials (Paquin, Policharla, Zaverucha 2024)]] (paper, 2024)
- [[microsoft-crescent-credentials|Microsoft Crescent Credentials (Spartan-t256 Fork)]] (code, 2023)
- [[SAS22-ZKAttest|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys]] (paper, 2022)
- [[Cryptographic-Principles-Tomescu|Cryptographic Principles (Alin Tomescu)]] (blog, 2021)

### explainer

- [[eid-privacy-docknetwork-crypto-library|Choosing a Cryptographic Library for Anonymous Credentials (eid-privacy, 2026)]] (blog, 2026)
- [[a-deep-dive-into-axioms-halo2-circuits|A Deep Dive into Axiom's Halo2 Circuits]] (blog, 2025)
- [[eid-privacy-comparing-zk-systems|Comparing ZK Systems (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-crescent-longfellow|Crescent and Longfellow (eid-privacy, 2025)]] (blog, 2025)
- [[groth16|Groth16 (Alin Tomescu)]] (blog, 2024)
- [[noirs-circuit-backend|Noir's Circuit Backend]] (blog, 2023)
- [[plonkish-arithmetization|PLONKish Arithmetization]] (blog, 2022)
- [[Plonk-Family-Note|Note: PLONK / TurboPLONK / UltraPLONK Family]] (blog, 2021)
- [[PLONK-Blog|Understanding PLONK]] (blog, 2019)

### foundational

- [[Thaler-Proofs-Arguments-ZK|Proofs, Arguments, and Zero-Knowledge]] (book, 2023)
- [[GKMM18-Updatable-SRS|Updatable and Universal Common Reference Strings with Applications to zk-SNARKs (Groth et al. 2018)]] (paper, 2018)
- [[Gro16-Groth16|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] (paper, 2016)
- [[PHGR13-Pinocchio|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] (paper, 2013)
- [[GGPR12-QSP-SNARK|Quadratic Span Programs and Succinct NIZKs without PCPs (GGPR 2013)]] (paper, 2012)
- [[Dam04-Sigma-Protocols|On Sigma Protocols (Damgård)]] (paper, 2004)
- [[BBS04-ShortGroupSigs|Short Group Signatures (Boneh, Boyen, Shacham 2004)]] (paper, 2004)
- [[CS97-DL-Proofs|Proof Systems for General Statements about Discrete Logarithms (Camenisch-Stadler 1997)]] (paper, 1997)
- [[LFKN92-Sumcheck|Algebraic Methods for Interactive Proof Systems]] (paper, 1992)
- [[Ped91-Commitments|Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing (Pedersen 1991)]] (paper, 1991)
- [[BFM88-NIZK-Intro|Non-Interactive Zero-Knowledge and Its Applications (BFM88)]] (paper, 1988)
- [[FS86-Fiat-Shamir|How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)]] (paper, 1986)
- [[GMR85-ZK-Complexity|The Knowledge Complexity of Interactive Proof Systems (GMR85)]] (paper, 1985)
- [[Sch80-Schwartz-Zippel|Fast Probabilistic Algorithms for Verification of Polynomial Identities]] (paper, 1980)

### go

- [[gnark-Docs|gnark Documentation (Consensys)]] (doc, 2021)

### history

- [[Evolution-of-ZKPs|The Evolution of Zero Knowledge Proofs]] (blog, 2018)

### implementations

- [[docknetwork-crypto-library|DockNetwork Crypto Library Analysis]] (doc, 2026)
- [[a-deep-dive-into-axioms-halo2-circuits|A Deep Dive into Axiom's Halo2 Circuits]] (blog, 2025)
- [[comparative-analysis-of-sp1-and-risc-zero-zero-knowledge|Comparative Analysis of SP1 and RISC Zero Zero-Knowledge Virtual Machines]] (blog, 2024)
- [[Ligero-Prover-Docs|Ligetron Marketplace Documentation]] (doc, 2024)
- [[OpenVM-Docs|OpenVM Documentation]] (doc, 2024)
- [[SP1-Docs|SP1 Documentation (Succinct Labs)]] (doc, 2024)
- [[AztecProtocol-aztec-packages|AztecProtocol: Aztec Packages (UltraHONK Audit Scope)]] (code, 2023)
- [[RISC-Zero-Docs|RISC Zero Documentation]] (doc, 2023)
- [[microsoft-Spartan2|Microsoft Spartan2]] (code, 2022)
- [[Noir-Docs|Noir Documentation]] (doc, 2022)
- [[noir-lang-noir|noir-lang/noir — ACVM Repository]] (code, 2022)
- [[Circom2-Docs|Circom2 Documentation]] (doc, 2021)
- [[gnark-Docs|gnark Documentation (Consensys)]] (doc, 2021)
- [[Halo2-Docs|Halo2 Documentation (Zcash)]] (doc, 2021)
- [[Spartan-Framework-Code|Microsoft Spartan — Commit History]] (code, 2020)
- [[Spartan-Code|Microsoft Spartan (Original)]] (code, 2020)
- [[Sonic-Code|Sonic Reference Implementation (ebfull/sonic)]] (code, 2019)
- [[ZoKrates-Docs|ZoKrates Documentation]] (doc, 2018)

### information-theoretic

- [[Sch80-Schwartz-Zippel|Fast Probabilistic Algorithms for Verification of Polynomial Identities]] (paper, 1980)

### interactive-proof

- [[Dam04-Sigma-Protocols|On Sigma Protocols (Damgård)]] (paper, 2004)
- [[LFKN92-Sumcheck|Algebraic Methods for Interactive Proof Systems]] (paper, 1992)
- [[GMR85-ZK-Complexity|The Knowledge Complexity of Interactive Proof Systems (GMR85)]] (paper, 1985)

### iop

- [[AHIV22-Ligero-Ext|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup]] (paper, 2022)
- [[BFH+20-Ligero-Plus|Ligero++: A New Optimized Sublinear IOP (Bhadauria et al. 2020)]] (paper, 2020)
- [[BCRSVW19-Aurora|Aurora: Transparent Succinct Arguments for R1CS (Ben-Sasson et al. 2019)]] (paper, 2019)
- [[Set19-Spartan|Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup (Setty 2020)]] (paper, 2019)
- [[BBHR18-FRI|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)
- [[WTSTW17-Hyrax|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[AHIV17-Ligero|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup (Ames et al. 2017)]] (paper, 2017)

### learning

- [[eid-privacy-zkp-vault|Reading list for ZKP algorithms and implementations (eid-privacy, 2026)]] (blog, 2026)
- [[eid-privacy-resources-zkp|Resources on Zero-knowledge Systems and Proofs (eid-privacy, 2025)]] (blog, 2025)
- [[Thaler-Proofs-Arguments-ZK|Proofs, Arguments, and Zero-Knowledge]] (book, 2023)
- [[R1CS-Docs|R1CS Explainer (0xPARC / Circom)]] (doc, 2022)
- [[AIR-Docs|STARK 101 — AIR Tutorial (StarkWare)]] (doc, 2021)
- [[Evolution-of-ZKPs|The Evolution of Zero Knowledge Proofs]] (blog, 2018)

### library

- [[eid-privacy-docknetwork-crypto-library|Choosing a Cryptographic Library for Anonymous Credentials (eid-privacy, 2026)]] (blog, 2026)
- [[docknetwork-crypto-library|DockNetwork Crypto Library Analysis]] (doc, 2026)
- [[microsoft-Spartan2|Microsoft Spartan2]] (code, 2022)
- [[gnark-Docs|gnark Documentation (Consensys)]] (doc, 2021)
- [[Spartan-Framework-Code|Microsoft Spartan — Commit History]] (code, 2020)
- [[Spartan-Code|Microsoft Spartan (Original)]] (code, 2020)
- [[Sonic-Code|Sonic Reference Implementation (ebfull/sonic)]] (code, 2019)

### linear-time-prover

- [[CBBZ23-HyperPlonk|HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates (Chen et al. 2023)]] (paper, 2023)
- [[AHIV22-Ligero-Ext|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup]] (paper, 2022)
- [[BFH+20-Ligero-Plus|Ligero++: A New Optimized Sublinear IOP (Bhadauria et al. 2020)]] (paper, 2020)
- [[AHIV17-Ligero|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup (Ames et al. 2017)]] (paper, 2017)
- [[DI06-Scalable-MPC|Scalable Secure Multiparty Computation (Damgård-Ishai 2006)]] (paper, 2006)

### llvm

- [[OpenVM-Docs|OpenVM Documentation]] (doc, 2024)
- [[SP1-Docs|SP1 Documentation (Succinct Labs)]] (doc, 2024)
- [[RISC-Zero-Docs|RISC Zero Documentation]] (doc, 2023)

### logarithmic

- [[CHJ+20-Bulletproofs-Opt|Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger (Chung et al. 2020)]] (paper, 2020)
- [[BBB+17-Bulletproofs|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)

### lookup

- [[CBBZ23-HyperPlonk|HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates (Chen et al. 2023)]] (paper, 2023)
- [[GW20-Plookup|Plookup: A Simplified Polynomial Protocol for Lookup Tables (Gabizon-Williamson 2020)]] (paper, 2020)

### mathematics

- [[LFKN92-Sumcheck|Algebraic Methods for Interactive Proof Systems]] (paper, 1992)
- [[Sch80-Schwartz-Zippel|Fast Probabilistic Algorithms for Verification of Polynomial Identities]] (paper, 1980)

### mpc

- [[DI06-Scalable-MPC|Scalable Secure Multiparty Computation (Damgård-Ishai 2006)]] (paper, 2006)

### non-interactive

- [[WPSP26-DV-Dynamic-zkSNARKs|Designated-Verifier Dynamic zk-SNARKs with Applications to Dynamic Proofs of Index (Wang et al. 2026)]] (paper, 2026)
- [[ZKP21-Sigma-Standard|ZKProof Sigma Protocol Proposal (Workshop 4)]] (paper, 2021)
- [[BFM88-NIZK-Intro|Non-Interactive Zero-Knowledge and Its Applications (BFM88)]] (paper, 1988)
- [[FS86-Fiat-Shamir|How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)]] (paper, 1986)

### overview

- [[eid-privacy-poc-report|Proof-of-Concept for ZKPs (eid-privacy, 2026)]] (blog, 2026)
- [[eid-privacy-zkp-vault|Reading list for ZKP algorithms and implementations (eid-privacy, 2026)]] (blog, 2026)
- [[eid-privacy-comparing-zk-systems|Comparing ZK Systems (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-crescent-longfellow|Crescent and Longfellow (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-privacy-unlinkability|Overview of Privacy and Unlinkability (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-resources-zkp|Resources on Zero-knowledge Systems and Proofs (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-taxonomy-101|Taxonomy 101 (eid-privacy, 2025)]] (blog, 2025)
- [[GHE25-Taxonomy|Taxonomy for Privacy-Preserving Electronic Identities (Gasser, Humbert, Elghareeb 2025)]] (paper, 2025)
- [[eid-privacy-taxonomy-digital-identity|Taxonomy of digital identity systems (eid-privacy, 2025)]] (blog, 2025)
- [[comparative-analysis-of-sp1-and-risc-zero-zero-knowledge|Comparative Analysis of SP1 and RISC Zero Zero-Knowledge Virtual Machines]] (blog, 2024)
- [[ZKProof-Wiki|ZKProof Wiki of Concrete ZKP Schemes]] (wiki, 2020)
- [[Evolution-of-ZKPs|The Evolution of Zero Knowledge Proofs]] (blog, 2018)

### pairing

- [[groth16|Groth16 (Alin Tomescu)]] (blog, 2024)
- [[Cryptographic-Principles-Tomescu|Cryptographic Principles (Alin Tomescu)]] (blog, 2021)
- [[CFQW19-LegoSNARK|LegoSNARK: Modular Design and Composition of Efficient Zero-Knowledge Proofs (Campanelli et al. 2019)]] (paper, 2019)
- [[Gro16-Groth16|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] (paper, 2016)
- [[BBS04-ShortGroupSigs|Short Group Signatures (Boneh, Boyen, Shacham 2004)]] (paper, 2004)

### post-quantum

- [[BCRSVW19-Aurora|Aurora: Transparent Succinct Arguments for R1CS (Ben-Sasson et al. 2019)]] (paper, 2019)
- [[BBHR18-FRI|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)

### prover-backend

- [[Ligero-Prover-Docs|Ligetron Marketplace Documentation]] (doc, 2024)
- [[AztecProtocol-aztec-packages|AztecProtocol: Aztec Packages (UltraHONK Audit Scope)]] (code, 2023)
- [[noirs-circuit-backend|Noir's Circuit Backend]] (blog, 2023)
- [[noir-lang-noir|noir-lang/noir — ACVM Repository]] (code, 2022)

### range-proof

- [[CHJ+20-Bulletproofs-Opt|Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger (Chung et al. 2020)]] (paper, 2020)
- [[BBB+17-Bulletproofs|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[CM99-Safe-Primes|Proving in Zero-Knowledge that a Number is the Product of Two Safe Primes (Camenisch-Michels 1999)]] (paper, 1999)

### reed-solomon

- [[BBHR18-FRI|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)
- [[AHIV17-Ligero|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup (Ames et al. 2017)]] (paper, 2017)

### reference

- [[eid-privacy-zkp-vault|Reading list for ZKP algorithms and implementations (eid-privacy, 2026)]] (blog, 2026)
- [[eid-privacy-resources-zkp|Resources on Zero-knowledge Systems and Proofs (eid-privacy, 2025)]] (blog, 2025)
- [[GHE25-Taxonomy|Taxonomy for Privacy-Preserving Electronic Identities (Gasser, Humbert, Elghareeb 2025)]] (paper, 2025)
- [[eid-privacy-taxonomy-digital-identity|Taxonomy of digital identity systems (eid-privacy, 2025)]] (blog, 2025)
- [[plonkish_arithmetization|PLONKish Arithmetization — ZK Jargon]] (doc, 2022)
- [[Cryptographic-Principles-Tomescu|Cryptographic Principles (Alin Tomescu)]] (blog, 2021)
- [[ZKProof-Wiki|ZKProof Wiki of Concrete ZKP Schemes]] (wiki, 2020)

### scalable

- [[WTSTW17-Hyrax|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[DI06-Scalable-MPC|Scalable Secure Multiparty Computation (Damgård-Ishai 2006)]] (paper, 2006)

### sigma

- [[docknetwork-crypto-library|DockNetwork Crypto Library Analysis]] (doc, 2026)
- [[ZKP21-Sigma-Standard|ZKProof Sigma Protocol Proposal (Workshop 4)]] (paper, 2021)
- [[Dam04-Sigma-Protocols|On Sigma Protocols (Damgård)]] (paper, 2004)
- [[BBS04-ShortGroupSigs|Short Group Signatures (Boneh, Boyen, Shacham 2004)]] (paper, 2004)
- [[CM99-Safe-Primes|Proving in Zero-Knowledge that a Number is the Product of Two Safe Primes (Camenisch-Michels 1999)]] (paper, 1999)
- [[CS97-DL-Proofs|Proof Systems for General Statements about Discrete Logarithms (Camenisch-Stadler 1997)]] (paper, 1997)
- [[FS86-Fiat-Shamir|How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)]] (paper, 1986)

### snark

- [[WPSP26-DV-Dynamic-zkSNARKs|Designated-Verifier Dynamic zk-SNARKs with Applications to Dynamic Proofs of Index (Wang et al. 2026)]] (paper, 2026)
- [[LSZ25-Vision|Vision: A Modular Framework for Anonymous Credential Systems (Lehmann, Sidorenko, Zacharakis 2025)]] (paper, 2025)
- [[FS24-Longfellow|Anonymous Credentials from ECDSA (Frigo & shelat 2024)]] (paper, 2024)
- [[PPZ24-Crescent|Crescent: Stronger Privacy for Existing Credentials (Paquin, Policharla, Zaverucha 2024)]] (paper, 2024)
- [[groth16|Groth16 (Alin Tomescu)]] (blog, 2024)
- [[CBBZ23-HyperPlonk|HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates (Chen et al. 2023)]] (paper, 2023)
- [[microsoft-Spartan2|Microsoft Spartan2]] (code, 2022)
- [[Circom2-Docs|Circom2 Documentation]] (doc, 2021)
- [[gnark-Docs|gnark Documentation (Consensys)]] (doc, 2021)
- [[GW20-Plookup|Plookup: A Simplified Polynomial Protocol for Lookup Tables (Gabizon-Williamson 2020)]] (paper, 2020)
- [[BCRSVW19-Aurora|Aurora: Transparent Succinct Arguments for R1CS (Ben-Sasson et al. 2019)]] (paper, 2019)
- [[CFQW19-LegoSNARK|LegoSNARK: Modular Design and Composition of Efficient Zero-Knowledge Proofs (Campanelli et al. 2019)]] (paper, 2019)
- [[GWC19-PLONK|PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge]] (paper, 2019)
- [[Sonic-Code|Sonic Reference Implementation (ebfull/sonic)]] (code, 2019)
- [[MBKM19-Sonic|Sonic: Zero-Knowledge SNARKs from Linear-Size Universal and Updateable Structured Reference Strings (Maller et al. 2019)]] (paper, 2019)
- [[Set19-Spartan|Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup (Setty 2020)]] (paper, 2019)
- [[GW19b-TurboPlonk|TurboPLONK Proposal (ZKProof Workshop 3)]] (paper, 2019)
- [[PLONK-Blog|Understanding PLONK]] (blog, 2019)
- [[GKMM18-Updatable-SRS|Updatable and Universal Common Reference Strings with Applications to zk-SNARKs (Groth et al. 2018)]] (paper, 2018)
- [[ZoKrates-Docs|ZoKrates Documentation]] (doc, 2018)
- [[BBB+17-Bulletproofs|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[WTSTW17-Hyrax|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[Gro16-Groth16|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] (paper, 2016)
- [[PHGR13-Pinocchio|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] (paper, 2013)
- [[GGPR12-QSP-SNARK|Quadratic Span Programs and Succinct NIZKs without PCPs (GGPR 2013)]] (paper, 2012)

### standard

- [[ZKP21-Sigma-Standard|ZKProof Sigma Protocol Proposal (Workshop 4)]] (paper, 2021)
- [[GW19b-TurboPlonk|TurboPLONK Proposal (ZKProof Workshop 3)]] (paper, 2019)

### stark

- [[comparative-analysis-of-sp1-and-risc-zero-zero-knowledge|Comparative Analysis of SP1 and RISC Zero Zero-Knowledge Virtual Machines]] (blog, 2024)
- [[OpenVM-Docs|OpenVM Documentation]] (doc, 2024)
- [[SP1-Docs|SP1 Documentation (Succinct Labs)]] (doc, 2024)
- [[RISC-Zero-Docs|RISC Zero Documentation]] (doc, 2023)
- [[AIR-Docs|STARK 101 — AIR Tutorial (StarkWare)]] (doc, 2021)
- [[BBHR18-FRI|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)

### theory

- [[DI06-Scalable-MPC|Scalable Secure Multiparty Computation (Damgård-Ishai 2006)]] (paper, 2006)
- [[Dam04-Sigma-Protocols|On Sigma Protocols (Damgård)]] (paper, 2004)
- [[BFM88-NIZK-Intro|Non-Interactive Zero-Knowledge and Its Applications (BFM88)]] (paper, 1988)
- [[GMR85-ZK-Complexity|The Knowledge Complexity of Interactive Proof Systems (GMR85)]] (paper, 1985)

### transformation

- [[FS86-Fiat-Shamir|How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)]] (paper, 1986)

### transparent

- [[FS24-Longfellow|Anonymous Credentials from ECDSA (Frigo & shelat 2024)]] (paper, 2024)
- [[AHIV22-Ligero-Ext|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup]] (paper, 2022)
- [[microsoft-Spartan2|Microsoft Spartan2]] (code, 2022)
- [[Halo2-Docs|Halo2 Documentation (Zcash)]] (doc, 2021)
- [[CHJ+20-Bulletproofs-Opt|Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger (Chung et al. 2020)]] (paper, 2020)
- [[BFH+20-Ligero-Plus|Ligero++: A New Optimized Sublinear IOP (Bhadauria et al. 2020)]] (paper, 2020)
- [[Spartan-Framework-Code|Microsoft Spartan — Commit History]] (code, 2020)
- [[Spartan-Code|Microsoft Spartan (Original)]] (code, 2020)
- [[BCRSVW19-Aurora|Aurora: Transparent Succinct Arguments for R1CS (Ben-Sasson et al. 2019)]] (paper, 2019)
- [[Set19-Spartan|Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup (Setty 2020)]] (paper, 2019)
- [[BBHR18-FRI|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)
- [[BBB+17-Bulletproofs|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[WTSTW17-Hyrax|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[AHIV17-Ligero|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup (Ames et al. 2017)]] (paper, 2017)

### trusted-setup

- [[groth16|Groth16 (Alin Tomescu)]] (blog, 2024)
- [[MBKM19-Sonic|Sonic: Zero-Knowledge SNARKs from Linear-Size Universal and Updateable Structured Reference Strings (Maller et al. 2019)]] (paper, 2019)
- [[GKMM18-Updatable-SRS|Updatable and Universal Common Reference Strings with Applications to zk-SNARKs (Groth et al. 2018)]] (paper, 2018)
- [[Gro16-Groth16|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] (paper, 2016)
- [[PHGR13-Pinocchio|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] (paper, 2013)
- [[GGPR12-QSP-SNARK|Quadratic Span Programs and Succinct NIZKs without PCPs (GGPR 2013)]] (paper, 2012)

### tutorials

- [[AIR-Docs|STARK 101 — AIR Tutorial (StarkWare)]] (doc, 2021)

### universal-setup

- [[GWC19-PLONK|PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge]] (paper, 2019)
- [[Sonic-Code|Sonic Reference Implementation (ebfull/sonic)]] (code, 2019)
- [[MBKM19-Sonic|Sonic: Zero-Knowledge SNARKs from Linear-Size Universal and Updateable Structured Reference Strings (Maller et al. 2019)]] (paper, 2019)
- [[PLONK-Blog|Understanding PLONK]] (blog, 2019)
- [[GKMM18-Updatable-SRS|Updatable and Universal Common Reference Strings with Applications to zk-SNARKs (Groth et al. 2018)]] (paper, 2018)

### wasm

- [[Circom2-Docs|Circom2 Documentation]] (doc, 2021)

### zkp

- [[GHE25-MS2|Secure and Privacy-Preserving Credentials for E-ID Proof-of-Concept (Gasser, Humbert, Elghareeb 2025)]] (paper, 2025)
- [[Thaler-Proofs-Arguments-ZK|Proofs, Arguments, and Zero-Knowledge]] (book, 2023)
- [[SAS22-ZKAttest|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys]] (paper, 2022)
- [[Cryptographic-Principles-Tomescu|Cryptographic Principles (Alin Tomescu)]] (blog, 2021)
- [[Plonk-Family-Note|Note: PLONK / TurboPLONK / UltraPLONK Family]] (blog, 2021)
- [[ZKProof-Wiki|ZKProof Wiki of Concrete ZKP Schemes]] (wiki, 2020)
- [[Evolution-of-ZKPs|The Evolution of Zero Knowledge Proofs]] (blog, 2018)
- [[LFKN92-Sumcheck|Algebraic Methods for Interactive Proof Systems]] (paper, 1992)
- [[BFM88-NIZK-Intro|Non-Interactive Zero-Knowledge and Its Applications (BFM88)]] (paper, 1988)
- [[GMR85-ZK-Complexity|The Knowledge Complexity of Interactive Proof Systems (GMR85)]] (paper, 1985)

### zkvm

- [[comparative-analysis-of-sp1-and-risc-zero-zero-knowledge|Comparative Analysis of SP1 and RISC Zero Zero-Knowledge Virtual Machines]] (blog, 2024)
- [[OpenVM-Docs|OpenVM Documentation]] (doc, 2024)
- [[SP1-Docs|SP1 Documentation (Succinct Labs)]] (doc, 2024)
- [[RISC-Zero-Docs|RISC Zero Documentation]] (doc, 2023)
