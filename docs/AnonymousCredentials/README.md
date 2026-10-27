---
type: applications
tags:
  - zkp
  - anonymous-credentials
  - eid
---

[Home](../README.md) > Anonymous Credentials

# Anonymous Credentials

How to build privacy-preserving credentials for e-ID wallets: an issuer signs the user's attributes, and the user proves knowledge of that signature in zero knowledge instead of showing it. The lead reference for this section is the Bormann–Lehmann SoK [[BL26-SoK-AnonCreds]], which splits the field into dedicated multi-message signatures (BBS, CL, PS) with Sigma proofs, and general-purpose ZKPs over legacy ECDSA credentials. Requirements, deployed systems and regulation are covered in [eID](../eID/README.md).

## The blueprint
At issuance, the user obtains a credential: an issuer's signature on a set of attributes. At presentation, the user proves in zero knowledge that they know such a signature (and that the attributes satisfy the verifier's request) instead of revealing it. **Soundness** of the proof means users can't forge credentials; **zero knowledge** means the verifier learns nothing else, and because every presentation is a fresh proof, presentations are unlinkable to each other (multi-show unlinkability) and to the issuance (untraceability) ([[BL26-SoK-AnonCreds]]). The features this enables are listed in [[AC-Features]].

## Two families
| | Multi-message signatures + Sigma proofs | General-purpose ZKPs over legacy signatures |
|---|---|---|
| Examples | BBS ([[IRTF-CFRG-BBS-Signatures]]), CL ([[CL02-CL-Signatures]]), PS ([[PS16-Randomizable-Sigs]]) | [[Longfellow]], [[Crescent]], [[WOSPG25-Legacy-PoP]], zk-creds ([[RWGM23-zk-creds]]), the eid-privacy Spartan backend ([[DHG26-MS4]]) |
| Proof family | [Sigma proofs](../Sigma/README.md) | [Circuit-based proofs](../ProofSystems/README.md) |
| Issuer signature | Dedicated, non-standard scheme (pairing curve) | Unchanged ECDSA, even an unchanged credential format (SD-JWT, mdoc) |
| Efficiency | Milliseconds, a few hundred bytes | Seconds on a phone, up to hundreds of kB |
| Maturity | Two decades of research; ISO 20008-2 and IRTF drafts | Practical constructions only since ~2024; still evolving |
| Extending | Add Sigma-proof statements (pseudonyms, blind issuance, ...) | Any statement in theory, but efficient circuits are tailored and hard to extend |
| Device binding | Native (needs new SE support) or a bridge to an ECDSA key ([[Holder-Binding]]) | Works with today's P-256 secure elements |
| Who must change | Issuers, holders, verifiers | Holders and verifiers |
| Post-quantum | Not for soundness; privacy can be unconditional | Hash-based systems are PQ-sound, but the ECDSA credential is not |

Without pairing-friendly curves, there are [[Pairing-Free-ACs]] (U-Prove, keyed-verification and server-aided credentials).

## Contents

| Note | Description |
|------|-------------|
| [Anonymous Credential Features](./AC-Features.md) | Selective disclosure, unlinkability, untraceability, pseudonyms, predicates, composite proofs, blind issuance, issuer hiding, ... |
| [Selective Disclosure](./Selective-Disclosure.md) | Signature-based (CL, BBS, PS) vs. salted-hash (SD-JWT, mdoc) vs. ZKPs over existing signatures |
| [Unlinkable Anonymous Credentials](./Unlinkable-Anonymous-Credentials.md) | Generic UAC over ECDSA, the BBS lineage, CL, PS and AnonCreds v2 |
| [Pairing-Free Anonymous Credentials](./Pairing-Free-ACs.md) | U-Prove, ACL, keyed-verification credentials (CMZ, BBS-MAC) and server-aided credentials (BBS#, SAAC) |
| [Holder Binding](./Holder-Binding.md) | Unlinkable proof of a hardware-bound ECDSA key: ZKAttest, BBS#, Crescent-style, Longfellow, and eid-privacy PoCs |
| [Predicate Proofs](./Predicate-Proofs.md) | Range, set-membership and cross-credential proofs; issuer-precomputed attributes; verifier-exclusive and deniable proofs |
| [Revocation in e-ID](./Revocation-in-eID.md) | Status lists, short-lived credentials, accumulators, polynomial blacklists and PIR compared |
| [Signed Revocation Lists](./Signed-Revocation-Lists.md) | A 208-byte binary, issuer-signed list proven in ZK with a hidden credential ID |
| [Private Information Retrieval for e-ID](./Private-Information-Retrieval-for-eID.md) | PIR for revocation-status and trust-registry lookups |
| [ZKP on Mobile](./ZKP-on-Mobile.md) | Prover time on phones, benchmarks and pre-computation |
| [Post-Quantum and e-ID](./Post-Quantum-and-eID.md) | Quantum threats to signatures and unlinkability ("store now, link later"); hardware and standardisation constraints |
