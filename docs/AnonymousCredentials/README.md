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

## Contents

| Note | Description |
|------|-------------|
| [Selective Disclosure](./Selective-Disclosure.md) | Signature-based (CL, BBS, PS) vs. salted-hash (SD-JWT, mdoc) vs. ZKPs over existing signatures |
| [Unlinkable Anonymous Credentials](./Unlinkable-Anonymous-Credentials.md) | Generic UAC over ECDSA, the BBS lineage, CL, PS and AnonCreds v2 |
| [Holder Binding](./Holder-Binding.md) | Unlinkable proof of a hardware-bound ECDSA key: ZKAttest, BBS#, Crescent-style, Longfellow, and eid-privacy PoCs |
| [Predicate Proofs](./Predicate-Proofs.md) | Range, set-membership and cross-credential proofs; issuer-precomputed attributes; verifier-exclusive and deniable proofs |
| [Revocation in e-ID](./Revocation-in-eID.md) | Status lists, short-lived credentials, accumulators, polynomial blacklists and PIR compared |
| [Signed Revocation Lists](./Signed-Revocation-Lists.md) | A 208-byte binary, issuer-signed list proven in ZK with a hidden credential ID |
| [Private Information Retrieval for e-ID](./Private-Information-Retrieval-for-eID.md) | PIR for revocation-status and trust-registry lookups |
| [ZKP on Mobile](./ZKP-on-Mobile.md) | Prover time on phones, benchmarks and pre-computation |
| [Post-Quantum and e-ID](./Post-Quantum-and-eID.md) | Quantum threats to signatures and unlinkability ("store now, link later"); hardware and standardisation constraints |
