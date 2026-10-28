---
hide:
  - navigation
---

# ZKP Vault

Reading list and notes on **zero-knowledge proofs** and **privacy-preserving electronic identity (e-ID)**,
from the Innosuisse project 101.292 IP-ICT _Secure and Privacy-Preserving Credentials for E-ID_
([EPFL/C4DT](https://c4dt.epfl.ch) and [SICPA](https://www.sicpa.com/expertise/identity/digital-identity)).
It links our own reports and code to the papers, standards and tools we used.
Our reports and code are archived with DOIs in the [eid-privacy community on Zenodo](https://zenodo.org/communities/eid-privacy).

<div class="grid cards" markdown>

- **[eID →](eID/README.md)**

    Actors and threats, deployed systems (swiyu, EUDI/ARF, ID Austria), credential formats and
    protocols, phone hardware, regulation.

- **[ZKPs →](ZKP/README.md)**

    Sigma proofs, circuit-based proofs, zkVMs, and how to build anonymous credentials with them.

</div>

---

## Our reports & drafts

| Document | Content |
|---|---|
| [Final report (MS4)](https://github.com/eid-privacy/zkp-reports/releases/download/latest/eid-privacy-MS4.pdf) · [notes](Resources/papers/DHG26-MS4.md) · [DOI](https://doi.org/10.5281/zenodo.23694203) | Final report of the grant: holder binding, unlinkability, predicates and revocation with ZKPs over SD-JWT / ECDSA P-256, benchmarks on phones |
| [Proof-of-concept report (MS2)](https://github.com/eid-privacy/zkp-reports/releases/download/latest/eid-privacy-MS2.pdf) · [notes](Resources/papers/GHE26-MS2.md) · [DOI](https://doi.org/10.5281/zenodo.23694201) | Proof of concept and comparison of ZKP stacks for e-ID |
| [Taxonomy of e-ID systems (draft paper)](https://github.com/eid-privacy/zkp-reports/releases/download/latest/eid-privacy-taxonomy-eid.pdf) · [notes](Resources/papers/GHE25-Taxonomy.md) · [DOI](https://doi.org/10.5281/zenodo.23694217) | Actors, trust goals, threat models, solution foundations and regulation of the Swiss and EU e-ID systems |
| [External security review](https://github.com/eid-privacy/zkp-reports/blob/main/security-review/zksecurity-epfl-sicpa.pdf) | Review of our circuits and the Spartan prover by [zkSecurity](https://zksecurity.xyz/), 2026-10 |

Sources and all versions: [eid-privacy/zkp-reports](https://github.com/eid-privacy/zkp-reports).
All DOIs are in the [eid-privacy community on Zenodo](https://zenodo.org/communities/eid-privacy); BibTeX in [zkp-reports](https://github.com/eid-privacy/zkp-reports#how-to-cite).

## Our code

⚠️ Research / demo code, not meant for production use.

| Repository | Content |
|---|---|
| [spartan-backend](https://github.com/eid-privacy/spartan-backend) · [notes](Resources/code/eid-privacy-spartan-backend.md) · [DOI](https://doi.org/10.5281/zenodo.23694668) | Spartan backend for Noir, with the e-ID circuits (SD-JWT verification, ECDSA-P256 holder binding over Tom-256) |
| [zkp-pocs](https://github.com/eid-privacy/zkp-pocs) · [notes](Resources/code/eid-privacy-zkp-pocs.md) · [DOI](https://doi.org/10.5281/zenodo.23694674) | Proofs of concept: BBS + Bulletproofs (docknetwork/crypto) and Noir/UltraHONK circuits, with benchmarks |
| [zkp-android](https://github.com/eid-privacy/zkp-android) · [notes](Resources/code/eid-privacy-zkp-android.md) | Android app generating and verifying Noir proofs (UltraHONK via mopro) on the phone |
| [zkp-android-spartan](https://github.com/eid-privacy/zkp-android-spartan) · [notes](Resources/code/eid-privacy-zkp-android-spartan.md) · [DOI](https://doi.org/10.5281/zenodo.23694719) | Android app benchmarking proof generation and verification with the Spartan backend |
| [ark-tom256](https://github.com/eid-privacy/ark-tom256) · [notes](Resources/code/eid-privacy-ark-tom256.md) | The Tom-256 curve for arkworks, whose order equals the base field of P-256 |
| [flakes](https://github.com/eid-privacy/flakes) · [notes](Resources/code/eid-privacy-flakes.md) | Nix flakes and binary cache for pinned Noir, Barretenberg and `nargo-t256` |
| [SWIYU-Demo](https://github.com/eid-privacy/SWIYU-Demo) · [notes](Resources/code/eid-privacy-SWIYU-Demo.md) | Issuer / verifier proof of concept on top of the swiyu infrastructure |

### Forked and modified

| Repository | Content |
|---|---|
| [noir (tom-256)](https://github.com/eid-privacy/noir/tree/tom-256) · [notes](Resources/code/eid-privacy-noir-tom256.md) | Fork of [noir-lang/noir](https://github.com/noir-lang/noir): the `tom-256` branch adds Tom-256 / P-256 support (`nargo-t256`) |
| [vega-prover](https://github.com/eid-privacy/vega-prover) · [notes](Resources/code/eid-privacy-vega-prover.md) | Fork of [microsoft/vega-prover](https://github.com/microsoft/vega-prover): the `raw-serde` branch loads the precomputed prover state about 5× faster |

All repositories: [github.com/eid-privacy](https://github.com/eid-privacy) · archived releases: [Zenodo community](https://zenodo.org/communities/eid-privacy) · overview: [eid-privacy/overview](https://github.com/eid-privacy/overview).

## Blog

Latest posts on [eid-privacy.github.io](https://eid-privacy.github.io/):

- [Verifiable SD-JWT Credential on Mobile](https://eid-privacy.github.io/wp2/2026/06/19/noir-benchmarking-mobile.html) (2026-06)
- [BoundedVec sizes vs. proving time in Noir](https://eid-privacy.github.io/wp2/2026/05/27/noir-benchmarking.html) (2026-05)
- [Reading list for ZKP algorithms and implementations](https://eid-privacy.github.io/wp2/2026/04/22/zkp-vault.html) (2026-04)
- [Choosing a Cryptographic Library for Anonymous Credentials](https://eid-privacy.github.io/wp2/2026/01/27/docknetwork-crypto-library.html) (2026-01)
- [Proof-of-Concept for ZKPs](https://eid-privacy.github.io/2026/01/09/poc-report.html) (2026-01)

---

## Foundational papers

The most-cited papers in the vault, from [OpenAlex](https://openalex.org) citation counts. All papers, ranked: [Resources/papers](Resources/papers/README.md).

<!-- generated by `devbox run summaries`: foundational papers -->
| Paper | Year | Citations | Per year |
|---|---|---|---|
| [[DH76-New-Directions|New Directions in Cryptography (Diffie, Hellman 1976)]] | 1976 | 14709 | 288.4 |
| [[RSA78-RSA|A Method for Obtaining Digital Signatures and Public-Key Cryptosystems (Rivest, Shamir, Adleman 1978)]] | 1978 | 13434 | 274.2 |
| [[Elg85-ElGamal|A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms (ElGamal 1985)]] | 1985 | 8057 | 191.8 |
| [[FS86-Fiat-Shamir|How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)]] | 1986 | 3949 | 96.3 |
| [[GMR85-ZK-Complexity|The Knowledge Complexity of Interactive Proof Systems (GMR85)]] | 1985 | 3264 | 77.7 |
| [[BLS01-Short-Sigs|Short Signatures from the Weil Pairing (Boneh, Lynn, Shacham 2001)]] | 2001 | 3091 | 118.9 |
| [[Sch91-Schnorr-Signatures|Efficient Signature Generation by Smart Cards (Schnorr 1991)]] | 1991 | 2792 | 77.6 |
| [[Ped91-Commitments|Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing (Pedersen 1991)]] | 1991 | 2454 | 68.2 |
| [[BBS04-ShortGroupSigs|Short Group Signatures (Boneh, Boyen, Shacham 2004)]] | 2004 | 2129 | 92.6 |
| [[Sch80-Schwartz-Zippel|Fast Probabilistic Algorithms for Verification of Polynomial Identities]] | 1980 | 1701 | 36.2 |
| [[Gro16-Groth16|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] | 2016 | 1265 | 115.0 |
| [[BBB+17-Bulletproofs|Bulletproofs: Short Proofs for Confidential Transactions and More (Bünz et al. 2018)]] | 2017 | 1152 | 115.2 |
| [[CL04-Bilinear-Sigs|Signature Schemes and Anonymous Credentials from Bilinear Maps (Camenisch, Lysyanskaya 2004)]] | 2004 | 1002 | 43.6 |
| [[BFM88-NIZK-Intro|Non-Interactive Zero-Knowledge and Its Applications (BFM88)]] | 1988 | 905 | 23.2 |
| [[PHGR13-Pinocchio|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] | 2013 | 864 | 61.7 |
| [[GGPR12-QSP-SNARK|Quadratic Span Programs and Succinct NIZKs without PCPs (GGPR 2013)]] | 2012 | 743 | 49.5 |
| [[LFKN92-Sumcheck|Algebraic Methods for Interactive Proof Systems]] | 1992 | 712 | 20.3 |
| [[CL02-CL-Signatures|A Signature Scheme with Efficient Protocols (Camenisch, Lysyanskaya 2002)]] | 2002 | 692 | 27.7 |
| [[PH10-Privacy-Terminology|A Terminology for Talking about Privacy by Data Minimization: Anonymity, Unlinkability, Undetectability, Unobservability, Pseudonymity, and Identity Management (Pfitzmann, Hansen 2010)]] | 2010 | 663 | 39.0 |
| [[BCGTV13-SNARKs-for-C|SNARKs for C: Verifying Program Executions Succinctly and in Zero Knowledge (Ben-Sasson et al. 2013)]] | 2013 | 596 | 42.6 |

## Latest paper additions

<!-- generated by `devbox run summaries` from Paper-History.md -->
| Date | Title | Authors |
|---|---|---|
| 2026-10-27 | [SoK: Understanding zk-SNARKs: The Gap Between Research and Practice](Resources/papers/LHWYSW25-SoK-zkSNARKs.md) | Junkai Liang, Daqi Hu, Pengfei Wu, Yunbo Yang, Qingni Shen, Zhonghai Wu |
| 2026-10-27 | [SoK: Anonymous Credentials](Resources/papers/KMPQ23-SoK-AnonCreds.md) | Saqib A. Kakvi, Keith M. Martin, Colin Putman, Elizabeth A. Quaglia |
| 2026-10-27 | [D2.2 Architecture for Attribute-based Credential Technologies — Final Version (ABC4Trust)](Resources/papers/BCD+14-ABC4Trust.md) | Patrik Bichsel, Jan Camenisch, Maria Dubovitskaya, Robert R. Enderlein, Stephan Krenn, Ioannis Krontiris, Anja Lehmann, Gregory Neven, Janus Dam Nielsen, Christian Paquin, Franz-Stefan Preiss, Kai Rannenberg, Ahmad Sabouri, Michael Bladt Stausholm |
| 2026-10-27 | [zk-creds: Flexible Anonymous Credentials from zkSNARKs and Existing Identity Infrastructure](Resources/papers/RWGM23-zk-creds.md) | Michael Rosenberg, Jacob White, Christina Garman, Ian Miers |
| 2026-10-27 | [Efficient Proofs of Possession for Legacy Signatures](Resources/papers/WOSPG25-Legacy-PoP.md) | Anna P. Y. Woo, Alex Ozdemir, Chad Sharp, Thomas Pornin, Paul Grubbs |

Full list: [Paper History](Paper-History.md).

To add content, see [Contribute](Contribute.md).
