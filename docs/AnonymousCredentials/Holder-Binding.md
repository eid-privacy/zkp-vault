---
type: application
tags:
  - eid
  - hardware
  - anonymous-credentials
  - signatures
  - privacy
---

[Home](../README.md) > [Anonymous Credentials](README.md) > Holder-Binding

# Holder Binding

## Description
Holder binding (also *device binding*, *key binding* or *non-transferability*) ensures a credential can only be presented from the device it was issued to, approximating "only the person it represents can use it" ([[eID-Actors-and-Trust-Goals]]). The standard approach:

1. At issuance, the wallet generates a key pair in the phone's secure hardware and sends the public key `Q` to the issuer.
2. The issuer checks the holder and embeds `Q` in the signed credential.
3. At presentation, the verifier sends a fresh challenge; the secure element signs it with the device key, and the verifier checks the signature against `Q`.

Since phone hardware only supports ECDSA P-256 ([[Hardware-Security-for-eID]]), both `Q` and the signature are unique, linkable values: plain holder binding defeats unlinkability. The goal of the eid-privacy WP3 was an **unlinkable proof of possession** of the hardware-bound key that the holder can create alone, verifiable without a third party, in **less than 1 s and less than 1 MB** ([[GHE25-MS2]]).

## Approach: prove the ECDSA signature in zero knowledge
The holder keeps `Q` and the signature `(r, s)` secret and proves in a ZKP that "the credential contains a key `Q`, and `(r, s)` is a valid signature under `Q` on the verifier's challenge". The only public input is the challenge, so two proofs cannot be linked through the binding ([[GHE25-MS2]]). Combined with a proof of the issuer signature, this gives the generic unlinkable credential of [[Unlinkable-Anonymous-Credentials]].

### Crescent-style optimisation
[[Crescent]] (Section 3.4.1 of [[PPZ24-Crescent]]) rewrites ECDSA verification. With the nonce point `R` (where `r = x(R)`) and message hash `M`, verification is equivalent to `T^s · U = Q` with `T = R^(1/r)` and `U = G^(−M/r)`. `R` is random and reveals nothing about the key, so the prover reveals it, the verifier computes `T, U` itself, and the circuit only proves one scalar multiplication and one point addition, with `s` and `Q` private. Instantiated with Spartan over the Tom-256 curve (whose group order is the P-256 base-field prime), a scalar multiplication costs about 2700 R1CS constraints ([[DHG26-MS4]], citing Crescent).

## Approaches compared

| Approach | Issuer credential | Idea | Source |
|---|---|---|---|
| ZKAttest / CDLS | Any (keys on P-256) | Sigma-protocol proof of an ECDSA signature under a committed key, on a curve whose order matches P-256's field (Tom-256); cross-group equality links it to the credential | [[FLM22-ZKAttest]], [[CLR23-CDLS]], [[COPZ22-DLEQ-Across-Groups]], [[cloudflare-zkp-ecdsa]] |
| Ubique zkattest-rs | BBS | ZKAttest-style proof with Tom-256 plus cross-group equality linking the device key to a BBS attribute; the original ZKAttest optimisation was found insecure (eprint 2023/1595) | [[heidiverse-zkattest-rs]], [[Docknetwork]] |
| BBS# | BBS variant | Avoids pairings on the holder side; binds to existing ECDSA / EC-Schnorr keys in secure hardware | [[Ora24-BBS-Sharp]] |
| Device-bound anonymous credentials | BBS-compatible | Single, stateless SE call; privacy does not depend on SE honesty | [[FHLL25-AnonCreds-TrustedHW]] |
| Legacy-phone device binding | Anonymous credentials on pairing curves | Bridges the P-256 / pairing-curve gap without new hardware | [[LZ26-AnonCreds-Legacy]] |
| Crescent-style circuit | ECDSA (SD-JWT, mDL) | Modified ECDSA equation proven in Spartan over Tom-256 | [[Crescent]], [[DHG26-MS4]] |
| Longfellow | ECDSA mdoc | Device signature verified inside the Ligero/sumcheck circuit | [[Longfellow]], [[FS24-Longfellow]] |

## eid-privacy proofs of concept

| PoC | Technique | Result | Source |
|---|---|---|---|
| `noir/c03_holder_binding` ([[eid-privacy-zkp-pocs]]) | Noir / UltraHonk; fixed-size credential, ECDSA P-256 | 0.7 s / 16 kB (holder binding only, without issuer signature) | [[GHE25-MS2]] |
| Docknetwork + ZKAttest ([[eid-privacy-zkp-pocs]]) | Sigma protocols, BBS credential | 0.95 s / 182 kB; only works with BBS on the issuer side | [[GHE25-MS2]] |
| Longfellow (estimate) | ECDSA verification in circuit | ~80 ms for an ECDSA verification on a Pixel 6 Pro, < 300 kB | [[GHE25-MS2]], from [[FS24-Longfellow]] |
| `c0100_holder_binding_crescent_style` ([[eid-privacy-spartan-backend]]) | Crescent-style, Spartan over Tom-256 | Building block of the full SD-JWT circuit | [[DHG26-MS4]] |
| `c0200_swiyu_jwt` ([[eid-privacy-spartan-backend]], [[eid-privacy-zkp-android-spartan]]) | Full swiyu SD-JWT age proof incl. issuer signature and holder binding | Samsung Galaxy A54: 11.0 s (Spartan), 4.5 s with pre-computation; MacBook M2 Max: 1.5 s with pre-computation | [[DHG26-MS4]] |

In the pre-computed variant, everything that does not depend on the verifier challenge (credential parsing, issuer signature, claims) is computed once; only the holder-binding branch, tainted by the nonce, is recomputed per presentation ([[DHG26-MS4]]). The holder-binding design and its implementation were part of the external security review by zkSecurity reported in [[DHG26-MS4]].

## Open issues
- Holder binding proves *device* possession, not *person* presence; user authentication to the device (PIN, biometrics) remains outside the proof.
- Key attestation of the device key is itself linkable if shown at each presentation ([[Hardware-Security-for-eID]]).
- None of the discrete-log based approaches are post-quantum ([[Post-Quantum-and-eID]]).

## Related
- [[Hardware-Security-for-eID]]
- [[Unlinkable-Anonymous-Credentials]]
- [[ZKP-on-Mobile]]
- [[Selective-Disclosure]]
- [[ZKAttest]], [[Crescent]], [[Longfellow]], [[Spartan]], [[Noir]]

## Resources
- Paper: [[GHE25-MS2]], [[DHG26-MS4]], [[GHE25-Taxonomy]]
- Paper: [[PPZ24-Crescent]], [[FS24-Longfellow]], [[FLM22-ZKAttest]], [[CLR23-CDLS]], [[COPZ22-DLEQ-Across-Groups]]
- Paper: [[Ora24-BBS-Sharp]], [[FHLL25-AnonCreds-TrustedHW]], [[LZ26-AnonCreds-Legacy]]
- Code: [[eid-privacy-zkp-pocs]], [[eid-privacy-spartan-backend]], [[eid-privacy-zkp-android-spartan]]
- Code: [[heidiverse-zkattest-rs]], [[cloudflare-zkp-ecdsa]], [[docknetwork-crypto]], [[microsoft-crescent-credentials]], [[google-longfellow-zk]], [[personaelabs-spartan-ecdsa]]
- Blog: [[eid-privacy-poc-report]], [[eid-privacy-crescent-longfellow]]
