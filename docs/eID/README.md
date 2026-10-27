---
type: applications
status: production
tags:
  - zkp
  - applications
  - use-cases
---

[Home](../README.md) > eID

# Electronic Identity (e-ID)

This section covers real-world use cases and applications of Zero-Knowledge Proofs across various domains.

## Electronic Identity (e-ID)

The notes below cover privacy-preserving electronic identity: who the actors are and what they need, what can go wrong, which cryptographic and hardware building blocks exist, and how deployed systems (swiyu, EUDI, and others) use them. They condense the public work of the eid-privacy project — the taxonomy paper [[GHE25-Taxonomy]] and the milestone reports [[GHE25-MS2]] and [[DHG26-MS4]] — and link to the papers, standards and code in [Resources](../Resources/README.md).

Suggested reading order: start with actors, trust goals and threat models; then the building blocks (selective disclosure, credential formats, hardware, holder binding, unlinkable credentials, predicates, revocation); then systems, protocols and law.

The cryptographic building blocks (selective disclosure with signatures, holder binding, unlinkable credentials, predicates, revocation, mobile performance, post-quantum) are in [Anonymous Credentials](../AnonymousCredentials/README.md) in the ZKPs part.

## Contents

| Note | Description |
|------|-------------|
| [e-ID Actors and Trust Goals](./eID-Actors-and-Trust-Goals.md) | Legal entities vs. functional roles (issuer, holder, verifier) and the trust goals of users, businesses and governments |
| [e-ID Threat Models](./eID-Threat-Models.md) | External, internal and systemic threats, including supply-chain attacks |
| [Privacy Requirements](./Privacy-Requirements.md) | Selective disclosure, unlinkability, untraceability, freshness, pseudonyms; why salted-hash credentials need batch issuance |
| [Pseudonyms in e-ID](./Pseudonyms-in-eID.md) | Per-verifier unlinkable pseudonyms and Austria's sector-specific identifiers (bPK) |
| [e-ID Systems Overview](./eID-Systems-Overview.md) | Comparison of swiyu, EUDI, ID Austria and AnonCreds v2; Aadhaar, MOSIP and others |
| [swiyu](./swiyu.md) | The Swiss e-ID: SD-JWT VC, OpenID4VC, DIDs, base and trust registries, status lists |
| [EUDI Wallet and the ARF](./EUDI-ARF.md) | The EU wallet: regulation, implementing acts, reference implementation, batch issuance vs. anonymous credentials |
| [ID Austria](./ID-Austria.md) | Austria's central authentication service and sector-specific identifiers (bPK) |
| [Credential Data Structures](./Credential-Data-Structures.md) | VC DM 1.1/2.0, JSON-LD, SD-JWT VC, mdoc/mDL, X.509, DIDs, status lists and their ZKP-friendliness |
| [Communication Protocols](./Communication-Protocols.md) | DIDs, DIDComm v2, OpenID4VCI/VP, SIOPv2, ISO 18013-5, and a library table |
| [Status Lists](./Status-Lists.md) | IETF Token Status List and W3C Bitstring Status List, and why their indices are linkable |
| [Hardware Security for e-ID](./Hardware-Security-for-eID.md) | Secure elements, TEEs, Secure Enclave and HSMs; ECDSA P-256 as the common denominator on phones |
| [e-ID Legal Framework](./eID-Legal-Framework.md) | Legal hierarchy in the EU and Switzerland: BGEID, VEID, eIDAS, EUDI |
| [e-ID Open Questions](./eID-Open-Questions.md) | Open research and engineering questions |
| [eID Papers](./eID-Papers.md) | Papers on e-ID and anonymous credentials, ranked by citations (generated) |
