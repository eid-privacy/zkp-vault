---
type: application
tags:
  - eid
  - credential-format
  - did
  - revocation
---

[Home](../README.md) > [Applications](README.md) > Credential-Data-Structures

# Credential Data Structures

## Description
"Verifiable Credential" (VC) is the generic term for a data structure holding attributes about a holder, signed by an issuer so that verifiers can check it ([[GHE25-Taxonomy]]). The format determines which privacy techniques are possible: salted-hash formats give [[Selective-Disclosure]] but are linkable; proving them in zero knowledge depends on how expensive their parsing and hashing is inside a circuit.

## Formats

| Structure | Standard | Encoding / signature | Selective disclosure | Used by |
|---|---|---|---|---|
| W3C VC Data Model 1.1 / 2.0 | [[W3C-VC-Data-Model-1.1]], [[W3C-VC-Data-Model-2.0]] | JSON(-LD) with Data Integrity or JOSE/COSE proofs | Depends on the proof suite (e.g. BBS cryptosuite [[W3C-VC-DI-BBS]]) | AnonCreds v2, many SSI stacks |
| JSON-LD | [[W3C-JSON-LD-1.1]] | Linked-data serialisation of JSON; requires canonicalisation before signing | — | VC DM Data Integrity proofs |
| SD-JWT / SD-JWT VC | [[IETF-RFC9901-SD-JWT]], [[IETF-SD-JWT-VC]] | JWS (typically ECDSA P-256) over a JSON payload of salted claim digests; optional key binding to a holder key | Salted hashes | swiyu (SD-JWT VC draft 4 with SD-JWT draft 10, per WP1 notes), EUDI |
| ISO mdoc / mDL | [[ISO-IEC-18013-5-mDL]] | CBOR data elements, issuer-signed Mobile Security Object (ECDSA), device key | Salted hashes | EUDI PID, US mobile driving licences |
| X.509 certificates | (PKIX) | ASN.1 / DER, RSA or ECDSA | None natively; ZK wrappers such as [[DFKP16-Cinderella]] and [[Crescent]] | PKI, eID cards |
| DIDs and DID documents | [[W3C-DID-Core-1.0]], [[did-web-Method]], [[did-webvh-Method]] | Identifier resolving to keys and service endpoints | — | Issuer / verifier identifiers in swiyu's base registry |
| Status lists | [[IETF-OAuth-Token-Status-List]], [[W3C-Bitstring-Status-List]] | Compressed bit array in a signed JWT/CWT or VC | — | Revocation in swiyu and EUDI ([[Revocation-in-eID]]) |
| Rendering overlays | [[Overlays-Capture-Architecture]] | Capture base plus overlays (labels, formats, presentation) | — | Credential display in the swiyu wallet |

AnonCreds (v1 with CL signatures, v2 with BBS / PS over VC DM 2.0) is a credential system rather than a single format; see [[Unlinkable-Anonymous-Credentials]].

## ZKP-friendliness
Proving a standard credential in a circuit means re-doing the verifier's work inside the proof: base64url decoding, JSON or CBOR parsing, SHA-256 over the whole payload and ECDSA verification. In the eid-privacy Spartan backend, dedicated optimisations for base64 decoding, a barrel shifter for locating claims, and passing indices as private inputs were needed to make SD-JWT proofs feasible on phones ([[DHG26-MS4]]). Compressed status lists are particularly unfriendly, which motivated the binary [[Signed-Revocation-Lists]]. Simple, fixed-size "flat" credentials were used as a baseline in the first proofs of concept ([[GHE25-MS2]]).

## Related
- [[Selective-Disclosure]]
- [[Communication-Protocols]] — OID4VCI / OID4VP transport these formats
- [[Revocation-in-eID]]
- [[eID-Systems-Overview]]

## Resources
- Paper: [[GHE25-Taxonomy]], [[GHE25-MS2]], [[DHG26-MS4]]
- Wiki: [[W3C-VC-Data-Model-1.1]], [[W3C-VC-Data-Model-2.0]], [[W3C-JSON-LD-1.1]], [[W3C-VC-DI-BBS]]
- Wiki: [[IETF-RFC9901-SD-JWT]], [[IETF-SD-JWT-VC]], [[ISO-IEC-18013-5-mDL]]
- Wiki: [[W3C-DID-Core-1.0]], [[did-web-Method]], [[did-webvh-Method]]
- Wiki: [[IETF-OAuth-Token-Status-List]], [[W3C-Bitstring-Status-List]], [[Overlays-Capture-Architecture]]
- Code: [[spruceid-ssi]], [[procivis-one-core]], [[Sphereon-did-jwt]]
- Docs: [[eid-privacy-WP2-Libraries]]
