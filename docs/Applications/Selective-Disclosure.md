---
type: application
tags:
  - eid
  - privacy
  - signatures
  - credential-format
  - anonymous-credentials
---

[Home](../README.md) > [Applications](README.md) > Selective-Disclosure

# Selective Disclosure

## Description
Selective disclosure lets a holder of signed data reveal only some attributes while the verifier can still check integrity and provenance ([[GHE25-Taxonomy]]). There are three families, which differ mainly in whether presentations are **unlinkable**:

| Family | How it works | Examples | Unlinkable presentations? |
|---|---|---|---|
| Signature-based | The signature scheme supports proving knowledge of a signature on hidden messages; the holder re-randomises the signature and opens a subset of messages in zero knowledge. | CL ([[CL02-CL-Signatures]]), BBS / BBS+ ([[IRTF-CFRG-BBS-Signatures]]), PS ([[PS16-Randomizable-Sigs]]) | Yes |
| Salted-hash | The issuer signs a list of salted hashes `H(salt ‖ value)`; the holder discloses `(salt, value)` for chosen attributes and the verifier recomputes the hash. | SD-JWT ([[IETF-RFC9901-SD-JWT]], [[IETF-SD-JWT-VC]]), ISO mdoc / mDL ([[ISO-IEC-18013-5-mDL]]) | No: issuer signature and hashes are stable identifiers |
| ZKP over existing signatures | The credential stays a standard ECDSA-signed SD-JWT / mdoc / X.509; the holder proves in a general-purpose ZKP that it holds a valid credential satisfying a statement. | [[Crescent]], [[Longfellow]], [[DFKP16-Cinderella]], [[ENRTTX26-OpenAC]], the eid-privacy Spartan backend ([[DHG26-MS4]]) | Yes |

## Salted-hash credentials and their linkability
In SD-JWT, every attribute is stored as `sha256(salt | attribute_value)`; to disclose a value the holder sends it with the salt ([[GHE25-MS2]]). Predicates are only possible if the issuer pre-computes them as extra claims (e.g. `age_over_18`). Every presentation shows the same issuer signature and hash list, which form a unique fingerprint that colluding verifiers (and the issuer) can match. Deployments such as swiyu therefore use **batch issuance**: the holder receives a batch of single-use credentials (usually about 10, per [[GHE25-MS2]]) and deletes each after use. This costs issuance bandwidth and storage, and does not protect against issuer–verifier collusion.

## Signature-based schemes
BBS-style multi-message signatures allow fast sigma-protocol proofs of knowledge with selective disclosure and unlinkability ([[Unlinkable-Anonymous-Credentials]]). Their main obstacles in e-ID are that they are pairing-based, not supported by mobile secure elements or HSMs, not FIPS-approved and not post-quantum ([[Hardware-Security-for-eID]], [[Post-Quantum-and-eID]]).

## ZKP over existing signatures
Here the issuer keeps signing with ECDSA P-256, and privacy is added on the holder side. Costs come from proving SHA-256, base64 / JSON or CBOR parsing and ECDSA verification inside a circuit. Reported results:
- [[Longfellow]] (mdoc): about 1.2 s prover and 0.7 s verifier on a phone with a ~300 kB proof ([[GHE25-MS2]], [[eid-privacy-crescent-longfellow]]).
- [[Crescent]] (SD-JWT / mDL): about 1 s online proof on mobile after a one-time pre-computation ([[eid-privacy-crescent-longfellow]]).
- eid-privacy Noir + Spartan over unmodified swiyu SD-JWT, including holder binding: 4.5 s on a mid-range Android phone with pre-computation ([[DHG26-MS4]]; see [[ZKP-on-Mobile]]).

## Related
- [[Credential-Data-Structures]] — SD-JWT VC, mdoc, VC DM, X.509
- [[Unlinkable-Anonymous-Credentials]]
- [[Predicate-Proofs]]
- [[Holder-Binding]]
- [[Revocation-in-eID]] — the status index is another linkable artefact

## Resources
- Paper: [[GHE25-Taxonomy]], [[GHE25-MS2]], [[DHG26-MS4]]
- Wiki: [[IETF-RFC9901-SD-JWT]], [[IETF-SD-JWT-VC]], [[ISO-IEC-18013-5-mDL]], [[IRTF-CFRG-BBS-Signatures]], [[W3C-VC-DI-BBS]]
- Paper: [[CL02-CL-Signatures]], [[PS16-Randomizable-Sigs]], [[TZ23-Revisiting-BBS]]
- Paper: [[PPZ24-Crescent]], [[FS24-Longfellow]], [[DFKP16-Cinderella]], [[ENRTTX26-OpenAC]], [[BL26-SoK-AnonCreds]]
- Blog: [[eid-privacy-crescent-longfellow]], [[eid-privacy-privacy-unlinkability]]
