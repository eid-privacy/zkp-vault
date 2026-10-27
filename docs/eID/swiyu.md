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
| Protocols | [[OpenID4VCI]], [[OpenID4VP]], BLE, JWE ([[Communication-Protocols]]) |
| Identifiers | DIDs with did:tdw / [[did-webvh-Method]] v0.3 |
| Credential format | SD-JWT VC (draft 4, with SD-JWT draft 10) ([[IETF-SD-JWT-VC]]) |
| Signatures | ECDSA P-256 ([[NIST-FIPS-186-5]]) |
| Revocation | [[IETF-OAuth-Token-Status-List]], split into several lists |
| Registries | Base registry (cryptographic, DIDs) and trust registry (verified issuers / verifiers, decision-assistive prompts) — [[swiyu-Trust-Protocol]] |
| Rendering | [[Overlays-Capture-Architecture]] with wallet-specific extensions |
| Unlinkability | Batch issuance of single-use SD-JWTs; ZKPs not yet part of the design |

The trust infrastructure has two registries: the **base registry** provides the cryptographic registry (DIDs) with its validation capabilities, and the **trust registry** lists verified issuers and verifiers so that the wallet can show decision-assistive prompts ([[swiyu-Trust-Protocol]]). For rendering, the swiyu team extends [[Overlays-Capture-Architecture]], which is generic, with extensions for showing credentials in a mobile wallet.

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
- Paper: [[GHE25-Taxonomy]], [[GHE25-MS2]], [[DHG26-MS4]], [[Egg25-Swiss-eID-Security]], [[Mom25-GP-ZKP-VCs]]
- Docs: [[swiyu-Technical-Documentation]], [[swiyu-Trust-Protocol]], [[swiyu-Beta-ID-Cookbook]]
- Wiki: [[Swiss-E-ID-Act-BGEID]], [[Swiss-E-ID-Ordinance-VEID]], [[IETF-SD-JWT-VC]], [[IETF-OAuth-Token-Status-List]], [[did-webvh-Method]]
- Blog: [[eid-privacy-swiyu-demo]]
