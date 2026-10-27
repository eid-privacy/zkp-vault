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

# e-ID Systems Overview and Comparison

## Description
An overview of national and cross-border electronic identity systems, focusing on their technical stack and privacy properties. Switzerland, the EU and Austria have their own pages ([[swiyu]], [[EUDI-ARF]], [[ID-Austria]]); this page compares them and lists other systems, based on the eid-privacy WP1 survey and the taxonomy ([[GHE25-Taxonomy]]).

## Switzerland, EU, Austria
| System | Model | Credential format | Signatures | Protocols | Unlinkability | Revocation |
|---|---|---|---|---|---|---|
| [[swiyu]] (CH) | Wallet, state trust infrastructure | SD-JWT VC | ECDSA P-256 | OpenID4VCI / VP | Batch issuance of single-use credentials | Token Status List, split into several lists |
| [[EUDI-ARF]] (EU) | Wallet per member state | ISO mdoc, SD-JWT VC | ECDSA | OpenID4VCI / VP, ISO 18013-5 | Batch issuance of one-time credentials | — |
| [[ID-Austria]] (AT) | Central authentication service | — (data sent by state registry) | — | OpenID Connect, SAML2 / PVP2 | Sector-specific identifiers (bPK); the state sees every login | — |
| AnonCreds v2 (below) | Credential system | W3C VC DM 2.0 | BBS, PS | — | Zero-knowledge presentations | ALLOSAUR accumulators |

**Moving to anonymous credentials** changes different parts of these systems depending on the approach ([[BL26-SoK-AnonCreds]]): BBS-style credentials need changes at issuers, holders and verifiers; general-purpose ZKPs over the existing ECDSA credentials (Longfellow, Crescent, the eid-privacy Spartan backend) leave the issuer infrastructure (mostly) unchanged and need changes at holders and verifiers only. See [Anonymous Credentials](../AnonymousCredentials/README.md).

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
- [[swiyu]]
- [[EUDI-ARF]]
- [[ID-Austria]]
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
