# ZKP Vault

A knowledge vault covering Zero-Knowledge Proof papers, frameworks, cryptographic primitives, and tooling — from foundational theory to production-ready implementations. Built as an Obsidian notebook and mkDocs site, working toward a blog post on the most important elements of the ZKP ecosystem.

The vault is organized in four ways:

- [Resource Index](#resources-index) — 239 external resources (papers, blogs, books, courses, standards, docs, code) by type and topic
- [The ZK Stack](#the-zk-stack) — from foundational theory down to working tools
- [Framework Decision Guide](#framework-decision-guide) — evaluation criteria and framework comparison for e-ID credential proofs
- [Encyclopedic Index](#encyclopedic-index) — every entry, organized by category
- [Paper History](#paper-history) — chronological log of papers added to the vault

---

## Paper History

| Date | Title | Authors |
|---|---|---|
| 2026-10-23 | [Secure and Privacy-Preserving Credentials for E-ID - Final Report](Resources/papers/DHG26-MS4.md) | Carine Dengler, Clement Humbert, Linus Gasser |
|  | [Privacy-Enhancing Technologies for Digital Payments: Mapping the Landscape](Resources/papers/ABCD25-PETs-Payments.md) | Raphael Auer, Rainer Böhme, Jeremy Clark, Didem Demirag |
|  | [Server-Aided Anonymous Credentials](Resources/papers/CHLT25-Server-Aided-AC.md) | Rutchathon Chairattana-Apirom, Franklin Harding, Anna Lysyanskaya, Stefano Tessaro |
|  | [Security Analysis of the Swiss e-ID & Trust Infrastructure](Resources/papers/Egg25-Swiss-eID-Security.md) | Fabrice Egger |
|  | [SoK: (Un)usable Privacy: the Lack of Overlap between Privacy-Aware Sensing and Usable Privacy Research](Resources/papers/IES25-SoK-Unusable-Privacy.md) | Yasha Iravantchi, Pardis Emami-Naeini, Alanson Sample |
|  | [An Architecture for Distributed Digital Identities in the Physical World](Resources/papers/MRHHL25-Physical-Identities.md) | René Mayrhofer, Michael Roland, Tobias Höller, Philipp Hofer, Mario Lins |
|  | [General-Purpose Zero-Knowledge Proofs for Verifiable Credentials](Resources/papers/Mom25-GP-ZKP-VCs.md) | Damiano Mombelli |
|  | [Zero-Knowledge Proof Frameworks: A Systematic Survey](Resources/papers/SAKK25-ZKP-Frameworks-Survey.md) | Nojan Sheybani, Anees Ahmed, Michel Kinsy, Farinaz Koushanfar |
|  | [SoK: A Framework and Guide for Human-Centered Threat Modeling in Security and Privacy Research](Resources/papers/UZ25-SoK-Threat-Modeling.md) | Warda Usman, Daniel Zappala |
|  | [Practical Post-Quantum Signatures for Privacy](Resources/papers/AGJLRS24-PQ-Sigs-Privacy.md) | Sven Argo, Tim Güneysu, Corentin Jeudy, Georg Land, Adeline Roux-Langlois, Olivier Sanders |
|  | [Cryptographers' Feedback on the EU Digital Identity's ARF](Resources/papers/BBC+24-ARF-Feedback.md) | Carsten Baum, Olivier Blazy, Jan Camenisch, Jaap-Henk Hoepman, Eysa Lee, Anja Lehmann, Anna Lysyanskaya, René Mayrhofer, Hart Montgomery, Ngoc Khanh Nguyen, Bart Preneel, abhi shelat, Daniel Slamanig, Stefano Tessaro, Søren Eller Thomsen, Carmela Troncoso |
|  | [Cryptographic Accumulators: New Definitions, Enhanced Security, and Delegatable Proofs](Resources/papers/BBC24-Accumulators.md) | Anaïs Barthoulot, Olivier Blazy, Sébastien Canard |
|  | [Arc: Accumulation for Reed–Solomon Codes](Resources/papers/BMNW24-Arc.md) | Benedikt Bünz, Pratyush Mishra, Wilson Nguyen, William Wang |
|  | [SoK: Technical Implementation and Human Impact of Internet Privacy Regulations](Resources/papers/BRD+24-SoK-Privacy-Regulations.md) | Eleanor Birrell, Jay Rodolitz, Angel Ding, Jenna Lee, Emily McReynolds, Jevan Hutson, Ada Lerner |
|  | [Scalable and Privacy-Preserving Revocation of Verifiable Credentials](Resources/papers/Col24-Revocation.md) | Alessandro Colombo |
|  | [Do You Need a Zero Knowledge Proof?](Resources/papers/ECZJG24-Need-ZKP.md) | Jens Ernstberger, Stefanos Chaliasos, Liyi Zhou, Philipp Jovanovic, Arthur Gervais |
|  | [Circle STARKs](Resources/papers/HLP24-Circle-STARKs.md) | Ulrich Haböck, David Levit, Shahar Papini |
|  | [The BBS# protocol: Technical details](Resources/papers/Ora24-BBS-Sharp.md) | Orange |
|  | [Systematic review: Comparing zk-SNARK, zk-STARK, and bulletproof protocols for privacy-preserving authentication](Resources/papers/RES24-ZK-Systematic-Review.md) | Bjorn Oude Roelink, Mohammed El-Hajj, Dipti Sarmah |
|  | [CDLS: Proving Knowledge of Committed Discrete Logarithms with Soundness](Resources/papers/CLR23-CDLS.md) | Sofia Celi, Shai Levin, Joe Rowell |
|  | [SoK: Secure E-Voting with Everlasting Privacy](Resources/papers/HMMP23-SoK-EVoting.md) | Thomas Haines, Rafieh Mosaheb, Johannes Müller, Ivan Pryvalov |
|  | [SoK: Managing risks of linkage attacks on data privacy](Resources/papers/PB23-SoK-Linkage-Attacks.md) | Jovan Powar, Alastair R. Beresford |
|  | [Customizable Constraint Systems for Succinct Arguments](Resources/papers/STW23-CCS.md) | Srinath Setty, Justin Thaler, Riad Wahby |
|  | [Revisiting BBS Signatures](Resources/papers/TZ23-Revisiting-BBS.md) | Stefano Tessaro, Chenzhi Zhu |
|  | [Proofs of discrete logarithm equality across groups](Resources/papers/COPZ22-DLEQ-Across-Groups.md) | Melissa Chase, Michele Orrù, Trevor Perrin, Greg Zaverucha |
|  | [ALLOSAUR: Accumulator with Low-Latency Oblivious Sublinear Anonymous credential Updates with Revocations](Resources/papers/JLM22-ALLOSAUR.md) | Samuel Jaques, Michael Lodder, Hart Montgomery |
|  | [Spiral: Fast, High-Rate Single-Server PIR via FHE Composition](Resources/papers/MW22-Spiral.md) | Samir Jordan Menon, David J. Wu |
|  | [SoK: Privacy-Preserving Reputation Systems](Resources/papers/GG21-SoK-Reputation.md) | Stan Gurtler, Ian Goldberg |
|  | [Poseidon: A New Hash Function for Zero-Knowledge Proof Systems](Resources/papers/GKRRS21-Poseidon.md) | Lorenzo Grassi, Dmitry Khovratovich, Christian Rechberger, Arnab Roy, Markus Schofnegger |
|  | [One-more Unforgeability of Blind ECDSA](Resources/papers/QCY21-Blind-ECDSA.md) | Xianrui Qin, Cailing Cai, Tsz Hon Yuen |
|  | [Multi-Party Revocation in Sovrin: Performance through Distributed Trust](Resources/papers/HKRW20-Sovrin-Revocation.md) | Lukas Helminger, Daniel Kales, Sebastian Ramacher, Roman Walch |
|  | [Demystifying Arm TrustZone: A Comprehensive Survey](Resources/papers/PS19-TrustZone-Survey.md) | Sandro Pinto, Nuno Santos |
|  | [Libra: Succinct Zero-Knowledge Proofs with Optimal Prover Computation](Resources/papers/XZZPS19-Libra.md) | Tiancheng Xie, Jiaheng Zhang, Yupeng Zhang, Charalampos Papamanthou, Dawn Song |
|  | [Scalable, Transparent, and Post-Quantum Secure Computational Integrity](Resources/papers/BBHR18-STARK.md) | Eli Ben-Sasson, Iddo Bentov, Yinon Horesh, Michael Riabzev |
|  | [Improved Algebraic MACs and Practical Keyed-Verification Anonymous Credentials](Resources/papers/BBDT16-KVAC.md) | Amira Barki, Solenn Brunet, Nicolas Desmoulins, Jacques Traoré |
|  | [Anonymous Attestation Using the Strong Diffie Hellman Assumption Revisited](Resources/papers/CDL16-DAA-qSDH.md) | Jan Camenisch, Manu Drijvers, Anja Lehmann |
|  | [Cinderella: Turning Shabby X.509 Certificates into Elegant Anonymous Credentials with the Magic of Verifiable Computation](Resources/papers/DFKP16-Cinderella.md) | Antoine Delignat-Lavaud, Cédric Fournet, Markulf Kohlweiss, Bryan Parno |
|  | [Short Randomizable Signatures](Resources/papers/PS16-Randomizable-Sigs.md) | David Pointcheval, Olivier Sanders |
|  | [Succinct Non-Interactive Zero Knowledge for a von Neumann Architecture](Resources/papers/BCTV13-vonNeumann.md) | Eli Ben-Sasson, Alessandro Chiesa, Eran Tromer, Madars Virza |
|  | [Zero-Knowledge Argument for Polynomial Evaluation with Application to Blacklists](Resources/papers/BG13-Polynomial-Evaluation.md) | Stephanie Bayer, Jens Groth |
|  | [High-Speed High-Security Signatures](Resources/papers/BDLSY11-Ed25519.md) | Daniel J. Bernstein, Niels Duif, Tanja Lange, Peter Schwabe, Bo-Yin Yang |
|  | [A Terminology for Talking about Privacy by Data Minimization: Anonymity, Unlinkability, Undetectability, Unobservability, Pseudonymity, and Identity Management](Resources/papers/PH10-Privacy-Terminology.md) | Andreas Pfitzmann, Marit Hansen |
|  | [Unifying Zero-Knowledge Proofs of Knowledge](Resources/papers/Mau09-Unifying-ZKPoK.md) | Ueli Maurer |
|  | [Delegating Computation: Interactive Proofs for Muggles](Resources/papers/GKR08-Muggles.md) | Shafi Goldwasser, Yael Tauman Kalai, Guy N. Rothblum |
|  | [Constant-Size Dynamic k-TAA](Resources/papers/ASM06-Dynamic-kTAA.md) | Man Ho Au, Willy Susilo, Yi Mu |
|  | [Signature Schemes and Anonymous Credentials from Bilinear Maps](Resources/papers/CL04-Bilinear-Sigs.md) | Jan Camenisch, Anna Lysyanskaya |
|  | [A Signature Scheme with Efficient Protocols](Resources/papers/CL02-CL-Signatures.md) | Jan Camenisch, Anna Lysyanskaya |
|  | [Short Signatures from the Weil Pairing](Resources/papers/BLS01-Short-Sigs.md) | Dan Boneh, Ben Lynn, Hovav Shacham |
|  | [Efficient Signature Generation by Smart Cards](Resources/papers/Sch91-Schnorr-Signatures.md) | Claus-Peter Schnorr |
|  | [Multi-Prover Interactive Proofs: How to Remove Intractability Assumptions](Resources/papers/BGKW88-MIP.md) | Michael Ben-Or, Shafi Goldwasser, Joe Kilian, Avi Wigderson |
|  | [A "Paradoxical" Identity-Based Signature Scheme Resulting from Zero-Knowledge](Resources/papers/GQ88-Identity-Signature.md) | Louis Claude Guillou, Jean-Jacques Quisquater |
|  | [A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms](Resources/papers/Elg85-ElGamal.md) | Taher ElGamal |
|  | [A Method for Obtaining Digital Signatures and Public-Key Cryptosystems](Resources/papers/RSA78-RSA.md) | Ronald L. Rivest, Adi Shamir, Leonard Adleman |
|  | [New Directions in Cryptography](Resources/papers/DH76-New-Directions.md) | Whitfield Diffie, Martin E. Hellman |
| 2026-10-22 | [SoK: Trusting Self-Sovereign Identity](Resources/papers/KPRK24-SoK-SSI-Trust.md) | Evan Krul, Hye-young Paik, Sushmita Ruj, Salil S. Kanhere |
| 2026-10-22 | [SoK: Anonymous Credentials for Digital Identity Wallets](Resources/papers/BL26-SoK-AnonCreds.md) | Christian Bormann, Anja Lehmann |
| 2026-09-29 | [SNARKs for C: Verifying Program Executions Succinctly and in Zero Knowledge](Resources/papers/BCGTV13-SNARKs-for-C.md) | Eli Ben-Sasson, Alessandro Chiesa, Daniel Genkin, Eran Tromer, Madars Virza |
| 2026-09-29 | [Modular Design of Secure yet Practical Cryptographic Protocols](Resources/papers/Cra97-Modular-Design.md) | Ronald Cramer |
| 2026-09-15 | [OpenAC: Open Design for Transparent and Lightweight Anonymous Credentials](Resources/papers/ENRTTX26-OpenAC.md) | Liam Eagen, Hy Ngo, Vikas Rushi, Ying Tong, Moven Tsai, Janabel Xia |
| 2026-05-20 | [On the (Privacy) Harms of the European Digital Identity Framework](Resources/papers/KVRSCLT26-EUDIF-Harms.md) | Christian Knabenhans, Shannon Veitch, Mathilde Raynal, Theresa Stadler, Sylvain Chatel, Wouter Lueks, Carmela Troncoso |
| | [Device Binding for Anonymous Credentials on Legacy Phones](Resources/papers/LZ26-AnonCreds-Legacy.md) | Anja Lehmann, Alexandros Zacharakis |
| | [Device-Bound Anonymous Credentials With(out) Trusted Hardware](Resources/papers/FHLL25-AnonCreds-TrustedHW.md) | Karla Friedrichs, Franklin Harding, Anja Lehmann, Anna Lysyanskaya |
| 2026-04-29 | [Secure and Privacy-Preserving Credentials for E-ID Proof-of-Concept](Resources/papers/GHE25-MS2.md) | Linus Gasser, Clement Humbert, Ahmed Elghareeb |
| | [Taxonomy for Privacy-Preserving Electronic Identities](Resources/papers/GHE25-Taxonomy.md) | Linus Gasser, Clement Humbert, Ahmed Elghareeb |
| | [Crescent: Stronger Privacy for Existing Credentials](Resources/papers/PPZ24-Crescent.md) | Christian Paquin, Guru-Vamsi Policharla, Greg Zaverucha |
| | [Anonymous Credentials from ECDSA](Resources/papers/FS24-Longfellow.md) | Matteo Frigo, abhi shelat |
| | [Vision: A Modular Framework for Anonymous Credential Systems](Resources/papers/LSZ25-Vision.md) | Anja Lehmann, Andrey Sidorenko, Alexandros Zacharakis |
| | [Short Group Signatures](Resources/papers/BBS04-ShortGroupSigs.md) | Dan Boneh, Xavier Boyen, Hovav Shacham |
| 2026-04-22 | [Designated-Verifier Dynamic zk-SNARKs with Applications to Dynamic Proofs of Index](Resources/papers/WPSP26-DV-Dynamic-zkSNARKs.md) | Weijie Wang, Charalampos Papamanthou, Shravan Srinivasan, Dimitrios Papadopoulos |
| | [LegoSNARK: Modular Design and Composition of Efficient Zero-Knowledge Proofs](Resources/papers/CFQW19-LegoSNARK.md) | Matteo Campanelli, Dario Fiore, Anaïs Querol, Hadrianus Waldner |
| | [Algebraic Methods for Interactive Proof Systems](Resources/papers/LFKN92-Sumcheck.md) | Carsten Lund, Lance Fortnow, Howard Karloff, Noam Nisan |
| | [Fast Probabilistic Algorithms for Verification of Polynomial Identities](Resources/papers/Sch80-Schwartz-Zippel.md) | Jacob T. Schwartz |
| 2026-03-25 | Initial batch (28 papers) — [browse all](Resources/papers/README.md) | |

---
 
## Resources Index

| Type | Count | Browse |
|---|---|---|
| Papers | 100 | [Resources/papers](Resources/papers/README.md) |
| Blogs & Explainers | 28 | [Resources/blogs](Resources/blogs/README.md) |
| Books | 4 | [Resources/books](Resources/books/README.md) |
| Courses | 6 | [Resources/courses](Resources/courses/README.md) |
| Wikis & Standards | 30 | [Resources/wikis](Resources/wikis/README.md) |
| Documentation | 24 | [Resources/docs](Resources/docs/README.md) |
| Code & Repositories | 47 | [Resources/code](Resources/code/README.md) |

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
