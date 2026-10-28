---
type: application
tags:
  - eid
  - library
  - implementations
  - overview
---

[Home](../README.md) > [eID](README.md) > Library-Evaluation

# Library Evaluation

## Description
In 2025 the eid-privacy project (WP2) rated open-source libraries for e-ID and anonymous credentials, to pick the
basis for its proofs of concept ([[eid-privacy-WP2-Libraries]]). Each library got a score from 1 to 5 on six criteria;
the mean is its quality score. The scores show the state in mid-2025 and are a quick assessment, not an audit.
The project then used [[docknetwork-crypto]] for BBS + Bulletproofs and [[Noir]] for circuits ([[GHE26-MS2]]).

## Criteria
Each criterion is rated **5** (excellent), **4** (good), **3** (adequate), **2** (poor) or **1** (very poor / missing).

| Criterion | Short | 5 means | 1 means |
|---|---|---|---|
| Software structure / architecture / engineering | Str | Well organised, clear separation of concerns, modular and extensible | No clear architecture, very hard to understand or maintain |
| Unit tests & CI/CD | Test | Coverage > 80 %, integration tests, CI on several platforms (4: 60–80 %, 3: 30–60 %, 2: < 30 %) | No tests, no CI |
| License, ownership and access | Lic | Permissive license (MIT, Apache 2.0, BSD), clear contributor rules, no proprietary parts (4: copyleft) | Closed source, very restrictive or contested ownership |
| Amenity to change (issues, PRs) | Chg | Issues triaged within days, PRs reviewed and merged quickly (4: weeks, 3: months) | Abandoned, maintainers do not answer |
| Documentation | Doc | Tutorials, API reference, examples, architecture diagrams, up to date | Only a basic README |
| Probable support in the next 2–3 years | Sup | Backed by a large organisation, active community, roadmap, funding | Abandoned or on life support |

## Scores

### Zero-knowledge libraries

| Library | Language | Purpose | Str | Test | Lic | Chg | Doc | Sup | Mean | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| [[arkworks-rs-algebra|Arkworks Algebra]] | Rust | Low-level zkSNARK building blocks | 5 | 5 | 5 | 5 | 5 | 5 | **5.0** | Probably the best engineered and best supported project in this list |
| [[Crescent]] | Rust | e-ID ZKP library | 5 | 3 | 5 | 5 | 3 | 5 | **4.3** | Full e-ID solution with a good client and examples |
| [[arkworks-rs-crypto-primitives|Arkworks crypto-primitives]] | Rust | Crypto primitives | 3 | 5 | 5 | 5 | 2 | 5 | **4.2** | Bad documentation, not clear how to use it |
| [[Plonky3-Plonky3|Plonky3]] | Rust | Polynomial-IOP primitives for STARK-based zkVMs | 3 | 3 | 5 | 5 | 2 | 5 | **3.8** | Great community, but weak documentation and a high entry barrier |
| [[Spartan-Code|Spartan]] | Rust | Microsoft's Spartan proof system | 5 | 3 | 5 | 5 | 3 | 2 | **3.8** | |
| [[docknetwork-crypto|Docknetwork crypto]] | Rust | Signatures, ZKPs and high-level constructs | 5 | 3 | 3 | 3 | 2 | 5 | **3.5** | One of the most complete e-ID focused crypto libraries we know of |
| [[Longfellow]] | C++ | e-ID ZKP library | 5 | 3 | 3 | 3 | 2 | 5 | **3.5** | C++ without foreign-language wrappers, unclear APIs |
| [[mattrglobal-pairing_crypto|MATTR pairing_crypto]] | Rust | BBS signatures | 2 | 5 | 5 | 3 | 3 | 2 | **3.3** | Bad documentation, but wrappers for several languages |
| [[zkcrypto-bulletproofs|zkcrypto Bulletproofs]] | Rust | Fast Bulletproofs implementation | 5 | 3 | 5 | 2 | 3 | 2 | **3.3** | Only Bulletproofs; a fork of dalek-cryptography/bulletproofs |
| [[0xPolygonZero-plonky2|Plonky2]] | Rust | Polygon's ZK proving system | 2 | 2 | 5 | 2 | 5 | 2 | **3.0** | On its way to deprecation (replaced by Plonky3) |

### Zero-knowledge circuit frameworks

| Library | Language | Purpose | Str | Test | Lic | Chg | Doc | Sup | Mean | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| [[Circom2|Circom]] | Rust / WebAssembly | Most popular circuit framework | 5 | 5 | 5 | 5 | 5 | 5 | **5.0** | |
| [[scipr-lab-libiop|libiop]] | C++ | Library for IOP-based zkSNARKs | 5 | 5 | 5 | 3 | 5 | 3 | **4.3** | Could be a basis for IOP-based constructions |
| [[Halo2]] (Zcash) | Rust | Halo2 proof system and circuit framework | 3 | 5 | 5 | 3 | 3 | 3 | **3.7** | |
| [[Noir]] | Rust | Rust-like DSL for ZK circuits | 2 | 2 | 5 | 3 | 2 | 2 | **2.7** | Huge project with a big community |

### DIDComm libraries

| Library | Language | Purpose | Str | Test | Lic | Chg | Doc | Sup | Mean | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| [[openwallet-foundation-acapy|ACA-Py]] | Python | SSI agent | 5 | 5 | 5 | 5 | 5 | 5 | **5.0** | |
| [[openwallet-foundation-didcomm-mediator-credo|DIDComm Mediator Credo]] | TypeScript | DIDComm mediator for message routing and delivery | 5 | 5 | 5 | 5 | 5 | 5 | **5.0** | |
| [[decentralized-identity-veramo|Veramo]] | TypeScript | Framework for verifiable data and DIDComm messaging | 5 | 5 | 5 | 5 | 5 | 5 | **5.0** | |
| [[sicpa-dlab-didcomm-rust|didcomm-rust]] | Rust | DIDComm v2 messaging | 3 | 5 | 5 | 3 | 3 | 3 | **3.7** | |

### Verifiable credential format libraries

| Library | Language | Purpose | Str | Test | Lic | Chg | Doc | Sup | Mean | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| [[spruceid-ssi|SpruceID ssi]] | Rust | VC data model, among other things | 5 | 5 | 5 | 5 | 5 | 5 | **5.0** | Maybe the best in this category, needs more research |
| [[procivis-one-core|Procivis One Core]] | Rust | All-in-one application, not specific to VC formats | 3 | 3 | 5 | 2 | 5 | 3 | **3.5** | |
| [[Sphereon-did-jwt|did-jwt]] | TypeScript | Simple DID-JWT implementation | 5 | 2 | 3 | 2 | 5 | 2 | **3.2** | |

Crypto and communication libraries are mature, but there are few dedicated VC-format libraries: the format is
usually a small part of a bigger project (for example, Longfellow parses CBOR itself).

## Related
- [[Communication-Protocols]]
- [[ZKP-on-Mobile]]
- [[eID-Systems-Overview]]

## Resources
- Docs: [[eid-privacy-WP2-Libraries]]
- Paper: [[GHE26-MS2]]
