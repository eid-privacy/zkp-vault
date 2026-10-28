---
type: application
tags:
  - eid
  - privacy
  - anonymous-credentials
---

[Home](../README.md) > [eID](README.md) > Privacy-Requirements

# Privacy Requirements

## Description
What an e-ID wallet has to provide to protect its users, and how far today's deployments get. The EU regulation explicitly requires selective disclosure, pseudonymity and unlinkability (eIDAS Art. 5a(16)); the Swiss E-ID Act requires data minimisation ([[eID-Legal-Framework]]). The taxonomy describes the user-side goals as *anonymity* and *autonomy* ([[eID-Actors-and-Trust-Goals]]).

## Requirements
Following [[BL26-SoK-AnonCreds]], the core requirements are:

| Requirement | Meaning | Salted-hash credentials (SD-JWT, mdoc) |
|---|---|---|
| Selective disclosure | Reveal only the attributes needed | Yes, per attribute; predicates only if the issuer pre-computes them (e.g. `age_over_18`) |
| Multi-show unlinkability | Two presentations to different verifiers can't be linked | Only with batch issuance of single-use credentials |
| Untraceability | The issuer can't link a presentation to the credential it issued | No: the issuer knows the signature and hashes |
| Presentation freshness | A presentation can't be replayed in another context | Only if the verifier checks a fresh proof of possession; the credential itself is revealed |
| Certified pseudonyms | Verifier-specific identifiers, bound to the credential, unlinkable across verifiers | Not built in (see [[Pseudonyms-in-eID]]) |
| Non-transferability | Credentials bound to the holder's device | Yes, by signing with a device key ([[Hardware-Security-for-eID]]) |

Further features that anonymous credentials can offer (composite proofs, deniable presentations, blind issuance, issuer hiding, conditional disclosure) are listed in [[AC-Features]].

## Salted-hash credentials and their linkability
In SD-JWT, every attribute is stored as `sha256(salt | attribute_value)`; to disclose a value the holder sends it with the salt ([[GHE26-MS2]]). Predicates are only possible if the issuer pre-computes them as extra claims (e.g. `age_over_18`). Every presentation shows the same issuer signature and hash list, which form a unique fingerprint that colluding verifiers (and the issuer) can match. Deployments such as swiyu therefore use **batch issuance**: the holder receives a batch of single-use credentials (usually about 10, per [[GHE26-MS2]]) and deletes each after use. This costs issuance bandwidth and storage, and does not protect against issuer–verifier collusion.

## What anonymous credentials would change
[[BL26-SoK-AnonCreds]] argues that anonymous credentials improve not only privacy but also security and deployability:
- **Unlinkability without batch issuance**: many unlinkable presentations can be derived from one credential, so issuers no longer need to issue and manage batches of one-time credentials and device keys.
- **Implicit freshness**: a presentation never reveals the credential, only a proof bound to the context (e.g. the verifier's identity), so leaked presentations can't be reused, and a verifier that leaks them can be identified.
- **Easier backup**: composite proofs can bind attribute credentials to a user secret and only one dedicated credential to the device key, so attribute credentials don't need re-issuance when the device changes. The same trick lets short-lived revocation credentials be refreshed instead of all credentials.
- **Outsourced issuance** with partially-blind signing, e.g. a central issuing service that doesn't see students' grades.

## Related
- [[eID-Actors-and-Trust-Goals]]
- [[eID-Threat-Models]]
- [[Selective-Disclosure]]
- [[Unlinkable-Anonymous-Credentials]]
- [[EUDI-ARF]]

## Resources
- Paper: [[BL26-SoK-AnonCreds]], [[GHE25-Taxonomy]], [[GHE26-MS2]], [[BBC+24-ARF-Feedback]], [[PH10-Privacy-Terminology]]
- Wiki: [[IETF-RFC9901-SD-JWT]], [[ISO-IEC-18013-5-mDL]]
