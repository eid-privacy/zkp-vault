---
type: application
tags:
  - eid
  - privacy
  - signatures
  - credential-format
  - anonymous-credentials
---

[Home](../README.md) > [Anonymous Credentials](README.md) > Selective-Disclosure

# Selective Disclosure

## Description
Selective disclosure lets a holder of signed data reveal only some attributes while the verifier can still check integrity and provenance ([[GHE25-Taxonomy]]). There are three families, which differ mainly in whether presentations are **unlinkable**:

| Family | How it works | Examples | Unlinkable presentations? |
|---|---|---|---|
| Signature-based | The signature scheme supports proving knowledge of a signature on hidden messages; the holder re-randomises the signature and opens a subset of messages in zero knowledge. | CL ([[CL02-CL-Signatures]]), BBS / BBS+ ([[IRTF-CFRG-BBS-Signatures]]), PS ([[PS16-Randomizable-Sigs]]) | Yes |
| Salted-hash | The issuer signs a list of salted hashes `H(salt ‖ value)`; the holder discloses `(salt, value)` for chosen attributes and the verifier recomputes the hash. | SD-JWT ([[IETF-RFC9901-SD-JWT]], [[IETF-SD-JWT-VC]]), ISO mdoc / mDL ([[ISO-IEC-18013-5-mDL]]) | No: issuer signature and hashes are stable identifiers |
| ZKP over existing signatures | The credential stays a standard ECDSA-signed SD-JWT / mdoc / X.509; the holder proves in a general-purpose ZKP that it holds a valid credential satisfying a statement. | [[Crescent]], [[Longfellow]], [[DFKP16-Cinderella]], [[ENRTTX26-OpenAC]], the eid-privacy Spartan backend ([[DHG26-MS4]]) | Yes |

## Salted-hash credentials
SD-JWT and mdoc are what swiyu and the EUDI wallet deploy today. Because every presentation shows the same issuer signature and hash list, they need batch issuance of single-use credentials and still don't protect against issuer–verifier collusion; see [[Privacy-Requirements]] on the eID side.

## Signature-based schemes
BBS-style multi-message signatures allow fast sigma-protocol proofs of knowledge with selective disclosure and unlinkability ([[Unlinkable-Anonymous-Credentials]]). Their main obstacles in e-ID are that they are pairing-based, not supported by mobile secure elements or HSMs, not FIPS-approved and not post-quantum ([[Hardware-Security-for-eID]], [[Post-Quantum-and-eID]]).

## ZKP over existing signatures
Here the issuer keeps signing with ECDSA P-256, and privacy is added on the holder side. Costs come from proving SHA-256, base64 / JSON or CBOR parsing and ECDSA verification inside a circuit. Reported results:
- [[Longfellow]] (mdoc): about 1.2 s prover and 0.7 s verifier on a phone with a ~300 kB proof ([[GHE26-MS2]], [[eid-privacy-crescent-longfellow]]).
- [[Crescent]] (SD-JWT / mDL): about 1 s online proof on mobile after a one-time pre-computation ([[eid-privacy-crescent-longfellow]]).
- eid-privacy Noir + Spartan over unmodified swiyu SD-JWT, including holder binding: 4.5 s on a mid-range Android phone with pre-computation ([[DHG26-MS4]]; see [[ZKP-on-Mobile]]).

## Related
- [[Credential-Data-Structures]] — SD-JWT VC, mdoc, VC DM, X.509
- [[Privacy-Requirements]] — linkability of salted-hash credentials
- [[Unlinkable-Anonymous-Credentials]]
- [[Predicate-Proofs]]
- [[Holder-Binding]]
- [[Revocation-in-eID]] — the status index is another linkable artefact

## Resources
- Paper: [[GHE25-Taxonomy]], [[GHE26-MS2]], [[DHG26-MS4]]
- Wiki: [[IETF-RFC9901-SD-JWT]], [[IETF-SD-JWT-VC]], [[ISO-IEC-18013-5-mDL]], [[IRTF-CFRG-BBS-Signatures]], [[W3C-VC-DI-BBS]]
- Paper: [[CL02-CL-Signatures]], [[PS16-Randomizable-Sigs]], [[TZ23-Revisiting-BBS]]
- Paper: [[PPZ24-Crescent]], [[FS24-Longfellow]], [[DFKP16-Cinderella]], [[ENRTTX26-OpenAC]], [[BL26-SoK-AnonCreds]]
- Blog: [[eid-privacy-crescent-longfellow]], [[eid-privacy-privacy-unlinkability]]
