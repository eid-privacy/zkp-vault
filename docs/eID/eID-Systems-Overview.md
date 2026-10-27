---
type: application
tags:
  - eid
  - credential-format
  - openid4vc
  - regulation
  - privacy
---

[Home](../README.md) > [eID](README.md) > eID-Systems-Overview

# e-ID Systems Overview

## Description
An overview of national and cross-border electronic identity systems, focusing on their technical stack and privacy properties. Switzerland and the EU are covered in most detail because they are the subject of the eid-privacy taxonomy ([[GHE25-Taxonomy]]); other systems are listed for comparison, based on the eid-privacy WP1 survey.

## Switzerland: swiyu
The Swiss state-run trust infrastructure and wallet for the E-ID, defined by the [[Swiss-E-ID-Act-BGEID]] and [[Swiss-E-ID-Ordinance-VEID]] ([[eID-Legal-Framework]]). Developed in the open on GitHub ([[swiyu-Technical-Documentation]]).

| Layer | Choice |
|---|---|
| Protocols | [[OpenID4VCI]], [[OpenID4VP]], BLE, JWE ([[Communication-Protocols]]) |
| Identifiers | DIDs with did:tdw / [[did-webvh-Method]] v0.3 |
| Credential format | SD-JWT VC (draft 4, with SD-JWT draft 10) ([[IETF-SD-JWT-VC]]) |
| Signatures | ECDSA P-256 ([[NIST-FIPS-186-5]]) |
| Revocation | [[IETF-OAuth-Token-Status-List]], split into several lists |
| Registries | Base registry (cryptographic, DIDs) and trust registry (verified issuers / verifiers, decision-assistive prompts) — [[swiyu-Trust-Protocol]] |
| Rendering | [[Overlays-Capture-Architecture]] with wallet-specific extensions |
| Unlinkability | Batch issuance of single-use SD-JWTs; ZKPs not yet part of the design |

Analyses: the security analysis [[Egg25-Swiss-eID-Security]] (threat model, attack trees, more than 90 vulnerabilities reported); ZKP proofs of concept over unmodified swiyu SD-JWTs ([[DHG26-MS4]], [[Mom25-GP-ZKP-VCs]]); demo issuer [[eid-privacy-swiyu-demo]]; the test credential is described in [[swiyu-Beta-ID-Cookbook]].

## European Union: eIDAS, EUDI and the ARF
- **Legal basis**: [[eIDAS-Regulation-910-2014]] (2014, mutual recognition of national eID schemes) and its 2024 amendment [[EU-Digital-Identity-Regulation-2024-1183]] (EUDI / "eIDAS 2"), which requires every member state to offer a European Digital Identity Wallet, with implementing acts 2024/2977–2982.
- **Technical framework**: the [[EUDI-ARF]] describes PID and attestations in ISO mdoc and SD-JWT VC, OID4VCI / OID4VP and ISO 18013-5, issuer keys in HSMs and wallet secure cryptographic devices. Reference implementation: [[eu-digital-identity-wallet]].
- **ARF discussion topics** relevant to privacy: A (privacy risks and mitigations), B (re-issuance and batch issuance), C (wallet unit attestation), E (pseudonyms), G (zero-knowledge proofs), and later topics on transaction logs, wallet-to-wallet interaction, combined presentations and relying-party registration.
- **Critique**: [[BBC+24-ARF-Feedback]] argues that SD-JWT / mdoc with conventional signatures cannot meet the regulation's unlinkability requirements and recommends BBS-family anonymous credentials. [[KVRSCLT26-EUDIF-Harms]] formally models the framework's information leakage and concludes that PETs reduce information flows but cannot mitigate harms fundamental to deploying digital identity at scale.
- ZKP candidates under discussion include [[Longfellow]] (proposed as an IETF draft, [[IETF-draft-google-cfrg-libzk]]) and BBS ([[IRTF-CFRG-BBS-Signatures]]); ETSI is standardising BBS, Longfellow, Vega and OpenAC ([[DHG26-MS4]]).

## Austria: ID Austria
Designed as an **authentication system**: holders log in to services through OpenID Connect or SAML2 / PVP2. Registries are state-run; when a service requests data, the user consents and the state registry sends the data to the service. This avoids over-sharing to the service but gives the state a full log of who received what data, when — and the state can in principle log in on the user's behalf. Sector-specific identifiers (bPK) provide linkability within a sector only; see [[Pseudonyms-in-eID]]. Developer documentation is only partly available in English.

## AnonCreds v2
A credential system rather than a national e-ID: W3C VC DM 2.0 credentials with pluggable signatures (BBS, PS; CL and lattice-based considered), AnonCreds v1 concepts (schemas, credential definitions, presentation requests), and ALLOSAUR accumulators for revocation ([[JLM22-ALLOSAUR]]). Code: [[anoncreds-anoncreds-v2-rs]]. See [[Unlinkable-Anonymous-Credentials]].

## India: Aadhaar
A very centralised national identity platform with biometric enrolment, exposed through the IndiaStack APIs. Few technical details on privacy mechanisms are publicly available; the WP1 survey relied on a Privacy International case study.

## MOSIP
The Modular Open-Source Identity Platform gives countries open-source building blocks for national ID systems. It follows biometric standards (ISO/IEC 19794, CBEFF), OAuth 2.0 / OpenID Connect, and defines **Claim 169**, a CBOR Web Token claim registered at IANA for embedding demographic and biometric data (e.g. a low-resolution face image) in a signed QR code for offline verification.

## Other systems (brief)

| System | Notes from the WP1 survey |
|---|---|
| Estonia e-ID | Smart-card / mobile eID with the X-Road data-exchange layer; citizens can see who accessed their data. Few details on credential formats and privacy found. |
| BankID (Sweden) | Run by banks on their security infrastructure; "centralised trust" privacy. |
| GOV.UK One Login | OpenID Connect-compliant login service for government services. |
| MitID (Denmark) | Successor of NemID; two-factor authentication, separation of personal and transaction data. |
| SingPass (Singapore) | Consent-based data sharing via the MyInfo service. |
| My Number (Japan) | 12-digit unique identifier with legal limits on data collection and sharing between agencies. |
| UAE Pass | Biometric verification and consent for data access by government entities. |
| Belgium eID | Card-based eID with a hierarchical certificate structure. |

Several of these rely primarily on **law** rather than cryptography to protect data held by private actors, which the taxonomy identifies as vulnerable to regulatory drift ([[eID-Threat-Models]]).

## Related
- [[eID-Legal-Framework]]
- [[Communication-Protocols]]
- [[Credential-Data-Structures]]
- [[Revocation-in-eID]]
- [[eID-Actors-and-Trust-Goals]]

## Resources
- Paper: [[GHE25-Taxonomy]], [[DHG26-MS4]], [[Egg25-Swiss-eID-Security]], [[Mom25-GP-ZKP-VCs]], [[BBC+24-ARF-Feedback]], [[KVRSCLT26-EUDIF-Harms]], [[MRHHL25-Physical-Identities]]
- Docs: [[swiyu-Technical-Documentation]], [[swiyu-Trust-Protocol]], [[swiyu-Beta-ID-Cookbook]], [[EUDI-ARF]]
- Wiki: [[Swiss-E-ID-Act-BGEID]], [[Swiss-E-ID-Ordinance-VEID]], [[eIDAS-Regulation-910-2014]], [[EU-Digital-Identity-Regulation-2024-1183]]
- Code: [[eu-digital-identity-wallet]], [[anoncreds-anoncreds-v2-rs]], [[procivis-one-core]]
- Blog: [[eid-privacy-swiyu-demo]], [[eid-privacy-privacy-unlinkability]], [[SwissCovid-Keeps-Your-Secrets]]
