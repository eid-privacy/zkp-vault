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

Curated external resources for Zero-Knowledge Proofs — 274 entries across papers, blogs, books, courses, wikis, docs, and code repositories.

_This file is auto-generated. Run `devbox run summaries` to update._

## By Type

- [Papers](./papers/README.md)
- [Blogs & Explainers](./blogs/README.md)
- [Books](./books/README.md)
- [Courses](./courses/README.md)
- [Wikis & Standards](./wikis/README.md)
- [Documentation](./docs/README.md)
- [Code & Repositories](./code/README.md)

## By Topic

| a-c | d-i | i-p | p-s | s-z |
| --- | --- | --- | --- | --- |
| [accumulators](#accumulators) | [did](#did) | [iop](#iop) | [post-quantum](#post-quantum) | [stark](#stark) |
| [anonymous-credentials](#anonymous-credentials) | [discrete-log](#discrete-log) | [learning](#learning) | [privacy](#privacy) | [theory](#theory) |
| [applications](#applications) | [eid](#eid) | [library](#library) | [prover-backend](#prover-backend) | [threat-modeling](#threat-modeling) |
| [arithmetization](#arithmetization) | [elliptic-curves](#elliptic-curves) | [linear-time-prover](#linear-time-prover) | [range-proof](#range-proof) | [transformation](#transformation) |
| [attestation](#attestation) | [explainer](#explainer) | [llvm](#llvm) | [reed-solomon](#reed-solomon) | [transparent](#transparent) |
| [book](#book) | [foundational](#foundational) | [logarithmic](#logarithmic) | [reference](#reference) | [trusted-setup](#trusted-setup) |
| [circuit](#circuit) | [frameworks](#frameworks) | [lookup](#lookup) | [regulation](#regulation) | [tutorials](#tutorials) |
| [circuit-dsl](#circuit-dsl) | [go](#go) | [mathematics](#mathematics) | [revocation](#revocation) | [universal-setup](#universal-setup) |
| [commit-and-prove](#commit-and-prove) | [hardware](#hardware) | [mpc](#mpc) | [scalable](#scalable) | [use-cases](#use-cases) |
| [commitment](#commitment) | [history](#history) | [non-interactive](#non-interactive) | [sigma](#sigma) | [wasm](#wasm) |
| [composition](#composition) | [implementations](#implementations) | [openid4vc](#openid4vc) | [signatures](#signatures) | [zkp](#zkp) |
| [credential-format](#credential-format) | [information-theoretic](#information-theoretic) | [overview](#overview) | [snark](#snark) | [zkvm](#zkvm) |
| [cryptography](#cryptography) | [interactive-proof](#interactive-proof) | [pairing](#pairing) | [standard](#standard) |  |

### accumulators

- [[BBC24-Accumulators|Cryptographic Accumulators: New Definitions, Enhanced Security, and Delegatable Proofs (Barthoulot, Blazy, Canard 2024)]] (paper, 2024)
- [[Col24-Revocation|Scalable and Privacy-Preserving Revocation of Verifiable Credentials (Colombo 2024)]] (paper, 2024)
- [[JLM22-ALLOSAUR|ALLOSAUR: Accumulator with Low-Latency Oblivious Sublinear Anonymous credential Updates with Revocations (Jaques, Lodder, Montgomery 2022)]] (paper, 2022)
- [[docknetwork-crypto|docknetwork/crypto (incl. vb_accumulator)]] (code, 2021)
- [[HKRW20-Sovrin-Revocation|Multi-Party Revocation in Sovrin: Performance through Distributed Trust (Helminger, Kales, Ramacher, Walch 2020)]] (paper, 2020)

### anonymous-credentials

- [[W3C-VC-DI-BBS|Data Integrity BBS Cryptosuites v1.0 (W3C)]] (wiki, 2026)
- [[IRTF-CFRG-BBS-Signatures|The BBS Signature Scheme — IRTF CFRG draft]] (wiki, 2026)
- [[IRTF-CFRG-BBS-Per-Verifier-Linkability|BBS per Verifier Linkability — IRTF CFRG draft]] (wiki, 2025)
- [[IRTF-CFRG-BBS-Blind-Signatures|Blind BBS Signatures — IRTF CFRG draft]] (wiki, 2025)
- [[MSR-Crescent-Library-Blog|Crescent library brings privacy to digital identity systems (Microsoft Research, 2025)]] (blog, 2025)
- [[WOSPG25-Legacy-PoP|Efficient Proofs of Possession for Legacy Signatures (Woo, Ozdemir, Sharp, Pornin, Grubbs 2025)]] (paper, 2025)
- [[DKLW25-Lattice-Proof-Friendly-Sigs|Lattice-Based Proof-Friendly Signatures from Vanishing Short Integer Solutions (Dubois, Klooß, Lai, Woo 2025)]] (paper, 2025)
- [[Orr25-Revisiting-KVAC|Revisiting Keyed-Verification Anonymous Credentials (Orrù 2025)]] (paper, 2025)
- [[CHLT25-Server-Aided-AC|Server-Aided Anonymous Credentials (Chairattana-Apirom, Harding, Lysyanskaya, Tessaro 2025)]] (paper, 2025)
- [[BBC+24-ARF-Feedback|Cryptographers' Feedback on the EU Digital Identity's ARF (Baum et al. 2024)]] (paper, 2024)
- [[AGJLRS24-PQ-Sigs-Privacy|Practical Post-Quantum Signatures for Privacy (Argo, Güneysu, Jeudy, Land, Roux-Langlois, Sanders 2024)]] (paper, 2024)
- [[Ora24-BBS-Sharp|The BBS# protocol: Technical details (Orange 2024)]] (paper, 2024)
- [[HSS23-Bind-AC-Humans|How to Bind Anonymous Credentials to Humans (Hesse, Singh, Sorniotti 2023)]] (paper, 2023)
- [[TZ23-Revisiting-BBS|Revisiting BBS Signatures (Tessaro, Zhu 2023)]] (paper, 2023)
- [[KMPQ23-SoK-AnonCreds|SoK: Anonymous Credentials (Kakvi, Martin, Putman, Quaglia 2023)]] (paper, 2023)
- [[RWGM23-zk-creds|zk-creds: Flexible Anonymous Credentials from zkSNARKs and Existing Identity Infrastructure (Rosenberg, White, Garman, Miers 2023)]] (paper, 2023)
- [[JLM22-ALLOSAUR|ALLOSAUR: Accumulator with Low-Latency Oblivious Sublinear Anonymous credential Updates with Revocations (Jaques, Lodder, Montgomery 2022)]] (paper, 2022)
- [[anoncreds-anoncreds-v2-rs|anoncreds/anoncreds-v2-rs]] (code, 2022)
- [[microsoft-bbs-node-reference|microsoft/bbs-node-reference]] (code, 2022)
- [[MMZ+21-CanDID|CanDID: Can-Do Decentralized Identity with Legacy Compatibility, Sybil-Resistance, and Accountability (Maram et al. 2021)]] (paper, 2021)
- [[docknetwork-crypto|docknetwork/crypto (incl. vb_accumulator)]] (code, 2021)
- [[BEKRS21-Issuer-Hiding|Issuer-Hiding Attribute-Based Credentials (Bobolz, Eidens, Krenn, Ramacher, Samelin 2021)]] (paper, 2021)
- [[mattrglobal-pairing_crypto|mattrglobal/pairing_crypto]] (code, 2021)
- [[mattrglobal-bbs-signatures|@mattrglobal/bbs-signatures (MATTR)]] (code, 2020)
- [[CPZ20-Signal-Groups|The Signal Private Group System and Anonymous Credentials Supporting Efficient Verifiable Encryption (Chase, Perrin, Zaverucha 2020)]] (paper, 2020)
- [[openwallet-foundation-acapy|openwallet-foundation/acapy (ACA-Py)]] (code, 2019)
- [[CDL16-DAA-qSDH|Anonymous Attestation Using the Strong Diffie Hellman Assumption Revisited (Camenisch, Drijvers, Lehmann 2016)]] (paper, 2016)
- [[DFKP16-Cinderella|Cinderella: Turning Shabby X.509 Certificates into Elegant Anonymous Credentials with the Magic of Verifiable Computation (Delignat-Lavaud, Fournet, Kohlweiss, Parno 2016)]] (paper, 2016)
- [[BBDT16-KVAC|Improved Algebraic MACs and Practical Keyed-Verification Anonymous Credentials (Barki, Brunet, Desmoulins, Traoré 2016)]] (paper, 2016)
- [[PS16-Randomizable-Sigs|Short Randomizable Signatures (Pointcheval, Sanders 2016)]] (paper, 2016)
- [[CMZ14-KVAC|Algebraic MACs and Keyed-Verification Anonymous Credentials (Chase, Meiklejohn, Zaverucha 2014)]] (paper, 2014)
- [[BCD+14-ABC4Trust|D2.2 Architecture for Attribute-based Credential Technologies — Final Version (ABC4Trust) (Bichsel et al. 2014)]] (paper, 2014)
- [[BL13-ACL|Anonymous Credentials Light (Baldimtsi, Lysyanskaya 2013)]] (paper, 2013)
- [[PZ11-U-Prove|U-Prove Cryptographic Specification V1.1 (Paquin, Zaverucha 2011)]] (paper, 2011)
- [[ASM06-Dynamic-kTAA|Constant-Size Dynamic k-TAA (Au, Susilo, Mu 2006)]] (paper, 2006)
- [[CL04-Bilinear-Sigs|Signature Schemes and Anonymous Credentials from Bilinear Maps (Camenisch, Lysyanskaya 2004)]] (paper, 2004)
- [[CL02-CL-Signatures|A Signature Scheme with Efficient Protocols (Camenisch, Lysyanskaya 2002)]] (paper, 2002)

### applications

- [[eid-privacy-docknetwork-crypto-library|Choosing a Cryptographic Library for Anonymous Credentials (eid-privacy, 2026)]] (blog, 2026)
- [[WPSP26-DV-Dynamic-zkSNARKs|Designated-Verifier Dynamic zk-SNARKs with Applications to Dynamic Proofs of Index (Wang et al. 2026)]] (paper, 2026)
- [[LZ26-AnonCreds-Legacy|Device Binding for Anonymous Credentials on Legacy Phones (Lehmann, Zacharakis 2026)]] (paper, 2026)
- [[KVRSCLT26-EUDIF-Harms|On the (Privacy) Harms of the European Digital Identity Framework (Knabenhans, Veitch, Raynal, Stadler, Chatel, Lueks, Troncoso 2026)]] (paper, 2026)
- [[ENRTTX26-OpenAC|OpenAC: Open Design for Transparent and Lightweight Anonymous Credentials (Eagen, Ngo, Rushi, Tong, Tsai, Xia 2026)]] (paper, 2026)
- [[eid-privacy-poc-report|Proof-of-Concept for ZKPs (eid-privacy, 2026)]] (blog, 2026)
- [[DHG26-MS4|Secure and Privacy-Preserving Credentials for E-ID - Final Report (Dengler, Humbert, Gasser 2026)]] (paper, 2026)
- [[GHE26-MS2|Secure and Privacy-Preserving Credentials for E-ID Proof-of-Concept (Gasser, Humbert, Elghareeb 2026)]] (paper, 2026)
- [[BL26-SoK-AnonCreds|SoK: Anonymous Credentials for Digital Identity Wallets (Bormann, Lehmann 2026)]] (paper, 2026)
- [[MRHHL25-Physical-Identities|An Architecture for Distributed Digital Identities in the Physical World (Mayrhofer, Roland, Höller, Hofer, Lins 2025)]] (paper, 2025)
- [[eid-privacy-comparing-zk-systems|Comparing ZK Systems (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-crescent-longfellow|Crescent and Longfellow (eid-privacy, 2025)]] (blog, 2025)
- [[MSR-Crescent-Library-Blog|Crescent library brings privacy to digital identity systems (Microsoft Research, 2025)]] (blog, 2025)
- [[FHLL25-AnonCreds-TrustedHW|Device-Bound Anonymous Credentials With(out) Trusted Hardware (Friedrichs, Harding, Lehmann, Lysyanskaya 2025)]] (paper, 2025)
- [[Mom25-GP-ZKP-VCs|General-Purpose Zero-Knowledge Proofs for Verifiable Credentials (Mombelli 2025)]] (paper, 2025)
- [[eid-privacy-swiyu-demo|Open Source SWIYU Demo application (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-privacy-unlinkability|Overview of Privacy and Unlinkability (eid-privacy, 2025)]] (blog, 2025)
- [[ABCD25-PETs-Payments|Privacy-Enhancing Technologies for Digital Payments: Mapping the Landscape (Auer, Böhme, Clark, Demirag 2025)]] (paper, 2025)
- [[Egg25-Swiss-eID-Security|Security Analysis of the Swiss e-ID & Trust Infrastructure (Egger 2025)]] (paper, 2025)
- [[Dyne-Longfellow-ZK-Review|The Longfellow ZK (Google-zk) (Dyne.org, 2025)]] (blog, 2025)
- [[LSZ25-Vision|Vision: A Modular Framework for Anonymous Credential Systems (Lehmann, Sidorenko, Zacharakis 2025)]] (paper, 2025)
- [[FS24-Longfellow|Anonymous Credentials from ECDSA (Frigo & shelat 2024)]] (paper, 2024)
- [[PPZ24-Crescent|Crescent: Stronger Privacy for Existing Credentials (Paquin, Policharla, Zaverucha 2024)]] (paper, 2024)
- [[BBC+24-ARF-Feedback|Cryptographers' Feedback on the EU Digital Identity's ARF (Baum et al. 2024)]] (paper, 2024)
- [[ECZJG24-Need-ZKP|Do You Need a Zero Knowledge Proof? (Ernstberger, Chaliasos, Zhou, Jovanovic, Gervais 2024)]] (paper, 2024)
- [[microsoft-crescent-credentials|Microsoft Crescent Credentials (Spartan-t256 Fork)]] (code, 2023)
- [[HMMP23-SoK-EVoting|SoK: Secure E-Voting with Everlasting Privacy (Haines, Mosaheb, Müller, Pryvalov 2023)]] (paper, 2023)
- [[FLM22-ZKAttest|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys (Faz-Hernández, Ladd, Maram 2022)]] (paper, 2022)
- [[MMZ+21-CanDID|CanDID: Can-Do Decentralized Identity with Legacy Compatibility, Sybil-Resistance, and Accountability (Maram et al. 2021)]] (paper, 2021)
- [[GG21-SoK-Reputation|SoK: Privacy-Preserving Reputation Systems (Gurtler, Goldberg 2021)]] (paper, 2021)
- [[SwissCovid-Keeps-Your-Secrets|SwissCovid Keeps Your Secrets (House of Switzerland, 2020)]] (blog, 2020)
- [[DFKP16-Cinderella|Cinderella: Turning Shabby X.509 Certificates into Elegant Anonymous Credentials with the Magic of Verifiable Computation (Delignat-Lavaud, Fournet, Kohlweiss, Parno 2016)]] (paper, 2016)

### arithmetization

- [[STW23-CCS|Customizable Constraint Systems for Succinct Arguments (Setty, Thaler, Wahby 2023)]] (paper, 2023)
- [[CBBZ23-HyperPlonk|HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates (Chen et al. 2023)]] (paper, 2023)
- [[plonkish-arithmetization|PLONKish Arithmetization]] (blog, 2022)
- [[plonkish_arithmetization|PLONKish Arithmetization — ZK Jargon]] (doc, 2022)
- [[R1CS-Docs|R1CS Explainer (0xPARC / Circom)]] (doc, 2022)
- [[Halo2-Docs|Halo2 Documentation (Zcash)]] (doc, 2021)
- [[GKRRS21-Poseidon|Poseidon: A New Hash Function for Zero-Knowledge Proof Systems (Grassi, Khovratovich, Rechberger, Roy, Schofnegger 2021)]] (paper, 2021)
- [[AIR-Docs|STARK 101 — AIR Tutorial (StarkWare)]] (doc, 2021)
- [[GW20-Plookup|Plookup: A Simplified Polynomial Protocol for Lookup Tables (Gabizon-Williamson 2020)]] (paper, 2020)
- [[GWC19-PLONK|PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge]] (paper, 2019)
- [[GW19b-TurboPlonk|TurboPLONK Proposal (ZKProof Workshop 3)]] (paper, 2019)

### attestation

- [[Ora24-BBS-Sharp|The BBS# protocol: Technical details (Orange 2024)]] (paper, 2024)
- [[HSS23-Bind-AC-Humans|How to Bind Anonymous Credentials to Humans (Hesse, Singh, Sorniotti 2023)]] (paper, 2023)
- [[FLM22-ZKAttest|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys (Faz-Hernández, Ladd, Maram 2022)]] (paper, 2022)
- [[PS19-TrustZone-Survey|Demystifying Arm TrustZone: A Comprehensive Survey (Pinto, Santos 2019)]] (paper, 2019)
- [[CDL16-DAA-qSDH|Anonymous Attestation Using the Strong Diffie Hellman Assumption Revisited (Camenisch, Drijvers, Lehmann 2016)]] (paper, 2016)

### book

- [[Thaler-Proofs-Arguments-ZK|Proofs, Arguments, and Zero-Knowledge]] (book, 2023)
- [[MoonMath-Manual|MoonMath Manual to zk-SNARKs]] (book, 2021)
- [[Shostack-Threat-Modeling|Threat Modeling: Designing for Security]] (book, 2014)
- [[Howard-Lipner-Security-Development-Lifecycle|The Security Development Lifecycle]] (book, 2006)

### circuit

- [[a-deep-dive-into-axioms-halo2-circuits|A Deep Dive into Axiom's Halo2 Circuits]] (blog, 2025)
- [[Polyhedra-Expander-Compiler-Collection|Announcing the Expander Compiler Collection (ECC) (Polyhedra, 2024)]] (blog, 2024)
- [[CMSCGD23-ZK-Circuit-Verification|Compositional Formal Verification of Zero-Knowledge Circuits (Coglio, McCarthy, Smith, Chin, Gaddamadugu, Dellepere 2023)]] (paper, 2023)
- [[plonkish-arithmetization|PLONKish Arithmetization]] (blog, 2022)
- [[plonkish_arithmetization|PLONKish Arithmetization — ZK Jargon]] (doc, 2022)
- [[R1CS-Docs|R1CS Explainer (0xPARC / Circom)]] (doc, 2022)
- [[applied-crypto-heimdall|applied-crypto/heimdall]] (code, 2021)
- [[GKRRS21-Poseidon|Poseidon: A New Hash Function for Zero-Knowledge Proof Systems (Grassi, Khovratovich, Rechberger, Roy, Schofnegger 2021)]] (paper, 2021)
- [[arkworks-rs-crypto-primitives|arkworks-rs/crypto-primitives]] (code, 2020)

### circuit-dsl

- [[eid-privacy-noir-tom256|eid-privacy/noir]] (code, 2026)
- [[eid-privacy-spartan-backend|eid-privacy/spartan-backend]] (code, 2026)
- [[eid-privacy-zkp-pocs|eid-privacy/zkp-pocs]] (code, 2025)
- [[noirs-circuit-backend|Noir's Circuit Backend]] (blog, 2023)
- [[Noir-Docs|Noir Documentation]] (doc, 2022)
- [[noir-lang-noir|noir-lang/noir — ACVM Repository]] (code, 2022)
- [[Circom2-Docs|Circom2 Documentation]] (doc, 2021)
- [[Halo2-Docs|Halo2 Documentation (Zcash)]] (doc, 2021)
- [[ZoKrates-Docs|ZoKrates Documentation]] (doc, 2018)
- [[0xPARC-Learn-ZK|ZK Learning Resources by 0xPARC]] (course)

### commit-and-prove

- [[LSZ25-Vision|Vision: A Modular Framework for Anonymous Credential Systems (Lehmann, Sidorenko, Zacharakis 2025)]] (paper, 2025)
- [[KMN23-Sigmabus|Sigmabus: Binding Sigmas in Circuits for Fast Curve Operations (Kadianakis, Maller, Novakovic 2023)]] (paper, 2023)
- [[CFQW19-LegoSNARK|LegoSNARK: Modular Design and Composition of Efficient Zero-Knowledge Proofs (Campanelli et al. 2019)]] (paper, 2019)

### commitment

- [[docknetwork-crypto-library|DockNetwork Crypto Library Analysis]] (doc, 2026)
- [[arkworks-rs-crypto-primitives|arkworks-rs/crypto-primitives]] (code, 2020)
- [[BBB+17-Bulletproofs|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[WTSTW17-Hyrax|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[BBS04-ShortGroupSigs|Short Group Signatures (Boneh, Boyen, Shacham 2004)]] (paper, 2004)
- [[Ped91-Commitments|Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing (Pedersen 1991)]] (paper, 1991)

### composition

- [[LSZ25-Vision|Vision: A Modular Framework for Anonymous Credential Systems (Lehmann, Sidorenko, Zacharakis 2025)]] (paper, 2025)
- [[BMNW24-Arc|Arc: Accumulation for Reed–Solomon Codes (Bünz, Mishra, Nguyen, Wang 2024)]] (paper, 2024)
- [[CFQW19-LegoSNARK|LegoSNARK: Modular Design and Composition of Efficient Zero-Knowledge Proofs (Campanelli et al. 2019)]] (paper, 2019)

### credential-format

- [[W3C-VC-DI-BBS|Data Integrity BBS Cryptosuites v1.0 (W3C)]] (wiki, 2026)
- [[IETF-SD-JWT-VC|SD-JWT-based Verifiable Digital Credentials (SD-JWT VC) — IETF draft]] (wiki, 2026)
- [[W3C-Bitstring-Status-List|Bitstring Status List v1.0 (W3C Recommendation)]] (wiki, 2025)
- [[IETF-RFC9901-SD-JWT|RFC 9901: Selective Disclosure for JSON Web Tokens (SD-JWT)]] (wiki, 2025)
- [[Sphereon-did-jwt|Sphereon-Opensource/did-jwt]] (code, 2025)
- [[W3C-VC-Data-Model-2.0|Verifiable Credentials Data Model v2.0 (W3C Recommendation)]] (wiki, 2025)
- [[procivis-one-core|procivis/one-core]] (code, 2024)
- [[W3C-VC-Data-Model-1.1|Verifiable Credentials Data Model v1.1 (W3C Recommendation)]] (wiki, 2022)
- [[ISO-IEC-18013-5-mDL|ISO/IEC 18013-5:2021 — Mobile driving licence (mDL) application]] (wiki, 2021)
- [[W3C-JSON-LD-1.1|JSON-LD 1.1 (W3C Recommendation)]] (wiki, 2020)
- [[spruceid-ssi|spruceid/ssi]] (code, 2020)
- [[decentralized-identity-veramo|decentralized-identity/veramo]] (code, 2019)
- [[Overlays-Capture-Architecture|Overlays Capture Architecture (OCA)]] (wiki)

### cryptography

- [[LZ26-AnonCreds-Legacy|Device Binding for Anonymous Credentials on Legacy Phones (Lehmann, Zacharakis 2026)]] (paper, 2026)
- [[ENRTTX26-OpenAC|OpenAC: Open Design for Transparent and Lightweight Anonymous Credentials (Eagen, Ngo, Rushi, Tong, Tsai, Xia 2026)]] (paper, 2026)
- [[BL26-SoK-AnonCreds|SoK: Anonymous Credentials for Digital Identity Wallets (Bormann, Lehmann 2026)]] (paper, 2026)
- [[FHLL25-AnonCreds-TrustedHW|Device-Bound Anonymous Credentials With(out) Trusted Hardware (Friedrichs, Harding, Lehmann, Lysyanskaya 2025)]] (paper, 2025)
- [[GHE25-Taxonomy|Taxonomy for Privacy-Preserving Electronic Identities (Gasser, Humbert, Elghareeb 2025)]] (paper, 2025)
- [[BBC24-Accumulators|Cryptographic Accumulators: New Definitions, Enhanced Security, and Delegatable Proofs (Barthoulot, Blazy, Canard 2024)]] (paper, 2024)
- [[MW22-Spiral|Spiral: Fast, High-Rate Single-Server PIR via FHE Composition (Menon, Wu 2022)]] (paper, 2022)
- [[Cryptographic-Principles-Tomescu|Cryptographic Principles (Alin Tomescu)]] (blog, 2021)
- [[QCY21-Blind-ECDSA|One-more Unforgeability of Blind ECDSA (Qin, Cai, Yuen 2021)]] (paper, 2021)
- [[GKRRS21-Poseidon|Poseidon: A New Hash Function for Zero-Knowledge Proof Systems (Grassi, Khovratovich, Rechberger, Roy, Schofnegger 2021)]] (paper, 2021)
- [[BBDT16-KVAC|Improved Algebraic MACs and Practical Keyed-Verification Anonymous Credentials (Barki, Brunet, Desmoulins, Traoré 2016)]] (paper, 2016)
- [[NIST-FIPS-180-4|FIPS 180-4: Secure Hash Standard (SHS)]] (wiki, 2015)
- [[NIST-FIPS-202|FIPS 202: SHA-3 Standard]] (wiki, 2015)
- [[IETF-RFC7539-ChaCha20-Poly1305|RFC 7539: ChaCha20 and Poly1305 for IETF Protocols]] (wiki, 2015)
- [[BBS04-ShortGroupSigs|Short Group Signatures (Boneh, Boyen, Shacham 2004)]] (paper, 2004)
- [[NIST-FIPS-197|FIPS 197: Advanced Encryption Standard (AES)]] (wiki, 2001)
- [[CM99-Safe-Primes|Proving in Zero-Knowledge that a Number is the Product of Two Safe Primes (Camenisch-Michels 1999)]] (paper, 1999)
- [[CS97-DL-Proofs|Proof Systems for General Statements about Discrete Logarithms (Camenisch-Stadler 1997)]] (paper, 1997)
- [[Ped91-Commitments|Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing (Pedersen 1991)]] (paper, 1991)
- [[Elg85-ElGamal|A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms (ElGamal 1985)]] (paper, 1985)
- [[RSA78-RSA|A Method for Obtaining Digital Signatures and Public-Key Cryptosystems (Rivest, Shamir, Adleman 1978)]] (paper, 1978)
- [[DH76-New-Directions|New Directions in Cryptography (Diffie, Hellman 1976)]] (paper, 1976)
- [[Stanford-CS355-Topics-Cryptography|Stanford CS 355: Topics in Cryptography]] (course)

### did

- [[swiyu-Trust-Protocol|swiyu Trust Protocol 2.0 Specification]] (doc, 2026)
- [[Sphereon-did-jwt|Sphereon-Opensource/did-jwt]] (code, 2025)
- [[did-webvh-Method|The did:webvh DID Method — did:web + Verifiable History (v1.0)]] (wiki, 2025)
- [[did-webvh-Libraries|did:webvh implementations (TypeScript, Python, Rust, Go)]] (code, 2024)
- [[DIF-DIDComm-Messaging-v2|DIDComm Messaging v2.x (DIF)]] (wiki, 2024)
- [[beatt83-didcomm-swift|beatt83/didcomm-swift]] (code, 2023)
- [[SIOPv2|Self-Issued OpenID Provider v2 (SIOPv2)]] (wiki, 2023)
- [[W3C-DID-Core-1.0|Decentralized Identifiers (DIDs) v1.0 (W3C Recommendation)]] (wiki, 2022)
- [[microsoft-entra-verifiedid-wallet-library|Microsoft Entra Verified ID wallet libraries (Android & iOS)]] (code, 2022)
- [[openwallet-foundation-didcomm-mediator-credo|openwallet-foundation/didcomm-mediator-credo]] (code, 2022)
- [[MMZ+21-CanDID|CanDID: Can-Do Decentralized Identity with Legacy Compatibility, Sybil-Resistance, and Accountability (Maram et al. 2021)]] (paper, 2021)
- [[sicpa-dlab-didcomm-jvm|sicpa-dlab/didcomm-jvm]] (code, 2021)
- [[sicpa-dlab-didcomm-python|sicpa-dlab/didcomm-python]] (code, 2021)
- [[sicpa-dlab-didcomm-rust|sicpa-dlab/didcomm-rust]] (code, 2021)
- [[Sphereon-SSI-SDK|Sphereon-Opensource/SSI-SDK]] (code, 2021)
- [[spruceid-ssi|spruceid/ssi]] (code, 2020)
- [[decentralized-identity-veramo|decentralized-identity/veramo]] (code, 2019)
- [[openwallet-foundation-acapy|openwallet-foundation/acapy (ACA-Py)]] (code, 2019)
- [[did-web-Method|did:web Method Specification (W3C CCG)]] (wiki)

### discrete-log

- [[Orr25-Revisiting-KVAC|Revisiting Keyed-Verification Anonymous Credentials (Orrù 2025)]] (paper, 2025)
- [[IRTF-CFRG-Sigma-Protocols|Sigma Protocols — IRTF CFRG draft]] (wiki, 2025)
- [[CLR23-CDLS|CDLS: Proving Knowledge of Committed Discrete Logarithms with Soundness (Celi, Levin, Rowell 2023)]] (paper, 2023)
- [[COPZ22-DLEQ-Across-Groups|Proofs of discrete logarithm equality across groups (Chase, Orrù, Perrin, Zaverucha 2022)]] (paper, 2022)
- [[CHJ+20-Bulletproofs-Opt|Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger (Chung et al. 2020)]] (paper, 2020)
- [[BBB+17-Bulletproofs|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[CMZ14-KVAC|Algebraic MACs and Keyed-Verification Anonymous Credentials (Chase, Meiklejohn, Zaverucha 2014)]] (paper, 2014)
- [[BL13-ACL|Anonymous Credentials Light (Baldimtsi, Lysyanskaya 2013)]] (paper, 2013)
- [[BG13-Polynomial-Evaluation|Zero-Knowledge Argument for Polynomial Evaluation with Application to Blacklists (Bayer, Groth 2013)]] (paper, 2013)
- [[Mau09-Unifying-ZKPoK|Unifying Zero-Knowledge Proofs of Knowledge (Maurer 2009)]] (paper, 2009)
- [[CM99-Safe-Primes|Proving in Zero-Knowledge that a Number is the Product of Two Safe Primes (Camenisch-Michels 1999)]] (paper, 1999)
- [[CS97-DL-Proofs|Proof Systems for General Statements about Discrete Logarithms (Camenisch-Stadler 1997)]] (paper, 1997)
- [[Sch91-Schnorr-Signatures|Efficient Signature Generation by Smart Cards (Schnorr 1991)]] (paper, 1991)
- [[Ped91-Commitments|Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing (Pedersen 1991)]] (paper, 1991)
- [[Elg85-ElGamal|A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms (ElGamal 1985)]] (paper, 1985)
- [[DH76-New-Directions|New Directions in Cryptography (Diffie, Hellman 1976)]] (paper, 1976)

### eid

- [[eid-privacy-docknetwork-crypto-library|Choosing a Cryptographic Library for Anonymous Credentials (eid-privacy, 2026)]] (blog, 2026)
- [[LZ26-AnonCreds-Legacy|Device Binding for Anonymous Credentials on Legacy Phones (Lehmann, Zacharakis 2026)]] (paper, 2026)
- [[docknetwork-crypto-library|DockNetwork Crypto Library Analysis]] (doc, 2026)
- [[eid-privacy-noir-tom256|eid-privacy/noir]] (code, 2026)
- [[eid-privacy-spartan-backend|eid-privacy/spartan-backend]] (code, 2026)
- [[eid-privacy-zkp-android|eid-privacy/zkp-android]] (code, 2026)
- [[eid-privacy-zkp-android-spartan|eid-privacy/zkp-android-spartan]] (code, 2026)
- [[EUDI-ARF|EUDI Wallet Architecture and Reference Framework (ARF)]] (doc, 2026)
- [[IETF-draft-google-cfrg-libzk|Longfellow ZK — IETF draft-google-cfrg-libzk]] (wiki, 2026)
- [[FOJ-E-ID-Timeline-2026|New timeline for the introduction of the e-ID and the trust infrastructure (FOJ, 2026-06-30)]] (doc, 2026)
- [[KVRSCLT26-EUDIF-Harms|On the (Privacy) Harms of the European Digital Identity Framework (Knabenhans, Veitch, Raynal, Stadler, Chatel, Lueks, Troncoso 2026)]] (paper, 2026)
- [[ENRTTX26-OpenAC|OpenAC: Open Design for Transparent and Lightweight Anonymous Credentials (Eagen, Ngo, Rushi, Tong, Tsai, Xia 2026)]] (paper, 2026)
- [[eid-privacy-poc-report|Proof-of-Concept for ZKPs (eid-privacy, 2026)]] (blog, 2026)
- [[eid-privacy-zkp-vault|Reading list for ZKP algorithms and implementations (eid-privacy, 2026)]] (blog, 2026)
- [[IETF-SD-JWT-VC|SD-JWT-based Verifiable Digital Credentials (SD-JWT VC) — IETF draft]] (wiki, 2026)
- [[DHG26-MS4|Secure and Privacy-Preserving Credentials for E-ID - Final Report (Dengler, Humbert, Gasser 2026)]] (paper, 2026)
- [[GHE26-MS2|Secure and Privacy-Preserving Credentials for E-ID Proof-of-Concept (Gasser, Humbert, Elghareeb 2026)]] (paper, 2026)
- [[BL26-SoK-AnonCreds|SoK: Anonymous Credentials for Digital Identity Wallets (Bormann, Lehmann 2026)]] (paper, 2026)
- [[swiyu-Beta-ID-Cookbook|swiyu Cookbook — How to use Beta-ID for my business]] (doc, 2026)
- [[swiyu-Trust-Protocol|swiyu Trust Protocol 2.0 Specification]] (doc, 2026)
- [[IETF-OAuth-Token-Status-List|Token Status List (TSL) — IETF draft]] (wiki, 2026)
- [[MRHHL25-Physical-Identities|An Architecture for Distributed Digital Identities in the Physical World (Mayrhofer, Roland, Höller, Hofer, Lins 2025)]] (paper, 2025)
- [[eid-privacy-comparing-zk-systems|Comparing ZK Systems (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-crescent-longfellow|Crescent and Longfellow (eid-privacy, 2025)]] (blog, 2025)
- [[MSR-Crescent-Library-Blog|Crescent library brings privacy to digital identity systems (Microsoft Research, 2025)]] (blog, 2025)
- [[FHLL25-AnonCreds-TrustedHW|Device-Bound Anonymous Credentials With(out) Trusted Hardware (Friedrichs, Harding, Lehmann, Lysyanskaya 2025)]] (paper, 2025)
- [[eid-privacy-SWIYU-Demo|eid-privacy/SWIYU-Demo]] (code, 2025)
- [[eid-privacy-zkp-pocs|eid-privacy/zkp-pocs]] (code, 2025)
- [[Mom25-GP-ZKP-VCs|General-Purpose Zero-Knowledge Proofs for Verifiable Credentials (Mombelli 2025)]] (paper, 2025)
- [[heidiverse-zkattest-rs|heidiverse/zkattest-rs (formerly UbiqueInnovation/zkattest-rs)]] (code, 2025)
- [[google-longfellow-zk|longfellow-zk (Google)]] (code, 2025)
- [[mombelld-general-purpose-zkps-vcs|mombelld/general-purpose-zkps-vcs]] (code, 2025)
- [[eid-privacy-swiyu-demo|Open Source SWIYU Demo application (eid-privacy, 2025)]] (blog, 2025)
- [[OpenID4VCI|OpenID for Verifiable Credential Issuance 1.0]] (wiki, 2025)
- [[OpenID4VP|OpenID for Verifiable Presentations 1.0]] (wiki, 2025)
- [[Swiss-E-ID-Ordinance-VEID|Ordinance on the E-ID Act (E-ID-Verordnung, VEID) — consultation draft]] (wiki, 2025)
- [[eid-privacy-privacy-unlinkability|Overview of Privacy and Unlinkability (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-resources-zkp|Resources on Zero-knowledge Systems and Proofs (eid-privacy, 2025)]] (blog, 2025)
- [[IETF-RFC9901-SD-JWT|RFC 9901: Selective Disclosure for JSON Web Tokens (SD-JWT)]] (wiki, 2025)
- [[FOSDEM-2025-OpenID4VP-BLE|Sample implementation of OpenID 4 Verifiable Presentation over Bluetooth Low Energy (FOSDEM 2025)]] (blog, 2025)
- [[Egg25-Swiss-eID-Security|Security Analysis of the Swiss e-ID & Trust Infrastructure (Egger 2025)]] (paper, 2025)
- [[CHLT25-Server-Aided-AC|Server-Aided Anonymous Credentials (Chairattana-Apirom, Harding, Lysyanskaya, Tessaro 2025)]] (paper, 2025)
- [[eid-privacy-taxonomy-101|Taxonomy 101 (eid-privacy, 2025)]] (blog, 2025)
- [[GHE25-Taxonomy|Taxonomy for Privacy-Preserving Electronic Identities (Gasser, Humbert, Elghareeb 2025)]] (paper, 2025)
- [[eid-privacy-taxonomy-digital-identity|Taxonomy of digital identity systems (eid-privacy, 2025)]] (blog, 2025)
- [[did-webvh-Method|The did:webvh DID Method — did:web + Verifiable History (v1.0)]] (wiki, 2025)
- [[Dyne-Longfellow-ZK-Review|The Longfellow ZK (Google-zk) (Dyne.org, 2025)]] (blog, 2025)
- [[W3C-VC-Data-Model-2.0|Verifiable Credentials Data Model v2.0 (W3C Recommendation)]] (wiki, 2025)
- [[LSZ25-Vision|Vision: A Modular Framework for Anonymous Credential Systems (Lehmann, Sidorenko, Zacharakis 2025)]] (paper, 2025)
- [[eid-privacy-WP2-Libraries|WP2 Libraries and Protocols — evaluated libraries tables (eid-privacy)]] (doc, 2025)
- [[FS24-Longfellow|Anonymous Credentials from ECDSA (Frigo & shelat 2024)]] (paper, 2024)
- [[PPZ24-Crescent|Crescent: Stronger Privacy for Existing Credentials (Paquin, Policharla, Zaverucha 2024)]] (paper, 2024)
- [[BBC+24-ARF-Feedback|Cryptographers' Feedback on the EU Digital Identity's ARF (Baum et al. 2024)]] (paper, 2024)
- [[procivis-one-core|procivis/one-core]] (code, 2024)
- [[EU-Digital-Identity-Regulation-2024-1183|Regulation (EU) 2024/1183 (European Digital Identity Framework) and implementing acts 2024/2977–2982]] (wiki, 2024)
- [[Col24-Revocation|Scalable and Privacy-Preserving Revocation of Verifiable Credentials (Colombo 2024)]] (paper, 2024)
- [[KPRK24-SoK-SSI-Trust|SoK: Trusting Self-Sovereign Identity (Krul, Paik, Ruj, Kanhere 2024)]] (paper, 2024)
- [[Swiss-E-ID-Act-BGEID|Swiss Federal Act on Electronic Identity and Other Electronic Credentials (E-ID Act, BGEID)]] (wiki, 2024)
- [[Ora24-BBS-Sharp|The BBS# protocol: Technical details (Orange 2024)]] (paper, 2024)
- [[eu-digital-identity-wallet|eu-digital-identity-wallet — EUDI Wallet reference implementation]] (code, 2023)
- [[microsoft-crescent-credentials|Microsoft Crescent Credentials (Spartan-t256 Fork)]] (code, 2023)
- [[RWGM23-zk-creds|zk-creds: Flexible Anonymous Credentials from zkSNARKs and Existing Identity Infrastructure (Rosenberg, White, Garman, Miers 2023)]] (paper, 2023)
- [[W3C-DID-Core-1.0|Decentralized Identifiers (DIDs) v1.0 (W3C Recommendation)]] (wiki, 2022)
- [[applied-crypto-heimdall|applied-crypto/heimdall]] (code, 2021)
- [[MMZ+21-CanDID|CanDID: Can-Do Decentralized Identity with Legacy Compatibility, Sybil-Resistance, and Accountability (Maram et al. 2021)]] (paper, 2021)
- [[ISO-IEC-18013-5-mDL|ISO/IEC 18013-5:2021 — Mobile driving licence (mDL) application]] (wiki, 2021)
- [[DFKP16-Cinderella|Cinderella: Turning Shabby X.509 Certificates into Elegant Anonymous Credentials with the Magic of Verifiable Computation (Delignat-Lavaud, Fournet, Kohlweiss, Parno 2016)]] (paper, 2016)
- [[eIDAS-Regulation-910-2014|Regulation (EU) No 910/2014 (eIDAS)]] (wiki, 2014)
- [[PH10-Privacy-Terminology|A Terminology for Talking about Privacy by Data Minimization: Anonymity, Unlinkability, Undetectability, Unobservability, Pseudonymity, and Identity Management (Pfitzmann, Hansen 2010)]] (paper, 2010)
- [[Android-Keystore-Implementer-Reference|Android Keystore — KeyMint/Keymaster implementer's reference]] (doc)
- [[Apple-CryptoKit-SecureEnclave|Apple CryptoKit — SecureEnclave]] (doc)
- [[Apple-Platform-Security-Secure-Enclave|Apple Platform Security — The Secure Enclave]] (doc)
- [[Austria-bPK-Description|Description of sector-specific person identifiers (bPK), Austria]] (doc)
- [[swiyu-Technical-Documentation|swiyu Technical Documentation and GitHub Organisation]] (doc)

### elliptic-curves

- [[OKMZ25-Beyond-Circuit|Beyond the Circuit: How to Minimize Foreign Arithmetic in ZKP Circuits (Orrù, Kadianakis, Maller, Zaverucha 2025)]] (paper, 2025)
- [[eid-privacy-ark-tom256|eid-privacy/ark-tom256]] (code, 2025)
- [[heidiverse-zkattest-rs|heidiverse/zkattest-rs (formerly UbiqueInnovation/zkattest-rs)]] (code, 2025)
- [[AFG24-Pairing-Curves-192|A Short-List of Pairing-Friendly Curves Resistant to the Special TNFS Algorithm at the 192-bit Security Level (Aranha, Fotiadis, Guillevic 2024)]] (paper, 2024)
- [[FS24-Longfellow|Anonymous Credentials from ECDSA (Frigo & shelat 2024)]] (paper, 2024)
- [[PPZ24-Crescent|Crescent: Stronger Privacy for Existing Credentials (Paquin, Policharla, Zaverucha 2024)]] (paper, 2024)
- [[CLR23-CDLS|CDLS: Proving Knowledge of Committed Discrete Logarithms with Soundness (Celi, Levin, Rowell 2023)]] (paper, 2023)
- [[NIST-FIPS-186-5|FIPS 186-5: Digital Signature Standard (DSS)]] (wiki, 2023)
- [[microsoft-crescent-credentials|Microsoft Crescent Credentials (Spartan-t256 Fork)]] (code, 2023)
- [[KMN23-Sigmabus|Sigmabus: Binding Sigmas in Circuits for Fast Curve Operations (Kadianakis, Maller, Novakovic 2023)]] (paper, 2023)
- [[personaelabs-spartan-ecdsa|personaelabs/spartan-ecdsa]] (code, 2022)
- [[COPZ22-DLEQ-Across-Groups|Proofs of discrete logarithm equality across groups (Chase, Orrù, Perrin, Zaverucha 2022)]] (paper, 2022)
- [[FLM22-ZKAttest|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys (Faz-Hernández, Ladd, Maram 2022)]] (paper, 2022)
- [[cloudflare-zkp-ecdsa|cloudflare/zkp-ecdsa]] (code, 2021)
- [[Cryptographic-Principles-Tomescu|Cryptographic Principles (Alin Tomescu)]] (blog, 2021)
- [[MIT-18-783-Elliptic-Curves|MIT 18.783 Elliptic Curves (Spring 2021)]] (course, 2021)
- [[QCY21-Blind-ECDSA|One-more Unforgeability of Blind ECDSA (Qin, Cai, Yuen 2021)]] (paper, 2021)
- [[arkworks-rs-algebra|arkworks-rs/algebra]] (code, 2020)
- [[BDLSY11-Ed25519|High-Speed High-Security Signatures (Bernstein, Duif, Lange, Schwabe, Yang 2011)]] (paper, 2011)
- [[BLS01-Short-Sigs|Short Signatures from the Weil Pairing (Boneh, Lynn, Shacham 2001)]] (paper, 2001)

### explainer

- [[eid-privacy-docknetwork-crypto-library|Choosing a Cryptographic Library for Anonymous Credentials (eid-privacy, 2026)]] (blog, 2026)
- [[a-deep-dive-into-axioms-halo2-circuits|A Deep Dive into Axiom's Halo2 Circuits]] (blog, 2025)
- [[eid-privacy-comparing-zk-systems|Comparing ZK Systems (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-crescent-longfellow|Crescent and Longfellow (eid-privacy, 2025)]] (blog, 2025)
- [[Green-How-To-Prove-False-Statements|How to prove false statements? (Part 1) (Matthew Green, 2025)]] (blog, 2025)
- [[groth16|Groth16 (Alin Tomescu)]] (blog, 2024)
- [[noirs-circuit-backend|Noir's Circuit Backend]] (blog, 2023)
- [[Taurus-Quantum-Doomsday-Planning|Quantum doomsday planning (1/2): Risk assessment & quantum attacks (Taurus, 2023)]] (blog, 2023)
- [[plonkish-arithmetization|PLONKish Arithmetization]] (blog, 2022)
- [[Cronokirby-Paper-That-Keeps-Showing-Up|The Paper that Keeps Showing Up (Cronokirby, 2022)]] (blog, 2022)
- [[Quanta-Which-Computational-Universe|Which Computational Universe Do We Live In? (Quanta Magazine, 2022)]] (blog, 2022)
- [[Plonk-Family-Note|Note: PLONK / TurboPLONK / UltraPLONK Family]] (blog, 2021)
- [[PLONK-Blog|Understanding PLONK]] (blog, 2019)

### foundational

- [[Thaler-Proofs-Arguments-ZK|Proofs, Arguments, and Zero-Knowledge]] (book, 2023)
- [[BBHR18-STARK|Scalable, Transparent, and Post-Quantum Secure Computational Integrity (Ben-Sasson, Bentov, Horesh, Riabzev 2018)]] (paper, 2018)
- [[GKMM18-Updatable-SRS|Updatable and Universal Common Reference Strings with Applications to zk-SNARKs (Groth et al. 2018)]] (paper, 2018)
- [[Gro16-Groth16|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] (paper, 2016)
- [[PHGR13-Pinocchio|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] (paper, 2013)
- [[BCGTV13-SNARKs-for-C|SNARKs for C: Verifying Program Executions Succinctly and in Zero Knowledge (Ben-Sasson et al. 2013)]] (paper, 2013)
- [[GGPR12-QSP-SNARK|Quadratic Span Programs and Succinct NIZKs without PCPs (GGPR 2013)]] (paper, 2012)
- [[Mau09-Unifying-ZKPoK|Unifying Zero-Knowledge Proofs of Knowledge (Maurer 2009)]] (paper, 2009)
- [[GKR08-Muggles|Delegating Computation: Interactive Proofs for Muggles (Goldwasser, Kalai, Rothblum 2008)]] (paper, 2008)
- [[Dam04-Sigma-Protocols|On Sigma Protocols (Damgård)]] (paper, 2004)
- [[BBS04-ShortGroupSigs|Short Group Signatures (Boneh, Boyen, Shacham 2004)]] (paper, 2004)
- [[CL04-Bilinear-Sigs|Signature Schemes and Anonymous Credentials from Bilinear Maps (Camenisch, Lysyanskaya 2004)]] (paper, 2004)
- [[CL02-CL-Signatures|A Signature Scheme with Efficient Protocols (Camenisch, Lysyanskaya 2002)]] (paper, 2002)
- [[Cra97-Modular-Design|Modular Design of Secure yet Practical Cryptographic Protocols (Cramer 1997)]] (paper, 1997)
- [[CS97-DL-Proofs|Proof Systems for General Statements about Discrete Logarithms (Camenisch-Stadler 1997)]] (paper, 1997)
- [[LFKN92-Sumcheck|Algebraic Methods for Interactive Proof Systems]] (paper, 1992)
- [[Sch91-Schnorr-Signatures|Efficient Signature Generation by Smart Cards (Schnorr 1991)]] (paper, 1991)
- [[Ped91-Commitments|Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing (Pedersen 1991)]] (paper, 1991)
- [[GQ88-Identity-Signature|A "Paradoxical" Identity-Based Signature Scheme Resulting from Zero-Knowledge (Guillou, Quisquater 1988)]] (paper, 1988)
- [[BGKW88-MIP|Multi-Prover Interactive Proofs: How to Remove Intractability Assumptions (Ben-Or, Goldwasser, Kilian, Wigderson 1988)]] (paper, 1988)
- [[BFM88-NIZK-Intro|Non-Interactive Zero-Knowledge and Its Applications (BFM88)]] (paper, 1988)
- [[FS86-Fiat-Shamir|How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)]] (paper, 1986)
- [[GMR85-ZK-Complexity|The Knowledge Complexity of Interactive Proof Systems (GMR85)]] (paper, 1985)
- [[Sch80-Schwartz-Zippel|Fast Probabilistic Algorithms for Verification of Polynomial Identities]] (paper, 1980)
- [[RSA78-RSA|A Method for Obtaining Digital Signatures and Public-Key Cryptosystems (Rivest, Shamir, Adleman 1978)]] (paper, 1978)
- [[DH76-New-Directions|New Directions in Cryptography (Diffie, Hellman 1976)]] (paper, 1976)

### frameworks

- [[Mom25-GP-ZKP-VCs|General-Purpose Zero-Knowledge Proofs for Verifiable Credentials (Mombelli 2025)]] (paper, 2025)
- [[SAKK25-ZKP-Frameworks-Survey|Zero-Knowledge Proof Frameworks: A Systematic Survey (Sheybani, Ahmed, Kinsy, Koushanfar 2025)]] (paper, 2025)

### go

- [[gnark-Docs|gnark Documentation (Consensys)]] (doc, 2021)

### hardware

- [[HSS23-Bind-AC-Humans|How to Bind Anonymous Credentials to Humans (Hesse, Singh, Sorniotti 2023)]] (paper, 2023)
- [[PS19-TrustZone-Survey|Demystifying Arm TrustZone: A Comprehensive Survey (Pinto, Santos 2019)]] (paper, 2019)
- [[Android-Keystore-Implementer-Reference|Android Keystore — KeyMint/Keymaster implementer's reference]] (doc)
- [[Android-Trusty-TEE|Android Trusty TEE]] (doc)
- [[Apple-CryptoKit-SecureEnclave|Apple CryptoKit — SecureEnclave]] (doc)
- [[Apple-Platform-Security-Secure-Enclave|Apple Platform Security — The Secure Enclave]] (doc)
- [[ARM-TrustZone|Arm TrustZone for Cortex-A]] (doc)

### history

- [[Quanta-Which-Computational-Universe|Which Computational Universe Do We Live In? (Quanta Magazine, 2022)]] (blog, 2022)
- [[Evolution-of-ZKPs|The Evolution of Zero Knowledge Proofs]] (blog, 2018)
- [[GQ88-Identity-Signature|A "Paradoxical" Identity-Based Signature Scheme Resulting from Zero-Knowledge (Guillou, Quisquater 1988)]] (paper, 1988)
- [[BGKW88-MIP|Multi-Prover Interactive Proofs: How to Remove Intractability Assumptions (Ben-Or, Goldwasser, Kilian, Wigderson 1988)]] (paper, 1988)
- [[RSA78-RSA|A Method for Obtaining Digital Signatures and Public-Key Cryptosystems (Rivest, Shamir, Adleman 1978)]] (paper, 1978)
- [[DH76-New-Directions|New Directions in Cryptography (Diffie, Hellman 1976)]] (paper, 1976)

### implementations

- [[docknetwork-crypto-library|DockNetwork Crypto Library Analysis]] (doc, 2026)
- [[eid-privacy-flakes|eid-privacy/flakes]] (code, 2026)
- [[eid-privacy-noir-tom256|eid-privacy/noir]] (code, 2026)
- [[eid-privacy-vega-prover|eid-privacy/vega-prover]] (code, 2026)
- [[eid-privacy-zkp-android|eid-privacy/zkp-android]] (code, 2026)
- [[eid-privacy-zkp-android-spartan|eid-privacy/zkp-android-spartan]] (code, 2026)
- [[a-deep-dive-into-axioms-halo2-circuits|A Deep Dive into Axiom's Halo2 Circuits]] (blog, 2025)
- [[eid-privacy-ark-tom256|eid-privacy/ark-tom256]] (code, 2025)
- [[eid-privacy-SWIYU-Demo|eid-privacy/SWIYU-Demo]] (code, 2025)
- [[eid-privacy-zkp-pocs|eid-privacy/zkp-pocs]] (code, 2025)
- [[google-longfellow-zk|longfellow-zk (Google)]] (code, 2025)
- [[mombelld-general-purpose-zkps-vcs|mombelld/general-purpose-zkps-vcs]] (code, 2025)
- [[FOSDEM-2025-OpenID4VP-BLE|Sample implementation of OpenID 4 Verifiable Presentation over Bluetooth Low Energy (FOSDEM 2025)]] (blog, 2025)
- [[LHWYSW25-SoK-zkSNARKs|SoK: Understanding zk-SNARKs: The Gap Between Research and Practice (Liang et al. 2025)]] (paper, 2025)
- [[Dyne-Longfellow-ZK-Review|The Longfellow ZK (Google-zk) (Dyne.org, 2025)]] (blog, 2025)
- [[eid-privacy-WP2-Libraries|WP2 Libraries and Protocols — evaluated libraries tables (eid-privacy)]] (doc, 2025)
- [[SAKK25-ZKP-Frameworks-Survey|Zero-Knowledge Proof Frameworks: A Systematic Survey (Sheybani, Ahmed, Kinsy, Koushanfar 2025)]] (paper, 2025)
- [[Polyhedra-Expander-Compiler-Collection|Announcing the Expander Compiler Collection (ECC) (Polyhedra, 2024)]] (blog, 2024)
- [[comparative-analysis-of-sp1-and-risc-zero-zero-knowledge|Comparative Analysis of SP1 and RISC Zero Zero-Knowledge Virtual Machines]] (blog, 2024)
- [[did-webvh-Libraries|did:webvh implementations (TypeScript, Python, Rust, Go)]] (code, 2024)
- [[Ligero-Prover-Docs|Ligetron Marketplace Documentation]] (doc, 2024)
- [[OpenVM-Docs|OpenVM Documentation]] (doc, 2024)
- [[CETWJL24-SoK-SNARK-Vulns|SoK: What Don't We Know? Understanding Security Vulnerabilities in SNARKs (Chaliasos, Ernstberger, Theodore, Wong, Jahanara, Livshits 2024)]] (paper, 2024)
- [[SP1-Docs|SP1 Documentation (Succinct Labs)]] (doc, 2024)
- [[LSS24-LaZer|The LaZer Library: Lattice-Based Zero Knowledge and Succinct Proofs for Quantum-Safe Privacy (Lyubashevsky, Seiler, Steuer 2024)]] (paper, 2024)
- [[AztecProtocol-aztec-packages|AztecProtocol: Aztec Packages (UltraHONK Audit Scope)]] (code, 2023)
- [[CMSCGD23-ZK-Circuit-Verification|Compositional Formal Verification of Zero-Knowledge Circuits (Coglio, McCarthy, Smith, Chin, Gaddamadugu, Dellepere 2023)]] (paper, 2023)
- [[eu-digital-identity-wallet|eu-digital-identity-wallet — EUDI Wallet reference implementation]] (code, 2023)
- [[Plonky3-Plonky3|Plonky3/Plonky3]] (code, 2023)
- [[RISC-Zero-Docs|RISC Zero Documentation]] (doc, 2023)
- [[microsoft-Spartan2|Microsoft Spartan2]] (code, 2022)
- [[Noir-Docs|Noir Documentation]] (doc, 2022)
- [[noir-lang-noir|noir-lang/noir — ACVM Repository]] (code, 2022)
- [[personaelabs-spartan-ecdsa|personaelabs/spartan-ecdsa]] (code, 2022)
- [[trustbloc-wallet-sdk|trustbloc/wallet-sdk]] (code, 2022)
- [[Circom2-Docs|Circom2 Documentation]] (doc, 2021)
- [[gnark-Docs|gnark Documentation (Consensys)]] (doc, 2021)
- [[Halo2-Docs|Halo2 Documentation (Zcash)]] (doc, 2021)
- [[0xPolygonZero-plonky2|Plonky2 and Starky (Polygon Zero)]] (code, 2021)
- [[zkcrypto-bulletproofs|zkcrypto/bulletproofs]] (code, 2021)
- [[arkworks-rs-algebra|arkworks-rs/algebra]] (code, 2020)
- [[arkworks-rs-crypto-primitives|arkworks-rs/crypto-primitives]] (code, 2020)
- [[Spartan-Framework-Code|Microsoft Spartan — Commit History]] (code, 2020)
- [[Spartan-Code|Microsoft Spartan (Original)]] (code, 2020)
- [[CPZ20-Signal-Groups|The Signal Private Group System and Anonymous Credentials Supporting Efficient Verifiable Encryption (Chase, Perrin, Zaverucha 2020)]] (paper, 2020)
- [[trustbloc-vcs|trustbloc/vcs]] (code, 2020)
- [[Sonic-Code|Sonic Reference Implementation (ebfull/sonic)]] (code, 2019)
- [[ZoKrates-Docs|ZoKrates Documentation]] (doc, 2018)
- [[swiyu-Technical-Documentation|swiyu Technical Documentation and GitHub Organisation]] (doc)

### information-theoretic

- [[GKR08-Muggles|Delegating Computation: Interactive Proofs for Muggles (Goldwasser, Kalai, Rothblum 2008)]] (paper, 2008)
- [[Sch80-Schwartz-Zippel|Fast Probabilistic Algorithms for Verification of Polynomial Identities]] (paper, 1980)

### interactive-proof

- [[Polyhedra-Expander-Compiler-Collection|Announcing the Expander Compiler Collection (ECC) (Polyhedra, 2024)]] (blog, 2024)
- [[MIT-6-5630-Advanced-Topics-Cryptography|MIT 6.5630 Advanced Topics in Cryptography (Fall 2023)]] (course, 2023)
- [[XZZPS19-Libra|Libra: Succinct Zero-Knowledge Proofs with Optimal Prover Computation (Xie, Zhang, Zhang, Papamanthou, Song 2019)]] (paper, 2019)
- [[GKR08-Muggles|Delegating Computation: Interactive Proofs for Muggles (Goldwasser, Kalai, Rothblum 2008)]] (paper, 2008)
- [[Dam04-Sigma-Protocols|On Sigma Protocols (Damgård)]] (paper, 2004)
- [[Cra97-Modular-Design|Modular Design of Secure yet Practical Cryptographic Protocols (Cramer 1997)]] (paper, 1997)
- [[LFKN92-Sumcheck|Algebraic Methods for Interactive Proof Systems]] (paper, 1992)
- [[BGKW88-MIP|Multi-Prover Interactive Proofs: How to Remove Intractability Assumptions (Ben-Or, Goldwasser, Kilian, Wigderson 1988)]] (paper, 1988)
- [[GMR85-ZK-Complexity|The Knowledge Complexity of Interactive Proof Systems (GMR85)]] (paper, 1985)
- [[Chiesa-Foundations-Probabilistic-Proofs|Foundations of Probabilistic Proofs (Alessandro Chiesa, EPFL CS-459)]] (course)

### iop

- [[STW23-CCS|Customizable Constraint Systems for Succinct Arguments (Setty, Thaler, Wahby 2023)]] (paper, 2023)
- [[Plonky3-Plonky3|Plonky3/Plonky3]] (code, 2023)
- [[AHIV22-Ligero-Ext|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup]] (paper, 2022)
- [[BFH+20-Ligero-Plus|Ligero++: A New Optimized Sublinear IOP (Bhadauria et al. 2020)]] (paper, 2020)
- [[BCRSVW19-Aurora|Aurora: Transparent Succinct Arguments for R1CS (Ben-Sasson et al. 2019)]] (paper, 2019)
- [[scipr-lab-libiop|scipr-lab/libiop]] (code, 2019)
- [[Set19-Spartan|Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup (Setty 2020)]] (paper, 2019)
- [[BBHR18-FRI|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)
- [[WTSTW17-Hyrax|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[AHIV17-Ligero|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup (Ames et al. 2017)]] (paper, 2017)
- [[Chiesa-Foundations-Probabilistic-Proofs|Foundations of Probabilistic Proofs (Alessandro Chiesa, EPFL CS-459)]] (course)

### learning

- [[eid-privacy-zkp-vault|Reading list for ZKP algorithms and implementations (eid-privacy, 2026)]] (blog, 2026)
- [[eid-privacy-resources-zkp|Resources on Zero-knowledge Systems and Proofs (eid-privacy, 2025)]] (blog, 2025)
- [[MIT-6-5630-Advanced-Topics-Cryptography|MIT 6.5630 Advanced Topics in Cryptography (Fall 2023)]] (course, 2023)
- [[Thaler-Proofs-Arguments-ZK|Proofs, Arguments, and Zero-Knowledge]] (book, 2023)
- [[R1CS-Docs|R1CS Explainer (0xPARC / Circom)]] (doc, 2022)
- [[MIT-18-783-Elliptic-Curves|MIT 18.783 Elliptic Curves (Spring 2021)]] (course, 2021)
- [[MoonMath-Manual|MoonMath Manual to zk-SNARKs]] (book, 2021)
- [[AIR-Docs|STARK 101 — AIR Tutorial (StarkWare)]] (doc, 2021)
- [[matter-labs-awesome-zero-knowledge-proofs|Awesome Zero-Knowledge Proofs (matter-labs)]] (doc, 2018)
- [[Evolution-of-ZKPs|The Evolution of Zero Knowledge Proofs]] (blog, 2018)
- [[Chiesa-Foundations-Probabilistic-Proofs|Foundations of Probabilistic Proofs (Alessandro Chiesa, EPFL CS-459)]] (course)
- [[Stanford-CS355-Topics-Cryptography|Stanford CS 355: Topics in Cryptography]] (course)
- [[0xPARC-Learn-ZK|ZK Learning Resources by 0xPARC]] (course)
- [[ZKDL-Camp|ZKDL Camp — Lectures on Zero-Knowledge Proving Systems (Distributed Lab)]] (course)

### library

- [[eid-privacy-docknetwork-crypto-library|Choosing a Cryptographic Library for Anonymous Credentials (eid-privacy, 2026)]] (blog, 2026)
- [[docknetwork-crypto-library|DockNetwork Crypto Library Analysis]] (doc, 2026)
- [[eid-privacy-ark-tom256|eid-privacy/ark-tom256]] (code, 2025)
- [[heidiverse-zkattest-rs|heidiverse/zkattest-rs (formerly UbiqueInnovation/zkattest-rs)]] (code, 2025)
- [[google-longfellow-zk|longfellow-zk (Google)]] (code, 2025)
- [[Sphereon-did-jwt|Sphereon-Opensource/did-jwt]] (code, 2025)
- [[eid-privacy-WP2-Libraries|WP2 Libraries and Protocols — evaluated libraries tables (eid-privacy)]] (doc, 2025)
- [[did-webvh-Libraries|did:webvh implementations (TypeScript, Python, Rust, Go)]] (code, 2024)
- [[procivis-one-core|procivis/one-core]] (code, 2024)
- [[LSS24-LaZer|The LaZer Library: Lattice-Based Zero Knowledge and Succinct Proofs for Quantum-Safe Privacy (Lyubashevsky, Seiler, Steuer 2024)]] (paper, 2024)
- [[beatt83-didcomm-swift|beatt83/didcomm-swift]] (code, 2023)
- [[Plonky3-Plonky3|Plonky3/Plonky3]] (code, 2023)
- [[anoncreds-anoncreds-v2-rs|anoncreds/anoncreds-v2-rs]] (code, 2022)
- [[microsoft-entra-verifiedid-wallet-library|Microsoft Entra Verified ID wallet libraries (Android & iOS)]] (code, 2022)
- [[microsoft-Spartan2|Microsoft Spartan2]] (code, 2022)
- [[microsoft-bbs-node-reference|microsoft/bbs-node-reference]] (code, 2022)
- [[openwallet-foundation-didcomm-mediator-credo|openwallet-foundation/didcomm-mediator-credo]] (code, 2022)
- [[Sphereon-OID4VC|Sphereon-Opensource/OID4VC (OpenID4VCI / OpenID4VP)]] (code, 2022)
- [[spruceid-oid4vci-rs|spruceid/oid4vci-rs]] (code, 2022)
- [[spruceid-openid4vp|spruceid/openid4vp]] (code, 2022)
- [[trustbloc-wallet-sdk|trustbloc/wallet-sdk]] (code, 2022)
- [[cloudflare-zkp-ecdsa|cloudflare/zkp-ecdsa]] (code, 2021)
- [[docknetwork-crypto|docknetwork/crypto (incl. vb_accumulator)]] (code, 2021)
- [[facebook-winterfell|facebook/winterfell]] (code, 2021)
- [[gnark-Docs|gnark Documentation (Consensys)]] (doc, 2021)
- [[mattrglobal-pairing_crypto|mattrglobal/pairing_crypto]] (code, 2021)
- [[0xPolygonZero-plonky2|Plonky2 and Starky (Polygon Zero)]] (code, 2021)
- [[sicpa-dlab-didcomm-jvm|sicpa-dlab/didcomm-jvm]] (code, 2021)
- [[sicpa-dlab-didcomm-python|sicpa-dlab/didcomm-python]] (code, 2021)
- [[sicpa-dlab-didcomm-rust|sicpa-dlab/didcomm-rust]] (code, 2021)
- [[Sphereon-SSI-SDK|Sphereon-Opensource/SSI-SDK]] (code, 2021)
- [[zkcrypto-bulletproofs|zkcrypto/bulletproofs]] (code, 2021)
- [[mattrglobal-bbs-signatures|@mattrglobal/bbs-signatures (MATTR)]] (code, 2020)
- [[arkworks-rs-algebra|arkworks-rs/algebra]] (code, 2020)
- [[arkworks-rs-crypto-primitives|arkworks-rs/crypto-primitives]] (code, 2020)
- [[Spartan-Framework-Code|Microsoft Spartan — Commit History]] (code, 2020)
- [[Spartan-Code|Microsoft Spartan (Original)]] (code, 2020)
- [[spruceid-ssi|spruceid/ssi]] (code, 2020)
- [[trustbloc-vcs|trustbloc/vcs]] (code, 2020)
- [[decentralized-identity-veramo|decentralized-identity/veramo]] (code, 2019)
- [[openwallet-foundation-acapy|openwallet-foundation/acapy (ACA-Py)]] (code, 2019)
- [[scipr-lab-libiop|scipr-lab/libiop]] (code, 2019)
- [[Sonic-Code|Sonic Reference Implementation (ebfull/sonic)]] (code, 2019)

### linear-time-prover

- [[CBBZ23-HyperPlonk|HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates (Chen et al. 2023)]] (paper, 2023)
- [[AHIV22-Ligero-Ext|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup]] (paper, 2022)
- [[BFH+20-Ligero-Plus|Ligero++: A New Optimized Sublinear IOP (Bhadauria et al. 2020)]] (paper, 2020)
- [[XZZPS19-Libra|Libra: Succinct Zero-Knowledge Proofs with Optimal Prover Computation (Xie, Zhang, Zhang, Papamanthou, Song 2019)]] (paper, 2019)
- [[AHIV17-Ligero|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup (Ames et al. 2017)]] (paper, 2017)
- [[DI06-Scalable-MPC|Scalable Secure Multiparty Computation (Damgård-Ishai 2006)]] (paper, 2006)

### llvm

- [[OpenVM-Docs|OpenVM Documentation]] (doc, 2024)
- [[SP1-Docs|SP1 Documentation (Succinct Labs)]] (doc, 2024)
- [[RISC-Zero-Docs|RISC Zero Documentation]] (doc, 2023)

### logarithmic

- [[CHJ+20-Bulletproofs-Opt|Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger (Chung et al. 2020)]] (paper, 2020)
- [[BBB+17-Bulletproofs|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[BG13-Polynomial-Evaluation|Zero-Knowledge Argument for Polynomial Evaluation with Application to Blacklists (Bayer, Groth 2013)]] (paper, 2013)

### lookup

- [[OKMZ25-Beyond-Circuit|Beyond the Circuit: How to Minimize Foreign Arithmetic in ZKP Circuits (Orrù, Kadianakis, Maller, Zaverucha 2025)]] (paper, 2025)
- [[CBBZ23-HyperPlonk|HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates (Chen et al. 2023)]] (paper, 2023)
- [[GW20-Plookup|Plookup: A Simplified Polynomial Protocol for Lookup Tables (Gabizon-Williamson 2020)]] (paper, 2020)

### mathematics

- [[MIT-18-783-Elliptic-Curves|MIT 18.783 Elliptic Curves (Spring 2021)]] (course, 2021)
- [[MoonMath-Manual|MoonMath Manual to zk-SNARKs]] (book, 2021)
- [[LFKN92-Sumcheck|Algebraic Methods for Interactive Proof Systems]] (paper, 1992)
- [[Sch80-Schwartz-Zippel|Fast Probabilistic Algorithms for Verification of Polynomial Identities]] (paper, 1980)
- [[Wikipedia-Concatenated-Error-Correction-Code|Concatenated error correction code (Wikipedia)]] (wiki)
- [[ZKDL-Camp|ZKDL Camp — Lectures on Zero-Knowledge Proving Systems (Distributed Lab)]] (course)

### mpc

- [[JLM22-ALLOSAUR|ALLOSAUR: Accumulator with Low-Latency Oblivious Sublinear Anonymous credential Updates with Revocations (Jaques, Lodder, Montgomery 2022)]] (paper, 2022)
- [[MMZ+21-CanDID|CanDID: Can-Do Decentralized Identity with Legacy Compatibility, Sybil-Resistance, and Accountability (Maram et al. 2021)]] (paper, 2021)
- [[HKRW20-Sovrin-Revocation|Multi-Party Revocation in Sovrin: Performance through Distributed Trust (Helminger, Kales, Ramacher, Walch 2020)]] (paper, 2020)
- [[DI06-Scalable-MPC|Scalable Secure Multiparty Computation (Damgård-Ishai 2006)]] (paper, 2006)

### non-interactive

- [[WPSP26-DV-Dynamic-zkSNARKs|Designated-Verifier Dynamic zk-SNARKs with Applications to Dynamic Proofs of Index (Wang et al. 2026)]] (paper, 2026)
- [[Green-How-To-Prove-False-Statements|How to prove false statements? (Part 1) (Matthew Green, 2025)]] (blog, 2025)
- [[CPV24-Last-Challenge|The Last Challenge Attack: Exploiting a Vulnerable Implementation of the Fiat-Shamir Transform in a KZG-based SNARK (Ciobotaru, Peter, Velichkov 2024)]] (paper, 2024)
- [[MIT-6-5630-Advanced-Topics-Cryptography|MIT 6.5630 Advanced Topics in Cryptography (Fall 2023)]] (course, 2023)
- [[ZKP21-Sigma-Standard|ZKProof Sigma Protocol Proposal (Workshop 4)]] (paper, 2021)
- [[BFM88-NIZK-Intro|Non-Interactive Zero-Knowledge and Its Applications (BFM88)]] (paper, 1988)
- [[FS86-Fiat-Shamir|How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)]] (paper, 1986)

### openid4vc

- [[eid-privacy-SWIYU-Demo|eid-privacy/SWIYU-Demo]] (code, 2025)
- [[OpenID4VCI|OpenID for Verifiable Credential Issuance 1.0]] (wiki, 2025)
- [[OpenID4VP|OpenID for Verifiable Presentations 1.0]] (wiki, 2025)
- [[FOSDEM-2025-OpenID4VP-BLE|Sample implementation of OpenID 4 Verifiable Presentation over Bluetooth Low Energy (FOSDEM 2025)]] (blog, 2025)
- [[procivis-one-core|procivis/one-core]] (code, 2024)
- [[eu-digital-identity-wallet|eu-digital-identity-wallet — EUDI Wallet reference implementation]] (code, 2023)
- [[SIOPv2|Self-Issued OpenID Provider v2 (SIOPv2)]] (wiki, 2023)
- [[microsoft-entra-verifiedid-wallet-library|Microsoft Entra Verified ID wallet libraries (Android & iOS)]] (code, 2022)
- [[Sphereon-OID4VC|Sphereon-Opensource/OID4VC (OpenID4VCI / OpenID4VP)]] (code, 2022)
- [[spruceid-oid4vci-rs|spruceid/oid4vci-rs]] (code, 2022)
- [[spruceid-openid4vp|spruceid/openid4vp]] (code, 2022)
- [[trustbloc-wallet-sdk|trustbloc/wallet-sdk]] (code, 2022)
- [[Sphereon-SSI-SDK|Sphereon-Opensource/SSI-SDK]] (code, 2021)
- [[trustbloc-vcs|trustbloc/vcs]] (code, 2020)

### overview

- [[eid-privacy-poc-report|Proof-of-Concept for ZKPs (eid-privacy, 2026)]] (blog, 2026)
- [[eid-privacy-zkp-vault|Reading list for ZKP algorithms and implementations (eid-privacy, 2026)]] (blog, 2026)
- [[BL26-SoK-AnonCreds|SoK: Anonymous Credentials for Digital Identity Wallets (Bormann, Lehmann 2026)]] (paper, 2026)
- [[eid-privacy-comparing-zk-systems|Comparing ZK Systems (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-crescent-longfellow|Crescent and Longfellow (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-privacy-unlinkability|Overview of Privacy and Unlinkability (eid-privacy, 2025)]] (blog, 2025)
- [[ABCD25-PETs-Payments|Privacy-Enhancing Technologies for Digital Payments: Mapping the Landscape (Auer, Böhme, Clark, Demirag 2025)]] (paper, 2025)
- [[eid-privacy-resources-zkp|Resources on Zero-knowledge Systems and Proofs (eid-privacy, 2025)]] (blog, 2025)
- [[IES25-SoK-Unusable-Privacy|SoK: (Un)usable Privacy: the Lack of Overlap between Privacy-Aware Sensing and Usable Privacy Research (Iravantchi, Emami-Naeini, Sample 2025)]] (paper, 2025)
- [[UZ25-SoK-Threat-Modeling|SoK: A Framework and Guide for Human-Centered Threat Modeling in Security and Privacy Research (Usman, Zappala 2025)]] (paper, 2025)
- [[LHWYSW25-SoK-zkSNARKs|SoK: Understanding zk-SNARKs: The Gap Between Research and Practice (Liang et al. 2025)]] (paper, 2025)
- [[eid-privacy-taxonomy-101|Taxonomy 101 (eid-privacy, 2025)]] (blog, 2025)
- [[GHE25-Taxonomy|Taxonomy for Privacy-Preserving Electronic Identities (Gasser, Humbert, Elghareeb 2025)]] (paper, 2025)
- [[eid-privacy-taxonomy-digital-identity|Taxonomy of digital identity systems (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-WP2-Libraries|WP2 Libraries and Protocols — evaluated libraries tables (eid-privacy)]] (doc, 2025)
- [[SAKK25-ZKP-Frameworks-Survey|Zero-Knowledge Proof Frameworks: A Systematic Survey (Sheybani, Ahmed, Kinsy, Koushanfar 2025)]] (paper, 2025)
- [[comparative-analysis-of-sp1-and-risc-zero-zero-knowledge|Comparative Analysis of SP1 and RISC Zero Zero-Knowledge Virtual Machines]] (blog, 2024)
- [[ECZJG24-Need-ZKP|Do You Need a Zero Knowledge Proof? (Ernstberger, Chaliasos, Zhou, Jovanovic, Gervais 2024)]] (paper, 2024)
- [[BRD+24-SoK-Privacy-Regulations|SoK: Technical Implementation and Human Impact of Internet Privacy Regulations (Birrell et al. 2024)]] (paper, 2024)
- [[KPRK24-SoK-SSI-Trust|SoK: Trusting Self-Sovereign Identity (Krul, Paik, Ruj, Kanhere 2024)]] (paper, 2024)
- [[CETWJL24-SoK-SNARK-Vulns|SoK: What Don't We Know? Understanding Security Vulnerabilities in SNARKs (Chaliasos, Ernstberger, Theodore, Wong, Jahanara, Livshits 2024)]] (paper, 2024)
- [[RES24-ZK-Systematic-Review|Systematic review: Comparing zk-SNARK, zk-STARK, and bulletproof protocols for privacy-preserving authentication (Oude Roelink, El-Hajj, Sarmah 2024)]] (paper, 2024)
- [[KMPQ23-SoK-AnonCreds|SoK: Anonymous Credentials (Kakvi, Martin, Putman, Quaglia 2023)]] (paper, 2023)
- [[PB23-SoK-Linkage-Attacks|SoK: Managing risks of linkage attacks on data privacy (Powar, Beresford 2023)]] (paper, 2023)
- [[HMMP23-SoK-EVoting|SoK: Secure E-Voting with Everlasting Privacy (Haines, Mosaheb, Müller, Pryvalov 2023)]] (paper, 2023)
- [[GG21-SoK-Reputation|SoK: Privacy-Preserving Reputation Systems (Gurtler, Goldberg 2021)]] (paper, 2021)
- [[ZKProof-Wiki|ZKProof Wiki of Concrete ZKP Schemes]] (wiki, 2020)
- [[PS19-TrustZone-Survey|Demystifying Arm TrustZone: A Comprehensive Survey (Pinto, Santos 2019)]] (paper, 2019)
- [[matter-labs-awesome-zero-knowledge-proofs|Awesome Zero-Knowledge Proofs (matter-labs)]] (doc, 2018)
- [[Evolution-of-ZKPs|The Evolution of Zero Knowledge Proofs]] (blog, 2018)
- [[BCD+14-ABC4Trust|D2.2 Architecture for Attribute-based Credential Technologies — Final Version (ABC4Trust) (Bichsel et al. 2014)]] (paper, 2014)

### pairing

- [[IRTF-CFRG-BBS-Signatures|The BBS Signature Scheme — IRTF CFRG draft]] (wiki, 2026)
- [[IRTF-CFRG-BBS-Per-Verifier-Linkability|BBS per Verifier Linkability — IRTF CFRG draft]] (wiki, 2025)
- [[IRTF-CFRG-BBS-Blind-Signatures|Blind BBS Signatures — IRTF CFRG draft]] (wiki, 2025)
- [[AFG24-Pairing-Curves-192|A Short-List of Pairing-Friendly Curves Resistant to the Special TNFS Algorithm at the 192-bit Security Level (Aranha, Fotiadis, Guillevic 2024)]] (paper, 2024)
- [[groth16|Groth16 (Alin Tomescu)]] (blog, 2024)
- [[TZ23-Revisiting-BBS|Revisiting BBS Signatures (Tessaro, Zhu 2023)]] (paper, 2023)
- [[Cryptographic-Principles-Tomescu|Cryptographic Principles (Alin Tomescu)]] (blog, 2021)
- [[mattrglobal-pairing_crypto|mattrglobal/pairing_crypto]] (code, 2021)
- [[MIT-18-783-Elliptic-Curves|MIT 18.783 Elliptic Curves (Spring 2021)]] (course, 2021)
- [[arkworks-rs-algebra|arkworks-rs/algebra]] (code, 2020)
- [[CFQW19-LegoSNARK|LegoSNARK: Modular Design and Composition of Efficient Zero-Knowledge Proofs (Campanelli et al. 2019)]] (paper, 2019)
- [[CDL16-DAA-qSDH|Anonymous Attestation Using the Strong Diffie Hellman Assumption Revisited (Camenisch, Drijvers, Lehmann 2016)]] (paper, 2016)
- [[Gro16-Groth16|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] (paper, 2016)
- [[PS16-Randomizable-Sigs|Short Randomizable Signatures (Pointcheval, Sanders 2016)]] (paper, 2016)
- [[ASM06-Dynamic-kTAA|Constant-Size Dynamic k-TAA (Au, Susilo, Mu 2006)]] (paper, 2006)
- [[BBS04-ShortGroupSigs|Short Group Signatures (Boneh, Boyen, Shacham 2004)]] (paper, 2004)
- [[CL04-Bilinear-Sigs|Signature Schemes and Anonymous Credentials from Bilinear Maps (Camenisch, Lysyanskaya 2004)]] (paper, 2004)
- [[BLS01-Short-Sigs|Short Signatures from the Weil Pairing (Boneh, Lynn, Shacham 2001)]] (paper, 2001)

### post-quantum

- [[DKLW25-Lattice-Proof-Friendly-Sigs|Lattice-Based Proof-Friendly Signatures from Vanishing Short Integer Solutions (Dubois, Klooß, Lai, Woo 2025)]] (paper, 2025)
- [[BMNW24-Arc|Arc: Accumulation for Reed–Solomon Codes (Bünz, Mishra, Nguyen, Wang 2024)]] (paper, 2024)
- [[HLP24-Circle-STARKs|Circle STARKs (Haböck, Levit, Papini 2024)]] (paper, 2024)
- [[NIST-IR-8547|NIST IR 8547: Transition to Post-Quantum Cryptography Standards]] (wiki, 2024)
- [[AGJLRS24-PQ-Sigs-Privacy|Practical Post-Quantum Signatures for Privacy (Argo, Güneysu, Jeudy, Land, Roux-Langlois, Sanders 2024)]] (paper, 2024)
- [[LSS24-LaZer|The LaZer Library: Lattice-Based Zero Knowledge and Succinct Proofs for Quantum-Safe Privacy (Lyubashevsky, Seiler, Steuer 2024)]] (paper, 2024)
- [[BS23-LaBRADOR|LaBRADOR: Compact Proofs for R1CS from Module-SIS (Beullens, Seiler 2023)]] (paper, 2023)
- [[Taurus-Quantum-Doomsday-Planning|Quantum doomsday planning (1/2): Risk assessment & quantum attacks (Taurus, 2023)]] (blog, 2023)
- [[facebook-winterfell|facebook/winterfell]] (code, 2021)
- [[BCRSVW19-Aurora|Aurora: Transparent Succinct Arguments for R1CS (Ben-Sasson et al. 2019)]] (paper, 2019)
- [[BBHR18-FRI|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)
- [[BBHR18-STARK|Scalable, Transparent, and Post-Quantum Secure Computational Integrity (Ben-Sasson, Bentov, Horesh, Riabzev 2018)]] (paper, 2018)

### privacy

- [[EUDI-ARF|EUDI Wallet Architecture and Reference Framework (ARF)]] (doc, 2026)
- [[IES25-SoK-Unusable-Privacy|SoK: (Un)usable Privacy: the Lack of Overlap between Privacy-Aware Sensing and Usable Privacy Research (Iravantchi, Emami-Naeini, Sample 2025)]] (paper, 2025)
- [[UZ25-SoK-Threat-Modeling|SoK: A Framework and Guide for Human-Centered Threat Modeling in Security and Privacy Research (Usman, Zappala 2025)]] (paper, 2025)
- [[EU-Digital-Identity-Regulation-2024-1183|Regulation (EU) 2024/1183 (European Digital Identity Framework) and implementing acts 2024/2977–2982]] (wiki, 2024)
- [[BRD+24-SoK-Privacy-Regulations|SoK: Technical Implementation and Human Impact of Internet Privacy Regulations (Birrell et al. 2024)]] (paper, 2024)
- [[Swiss-E-ID-Act-BGEID|Swiss Federal Act on Electronic Identity and Other Electronic Credentials (E-ID Act, BGEID)]] (wiki, 2024)
- [[PB23-SoK-Linkage-Attacks|SoK: Managing risks of linkage attacks on data privacy (Powar, Beresford 2023)]] (paper, 2023)
- [[HMMP23-SoK-EVoting|SoK: Secure E-Voting with Everlasting Privacy (Haines, Mosaheb, Müller, Pryvalov 2023)]] (paper, 2023)
- [[BEKRS21-Issuer-Hiding|Issuer-Hiding Attribute-Based Credentials (Bobolz, Eidens, Krenn, Ramacher, Samelin 2021)]] (paper, 2021)
- [[GG21-SoK-Reputation|SoK: Privacy-Preserving Reputation Systems (Gurtler, Goldberg 2021)]] (paper, 2021)
- [[SwissCovid-Keeps-Your-Secrets|SwissCovid Keeps Your Secrets (House of Switzerland, 2020)]] (blog, 2020)
- [[CPZ20-Signal-Groups|The Signal Private Group System and Anonymous Credentials Supporting Efficient Verifiable Encryption (Chase, Perrin, Zaverucha 2020)]] (paper, 2020)
- [[BCD+14-ABC4Trust|D2.2 Architecture for Attribute-based Credential Technologies — Final Version (ABC4Trust) (Bichsel et al. 2014)]] (paper, 2014)
- [[Shostack-Threat-Modeling|Threat Modeling: Designing for Security]] (book, 2014)
- [[Austria-bPK-Description|Description of sector-specific person identifiers (bPK), Austria]] (doc)

### prover-backend

- [[eid-privacy-spartan-backend|eid-privacy/spartan-backend]] (code, 2026)
- [[eid-privacy-vega-prover|eid-privacy/vega-prover]] (code, 2026)
- [[eid-privacy-zkp-android-spartan|eid-privacy/zkp-android-spartan]] (code, 2026)
- [[Ligero-Prover-Docs|Ligetron Marketplace Documentation]] (doc, 2024)
- [[AztecProtocol-aztec-packages|AztecProtocol: Aztec Packages (UltraHONK Audit Scope)]] (code, 2023)
- [[noirs-circuit-backend|Noir's Circuit Backend]] (blog, 2023)
- [[noir-lang-noir|noir-lang/noir — ACVM Repository]] (code, 2022)

### range-proof

- [[zkcrypto-bulletproofs|zkcrypto/bulletproofs]] (code, 2021)
- [[CHJ+20-Bulletproofs-Opt|Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger (Chung et al. 2020)]] (paper, 2020)
- [[BBB+17-Bulletproofs|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[CM99-Safe-Primes|Proving in Zero-Knowledge that a Number is the Product of Two Safe Primes (Camenisch-Michels 1999)]] (paper, 1999)

### reed-solomon

- [[BMNW24-Arc|Arc: Accumulation for Reed–Solomon Codes (Bünz, Mishra, Nguyen, Wang 2024)]] (paper, 2024)
- [[HLP24-Circle-STARKs|Circle STARKs (Haböck, Levit, Papini 2024)]] (paper, 2024)
- [[BBHR18-FRI|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)
- [[AHIV17-Ligero|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup (Ames et al. 2017)]] (paper, 2017)
- [[Wikipedia-Concatenated-Error-Correction-Code|Concatenated error correction code (Wikipedia)]] (wiki)

### reference

- [[eid-privacy-zkp-vault|Reading list for ZKP algorithms and implementations (eid-privacy, 2026)]] (blog, 2026)
- [[eid-privacy-resources-zkp|Resources on Zero-knowledge Systems and Proofs (eid-privacy, 2025)]] (blog, 2025)
- [[GHE25-Taxonomy|Taxonomy for Privacy-Preserving Electronic Identities (Gasser, Humbert, Elghareeb 2025)]] (paper, 2025)
- [[eid-privacy-taxonomy-digital-identity|Taxonomy of digital identity systems (eid-privacy, 2025)]] (blog, 2025)
- [[plonkish_arithmetization|PLONKish Arithmetization — ZK Jargon]] (doc, 2022)
- [[Cryptographic-Principles-Tomescu|Cryptographic Principles (Alin Tomescu)]] (blog, 2021)
- [[ZKProof-Wiki|ZKProof Wiki of Concrete ZKP Schemes]] (wiki, 2020)
- [[matter-labs-awesome-zero-knowledge-proofs|Awesome Zero-Knowledge Proofs (matter-labs)]] (doc, 2018)
- [[PH10-Privacy-Terminology|A Terminology for Talking about Privacy by Data Minimization: Anonymity, Unlinkability, Undetectability, Unobservability, Pseudonymity, and Identity Management (Pfitzmann, Hansen 2010)]] (paper, 2010)
- [[Android-Keystore-Implementer-Reference|Android Keystore — KeyMint/Keymaster implementer's reference]] (doc)
- [[Android-Trusty-TEE|Android Trusty TEE]] (doc)
- [[Apple-CryptoKit-SecureEnclave|Apple CryptoKit — SecureEnclave]] (doc)
- [[ARM-TrustZone|Arm TrustZone for Cortex-A]] (doc)
- [[Wikipedia-Concatenated-Error-Correction-Code|Concatenated error correction code (Wikipedia)]] (wiki)
- [[swiyu-Technical-Documentation|swiyu Technical Documentation and GitHub Organisation]] (doc)

### regulation

- [[FOJ-E-ID-Timeline-2026|New timeline for the introduction of the e-ID and the trust infrastructure (FOJ, 2026-06-30)]] (doc, 2026)
- [[Swiss-E-ID-Ordinance-VEID|Ordinance on the E-ID Act (E-ID-Verordnung, VEID) — consultation draft]] (wiki, 2025)
- [[EU-Digital-Identity-Regulation-2024-1183|Regulation (EU) 2024/1183 (European Digital Identity Framework) and implementing acts 2024/2977–2982]] (wiki, 2024)
- [[Swiss-E-ID-Act-BGEID|Swiss Federal Act on Electronic Identity and Other Electronic Credentials (E-ID Act, BGEID)]] (wiki, 2024)
- [[eIDAS-Regulation-910-2014|Regulation (EU) No 910/2014 (eIDAS)]] (wiki, 2014)

### revocation

- [[IETF-OAuth-Token-Status-List|Token Status List (TSL) — IETF draft]] (wiki, 2026)
- [[W3C-Bitstring-Status-List|Bitstring Status List v1.0 (W3C Recommendation)]] (wiki, 2025)
- [[eid-privacy-zkp-pocs|eid-privacy/zkp-pocs]] (code, 2025)
- [[BBC24-Accumulators|Cryptographic Accumulators: New Definitions, Enhanced Security, and Delegatable Proofs (Barthoulot, Blazy, Canard 2024)]] (paper, 2024)
- [[Col24-Revocation|Scalable and Privacy-Preserving Revocation of Verifiable Credentials (Colombo 2024)]] (paper, 2024)
- [[JLM22-ALLOSAUR|ALLOSAUR: Accumulator with Low-Latency Oblivious Sublinear Anonymous credential Updates with Revocations (Jaques, Lodder, Montgomery 2022)]] (paper, 2022)
- [[applied-crypto-heimdall|applied-crypto/heimdall]] (code, 2021)
- [[docknetwork-crypto|docknetwork/crypto (incl. vb_accumulator)]] (code, 2021)
- [[HKRW20-Sovrin-Revocation|Multi-Party Revocation in Sovrin: Performance through Distributed Trust (Helminger, Kales, Ramacher, Walch 2020)]] (paper, 2020)
- [[BG13-Polynomial-Evaluation|Zero-Knowledge Argument for Polynomial Evaluation with Application to Blacklists (Bayer, Groth 2013)]] (paper, 2013)

### scalable

- [[BBHR18-STARK|Scalable, Transparent, and Post-Quantum Secure Computational Integrity (Ben-Sasson, Bentov, Horesh, Riabzev 2018)]] (paper, 2018)
- [[WTSTW17-Hyrax|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[DI06-Scalable-MPC|Scalable Secure Multiparty Computation (Damgård-Ishai 2006)]] (paper, 2006)

### sigma

- [[docknetwork-crypto-library|DockNetwork Crypto Library Analysis]] (doc, 2026)
- [[OKMZ25-Beyond-Circuit|Beyond the Circuit: How to Minimize Foreign Arithmetic in ZKP Circuits (Orrù, Kadianakis, Maller, Zaverucha 2025)]] (paper, 2025)
- [[heidiverse-zkattest-rs|heidiverse/zkattest-rs (formerly UbiqueInnovation/zkattest-rs)]] (code, 2025)
- [[Orr25-Revisiting-KVAC|Revisiting Keyed-Verification Anonymous Credentials (Orrù 2025)]] (paper, 2025)
- [[IRTF-CFRG-Sigma-Protocols|Sigma Protocols — IRTF CFRG draft]] (wiki, 2025)
- [[CLR23-CDLS|CDLS: Proving Knowledge of Committed Discrete Logarithms with Soundness (Celi, Levin, Rowell 2023)]] (paper, 2023)
- [[KMN23-Sigmabus|Sigmabus: Binding Sigmas in Circuits for Fast Curve Operations (Kadianakis, Maller, Novakovic 2023)]] (paper, 2023)
- [[COPZ22-DLEQ-Across-Groups|Proofs of discrete logarithm equality across groups (Chase, Orrù, Perrin, Zaverucha 2022)]] (paper, 2022)
- [[Cronokirby-Paper-That-Keeps-Showing-Up|The Paper that Keeps Showing Up (Cronokirby, 2022)]] (blog, 2022)
- [[cloudflare-zkp-ecdsa|cloudflare/zkp-ecdsa]] (code, 2021)
- [[ZKP21-Sigma-Standard|ZKProof Sigma Protocol Proposal (Workshop 4)]] (paper, 2021)
- [[CMZ14-KVAC|Algebraic MACs and Keyed-Verification Anonymous Credentials (Chase, Meiklejohn, Zaverucha 2014)]] (paper, 2014)
- [[BG13-Polynomial-Evaluation|Zero-Knowledge Argument for Polynomial Evaluation with Application to Blacklists (Bayer, Groth 2013)]] (paper, 2013)
- [[Mau09-Unifying-ZKPoK|Unifying Zero-Knowledge Proofs of Knowledge (Maurer 2009)]] (paper, 2009)
- [[Dam04-Sigma-Protocols|On Sigma Protocols (Damgård)]] (paper, 2004)
- [[BBS04-ShortGroupSigs|Short Group Signatures (Boneh, Boyen, Shacham 2004)]] (paper, 2004)
- [[CM99-Safe-Primes|Proving in Zero-Knowledge that a Number is the Product of Two Safe Primes (Camenisch-Michels 1999)]] (paper, 1999)
- [[Cra97-Modular-Design|Modular Design of Secure yet Practical Cryptographic Protocols (Cramer 1997)]] (paper, 1997)
- [[CS97-DL-Proofs|Proof Systems for General Statements about Discrete Logarithms (Camenisch-Stadler 1997)]] (paper, 1997)
- [[Sch91-Schnorr-Signatures|Efficient Signature Generation by Smart Cards (Schnorr 1991)]] (paper, 1991)
- [[GQ88-Identity-Signature|A "Paradoxical" Identity-Based Signature Scheme Resulting from Zero-Knowledge (Guillou, Quisquater 1988)]] (paper, 1988)
- [[FS86-Fiat-Shamir|How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)]] (paper, 1986)
- [[Stanford-CS355-Topics-Cryptography|Stanford CS 355: Topics in Cryptography]] (course)

### signatures

- [[W3C-VC-DI-BBS|Data Integrity BBS Cryptosuites v1.0 (W3C)]] (wiki, 2026)
- [[IRTF-CFRG-BBS-Signatures|The BBS Signature Scheme — IRTF CFRG draft]] (wiki, 2026)
- [[IRTF-CFRG-BBS-Per-Verifier-Linkability|BBS per Verifier Linkability — IRTF CFRG draft]] (wiki, 2025)
- [[IRTF-CFRG-BBS-Blind-Signatures|Blind BBS Signatures — IRTF CFRG draft]] (wiki, 2025)
- [[WOSPG25-Legacy-PoP|Efficient Proofs of Possession for Legacy Signatures (Woo, Ozdemir, Sharp, Pornin, Grubbs 2025)]] (paper, 2025)
- [[DKLW25-Lattice-Proof-Friendly-Sigs|Lattice-Based Proof-Friendly Signatures from Vanishing Short Integer Solutions (Dubois, Klooß, Lai, Woo 2025)]] (paper, 2025)
- [[CHLT25-Server-Aided-AC|Server-Aided Anonymous Credentials (Chairattana-Apirom, Harding, Lysyanskaya, Tessaro 2025)]] (paper, 2025)
- [[NIST-IR-8547|NIST IR 8547: Transition to Post-Quantum Cryptography Standards]] (wiki, 2024)
- [[AGJLRS24-PQ-Sigs-Privacy|Practical Post-Quantum Signatures for Privacy (Argo, Güneysu, Jeudy, Land, Roux-Langlois, Sanders 2024)]] (paper, 2024)
- [[Ora24-BBS-Sharp|The BBS# protocol: Technical details (Orange 2024)]] (paper, 2024)
- [[NIST-FIPS-186-5|FIPS 186-5: Digital Signature Standard (DSS)]] (wiki, 2023)
- [[TZ23-Revisiting-BBS|Revisiting BBS Signatures (Tessaro, Zhu 2023)]] (paper, 2023)
- [[KMPQ23-SoK-AnonCreds|SoK: Anonymous Credentials (Kakvi, Martin, Putman, Quaglia 2023)]] (paper, 2023)
- [[anoncreds-anoncreds-v2-rs|anoncreds/anoncreds-v2-rs]] (code, 2022)
- [[microsoft-bbs-node-reference|microsoft/bbs-node-reference]] (code, 2022)
- [[docknetwork-crypto|docknetwork/crypto (incl. vb_accumulator)]] (code, 2021)
- [[BEKRS21-Issuer-Hiding|Issuer-Hiding Attribute-Based Credentials (Bobolz, Eidens, Krenn, Ramacher, Samelin 2021)]] (paper, 2021)
- [[mattrglobal-pairing_crypto|mattrglobal/pairing_crypto]] (code, 2021)
- [[QCY21-Blind-ECDSA|One-more Unforgeability of Blind ECDSA (Qin, Cai, Yuen 2021)]] (paper, 2021)
- [[mattrglobal-bbs-signatures|@mattrglobal/bbs-signatures (MATTR)]] (code, 2020)
- [[CDL16-DAA-qSDH|Anonymous Attestation Using the Strong Diffie Hellman Assumption Revisited (Camenisch, Drijvers, Lehmann 2016)]] (paper, 2016)
- [[BBDT16-KVAC|Improved Algebraic MACs and Practical Keyed-Verification Anonymous Credentials (Barki, Brunet, Desmoulins, Traoré 2016)]] (paper, 2016)
- [[PS16-Randomizable-Sigs|Short Randomizable Signatures (Pointcheval, Sanders 2016)]] (paper, 2016)
- [[BL13-ACL|Anonymous Credentials Light (Baldimtsi, Lysyanskaya 2013)]] (paper, 2013)
- [[BDLSY11-Ed25519|High-Speed High-Security Signatures (Bernstein, Duif, Lange, Schwabe, Yang 2011)]] (paper, 2011)
- [[PZ11-U-Prove|U-Prove Cryptographic Specification V1.1 (Paquin, Zaverucha 2011)]] (paper, 2011)
- [[ASM06-Dynamic-kTAA|Constant-Size Dynamic k-TAA (Au, Susilo, Mu 2006)]] (paper, 2006)
- [[CL04-Bilinear-Sigs|Signature Schemes and Anonymous Credentials from Bilinear Maps (Camenisch, Lysyanskaya 2004)]] (paper, 2004)
- [[CL02-CL-Signatures|A Signature Scheme with Efficient Protocols (Camenisch, Lysyanskaya 2002)]] (paper, 2002)
- [[BLS01-Short-Sigs|Short Signatures from the Weil Pairing (Boneh, Lynn, Shacham 2001)]] (paper, 2001)
- [[Sch91-Schnorr-Signatures|Efficient Signature Generation by Smart Cards (Schnorr 1991)]] (paper, 1991)
- [[Elg85-ElGamal|A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms (ElGamal 1985)]] (paper, 1985)
- [[RSA78-RSA|A Method for Obtaining Digital Signatures and Public-Key Cryptosystems (Rivest, Shamir, Adleman 1978)]] (paper, 1978)

### snark

- [[WPSP26-DV-Dynamic-zkSNARKs|Designated-Verifier Dynamic zk-SNARKs with Applications to Dynamic Proofs of Index (Wang et al. 2026)]] (paper, 2026)
- [[DHG26-MS4|Secure and Privacy-Preserving Credentials for E-ID - Final Report (Dengler, Humbert, Gasser 2026)]] (paper, 2026)
- [[OKMZ25-Beyond-Circuit|Beyond the Circuit: How to Minimize Foreign Arithmetic in ZKP Circuits (Orrù, Kadianakis, Maller, Zaverucha 2025)]] (paper, 2025)
- [[WOSPG25-Legacy-PoP|Efficient Proofs of Possession for Legacy Signatures (Woo, Ozdemir, Sharp, Pornin, Grubbs 2025)]] (paper, 2025)
- [[Mom25-GP-ZKP-VCs|General-Purpose Zero-Knowledge Proofs for Verifiable Credentials (Mombelli 2025)]] (paper, 2025)
- [[mombelld-general-purpose-zkps-vcs|mombelld/general-purpose-zkps-vcs]] (code, 2025)
- [[LHWYSW25-SoK-zkSNARKs|SoK: Understanding zk-SNARKs: The Gap Between Research and Practice (Liang et al. 2025)]] (paper, 2025)
- [[LSZ25-Vision|Vision: A Modular Framework for Anonymous Credential Systems (Lehmann, Sidorenko, Zacharakis 2025)]] (paper, 2025)
- [[FS24-Longfellow|Anonymous Credentials from ECDSA (Frigo & shelat 2024)]] (paper, 2024)
- [[PPZ24-Crescent|Crescent: Stronger Privacy for Existing Credentials (Paquin, Policharla, Zaverucha 2024)]] (paper, 2024)
- [[groth16|Groth16 (Alin Tomescu)]] (blog, 2024)
- [[CETWJL24-SoK-SNARK-Vulns|SoK: What Don't We Know? Understanding Security Vulnerabilities in SNARKs (Chaliasos, Ernstberger, Theodore, Wong, Jahanara, Livshits 2024)]] (paper, 2024)
- [[RES24-ZK-Systematic-Review|Systematic review: Comparing zk-SNARK, zk-STARK, and bulletproof protocols for privacy-preserving authentication (Oude Roelink, El-Hajj, Sarmah 2024)]] (paper, 2024)
- [[CPV24-Last-Challenge|The Last Challenge Attack: Exploiting a Vulnerable Implementation of the Fiat-Shamir Transform in a KZG-based SNARK (Ciobotaru, Peter, Velichkov 2024)]] (paper, 2024)
- [[STW23-CCS|Customizable Constraint Systems for Succinct Arguments (Setty, Thaler, Wahby 2023)]] (paper, 2023)
- [[BM23-Formalizing-SNARK-Soundness|Formalizing Soundness Proofs of SNARKs (Bailey, Miller 2023)]] (paper, 2023)
- [[CBBZ23-HyperPlonk|HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates (Chen et al. 2023)]] (paper, 2023)
- [[BS23-LaBRADOR|LaBRADOR: Compact Proofs for R1CS from Module-SIS (Beullens, Seiler 2023)]] (paper, 2023)
- [[KMN23-Sigmabus|Sigmabus: Binding Sigmas in Circuits for Fast Curve Operations (Kadianakis, Maller, Novakovic 2023)]] (paper, 2023)
- [[RWGM23-zk-creds|zk-creds: Flexible Anonymous Credentials from zkSNARKs and Existing Identity Infrastructure (Rosenberg, White, Garman, Miers 2023)]] (paper, 2023)
- [[microsoft-Spartan2|Microsoft Spartan2]] (code, 2022)
- [[personaelabs-spartan-ecdsa|personaelabs/spartan-ecdsa]] (code, 2022)
- [[Circom2-Docs|Circom2 Documentation]] (doc, 2021)
- [[gnark-Docs|gnark Documentation (Consensys)]] (doc, 2021)
- [[MoonMath-Manual|MoonMath Manual to zk-SNARKs]] (book, 2021)
- [[0xPolygonZero-plonky2|Plonky2 and Starky (Polygon Zero)]] (code, 2021)
- [[GW20-Plookup|Plookup: A Simplified Polynomial Protocol for Lookup Tables (Gabizon-Williamson 2020)]] (paper, 2020)
- [[BCRSVW19-Aurora|Aurora: Transparent Succinct Arguments for R1CS (Ben-Sasson et al. 2019)]] (paper, 2019)
- [[CFQW19-LegoSNARK|LegoSNARK: Modular Design and Composition of Efficient Zero-Knowledge Proofs (Campanelli et al. 2019)]] (paper, 2019)
- [[XZZPS19-Libra|Libra: Succinct Zero-Knowledge Proofs with Optimal Prover Computation (Xie, Zhang, Zhang, Papamanthou, Song 2019)]] (paper, 2019)
- [[GWC19-PLONK|PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge]] (paper, 2019)
- [[scipr-lab-libiop|scipr-lab/libiop]] (code, 2019)
- [[Sonic-Code|Sonic Reference Implementation (ebfull/sonic)]] (code, 2019)
- [[MBKM19-Sonic|Sonic: Zero-Knowledge SNARKs from Linear-Size Universal and Updateable Structured Reference Strings (Maller et al. 2019)]] (paper, 2019)
- [[Set19-Spartan|Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup (Setty 2020)]] (paper, 2019)
- [[GW19b-TurboPlonk|TurboPLONK Proposal (ZKProof Workshop 3)]] (paper, 2019)
- [[PLONK-Blog|Understanding PLONK]] (blog, 2019)
- [[GKMM18-Updatable-SRS|Updatable and Universal Common Reference Strings with Applications to zk-SNARKs (Groth et al. 2018)]] (paper, 2018)
- [[ZoKrates-Docs|ZoKrates Documentation]] (doc, 2018)
- [[BBB+17-Bulletproofs|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[WTSTW17-Hyrax|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[DFKP16-Cinderella|Cinderella: Turning Shabby X.509 Certificates into Elegant Anonymous Credentials with the Magic of Verifiable Computation (Delignat-Lavaud, Fournet, Kohlweiss, Parno 2016)]] (paper, 2016)
- [[Gro16-Groth16|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] (paper, 2016)
- [[PHGR13-Pinocchio|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] (paper, 2013)
- [[BCGTV13-SNARKs-for-C|SNARKs for C: Verifying Program Executions Succinctly and in Zero Knowledge (Ben-Sasson et al. 2013)]] (paper, 2013)
- [[BCTV13-vonNeumann|Succinct Non-Interactive Zero Knowledge for a von Neumann Architecture (Ben-Sasson, Chiesa, Tromer, Virza 2013)]] (paper, 2013)
- [[GGPR12-QSP-SNARK|Quadratic Span Programs and Succinct NIZKs without PCPs (GGPR 2013)]] (paper, 2012)
- [[ZKDL-Camp|ZKDL Camp — Lectures on Zero-Knowledge Proving Systems (Distributed Lab)]] (course)

### standard

- [[W3C-VC-DI-BBS|Data Integrity BBS Cryptosuites v1.0 (W3C)]] (wiki, 2026)
- [[EUDI-ARF|EUDI Wallet Architecture and Reference Framework (ARF)]] (doc, 2026)
- [[IETF-draft-google-cfrg-libzk|Longfellow ZK — IETF draft-google-cfrg-libzk]] (wiki, 2026)
- [[IETF-SD-JWT-VC|SD-JWT-based Verifiable Digital Credentials (SD-JWT VC) — IETF draft]] (wiki, 2026)
- [[swiyu-Trust-Protocol|swiyu Trust Protocol 2.0 Specification]] (doc, 2026)
- [[IRTF-CFRG-BBS-Signatures|The BBS Signature Scheme — IRTF CFRG draft]] (wiki, 2026)
- [[IETF-OAuth-Token-Status-List|Token Status List (TSL) — IETF draft]] (wiki, 2026)
- [[IRTF-CFRG-BBS-Per-Verifier-Linkability|BBS per Verifier Linkability — IRTF CFRG draft]] (wiki, 2025)
- [[W3C-Bitstring-Status-List|Bitstring Status List v1.0 (W3C Recommendation)]] (wiki, 2025)
- [[IRTF-CFRG-BBS-Blind-Signatures|Blind BBS Signatures — IRTF CFRG draft]] (wiki, 2025)
- [[OpenID4VCI|OpenID for Verifiable Credential Issuance 1.0]] (wiki, 2025)
- [[OpenID4VP|OpenID for Verifiable Presentations 1.0]] (wiki, 2025)
- [[IETF-RFC9901-SD-JWT|RFC 9901: Selective Disclosure for JSON Web Tokens (SD-JWT)]] (wiki, 2025)
- [[IRTF-CFRG-Sigma-Protocols|Sigma Protocols — IRTF CFRG draft]] (wiki, 2025)
- [[did-webvh-Method|The did:webvh DID Method — did:web + Verifiable History (v1.0)]] (wiki, 2025)
- [[W3C-VC-Data-Model-2.0|Verifiable Credentials Data Model v2.0 (W3C Recommendation)]] (wiki, 2025)
- [[DIF-DIDComm-Messaging-v2|DIDComm Messaging v2.x (DIF)]] (wiki, 2024)
- [[NIST-IR-8547|NIST IR 8547: Transition to Post-Quantum Cryptography Standards]] (wiki, 2024)
- [[NIST-FIPS-186-5|FIPS 186-5: Digital Signature Standard (DSS)]] (wiki, 2023)
- [[SIOPv2|Self-Issued OpenID Provider v2 (SIOPv2)]] (wiki, 2023)
- [[W3C-DID-Core-1.0|Decentralized Identifiers (DIDs) v1.0 (W3C Recommendation)]] (wiki, 2022)
- [[W3C-VC-Data-Model-1.1|Verifiable Credentials Data Model v1.1 (W3C Recommendation)]] (wiki, 2022)
- [[ISO-IEC-18013-5-mDL|ISO/IEC 18013-5:2021 — Mobile driving licence (mDL) application]] (wiki, 2021)
- [[ZKP21-Sigma-Standard|ZKProof Sigma Protocol Proposal (Workshop 4)]] (paper, 2021)
- [[W3C-JSON-LD-1.1|JSON-LD 1.1 (W3C Recommendation)]] (wiki, 2020)
- [[GW19b-TurboPlonk|TurboPLONK Proposal (ZKProof Workshop 3)]] (paper, 2019)
- [[NIST-FIPS-180-4|FIPS 180-4: Secure Hash Standard (SHS)]] (wiki, 2015)
- [[NIST-FIPS-202|FIPS 202: SHA-3 Standard]] (wiki, 2015)
- [[IETF-RFC7539-ChaCha20-Poly1305|RFC 7539: ChaCha20 and Poly1305 for IETF Protocols]] (wiki, 2015)
- [[BDLSY11-Ed25519|High-Speed High-Security Signatures (Bernstein, Duif, Lange, Schwabe, Yang 2011)]] (paper, 2011)
- [[PZ11-U-Prove|U-Prove Cryptographic Specification V1.1 (Paquin, Zaverucha 2011)]] (paper, 2011)
- [[NIST-FIPS-197|FIPS 197: Advanced Encryption Standard (AES)]] (wiki, 2001)
- [[did-web-Method|did:web Method Specification (W3C CCG)]] (wiki)
- [[Overlays-Capture-Architecture|Overlays Capture Architecture (OCA)]] (wiki)

### stark

- [[HLP24-Circle-STARKs|Circle STARKs (Haböck, Levit, Papini 2024)]] (paper, 2024)
- [[comparative-analysis-of-sp1-and-risc-zero-zero-knowledge|Comparative Analysis of SP1 and RISC Zero Zero-Knowledge Virtual Machines]] (blog, 2024)
- [[OpenVM-Docs|OpenVM Documentation]] (doc, 2024)
- [[SP1-Docs|SP1 Documentation (Succinct Labs)]] (doc, 2024)
- [[RES24-ZK-Systematic-Review|Systematic review: Comparing zk-SNARK, zk-STARK, and bulletproof protocols for privacy-preserving authentication (Oude Roelink, El-Hajj, Sarmah 2024)]] (paper, 2024)
- [[Plonky3-Plonky3|Plonky3/Plonky3]] (code, 2023)
- [[RISC-Zero-Docs|RISC Zero Documentation]] (doc, 2023)
- [[facebook-winterfell|facebook/winterfell]] (code, 2021)
- [[AIR-Docs|STARK 101 — AIR Tutorial (StarkWare)]] (doc, 2021)
- [[BBHR18-FRI|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)
- [[BBHR18-STARK|Scalable, Transparent, and Post-Quantum Secure Computational Integrity (Ben-Sasson, Bentov, Horesh, Riabzev 2018)]] (paper, 2018)

### theory

- [[BM23-Formalizing-SNARK-Soundness|Formalizing Soundness Proofs of SNARKs (Bailey, Miller 2023)]] (paper, 2023)
- [[MIT-6-5630-Advanced-Topics-Cryptography|MIT 6.5630 Advanced Topics in Cryptography (Fall 2023)]] (course, 2023)
- [[Quanta-Which-Computational-Universe|Which Computational Universe Do We Live In? (Quanta Magazine, 2022)]] (blog, 2022)
- [[PH10-Privacy-Terminology|A Terminology for Talking about Privacy by Data Minimization: Anonymity, Unlinkability, Undetectability, Unobservability, Pseudonymity, and Identity Management (Pfitzmann, Hansen 2010)]] (paper, 2010)
- [[GKR08-Muggles|Delegating Computation: Interactive Proofs for Muggles (Goldwasser, Kalai, Rothblum 2008)]] (paper, 2008)
- [[DI06-Scalable-MPC|Scalable Secure Multiparty Computation (Damgård-Ishai 2006)]] (paper, 2006)
- [[Dam04-Sigma-Protocols|On Sigma Protocols (Damgård)]] (paper, 2004)
- [[Cra97-Modular-Design|Modular Design of Secure yet Practical Cryptographic Protocols (Cramer 1997)]] (paper, 1997)
- [[BGKW88-MIP|Multi-Prover Interactive Proofs: How to Remove Intractability Assumptions (Ben-Or, Goldwasser, Kilian, Wigderson 1988)]] (paper, 1988)
- [[BFM88-NIZK-Intro|Non-Interactive Zero-Knowledge and Its Applications (BFM88)]] (paper, 1988)
- [[GMR85-ZK-Complexity|The Knowledge Complexity of Interactive Proof Systems (GMR85)]] (paper, 1985)
- [[Chiesa-Foundations-Probabilistic-Proofs|Foundations of Probabilistic Proofs (Alessandro Chiesa, EPFL CS-459)]] (course)

### threat-modeling

- [[Shostack-Threat-Modeling|Threat Modeling: Designing for Security]] (book, 2014)
- [[Howard-Lipner-Security-Development-Lifecycle|The Security Development Lifecycle]] (book, 2006)

### transformation

- [[FS86-Fiat-Shamir|How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)]] (paper, 1986)

### transparent

- [[eid-privacy-spartan-backend|eid-privacy/spartan-backend]] (code, 2026)
- [[IETF-draft-google-cfrg-libzk|Longfellow ZK — IETF draft-google-cfrg-libzk]] (wiki, 2026)
- [[ENRTTX26-OpenAC|OpenAC: Open Design for Transparent and Lightweight Anonymous Credentials (Eagen, Ngo, Rushi, Tong, Tsai, Xia 2026)]] (paper, 2026)
- [[google-longfellow-zk|longfellow-zk (Google)]] (code, 2025)
- [[FS24-Longfellow|Anonymous Credentials from ECDSA (Frigo & shelat 2024)]] (paper, 2024)
- [[BMNW24-Arc|Arc: Accumulation for Reed–Solomon Codes (Bünz, Mishra, Nguyen, Wang 2024)]] (paper, 2024)
- [[HLP24-Circle-STARKs|Circle STARKs (Haböck, Levit, Papini 2024)]] (paper, 2024)
- [[AHIV22-Ligero-Ext|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup]] (paper, 2022)
- [[microsoft-Spartan2|Microsoft Spartan2]] (code, 2022)
- [[facebook-winterfell|facebook/winterfell]] (code, 2021)
- [[Halo2-Docs|Halo2 Documentation (Zcash)]] (doc, 2021)
- [[0xPolygonZero-plonky2|Plonky2 and Starky (Polygon Zero)]] (code, 2021)
- [[CHJ+20-Bulletproofs-Opt|Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger (Chung et al. 2020)]] (paper, 2020)
- [[BFH+20-Ligero-Plus|Ligero++: A New Optimized Sublinear IOP (Bhadauria et al. 2020)]] (paper, 2020)
- [[Spartan-Framework-Code|Microsoft Spartan — Commit History]] (code, 2020)
- [[Spartan-Code|Microsoft Spartan (Original)]] (code, 2020)
- [[BCRSVW19-Aurora|Aurora: Transparent Succinct Arguments for R1CS (Ben-Sasson et al. 2019)]] (paper, 2019)
- [[scipr-lab-libiop|scipr-lab/libiop]] (code, 2019)
- [[Set19-Spartan|Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup (Setty 2020)]] (paper, 2019)
- [[BBHR18-FRI|Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI)]] (paper, 2018)
- [[BBHR18-STARK|Scalable, Transparent, and Post-Quantum Secure Computational Integrity (Ben-Sasson, Bentov, Horesh, Riabzev 2018)]] (paper, 2018)
- [[BBB+17-Bulletproofs|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] (paper, 2017)
- [[WTSTW17-Hyrax|Doubly-Efficient zkSNARKs Without Trusted Setup (Hyrax)]] (paper, 2017)
- [[AHIV17-Ligero|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup (Ames et al. 2017)]] (paper, 2017)

### trusted-setup

- [[groth16|Groth16 (Alin Tomescu)]] (blog, 2024)
- [[MBKM19-Sonic|Sonic: Zero-Knowledge SNARKs from Linear-Size Universal and Updateable Structured Reference Strings (Maller et al. 2019)]] (paper, 2019)
- [[GKMM18-Updatable-SRS|Updatable and Universal Common Reference Strings with Applications to zk-SNARKs (Groth et al. 2018)]] (paper, 2018)
- [[Gro16-Groth16|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] (paper, 2016)
- [[PHGR13-Pinocchio|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] (paper, 2013)
- [[BCGTV13-SNARKs-for-C|SNARKs for C: Verifying Program Executions Succinctly and in Zero Knowledge (Ben-Sasson et al. 2013)]] (paper, 2013)
- [[BCTV13-vonNeumann|Succinct Non-Interactive Zero Knowledge for a von Neumann Architecture (Ben-Sasson, Chiesa, Tromer, Virza 2013)]] (paper, 2013)
- [[GGPR12-QSP-SNARK|Quadratic Span Programs and Succinct NIZKs without PCPs (GGPR 2013)]] (paper, 2012)

### tutorials

- [[swiyu-Beta-ID-Cookbook|swiyu Cookbook — How to use Beta-ID for my business]] (doc, 2026)
- [[AIR-Docs|STARK 101 — AIR Tutorial (StarkWare)]] (doc, 2021)
- [[0xPARC-Learn-ZK|ZK Learning Resources by 0xPARC]] (course)

### universal-setup

- [[GWC19-PLONK|PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge]] (paper, 2019)
- [[Sonic-Code|Sonic Reference Implementation (ebfull/sonic)]] (code, 2019)
- [[MBKM19-Sonic|Sonic: Zero-Knowledge SNARKs from Linear-Size Universal and Updateable Structured Reference Strings (Maller et al. 2019)]] (paper, 2019)
- [[PLONK-Blog|Understanding PLONK]] (blog, 2019)
- [[GKMM18-Updatable-SRS|Updatable and Universal Common Reference Strings with Applications to zk-SNARKs (Groth et al. 2018)]] (paper, 2018)

### use-cases

- [[ABCD25-PETs-Payments|Privacy-Enhancing Technologies for Digital Payments: Mapping the Landscape (Auer, Böhme, Clark, Demirag 2025)]] (paper, 2025)

### wasm

- [[Circom2-Docs|Circom2 Documentation]] (doc, 2021)
- [[mattrglobal-bbs-signatures|@mattrglobal/bbs-signatures (MATTR)]] (code, 2020)

### zkp

- [[IETF-draft-google-cfrg-libzk|Longfellow ZK — IETF draft-google-cfrg-libzk]] (wiki, 2026)
- [[ENRTTX26-OpenAC|OpenAC: Open Design for Transparent and Lightweight Anonymous Credentials (Eagen, Ngo, Rushi, Tong, Tsai, Xia 2026)]] (paper, 2026)
- [[DHG26-MS4|Secure and Privacy-Preserving Credentials for E-ID - Final Report (Dengler, Humbert, Gasser 2026)]] (paper, 2026)
- [[GHE26-MS2|Secure and Privacy-Preserving Credentials for E-ID Proof-of-Concept (Gasser, Humbert, Elghareeb 2026)]] (paper, 2026)
- [[Green-How-To-Prove-False-Statements|How to prove false statements? (Part 1) (Matthew Green, 2025)]] (blog, 2025)
- [[ECZJG24-Need-ZKP|Do You Need a Zero Knowledge Proof? (Ernstberger, Chaliasos, Zhou, Jovanovic, Gervais 2024)]] (paper, 2024)
- [[RES24-ZK-Systematic-Review|Systematic review: Comparing zk-SNARK, zk-STARK, and bulletproof protocols for privacy-preserving authentication (Oude Roelink, El-Hajj, Sarmah 2024)]] (paper, 2024)
- [[CLR23-CDLS|CDLS: Proving Knowledge of Committed Discrete Logarithms with Soundness (Celi, Levin, Rowell 2023)]] (paper, 2023)
- [[MIT-6-5630-Advanced-Topics-Cryptography|MIT 6.5630 Advanced Topics in Cryptography (Fall 2023)]] (course, 2023)
- [[Thaler-Proofs-Arguments-ZK|Proofs, Arguments, and Zero-Knowledge]] (book, 2023)
- [[COPZ22-DLEQ-Across-Groups|Proofs of discrete logarithm equality across groups (Chase, Orrù, Perrin, Zaverucha 2022)]] (paper, 2022)
- [[Cronokirby-Paper-That-Keeps-Showing-Up|The Paper that Keeps Showing Up (Cronokirby, 2022)]] (blog, 2022)
- [[FLM22-ZKAttest|ZKAttest: Ring and Group Signatures for Existing ECDSA Keys (Faz-Hernández, Ladd, Maram 2022)]] (paper, 2022)
- [[Cryptographic-Principles-Tomescu|Cryptographic Principles (Alin Tomescu)]] (blog, 2021)
- [[MoonMath-Manual|MoonMath Manual to zk-SNARKs]] (book, 2021)
- [[Plonk-Family-Note|Note: PLONK / TurboPLONK / UltraPLONK Family]] (blog, 2021)
- [[ZKProof-Wiki|ZKProof Wiki of Concrete ZKP Schemes]] (wiki, 2020)
- [[matter-labs-awesome-zero-knowledge-proofs|Awesome Zero-Knowledge Proofs (matter-labs)]] (doc, 2018)
- [[Evolution-of-ZKPs|The Evolution of Zero Knowledge Proofs]] (blog, 2018)
- [[LFKN92-Sumcheck|Algebraic Methods for Interactive Proof Systems]] (paper, 1992)
- [[BFM88-NIZK-Intro|Non-Interactive Zero-Knowledge and Its Applications (BFM88)]] (paper, 1988)
- [[GMR85-ZK-Complexity|The Knowledge Complexity of Interactive Proof Systems (GMR85)]] (paper, 1985)
- [[Chiesa-Foundations-Probabilistic-Proofs|Foundations of Probabilistic Proofs (Alessandro Chiesa, EPFL CS-459)]] (course)
- [[Stanford-CS355-Topics-Cryptography|Stanford CS 355: Topics in Cryptography]] (course)
- [[0xPARC-Learn-ZK|ZK Learning Resources by 0xPARC]] (course)
- [[ZKDL-Camp|ZKDL Camp — Lectures on Zero-Knowledge Proving Systems (Distributed Lab)]] (course)

### zkvm

- [[comparative-analysis-of-sp1-and-risc-zero-zero-knowledge|Comparative Analysis of SP1 and RISC Zero Zero-Knowledge Virtual Machines]] (blog, 2024)
- [[OpenVM-Docs|OpenVM Documentation]] (doc, 2024)
- [[SP1-Docs|SP1 Documentation (Succinct Labs)]] (doc, 2024)
- [[RISC-Zero-Docs|RISC Zero Documentation]] (doc, 2023)
- [[BCTV13-vonNeumann|Succinct Non-Interactive Zero Knowledge for a von Neumann Architecture (Ben-Sasson, Chiesa, Tromer, Virza 2013)]] (paper, 2013)
