---
type: application
tags:
  - eid
  - anonymous-credentials
  - signatures
  - privacy
  - sigma
---

[Home](../README.md) > [Anonymous Credentials](README.md) > Unlinkable-Anonymous-Credentials

# Unlinkable Anonymous Credentials

## Description
An unlinkable anonymous credential (UAC) lets a holder convince a verifier that some of their data was approved by an issuer, such that ([[GHE25-Taxonomy]], eid-privacy WP4):

- the **issuer** does not learn when or with whom the credential is used, and has its public key in a PKI;
- the **holder** can do everything alone (contacting only the verifier), chooses which attributes to present, and has a secure element that signs arbitrary messages;
- the **verifier** learns only the presented attributes and cannot link two presentations, even of the same attributes.

Holder binding alone only proves the credential has not left the device; the issuer's signature must be proven too, and a plain signature makes every presentation linkable. The eid-privacy target was proof generation in less than 1 s and less than 1 MB ([[GHE25-MS2]]).

## Two architectures
Following [[BL26-SoK-AnonCreds]] and the modular blueprint of [[LSZ25-Vision]] (commitment + signature + NIZK):

1. **Dedicated signature schemes with efficient protocols**: the issuer uses CL, BBS or PS signatures; the holder randomises the signature and proves knowledge of signed attributes with sigma protocols ([[Sigma-Protocols-Damgard]]). Fast and small, but needs new issuer infrastructure and curves that are not in HSMs or phone secure elements.
2. **General-purpose ZKPs over legacy credentials**: the issuer keeps ECDSA; the holder proves the credential in a circuit ([[Crescent]], [[Longfellow]], [[ENRTTX26-OpenAC]], the eid-privacy Spartan backend in [[DHG26-MS4]]). See [[Selective-Disclosure]].

## Generic UAC from ECDSA
The WP4 design sketch keeps HSM-compatible, FIPS-approved signatures everywhere. The issuer signs `H_cred = H(concat_i(i, F_i))` with ECDSA, where field `F_0` is the holder's secure-element public key `Pub_hse`. For a presentation:

- **Public inputs**: issuer public key, the revealed fields `F_reveal`, the verifier nonce.
- **Secret inputs**: all fields `F_i`, the issuer signature `Sig_iss`, and the SE signature `Sig_hse` on the nonce.
- **Statement**: `H_cred` is the hash of the fields; `F_reveal` are among them; `Pub_hse = F_0` verifies `Sig_hse` on the nonce; `Sig_iss` verifies `H_cred` under the issuer key.

A variant signs each field separately (`H_i = H(Pub_hse | i | F_i)`). Sigma protocols over Pedersen commitments cannot efficiently prove `a = H(b)` for SHA-256, and ZKAttest only hides the public key, not the hashed fields. That is why this design needs a circuit-based ZKP; BBS avoids the problem by signing attributes as group exponents. The same design also solves [[Holder-Binding]] unlinkably. Its feasibility was later demonstrated on unmodified swiyu SD-JWTs ([[DHG26-MS4]]).

## BBS signatures
BBS is the main contender for natively unlinkable credentials ([[IRTF-CFRG-BBS-Signatures]]). It is a multi-message, constant-size pairing-based signature (BLS12-381); the holder derives an unlinkable proof of knowledge of the signature while disclosing any subset of messages. Lineage, as summarised in the IRTF draft:

- [[BBS04-ShortGroupSigs]] — Boneh, Boyen and Shacham: introduced as part of a group signature scheme.
- [[CL04-Bilinear-Sigs]] — Camenisch and Lysyanskaya: described as a stand-alone signature for anonymous credentials.
- [[ASM06-Dynamic-kTAA]] — Au, Susilo and Mu: the first provably secure version (BBS+).
- [[CDL16-DAA-qSDH]] and [[BBDT16-KVAC]] — proofs for more efficient variants (in DAA and keyed-verification credentials).
- [[TZ23-Revisiting-BBS]] — Tessaro and Zhu: shorter signature (one group element plus one scalar); basis of the current draft's sign/verify and proof algorithms.

Implementations: [[docknetwork-crypto]] ([[Docknetwork]]), [[mattrglobal-pairing_crypto]], [[mattrglobal-bbs-signatures]], [[microsoft-bbs-node-reference]]. The W3C binding to VCs is [[W3C-VC-DI-BBS]]. Variants for EUDI include [[Ora24-BBS-Sharp]] and the server-aided approach of [[CHLT25-Server-Aided-AC]].

Limitations in an e-ID context ([[GHE25-Taxonomy]], [[GHE25-MS2]]): not available in HSMs or phone secure elements; not NIST-standardised, which conflicts with NIST's plan to deprecate non-post-quantum algorithms; not post-quantum. The cryptographers' letter [[BBC+24-ARF-Feedback]] argued for the BBS family in the EUDI ARF, which then opened a ZKP discussion topic. According to [[DHG26-MS4]], ETSI is standardising BBS, Longfellow, Vega and OpenAC for digital-identity use.

## Other signature schemes
- **CL signatures** ([[CL02-CL-Signatures]]): strong-RSA based, with protocols to sign committed values and prove knowledge of a signature; the basis of Idemix and AnonCreds v1.
- **PS signatures** ([[PS16-Randomizable-Sigs]]): short pairing-based signatures that are re-randomisable without a ZKP for the randomisation.
- **Lattice-based** ([[AGJLRS24-PQ-Sigs-Privacy]]): a post-quantum analogue of the CL/PS/BBS family; see [[Post-Quantum-and-eID]].
- **Blind ECDSA** ([[QCY21-Blind-ECDSA]]): blind issuance of standard ECDSA signatures, providing issuer unlinkability for single-use credentials.

## AnonCreds v2
AnonCreds v2 keeps the AnonCreds v1 concepts (credential schema, credential definition, credential, presentation request, presentation) but uses the W3C VC DM 2.0 and pluggable signature suites, currently BBS and PS, with CL and lattice-based signatures considered. Revocation uses ALLOSAUR accumulators ([[JLM22-ALLOSAUR]]). Code: [[anoncreds-anoncreds-v2-rs]].

## Related
- [[Selective-Disclosure]]
- [[Holder-Binding]]
- [[Pseudonyms-in-eID]]
- [[Predicate-Proofs]]
- [[Revocation-in-eID]]
- [[Post-Quantum-and-eID]]

## Resources
- Paper: [[GHE25-Taxonomy]], [[GHE25-MS2]], [[DHG26-MS4]]
- Paper: [[BL26-SoK-AnonCreds]], [[LSZ25-Vision]], [[CHLT25-Server-Aided-AC]]
- Paper: [[BBS04-ShortGroupSigs]], [[CL04-Bilinear-Sigs]], [[ASM06-Dynamic-kTAA]], [[CDL16-DAA-qSDH]], [[BBDT16-KVAC]], [[TZ23-Revisiting-BBS]]
- Paper: [[CL02-CL-Signatures]], [[PS16-Randomizable-Sigs]], [[AGJLRS24-PQ-Sigs-Privacy]], [[QCY21-Blind-ECDSA]], [[BBC+24-ARF-Feedback]]
- Wiki: [[IRTF-CFRG-BBS-Signatures]], [[W3C-VC-DI-BBS]]
- Code: [[anoncreds-anoncreds-v2-rs]], [[docknetwork-crypto]], [[mattrglobal-pairing_crypto]], [[microsoft-bbs-node-reference]], [[applied-crypto-heimdall]]
- Blog: [[eid-privacy-docknetwork-crypto-library]], [[eid-privacy-privacy-unlinkability]]
