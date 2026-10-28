---
type: application
tags:
  - eid
  - credential-format
  - openid4vc
  - regulation
---

[Home](../README.md) > [eID](README.md) > swiyu

# swiyu (Switzerland)

## Description
The Swiss state-run trust infrastructure and wallet for the E-ID, defined by the [[Swiss-E-ID-Act-BGEID]] and [[Swiss-E-ID-Ordinance-VEID]] ([[eID-Legal-Framework]]). Developed in the open on GitHub ([[swiyu-Technical-Documentation]]).

| Layer | Choice |
|---|---|
| Protocols | [[OpenID4VCI]] 1.0, [[OpenID4VP]] 1.0, BLE, JWE ([[Communication-Protocols]]) |
| Identifiers | DIDs with [[did-webvh-Method]] v1.0 (v0.3, still called did:tdw, in the 2025 public beta) |
| Credential format | SD-JWT VC draft 15 ([[IETF-SD-JWT-VC]]) over SD-JWT RFC 9901 ([[IETF-RFC9901-SD-JWT]]); the 2025 public beta used SD-JWT VC draft 4 with SD-JWT draft 10 |
| Signatures | ECDSA P-256 ([[NIST-FIPS-186-5]]) |
| Revocation | [[IETF-OAuth-Token-Status-List]] (draft 20), split into several lists |
| Holder binding | Hardware-bound keys in the Android / Apple secure element, bound during OID4VCI issuance; software-based binding announced for later |
| Registries | Base registry (cryptographic, DIDs) and trust registry (verified issuers / verifiers, decision-assistive prompts) — [[swiyu-Trust-Protocol]] v2.0 |
| Rendering | [[Overlays-Capture-Architecture]] with wallet-specific extensions |
| Unlinkability | Batch issuance of single-use SD-JWTs; ZKPs not yet part of the design |

The trust infrastructure has two registries: the **base registry** provides the cryptographic registry (DIDs) with its validation capabilities, and the **trust registry** lists verified issuers and verifiers so that the wallet can show decision-assistive prompts ([[swiyu-Trust-Protocol]]). For rendering, the swiyu team extends [[Overlays-Capture-Architecture]], which is generic, with extensions for showing credentials in a mobile wallet.

## Status (October 2026)
The E-ID Act was accepted in the referendum of 28 September 2025. The launch, first planned for summer 2026 and then for December 2026, was postponed on 30 June 2026 without a new date: the online issuance process gets extra protection against malware on the device and better deepfake detection. The trust infrastructure is expected to go live in the first half of 2027, independently of the E-ID ([[FOJ-E-ID-Timeline-2026]]). Until then, issuers and verifiers test against the public sandbox, whose stack is the one in the table above ([[swiyu-Technical-Documentation]]).

## Privacy
Unlinkability relies on **batch issuance** of single-use SD-JWT credentials: the salted-hash format shows the same issuer signature and hash list in every presentation, so the wallet must use a fresh credential each time, and colluding issuer and verifiers can still link presentations ([[Privacy-Requirements]]). Revocation uses the IETF Token Status List, split into several smaller lists ([[Status-Lists]]). ZKPs are not part of the current design; the eid-privacy project showed that ZKPs can be added on the holder side over the unmodified swiyu SD-JWT, including holder binding ([[DHG26-MS4]], [[Holder-Binding]]).

## Analyses and demos
- Security analysis [[Egg25-Swiss-eID-Security]]: threat model, attack trees, more than 90 vulnerabilities reported.
- ZKP proofs of concept over unmodified swiyu SD-JWTs: [[DHG26-MS4]], [[Mom25-GP-ZKP-VCs]].
- Our issuer / verifier proof of concept: [eid-privacy/SWIYU-Demo](https://github.com/eid-privacy/SWIYU-Demo), announced in [[eid-privacy-swiyu-demo]].
- The test credential (Beta-ID) is described in [[swiyu-Beta-ID-Cookbook]].

## Related
- [[eID-Systems-Overview]] — comparison with other systems
- [[eID-Legal-Framework]] — BGEID and VEID
- [[Communication-Protocols]]
- [[Credential-Data-Structures]]

## Resources
- Paper: [[GHE25-Taxonomy]], [[GHE26-MS2]], [[DHG26-MS4]], [[Egg25-Swiss-eID-Security]], [[Mom25-GP-ZKP-VCs]]
- Docs: [[swiyu-Technical-Documentation]], [[swiyu-Trust-Protocol]], [[swiyu-Beta-ID-Cookbook]], [[FOJ-E-ID-Timeline-2026]]
- Wiki: [[Swiss-E-ID-Act-BGEID]], [[Swiss-E-ID-Ordinance-VEID]], [[IETF-SD-JWT-VC]], [[IETF-RFC9901-SD-JWT]], [[IETF-OAuth-Token-Status-List]], [[did-webvh-Method]]
- Blog: [[eid-privacy-swiyu-demo]]
