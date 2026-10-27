---
type: application
tags:
  - eid
  - openid4vc
  - did
  - implementations
---

[Home](../README.md) > [eID](README.md) > Communication-Protocols

# Communication Protocols for e-ID

## Description
Communication protocols define how credentials and proofs are exchanged between issuer, holder (wallet) and verifier. Two families dominate: the **OpenID for Verifiable Credentials (OpenID4VC)** family, built on OAuth 2.0 and used by swiyu and the EUDI wallet, and **DID-based messaging (DIDComm)** from the SSI / Aries ecosystem. Proximity (offline) presentation uses **ISO/IEC 18013-5** or OpenID4VP over BLE. Most protocols are format-agnostic, so ZKP presentations can be carried as an additional proof type: the eid-privacy integration with SICPA extended OpenID4VP with a new proof type without breaking changes ([[DHG26-MS4]]).

## Identifiers: DIDs and DID methods
- **DID** ([[W3C-DID-Core-1.0]]): a URI that resolves to a DID document listing keys (verification methods) and service endpoints. Its controller can prove control without permission from a central registry.
- **DID method**: the rules to create, resolve, update and deactivate a type of DID.
  - [[did-web-Method]]: uses a web domain's existing reputation, hosting the DID document at a well-known HTTPS location.
  - [[did-webvh-Method]] (formerly did:tdw, "Trust DID Web"): did:web plus a cryptographically chained, verifiable history of DID document versions, self-certifying identifiers, pre-rotation keys and witnesses. swiyu uses did:tdw / did:webvh v0.3 for issuers and verifiers in its base registry.
- Holders in OpenID4VC flows typically do not need a public DID; their binding key is carried in the credential ([[Holder-Binding]]).

## OpenID4VC family
- **OID4VCI** ([[OpenID4VCI]]): an OAuth-protected API for credential issuance. Any format (SD-JWT VC, ISO mdoc, W3C VCDM), optionally with cryptographic holder binding.
- **OID4VP** ([[OpenID4VP]]): presentation of credentials on top of OAuth 2.0, for any format including W3C VCs, mdoc, SD-JWT VC and AnonCreds.
- **SIOPv2** ([[SIOPv2]]): the wallet acts as a self-issued OpenID Provider and issues self-signed ID tokens; often combined with OID4VP for wallet-based login. The WP2 survey found no clear e-ID use case and no dedicated libraries.
- **OpenID4VP over BLE**: transport for offline presentations; at the time of the WP2 survey the only public implementation found was [[FOSDEM-2025-OpenID4VP-BLE]].

## DIDComm v2
[[DIF-DIDComm-Messaging-v2]] is a transport-agnostic, DID-based secure messaging protocol: JWM envelopes with authenticated (authcrypt) or anonymous (anoncrypt) encryption, signatures, mediators and routing. It is agnostic to the DID method, as long as the method supports the required keys and endpoint discovery. SICPA is the primary contributor of cross-platform DIDComm v2 libraries.

## ISO/IEC 18013-5 proximity presentation
[[ISO-IEC-18013-5-mDL]] defines device engagement (QR or NFC) and data retrieval over BLE, NFC or Wi-Fi Aware for mdoc credentials, with device authentication by the mdoc's device key. Used by the EUDI wallet for proximity flows.

## Usage in deployed systems
- **swiyu**: OID4VCI, OID4VP, BLE, JWE, SD-JWT VC, did:tdw / did:webvh ([[swiyu-Technical-Documentation]]).
- **EUDI reference wallet** (as surveyed by eid-privacy WP1): OID4VP draft 23 for remote presentation, ISO 18013-5 for proximity, OID4VCI draft 14 for issuance ([[eu-digital-identity-wallet]], [[EUDI-ARF]]).

## Libraries
From the eid-privacy WP2 survey ([[eid-privacy-WP2-Libraries]]):

| Library | Language | Protocols | Roles |
|---|---|---|---|
| [[Sphereon-OID4VC]] | TypeScript | OID4VCI (+ OID4VP / SIOPv2 in companion repo) | Wallet, issuer, RP |
| [[Sphereon-SSI-SDK]] | TypeScript | OID4VP, SIOPv2, DIDs, VCs (legacy, Veramo-based) | Wallet, verifier |
| [[spruceid-oid4vci-rs]] | Rust | OID4VCI | Issuer |
| [[spruceid-openid4vp]] | Rust | OID4VP | Verifier, wallet |
| [[spruceid-ssi]] | Rust | VC DM, SD-JWT, DID methods | Core library |
| [[trustbloc-wallet-sdk]] | Go (mobile bindings) | OID4VCI, OID4VP | Wallet |
| [[trustbloc-vcs]] | Go | OID4VCI, OID4VP | Issuer, verifier |
| [[microsoft-entra-verifiedid-wallet-library]] | Kotlin / Swift | OID4VP, issuance | Wallet |
| [[procivis-one-core]] | Rust | OpenID4VC, ISO 18013-5, SD-JWT VC, mdoc | All |
| [[eu-digital-identity-wallet]] | Kotlin / Swift / Python | OID4VCI, OID4VP, ISO 18013-5 | Reference wallet, issuer, verifier |
| [[sicpa-dlab-didcomm-python]] | Python | DIDComm v2 | Agent |
| [[sicpa-dlab-didcomm-rust]] | Rust (WASM, Swift, Kotlin bindings) | DIDComm v2 | Agent |
| [[sicpa-dlab-didcomm-jvm]] | Kotlin / Java | DIDComm v2 | Agent (Android, backend) |
| [[beatt83-didcomm-swift]] | Swift | DIDComm v2 | Agent (iOS) |
| [[openwallet-foundation-acapy]] | Python | DIDComm, AnonCreds, W3C VCs | Issuer, holder, verifier, mediator |
| [[openwallet-foundation-didcomm-mediator-credo]] | TypeScript | DIDComm mediation | Mediator |
| [[decentralized-identity-veramo]] | TypeScript | DIDs, VCs, DIDComm, selective disclosure | Framework |
| [[did-webvh-Libraries]] | TS / Python / Rust / Go | did:webvh | Resolver, controller |
| [[Sphereon-did-jwt]] | JavaScript | DID-signed JWTs | Library |

## Related
- [[Credential-Data-Structures]]
- [[eID-Systems-Overview]]
- [[Holder-Binding]]
- [[ZKP-on-Mobile]]

## Resources
- Wiki: [[W3C-DID-Core-1.0]], [[did-web-Method]], [[did-webvh-Method]], [[DIF-DIDComm-Messaging-v2]]
- Wiki: [[OpenID4VCI]], [[OpenID4VP]], [[SIOPv2]], [[ISO-IEC-18013-5-mDL]]
- Docs: [[eid-privacy-WP2-Libraries]], [[swiyu-Technical-Documentation]], [[EUDI-ARF]]
- Blog: [[FOSDEM-2025-OpenID4VP-BLE]]
- Paper: [[DHG26-MS4]]
