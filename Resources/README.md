---
type: resources
status: generated
tags:
  - zkp
  - papers
  - tutorials
  - learning
---

[Home](../README.md) > Resources

# ZKP Resources

Curated external resources for Zero-Knowledge Proofs — 59 entries across papers, blogs, books, wikis, docs, and code repositories.

_This file is auto-generated. Run `devbox run gen-resources-readme` to update._

## By Type

- [[#Papers]]
- [[#Blogs & Explainers]]
- [[#Books]]
- [[#Wikis & Standards]]
- [[#Documentation]]
- [[#Code & Repositories]]

## By Topic

| a-e                  | e-l                    | l-p                     | p-s                 | s-z                  |
| -------------------- | ---------------------- | ----------------------- | ------------------- | -------------------- |
| [[#acir]]            | [[#eid]]               | [[#ligero]]             | [[#post-quantum]]   | [[#standard]]        |
| [[#applications]]    | [[#elliptic-curves]]   | [[#linear-time-prover]] | [[#prover-backend]] | [[#stark]]           |
| [[#arithmetization]] | [[#explainer]]         | [[#llvm]]               | [[#qap]]            | [[#theory]]          |
| [[#attestation]]     | [[#foundational]]      | [[#logarithmic]]        | [[#qsp]]            | [[#transformation]]  |
| [[#book]]            | [[#go]]                | [[#lookup]]             | [[#r1cs]]           | [[#transparent]]     |
| [[#bulletproofs]]    | [[#groth16]]           | [[#mpc]]                | [[#range-proof]]    | [[#trusted-setup]]   |
| [[#circuit]]         | [[#history]]           | [[#noir]]               | [[#reed-solomon]]   | [[#tutorials]]       |
| [[#circuit-dsl]]     | [[#implementations]]   | [[#non-interactive]]    | [[#reference]]      | [[#ultraplonk]]      |
| [[#commitment]]      | [[#interactive-proof]] | [[#overview]]           | [[#scalable]]       | [[#universal-setup]] |
| [[#cryptography]]    | [[#iop]]               | [[#pairing]]            | [[#sigma]]          | [[#wasm]]            |
| [[#discrete-log]]    | [[#learning]]          | [[#plonk]]              | [[#snark]]          | [[#zkp]]             |
| [[#ecdsa]]           | [[#library]]           | [[#plonk-family]]       | [[#spartan]]        | [[#zkvm]]            |

## By Type

### Papers

| Resource | Year | Authors | Tags |
|---|---|---|---|
| [[CBBZ23-HyperPlonk\|HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates (Chen et al. 2023)]] | 2023 | Binyi Chen et al. | plonk-family, snark, arithmetization, lookup, linear-time-prover |
| [[AHIV22-Ligero-Ext\|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup]] | 2022 | Scott Ames et al. | ligero, linear-time-prover, transparent, iop |
| [[SAS22-ZKAttest\|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys]] | 2022 | Gregor Seiler, Kasra Abbaszadeh, Azam Soleimanian | attestation, ecdsa, zkp, elliptic-curves, applications |
| [[ZKP21-Sigma-Standard\|ZKProof Sigma Protocol Proposal (Workshop 4)]] | 2021 | ZKProof Community | sigma, standard, non-interactive |
| [[CHJ+20-Bulletproofs-Opt\|Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger (Chung et al. 2020)]] | 2020 | Heewon Chung et al. | bulletproofs, transparent, range-proof, discrete-log, logarithmic |
| [[BFH+20-Ligero-Plus\|Ligero++: A New Optimized Sublinear IOP (Bhadauria et al. 2020)]] | 2020 | Rishabh Bhadauria et al. | ligero, linear-time-prover, transparent, iop |
| [[GW20-Plookup\|Plookup: A Simplified Polynomial Protocol for Lookup Tables (Gabizon-Williamson 2020)]] | 2020 | Ariel Gabizon, Zachary J. Williamson | plonk-family, lookup, arithmetization, snark |
| [[BCRSVW19-Aurora\|Aurora: Transparent Succinct Arguments for R1CS (Ben-Sasson et al. 2019)]] | 2019 | Eli Ben-Sasson et al. | snark, transparent, iop, r1cs, post-quantum |
| [[GWC19-PLONK\|PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge]] | 2019 | Ariel Gabizon, Zachary J. Williamson, Oana Ciobotaru | plonk, plonk-family, snark, universal-setup, arithmetization |
| [[MBKM19-Sonic\|Sonic: Zero-Knowledge SNARKs from Linear-Size Universal and Updateable Structured Reference Strings (Maller et al. 2019)]] | 2019 | Mary Maller et al. | snark, universal-setup, plonk-family, trusted-setup |
| [[Set19-Spartan\|Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup (Setty 2020)]] | 2019 | Srinath Setty | snark, transparent, spartan, r1cs, iop |
| [[GW19b-TurboPlonk\|TurboPLONK Proposal (ZKProof Workshop 3)]] | 2019 | Ariel Gabizon, Zachary J. Williamson | plonk-family, standard, arithmetization, snark |
| [[BBHR18-FRI\|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] | 2018 | Eli Ben-Sasson et al. | stark, reed-solomon, iop, transparent, post-quantum |
| [[GKMM18-Updatable-SRS\|Updatable and Universal Common Reference Strings with Applications to zk-SNARKs (Groth et al. 2018)]] | 2018 | Jens Groth et al. | snark, universal-setup, trusted-setup, foundational |
| [[BBB+17-Bulletproofs\|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] | 2017 | Benedikt Bünz et al. | snark, transparent, logarithmic, discrete-log, range-proof, commitment |
| [[WTSTW17-Hyrax\|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] | 2017 | Riad S. Wahby et al. | snark, transparent, iop, scalable, commitment |
| [[AHIV17-Ligero\|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup (Ames et al. 2017)]] | 2017 | Scott Ames et al. | ligero, linear-time-prover, transparent, iop, reed-solomon |
| [[Gro16-Groth16\|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] | 2016 | Jens Groth | groth16, snark, pairing, trusted-setup, foundational |
| [[PHGR13-Pinocchio\|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] | 2013 | Bryan Parno et al. | snark, qap, r1cs, trusted-setup, foundational |
| [[GGPR12-QSP-SNARK\|Quadratic Span Programs and Succinct NIZKs without PCPs (GGPR 2013)]] | 2012 | Rosario Gennaro et al. | snark, qsp, r1cs, foundational, trusted-setup |
| [[DI06-Scalable-MPC\|Scalable Secure Multiparty Computation (Damgård-Ishai 2006)]] | 2006 | Ivan Damgård, Yuval Ishai | mpc, scalable, theory, linear-time-prover |
| [[Dam04-Sigma-Protocols\|On Sigma Protocols (Damgård)]] | 2004 | Ivan Damgård | sigma, interactive-proof, foundational, theory |
| [[CM99-Safe-Primes\|Proving in Zero-Knowledge that a Number is the Product of Two Safe Primes (Camenisch-Michels 1999)]] | 1999 | Jan Camenisch, Markus Michels | sigma, cryptography, discrete-log, range-proof |
| [[CS97-DL-Proofs\|Proof Systems for General Statements about Discrete Logarithms (Camenisch-Stadler 1997)]] | 1997 | Jan Camenisch, Markus Stadler | sigma, discrete-log, foundational, cryptography |
| [[Ped91-Commitments\|Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing (Pedersen 1991)]] | 1991 | Torben Pryds Pedersen | commitment, cryptography, foundational, discrete-log |
| [[BFM88-NIZK-Intro\|Non-Interactive Zero-Knowledge and Its Applications (BFM88)]] | 1988 | Manuel Blum, Paul Feldman, Silvio Micali | non-interactive, foundational, zkp, theory |
| [[FS86-Fiat-Shamir\|How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)]] | 1986 | Amos Fiat, Adi Shamir | non-interactive, sigma, transformation, foundational |
| [[GMR85-ZK-Complexity\|The Knowledge Complexity of Interactive Proof Systems (GMR85)]] | 1985 | Shafi Goldwasser, Silvio Micali, Charles Rackoff | interactive-proof, foundational, zkp, theory |

### Blogs & Explainers

| Resource | Year | Authors | Tags |
|---|---|---|---|
| [[a-deep-dive-into-axioms-halo2-circuits\|A Deep Dive into Axiom's Halo2 Circuits]] | 2025 | Trail of Bits | plonk-family, circuit, implementations, explainer |
| [[comparative-analysis-of-sp1-and-risc-zero-zero-knowledge\|Comparative Analysis of SP1 and RISC Zero Zero-Knowledge Virtual Machines]] | 2024 |  | zkvm, implementations, overview, stark |
| [[groth16\|Groth16 (Alin Tomescu)]] | 2024 | Alin Tomescu | groth16, snark, pairing, trusted-setup, explainer |
| [[noirs-circuit-backend\|Noir's Circuit Backend]] | 2023 | JT Riley | noir, acir, circuit-dsl, prover-backend, explainer |
| [[plonkish-arithmetization\|PLONKish Arithmetization]] | 2022 |  | arithmetization, plonk-family, explainer, circuit |
| [[Cryptographic-Principles-Tomescu\|Cryptographic Principles (Alin Tomescu)]] | 2021 | Alin Tomescu | zkp, cryptography, reference, elliptic-curves, pairing |
| [[Plonk-Family-Note\|Note: PLONK / TurboPLONK / UltraPLONK Family]] | 2021 |  | zkp, plonk-family, explainer |
| [[PLONK-Blog\|Understanding PLONK]] | 2019 | Vitalik Buterin | plonk, plonk-family, snark, universal-setup, explainer |
| [[Evolution-of-ZKPs\|The Evolution of Zero Knowledge Proofs]] | 2018 |  | zkp, overview, history, learning |

### Books

| Resource | Year | Authors | Tags |
|---|---|---|---|
| [[Thaler-Proofs-Arguments-ZK\|Proofs, Arguments, and Zero-Knowledge]] | 2023 | Justin Thaler | zkp, book, foundational, learning |

### Wikis & Standards

| Resource | Year | Authors | Tags |
|---|---|---|---|
| [[ZKProof-Wiki\|ZKProof Wiki of Concrete ZKP Schemes]] | 2020 |  | zkp, overview, reference |

### Documentation

| Resource | Year | Authors | Tags |
|---|---|---|---|
| [[docknetwork-crypto-library\|DockNetwork Crypto Library Analysis]] | 2026 | eid-privacy project | library, implementations, sigma, commitment, eid |
| [[Ligero-Prover-Docs\|Ligetron Marketplace Documentation]] | 2024 | Ligetron | ligero, implementations, prover-backend |
| [[OpenVM-Docs\|OpenVM Documentation]] | 2024 | Axiom / OpenVM Team | zkvm, implementations, stark, llvm |
| [[SP1-Docs\|SP1 Documentation (Succinct Labs)]] | 2024 | Succinct Labs | zkvm, implementations, stark, llvm |
| [[RISC-Zero-Docs\|RISC Zero Documentation]] | 2023 | RISC Zero | zkvm, implementations, stark, llvm |
| [[Noir-Docs\|Noir Documentation]] | 2022 | Aztec / Noir Team | noir, circuit-dsl, implementations, acir |
| [[plonkish_arithmetization\|PLONKish Arithmetization — ZK Jargon]] | 2022 |  | arithmetization, plonk-family, reference, circuit |
| [[R1CS-Docs\|R1CS Explainer (0xPARC / Circom)]] | 2022 | 0xPARC | r1cs, arithmetization, learning, circuit |
| [[Circom2-Docs\|Circom2 Documentation]] | 2021 | iden3 / Circom Team | circuit-dsl, implementations, r1cs, snark, wasm |
| [[gnark-Docs\|gnark Documentation (Consensys)]] | 2021 | Consensys / gnark Team | go, library, implementations, snark, groth16, plonk |
| [[Halo2-Docs\|Halo2 Documentation (Zcash)]] | 2021 | Zcash / Electric Coin Company | plonk-family, implementations, circuit-dsl, arithmetization, transparent |
| [[AIR-Docs\|STARK 101 — AIR Tutorial (StarkWare)]] | 2021 | StarkWare | stark, arithmetization, learning, tutorials |
| [[ZoKrates-Docs\|ZoKrates Documentation]] | 2018 | ZoKrates Team | circuit-dsl, implementations, r1cs, snark |

### Code & Repositories

| Resource | Year | Authors | Tags |
|---|---|---|---|
| [[AztecProtocol-aztec-packages\|AztecProtocol: Aztec Packages (UltraHONK Audit Scope)]] | 2023 | Aztec Protocol | ultraplonk, prover-backend, implementations, plonk-family |
| [[microsoft-crescent-credentials\|Microsoft Crescent Credentials (Spartan-t256 Fork)]] | 2023 | Microsoft Research | eid, applications, spartan, elliptic-curves |
| [[microsoft-Spartan2\|Microsoft Spartan2]] | 2022 | Microsoft Research | spartan, implementations, library, transparent, snark |
| [[noir-lang-noir\|noir-lang/noir — ACVM Repository]] | 2022 | Aztec / Noir Team | noir, acir, circuit-dsl, implementations, prover-backend |
| [[Spartan-Framework-Code\|Microsoft Spartan — Commit History]] | 2020 | Srinath Setty, Microsoft Research | spartan, implementations, library, transparent |
| [[Spartan-Code\|Microsoft Spartan (Original)]] | 2020 | Srinath Setty, Microsoft Research | spartan, implementations, library, transparent, r1cs |
| [[Sonic-Code\|Sonic Reference Implementation (ebfull/sonic)]] | 2019 | Sean Bowe | snark, implementations, library, universal-setup |

## By Topic

### acir

- [[noirs-circuit-backend\|Noir's Circuit Backend]] (blog, 2023)
- [[Noir-Docs\|Noir Documentation]] (doc, 2022)
- [[noir-lang-noir\|noir-lang/noir — ACVM Repository]] (code, 2022)

### applications

- [[microsoft-crescent-credentials\|Microsoft Crescent Credentials (Spartan-t256 Fork)]] (code, 2023)
- [[SAS22-ZKAttest\|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys]] (paper, 2022)

### arithmetization

- [[CBBZ23-HyperPlonk\|HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates (Chen et al. 2023)]] (paper, 2023)
- [[plonkish-arithmetization\|PLONKish Arithmetization]] (blog, 2022)
- [[plonkish_arithmetization\|PLONKish Arithmetization — ZK Jargon]] (doc, 2022)
- [[R1CS-Docs\|R1CS Explainer (0xPARC / Circom)]] (doc, 2022)
- [[Halo2-Docs\|Halo2 Documentation (Zcash)]] (doc, 2021)
- [[AIR-Docs\|STARK 101 — AIR Tutorial (StarkWare)]] (doc, 2021)
- [[GW20-Plookup\|Plookup: A Simplified Polynomial Protocol for Lookup Tables (Gabizon-Williamson 2020)]] (paper, 2020)
- [[GWC19-PLONK\|PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge]] (paper, 2019)
- [[GW19b-TurboPlonk\|TurboPLONK Proposal (ZKProof Workshop 3)]] (paper, 2019)

### attestation

- [[SAS22-ZKAttest\|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys]] (paper, 2022)

### book

- [[Thaler-Proofs-Arguments-ZK\|Proofs, Arguments, and Zero-Knowledge]] (book, 2023)

### bulletproofs

- [[CHJ+20-Bulletproofs-Opt\|Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger (Chung et al. 2020)]] (paper, 2020)

### circuit

- [[a-deep-dive-into-axioms-halo2-circuits\|A Deep Dive into Axiom's Halo2 Circuits]] (blog, 2025)
- [[plonkish-arithmetization\|PLONKish Arithmetization]] (blog, 2022)
- [[plonkish_arithmetization\|PLONKish Arithmetization — ZK Jargon]] (doc, 2022)
- [[R1CS-Docs\|R1CS Explainer (0xPARC / Circom)]] (doc, 2022)

### circuit-dsl

- [[noirs-circuit-backend\|Noir's Circuit Backend]] (blog, 2023)
- [[Noir-Docs\|Noir Documentation]] (doc, 2022)
- [[noir-lang-noir\|noir-lang/noir — ACVM Repository]] (code, 2022)
- [[Circom2-Docs\|Circom2 Documentation]] (doc, 2021)
- [[Halo2-Docs\|Halo2 Documentation (Zcash)]] (doc, 2021)
- [[ZoKrates-Docs\|ZoKrates Documentation]] (doc, 2018)

### commitment

- [[docknetwork-crypto-library\|DockNetwork Crypto Library Analysis]] (doc, 2026)
- [[BBB+17-Bulletproofs\|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[WTSTW17-Hyrax\|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[Ped91-Commitments\|Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing (Pedersen 1991)]] (paper, 1991)

### cryptography

- [[Cryptographic-Principles-Tomescu\|Cryptographic Principles (Alin Tomescu)]] (blog, 2021)
- [[CM99-Safe-Primes\|Proving in Zero-Knowledge that a Number is the Product of Two Safe Primes (Camenisch-Michels 1999)]] (paper, 1999)
- [[CS97-DL-Proofs\|Proof Systems for General Statements about Discrete Logarithms (Camenisch-Stadler 1997)]] (paper, 1997)
- [[Ped91-Commitments\|Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing (Pedersen 1991)]] (paper, 1991)

### discrete-log

- [[CHJ+20-Bulletproofs-Opt\|Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger (Chung et al. 2020)]] (paper, 2020)
- [[BBB+17-Bulletproofs\|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[CM99-Safe-Primes\|Proving in Zero-Knowledge that a Number is the Product of Two Safe Primes (Camenisch-Michels 1999)]] (paper, 1999)
- [[CS97-DL-Proofs\|Proof Systems for General Statements about Discrete Logarithms (Camenisch-Stadler 1997)]] (paper, 1997)
- [[Ped91-Commitments\|Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing (Pedersen 1991)]] (paper, 1991)

### ecdsa

- [[SAS22-ZKAttest\|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys]] (paper, 2022)

### eid

- [[docknetwork-crypto-library\|DockNetwork Crypto Library Analysis]] (doc, 2026)
- [[microsoft-crescent-credentials\|Microsoft Crescent Credentials (Spartan-t256 Fork)]] (code, 2023)

### elliptic-curves

- [[microsoft-crescent-credentials\|Microsoft Crescent Credentials (Spartan-t256 Fork)]] (code, 2023)
- [[SAS22-ZKAttest\|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys]] (paper, 2022)
- [[Cryptographic-Principles-Tomescu\|Cryptographic Principles (Alin Tomescu)]] (blog, 2021)

### explainer

- [[a-deep-dive-into-axioms-halo2-circuits\|A Deep Dive into Axiom's Halo2 Circuits]] (blog, 2025)
- [[groth16\|Groth16 (Alin Tomescu)]] (blog, 2024)
- [[noirs-circuit-backend\|Noir's Circuit Backend]] (blog, 2023)
- [[plonkish-arithmetization\|PLONKish Arithmetization]] (blog, 2022)
- [[Plonk-Family-Note\|Note: PLONK / TurboPLONK / UltraPLONK Family]] (blog, 2021)
- [[PLONK-Blog\|Understanding PLONK]] (blog, 2019)

### foundational

- [[Thaler-Proofs-Arguments-ZK\|Proofs, Arguments, and Zero-Knowledge]] (book, 2023)
- [[GKMM18-Updatable-SRS\|Updatable and Universal Common Reference Strings with Applications to zk-SNARKs (Groth et al. 2018)]] (paper, 2018)
- [[Gro16-Groth16\|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] (paper, 2016)
- [[PHGR13-Pinocchio\|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] (paper, 2013)
- [[GGPR12-QSP-SNARK\|Quadratic Span Programs and Succinct NIZKs without PCPs (GGPR 2013)]] (paper, 2012)
- [[Dam04-Sigma-Protocols\|On Sigma Protocols (Damgård)]] (paper, 2004)
- [[CS97-DL-Proofs\|Proof Systems for General Statements about Discrete Logarithms (Camenisch-Stadler 1997)]] (paper, 1997)
- [[Ped91-Commitments\|Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing (Pedersen 1991)]] (paper, 1991)
- [[BFM88-NIZK-Intro\|Non-Interactive Zero-Knowledge and Its Applications (BFM88)]] (paper, 1988)
- [[FS86-Fiat-Shamir\|How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)]] (paper, 1986)
- [[GMR85-ZK-Complexity\|The Knowledge Complexity of Interactive Proof Systems (GMR85)]] (paper, 1985)

### go

- [[gnark-Docs\|gnark Documentation (Consensys)]] (doc, 2021)

### groth16

- [[groth16\|Groth16 (Alin Tomescu)]] (blog, 2024)
- [[gnark-Docs\|gnark Documentation (Consensys)]] (doc, 2021)
- [[Gro16-Groth16\|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] (paper, 2016)

### history

- [[Evolution-of-ZKPs\|The Evolution of Zero Knowledge Proofs]] (blog, 2018)

### implementations

- [[docknetwork-crypto-library\|DockNetwork Crypto Library Analysis]] (doc, 2026)
- [[a-deep-dive-into-axioms-halo2-circuits\|A Deep Dive into Axiom's Halo2 Circuits]] (blog, 2025)
- [[comparative-analysis-of-sp1-and-risc-zero-zero-knowledge\|Comparative Analysis of SP1 and RISC Zero Zero-Knowledge Virtual Machines]] (blog, 2024)
- [[Ligero-Prover-Docs\|Ligetron Marketplace Documentation]] (doc, 2024)
- [[OpenVM-Docs\|OpenVM Documentation]] (doc, 2024)
- [[SP1-Docs\|SP1 Documentation (Succinct Labs)]] (doc, 2024)
- [[AztecProtocol-aztec-packages\|AztecProtocol: Aztec Packages (UltraHONK Audit Scope)]] (code, 2023)
- [[RISC-Zero-Docs\|RISC Zero Documentation]] (doc, 2023)
- [[microsoft-Spartan2\|Microsoft Spartan2]] (code, 2022)
- [[Noir-Docs\|Noir Documentation]] (doc, 2022)
- [[noir-lang-noir\|noir-lang/noir — ACVM Repository]] (code, 2022)
- [[Circom2-Docs\|Circom2 Documentation]] (doc, 2021)
- [[gnark-Docs\|gnark Documentation (Consensys)]] (doc, 2021)
- [[Halo2-Docs\|Halo2 Documentation (Zcash)]] (doc, 2021)
- [[Spartan-Framework-Code\|Microsoft Spartan — Commit History]] (code, 2020)
- [[Spartan-Code\|Microsoft Spartan (Original)]] (code, 2020)
- [[Sonic-Code\|Sonic Reference Implementation (ebfull/sonic)]] (code, 2019)
- [[ZoKrates-Docs\|ZoKrates Documentation]] (doc, 2018)

### interactive-proof

- [[Dam04-Sigma-Protocols\|On Sigma Protocols (Damgård)]] (paper, 2004)
- [[GMR85-ZK-Complexity\|The Knowledge Complexity of Interactive Proof Systems (GMR85)]] (paper, 1985)

### iop

- [[AHIV22-Ligero-Ext\|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup]] (paper, 2022)
- [[BFH+20-Ligero-Plus\|Ligero++: A New Optimized Sublinear IOP (Bhadauria et al. 2020)]] (paper, 2020)
- [[BCRSVW19-Aurora\|Aurora: Transparent Succinct Arguments for R1CS (Ben-Sasson et al. 2019)]] (paper, 2019)
- [[Set19-Spartan\|Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup (Setty 2020)]] (paper, 2019)
- [[BBHR18-FRI\|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)
- [[WTSTW17-Hyrax\|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[AHIV17-Ligero\|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup (Ames et al. 2017)]] (paper, 2017)

### learning

- [[Thaler-Proofs-Arguments-ZK\|Proofs, Arguments, and Zero-Knowledge]] (book, 2023)
- [[R1CS-Docs\|R1CS Explainer (0xPARC / Circom)]] (doc, 2022)
- [[AIR-Docs\|STARK 101 — AIR Tutorial (StarkWare)]] (doc, 2021)
- [[Evolution-of-ZKPs\|The Evolution of Zero Knowledge Proofs]] (blog, 2018)

### library

- [[docknetwork-crypto-library\|DockNetwork Crypto Library Analysis]] (doc, 2026)
- [[microsoft-Spartan2\|Microsoft Spartan2]] (code, 2022)
- [[gnark-Docs\|gnark Documentation (Consensys)]] (doc, 2021)
- [[Spartan-Framework-Code\|Microsoft Spartan — Commit History]] (code, 2020)
- [[Spartan-Code\|Microsoft Spartan (Original)]] (code, 2020)
- [[Sonic-Code\|Sonic Reference Implementation (ebfull/sonic)]] (code, 2019)

### ligero

- [[Ligero-Prover-Docs\|Ligetron Marketplace Documentation]] (doc, 2024)
- [[AHIV22-Ligero-Ext\|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup]] (paper, 2022)
- [[BFH+20-Ligero-Plus\|Ligero++: A New Optimized Sublinear IOP (Bhadauria et al. 2020)]] (paper, 2020)
- [[AHIV17-Ligero\|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup (Ames et al. 2017)]] (paper, 2017)

### linear-time-prover

- [[CBBZ23-HyperPlonk\|HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates (Chen et al. 2023)]] (paper, 2023)
- [[AHIV22-Ligero-Ext\|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup]] (paper, 2022)
- [[BFH+20-Ligero-Plus\|Ligero++: A New Optimized Sublinear IOP (Bhadauria et al. 2020)]] (paper, 2020)
- [[AHIV17-Ligero\|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup (Ames et al. 2017)]] (paper, 2017)
- [[DI06-Scalable-MPC\|Scalable Secure Multiparty Computation (Damgård-Ishai 2006)]] (paper, 2006)

### llvm

- [[OpenVM-Docs\|OpenVM Documentation]] (doc, 2024)
- [[SP1-Docs\|SP1 Documentation (Succinct Labs)]] (doc, 2024)
- [[RISC-Zero-Docs\|RISC Zero Documentation]] (doc, 2023)

### logarithmic

- [[CHJ+20-Bulletproofs-Opt\|Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger (Chung et al. 2020)]] (paper, 2020)
- [[BBB+17-Bulletproofs\|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)

### lookup

- [[CBBZ23-HyperPlonk\|HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates (Chen et al. 2023)]] (paper, 2023)
- [[GW20-Plookup\|Plookup: A Simplified Polynomial Protocol for Lookup Tables (Gabizon-Williamson 2020)]] (paper, 2020)

### mpc

- [[DI06-Scalable-MPC\|Scalable Secure Multiparty Computation (Damgård-Ishai 2006)]] (paper, 2006)

### noir

- [[noirs-circuit-backend\|Noir's Circuit Backend]] (blog, 2023)
- [[Noir-Docs\|Noir Documentation]] (doc, 2022)
- [[noir-lang-noir\|noir-lang/noir — ACVM Repository]] (code, 2022)

### non-interactive

- [[ZKP21-Sigma-Standard\|ZKProof Sigma Protocol Proposal (Workshop 4)]] (paper, 2021)
- [[BFM88-NIZK-Intro\|Non-Interactive Zero-Knowledge and Its Applications (BFM88)]] (paper, 1988)
- [[FS86-Fiat-Shamir\|How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)]] (paper, 1986)

### overview

- [[comparative-analysis-of-sp1-and-risc-zero-zero-knowledge\|Comparative Analysis of SP1 and RISC Zero Zero-Knowledge Virtual Machines]] (blog, 2024)
- [[ZKProof-Wiki\|ZKProof Wiki of Concrete ZKP Schemes]] (wiki, 2020)
- [[Evolution-of-ZKPs\|The Evolution of Zero Knowledge Proofs]] (blog, 2018)

### pairing

- [[groth16\|Groth16 (Alin Tomescu)]] (blog, 2024)
- [[Cryptographic-Principles-Tomescu\|Cryptographic Principles (Alin Tomescu)]] (blog, 2021)
- [[Gro16-Groth16\|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] (paper, 2016)

### plonk

- [[gnark-Docs\|gnark Documentation (Consensys)]] (doc, 2021)
- [[GWC19-PLONK\|PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge]] (paper, 2019)
- [[PLONK-Blog\|Understanding PLONK]] (blog, 2019)

### plonk-family

- [[a-deep-dive-into-axioms-halo2-circuits\|A Deep Dive into Axiom's Halo2 Circuits]] (blog, 2025)
- [[AztecProtocol-aztec-packages\|AztecProtocol: Aztec Packages (UltraHONK Audit Scope)]] (code, 2023)
- [[CBBZ23-HyperPlonk\|HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates (Chen et al. 2023)]] (paper, 2023)
- [[plonkish-arithmetization\|PLONKish Arithmetization]] (blog, 2022)
- [[plonkish_arithmetization\|PLONKish Arithmetization — ZK Jargon]] (doc, 2022)
- [[Halo2-Docs\|Halo2 Documentation (Zcash)]] (doc, 2021)
- [[Plonk-Family-Note\|Note: PLONK / TurboPLONK / UltraPLONK Family]] (blog, 2021)
- [[GW20-Plookup\|Plookup: A Simplified Polynomial Protocol for Lookup Tables (Gabizon-Williamson 2020)]] (paper, 2020)
- [[GWC19-PLONK\|PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge]] (paper, 2019)
- [[MBKM19-Sonic\|Sonic: Zero-Knowledge SNARKs from Linear-Size Universal and Updateable Structured Reference Strings (Maller et al. 2019)]] (paper, 2019)
- [[GW19b-TurboPlonk\|TurboPLONK Proposal (ZKProof Workshop 3)]] (paper, 2019)
- [[PLONK-Blog\|Understanding PLONK]] (blog, 2019)

### post-quantum

- [[BCRSVW19-Aurora\|Aurora: Transparent Succinct Arguments for R1CS (Ben-Sasson et al. 2019)]] (paper, 2019)
- [[BBHR18-FRI\|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)

### prover-backend

- [[Ligero-Prover-Docs\|Ligetron Marketplace Documentation]] (doc, 2024)
- [[AztecProtocol-aztec-packages\|AztecProtocol: Aztec Packages (UltraHONK Audit Scope)]] (code, 2023)
- [[noirs-circuit-backend\|Noir's Circuit Backend]] (blog, 2023)
- [[noir-lang-noir\|noir-lang/noir — ACVM Repository]] (code, 2022)

### qap

- [[PHGR13-Pinocchio\|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] (paper, 2013)

### qsp

- [[GGPR12-QSP-SNARK\|Quadratic Span Programs and Succinct NIZKs without PCPs (GGPR 2013)]] (paper, 2012)

### r1cs

- [[R1CS-Docs\|R1CS Explainer (0xPARC / Circom)]] (doc, 2022)
- [[Circom2-Docs\|Circom2 Documentation]] (doc, 2021)
- [[Spartan-Code\|Microsoft Spartan (Original)]] (code, 2020)
- [[BCRSVW19-Aurora\|Aurora: Transparent Succinct Arguments for R1CS (Ben-Sasson et al. 2019)]] (paper, 2019)
- [[Set19-Spartan\|Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup (Setty 2020)]] (paper, 2019)
- [[ZoKrates-Docs\|ZoKrates Documentation]] (doc, 2018)
- [[PHGR13-Pinocchio\|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] (paper, 2013)
- [[GGPR12-QSP-SNARK\|Quadratic Span Programs and Succinct NIZKs without PCPs (GGPR 2013)]] (paper, 2012)

### range-proof

- [[CHJ+20-Bulletproofs-Opt\|Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger (Chung et al. 2020)]] (paper, 2020)
- [[BBB+17-Bulletproofs\|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[CM99-Safe-Primes\|Proving in Zero-Knowledge that a Number is the Product of Two Safe Primes (Camenisch-Michels 1999)]] (paper, 1999)

### reed-solomon

- [[BBHR18-FRI\|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)
- [[AHIV17-Ligero\|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup (Ames et al. 2017)]] (paper, 2017)

### reference

- [[plonkish_arithmetization\|PLONKish Arithmetization — ZK Jargon]] (doc, 2022)
- [[Cryptographic-Principles-Tomescu\|Cryptographic Principles (Alin Tomescu)]] (blog, 2021)
- [[ZKProof-Wiki\|ZKProof Wiki of Concrete ZKP Schemes]] (wiki, 2020)

### scalable

- [[WTSTW17-Hyrax\|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[DI06-Scalable-MPC\|Scalable Secure Multiparty Computation (Damgård-Ishai 2006)]] (paper, 2006)

### sigma

- [[docknetwork-crypto-library\|DockNetwork Crypto Library Analysis]] (doc, 2026)
- [[ZKP21-Sigma-Standard\|ZKProof Sigma Protocol Proposal (Workshop 4)]] (paper, 2021)
- [[Dam04-Sigma-Protocols\|On Sigma Protocols (Damgård)]] (paper, 2004)
- [[CM99-Safe-Primes\|Proving in Zero-Knowledge that a Number is the Product of Two Safe Primes (Camenisch-Michels 1999)]] (paper, 1999)
- [[CS97-DL-Proofs\|Proof Systems for General Statements about Discrete Logarithms (Camenisch-Stadler 1997)]] (paper, 1997)
- [[FS86-Fiat-Shamir\|How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)]] (paper, 1986)

### snark

- [[groth16\|Groth16 (Alin Tomescu)]] (blog, 2024)
- [[CBBZ23-HyperPlonk\|HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates (Chen et al. 2023)]] (paper, 2023)
- [[microsoft-Spartan2\|Microsoft Spartan2]] (code, 2022)
- [[Circom2-Docs\|Circom2 Documentation]] (doc, 2021)
- [[gnark-Docs\|gnark Documentation (Consensys)]] (doc, 2021)
- [[GW20-Plookup\|Plookup: A Simplified Polynomial Protocol for Lookup Tables (Gabizon-Williamson 2020)]] (paper, 2020)
- [[BCRSVW19-Aurora\|Aurora: Transparent Succinct Arguments for R1CS (Ben-Sasson et al. 2019)]] (paper, 2019)
- [[GWC19-PLONK\|PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge]] (paper, 2019)
- [[Sonic-Code\|Sonic Reference Implementation (ebfull/sonic)]] (code, 2019)
- [[MBKM19-Sonic\|Sonic: Zero-Knowledge SNARKs from Linear-Size Universal and Updateable Structured Reference Strings (Maller et al. 2019)]] (paper, 2019)
- [[Set19-Spartan\|Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup (Setty 2020)]] (paper, 2019)
- [[GW19b-TurboPlonk\|TurboPLONK Proposal (ZKProof Workshop 3)]] (paper, 2019)
- [[PLONK-Blog\|Understanding PLONK]] (blog, 2019)
- [[GKMM18-Updatable-SRS\|Updatable and Universal Common Reference Strings with Applications to zk-SNARKs (Groth et al. 2018)]] (paper, 2018)
- [[ZoKrates-Docs\|ZoKrates Documentation]] (doc, 2018)
- [[BBB+17-Bulletproofs\|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[WTSTW17-Hyrax\|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[Gro16-Groth16\|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] (paper, 2016)
- [[PHGR13-Pinocchio\|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] (paper, 2013)
- [[GGPR12-QSP-SNARK\|Quadratic Span Programs and Succinct NIZKs without PCPs (GGPR 2013)]] (paper, 2012)

### spartan

- [[microsoft-crescent-credentials\|Microsoft Crescent Credentials (Spartan-t256 Fork)]] (code, 2023)
- [[microsoft-Spartan2\|Microsoft Spartan2]] (code, 2022)
- [[Spartan-Framework-Code\|Microsoft Spartan — Commit History]] (code, 2020)
- [[Spartan-Code\|Microsoft Spartan (Original)]] (code, 2020)
- [[Set19-Spartan\|Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup (Setty 2020)]] (paper, 2019)

### standard

- [[ZKP21-Sigma-Standard\|ZKProof Sigma Protocol Proposal (Workshop 4)]] (paper, 2021)
- [[GW19b-TurboPlonk\|TurboPLONK Proposal (ZKProof Workshop 3)]] (paper, 2019)

### stark

- [[comparative-analysis-of-sp1-and-risc-zero-zero-knowledge\|Comparative Analysis of SP1 and RISC Zero Zero-Knowledge Virtual Machines]] (blog, 2024)
- [[OpenVM-Docs\|OpenVM Documentation]] (doc, 2024)
- [[SP1-Docs\|SP1 Documentation (Succinct Labs)]] (doc, 2024)
- [[RISC-Zero-Docs\|RISC Zero Documentation]] (doc, 2023)
- [[AIR-Docs\|STARK 101 — AIR Tutorial (StarkWare)]] (doc, 2021)
- [[BBHR18-FRI\|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)

### theory

- [[DI06-Scalable-MPC\|Scalable Secure Multiparty Computation (Damgård-Ishai 2006)]] (paper, 2006)
- [[Dam04-Sigma-Protocols\|On Sigma Protocols (Damgård)]] (paper, 2004)
- [[BFM88-NIZK-Intro\|Non-Interactive Zero-Knowledge and Its Applications (BFM88)]] (paper, 1988)
- [[GMR85-ZK-Complexity\|The Knowledge Complexity of Interactive Proof Systems (GMR85)]] (paper, 1985)

### transformation

- [[FS86-Fiat-Shamir\|How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)]] (paper, 1986)

### transparent

- [[AHIV22-Ligero-Ext\|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup]] (paper, 2022)
- [[microsoft-Spartan2\|Microsoft Spartan2]] (code, 2022)
- [[Halo2-Docs\|Halo2 Documentation (Zcash)]] (doc, 2021)
- [[CHJ+20-Bulletproofs-Opt\|Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger (Chung et al. 2020)]] (paper, 2020)
- [[BFH+20-Ligero-Plus\|Ligero++: A New Optimized Sublinear IOP (Bhadauria et al. 2020)]] (paper, 2020)
- [[Spartan-Framework-Code\|Microsoft Spartan — Commit History]] (code, 2020)
- [[Spartan-Code\|Microsoft Spartan (Original)]] (code, 2020)
- [[BCRSVW19-Aurora\|Aurora: Transparent Succinct Arguments for R1CS (Ben-Sasson et al. 2019)]] (paper, 2019)
- [[Set19-Spartan\|Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup (Setty 2020)]] (paper, 2019)
- [[BBHR18-FRI\|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)
- [[BBB+17-Bulletproofs\|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[WTSTW17-Hyrax\|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[AHIV17-Ligero\|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup (Ames et al. 2017)]] (paper, 2017)

### trusted-setup

- [[groth16\|Groth16 (Alin Tomescu)]] (blog, 2024)
- [[MBKM19-Sonic\|Sonic: Zero-Knowledge SNARKs from Linear-Size Universal and Updateable Structured Reference Strings (Maller et al. 2019)]] (paper, 2019)
- [[GKMM18-Updatable-SRS\|Updatable and Universal Common Reference Strings with Applications to zk-SNARKs (Groth et al. 2018)]] (paper, 2018)
- [[Gro16-Groth16\|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] (paper, 2016)
- [[PHGR13-Pinocchio\|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] (paper, 2013)
- [[GGPR12-QSP-SNARK\|Quadratic Span Programs and Succinct NIZKs without PCPs (GGPR 2013)]] (paper, 2012)

### tutorials

- [[AIR-Docs\|STARK 101 — AIR Tutorial (StarkWare)]] (doc, 2021)

### ultraplonk

- [[AztecProtocol-aztec-packages\|AztecProtocol: Aztec Packages (UltraHONK Audit Scope)]] (code, 2023)

### universal-setup

- [[GWC19-PLONK\|PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge]] (paper, 2019)
- [[Sonic-Code\|Sonic Reference Implementation (ebfull/sonic)]] (code, 2019)
- [[MBKM19-Sonic\|Sonic: Zero-Knowledge SNARKs from Linear-Size Universal and Updateable Structured Reference Strings (Maller et al. 2019)]] (paper, 2019)
- [[PLONK-Blog\|Understanding PLONK]] (blog, 2019)
- [[GKMM18-Updatable-SRS\|Updatable and Universal Common Reference Strings with Applications to zk-SNARKs (Groth et al. 2018)]] (paper, 2018)

### wasm

- [[Circom2-Docs\|Circom2 Documentation]] (doc, 2021)

### zkp

- [[Thaler-Proofs-Arguments-ZK\|Proofs, Arguments, and Zero-Knowledge]] (book, 2023)
- [[SAS22-ZKAttest\|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys]] (paper, 2022)
- [[Cryptographic-Principles-Tomescu\|Cryptographic Principles (Alin Tomescu)]] (blog, 2021)
- [[Plonk-Family-Note\|Note: PLONK / TurboPLONK / UltraPLONK Family]] (blog, 2021)
- [[ZKProof-Wiki\|ZKProof Wiki of Concrete ZKP Schemes]] (wiki, 2020)
- [[Evolution-of-ZKPs\|The Evolution of Zero Knowledge Proofs]] (blog, 2018)
- [[BFM88-NIZK-Intro\|Non-Interactive Zero-Knowledge and Its Applications (BFM88)]] (paper, 1988)
- [[GMR85-ZK-Complexity\|The Knowledge Complexity of Interactive Proof Systems (GMR85)]] (paper, 1985)

### zkvm

- [[comparative-analysis-of-sp1-and-risc-zero-zero-knowledge\|Comparative Analysis of SP1 and RISC Zero Zero-Knowledge Virtual Machines]] (blog, 2024)
- [[OpenVM-Docs\|OpenVM Documentation]] (doc, 2024)
- [[SP1-Docs\|SP1 Documentation (Succinct Labs)]] (doc, 2024)
- [[RISC-Zero-Docs\|RISC Zero Documentation]] (doc, 2023)
