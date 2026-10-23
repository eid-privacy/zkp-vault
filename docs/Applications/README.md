---
type: applications
status: production
tags:
  - zkp
  - applications
  - use-cases
---

[Home](../README.md) > Applications

# ZKP Applications

This section covers real-world use cases and applications of Zero-Knowledge Proofs across various domains.

## Electronic Identity (e-ID)

The notes below cover privacy-preserving electronic identity: who the actors are and what they need, what can go wrong, which cryptographic and hardware building blocks exist, and how deployed systems (swiyu, EUDI, and others) use them. They condense the public work of the eid-privacy project — the taxonomy paper [[GHE25-Taxonomy]] and the milestone reports [[GHE25-MS2]] and [[DHG26-MS4]] — and link to the papers, standards and code in [Resources](../Resources/README.md).

Suggested reading order: start with actors, trust goals and threat models; then the building blocks (selective disclosure, credential formats, hardware, holder binding, unlinkable credentials, predicates, revocation); then systems, protocols and law.

## Contents

| Note | Description |
|------|-------------|
| [e-ID Actors and Trust Goals](./eID-Actors-and-Trust-Goals.md) | Legal entities vs. functional roles (issuer, holder, verifier) and the trust goals of users, businesses and governments |
| [e-ID Threat Models](./eID-Threat-Models.md) | External, internal and systemic threats, including supply-chain attacks |
| [Selective Disclosure](./Selective-Disclosure.md) | Signature-based (CL, BBS, PS) vs. salted-hash (SD-JWT, mdoc) vs. ZKPs over existing signatures |
| [Credential Data Structures](./Credential-Data-Structures.md) | VC DM 1.1/2.0, JSON-LD, SD-JWT VC, mdoc/mDL, X.509, DIDs, status lists and their ZKP-friendliness |
| [Hardware Security for e-ID](./Hardware-Security-for-eID.md) | Secure elements, TEEs, Secure Enclave and HSMs; ECDSA P-256 as the common denominator on phones |
| [Holder Binding](./Holder-Binding.md) | Unlinkable proof of a hardware-bound ECDSA key: ZKAttest, BBS#, Crescent-style, Longfellow, and eid-privacy PoCs |
| [Unlinkable Anonymous Credentials](./Unlinkable-Anonymous-Credentials.md) | Generic UAC over ECDSA, the BBS lineage, CL, PS and AnonCreds v2 |
| [Pseudonyms in e-ID](./Pseudonyms-in-eID.md) | Per-verifier unlinkable pseudonyms and Austria's sector-specific identifiers (bPK) |
| [Predicate Proofs](./Predicate-Proofs.md) | Range, set-membership and cross-credential proofs; issuer-precomputed attributes; verifier-exclusive and deniable proofs |
| [Revocation in e-ID](./Revocation-in-eID.md) | Status lists, short-lived credentials, accumulators, polynomial blacklists and PIR compared |
| [Signed Revocation Lists](./Signed-Revocation-Lists.md) | A 208-byte binary, issuer-signed list proven in ZK with a hidden credential ID |
| [Private Information Retrieval for e-ID](./Private-Information-Retrieval-for-eID.md) | PIR for revocation-status and trust-registry lookups |
| [Post-Quantum and e-ID](./Post-Quantum-and-eID.md) | Quantum threats to signatures and unlinkability ("store now, link later"); hardware and standardisation constraints |
| [ZKP on Mobile](./ZKP-on-Mobile.md) | Prover time on phones, benchmarks and pre-computation |
| [Communication Protocols](./Communication-Protocols.md) | DIDs, DIDComm v2, OpenID4VCI/VP, SIOPv2, ISO 18013-5, and a library table |
| [e-ID Systems Overview](./eID-Systems-Overview.md) | swiyu, EUDI/ARF, ID Austria, AnonCreds v2, Aadhaar, MOSIP and others |
| [e-ID Legal Framework](./eID-Legal-Framework.md) | Legal hierarchy in the EU and Switzerland: BGEID, VEID, eIDAS, EUDI |
| [e-ID Open Questions](./eID-Open-Questions.md) | Open research and engineering questions |

## Other Application Areas

## Privacy-Focused Applications

### Cryptocurrencies
- **Zcash**: Uses zk-SNARKs for private transactions
- **Monero**: Uses Bulletproofs for range proofs
- **Privacy Layers**: Aztec, Tornado Cash

### Identity Management
See [Electronic Identity (e-ID)](#electronic-identity-e-id) above for detailed notes.
- **Self-sovereign identity**: Proving attributes without revealing identity
- **Age verification**: Proving age without revealing birthdate
- **Credential verification**: Academic or professional credentials

## Scalability Solutions

### Layer 2 Scaling
- **zkRollups**: zkSync, Loopring, dYdX
- **Validium**: StarkWare solutions
- **ZkEVM**: Polygon Hermez, Scroll, zkSync Era

### Blockchain Compression
- **State compression**: Reducing on-chain data storage
- **Transaction aggregation**: Bundling multiple transactions

## Enterprise Applications

### Supply Chain
- **Provenance tracking**: Verifying product authenticity
- **Compliance verification**: Meeting regulatory requirements

### Healthcare
- **Medical records**: Sharing diagnostic results without revealing patient data
- **Clinical trials**: Proving trial efficacy without revealing individual data

### Finance
- **Credit scoring**: Proving creditworthiness without revealing financial details
- **Risk modeling**: Sharing risk assessments without revealing underlying data

## Gaming and Digital Assets

### NFTs
- **Private trading**: Transacting NFTs without revealing ownership
- **Metadata privacy**: Hiding sensitive metadata

### Gaming
- **Fair gameplay**: Proving game outcomes without revealing strategies
- **Cheating prevention**: Verifying compliance with game rules
