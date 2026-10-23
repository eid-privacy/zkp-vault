---
type: application
tags:
  - eid
  - privacy
  - post-quantum
  - revocation
---

[Home](../README.md) > [Applications](README.md) > eID-Open-Questions

# e-ID Open Questions

## Description
Open research and engineering questions for privacy-preserving e-ID, collected from the follow-ups of the taxonomy ([[GHE25-Taxonomy]]) and the remaining challenges identified in the eid-privacy reports ([[GHE25-MS2]], [[DHG26-MS4]]).

## From the taxonomy follow-ups
The taxonomy is a glossary and the first step of a systematisation. The planned next step is to define **evaluation criteria** and apply them to higher-order constructions and complete systems:
- [[Longfellow]] ([[FS24-Longfellow]]): ZKPs over ECDSA-signed mdoc.
- zkattest-rs ([[heidiverse-zkattest-rs]]): blinding ECDSA holder-binding signatures using the Tom-256 curve.
- [[Crescent]] ([[PPZ24-Crescent]]): privacy features for existing JWT and mDL credentials.
- swiyu ([[swiyu-Technical-Documentation]]): the Swiss e-ID.
- The EUDI ARF ([[EUDI-ARF]]): the reference for the European Digital Identity.

## Cryptography
- **Post-quantum unlinkable credentials** that work with phone hardware: discrete-log based backends (e.g. Spartan) are not post-quantum, and phone secure elements only offer ECDSA P-256 ([[Post-Quantum-and-eID]]).
- **Assurance of complex ZKP constructions**: the security of Longfellow, Crescent and similar systems relies on audits rather than formal proofs; how many independent reviews are enough ([[eID-Threat-Models]])?
- **Fold-and-reuse** circuits (Vega) to amortise SHA-256 over credential blocks, and how to express folding in a circuit DSL such as Noir ([[DHG26-MS4]]).
- **Linking credentials** from different issuers to the same person without a linkable identifier (name and birth date? social-security number?) ([[Predicate-Proofs]]).
- **Verifier-exclusive and deniable proofs** suitable for e-ID ([[Predicate-Proofs]]).

## Revocation and metadata
- A **ZKP-friendly revocation standard**: IETF status lists are compressed or long bit strings, which explode circuit size; [[Signed-Revocation-Lists]] are one proposal that still needs standardisation ([[DHG26-MS4]]).
- **Private retrieval** of revocation lists and trust-registry entries ([[Private-Information-Retrieval-for-eID]]).
- Accumulator witness updates at national scale ([[Revocation-in-eID]]).

## Ecosystem and deployment
- **Circuit distribution and versioning**: a trusted channel for circuits and acceptable public parameters, so that a verifier cannot distribute a circuit that over-asks, and so that circuit updates do not enable downgrade attacks; it should complement the verifier registry ([[DHG26-MS4]]).
- **Standardisation**: how OpenID4VP and other protocols will integrate multiple proof systems; ETSI work on BBS, Longfellow, Vega and OpenAC ([[Communication-Protocols]]).
- **Performance on phones**: reaching 1 s for a full SD-JWT proof on mid-range phones (currently 4.5 s with pre-computation) and storing sensitive pre-computation data safely ([[ZKP-on-Mobile]]).
- **Cost of server-side proving** for cloud wallets, which differs between high-volume / low-margin and low-volume / high-margin use cases ([[DHG26-MS4]]).
- **Auditability of the toolchain**, e.g. of Noir and of the proving backend ([[DHG26-MS4]]).
- **Where ZKPs help at all**: many e-ID uses (bank account, mobile subscription) legally require full identification; [[KVRSCLT26-EUDIF-Harms]] argues that some harms of digital identity cannot be mitigated by PETs; see also [[ECZJG24-Need-ZKP]].
- **Usability**: privacy mechanisms are rarely evaluated with users ([[IES25-SoK-Unusable-Privacy]]).

## Related
- [[eID-Threat-Models]]
- [[Post-Quantum-and-eID]]
- [[Revocation-in-eID]]
- [[ZKP-on-Mobile]]
- [[eID-Systems-Overview]]

## Resources
- Paper: [[GHE25-Taxonomy]], [[GHE25-MS2]], [[DHG26-MS4]]
- Paper: [[BL26-SoK-AnonCreds]], [[KVRSCLT26-EUDIF-Harms]], [[ECZJG24-Need-ZKP]], [[IES25-SoK-Unusable-Privacy]]
- Blog: [[eid-privacy-crescent-longfellow]], [[eid-privacy-comparing-zk-systems]]
