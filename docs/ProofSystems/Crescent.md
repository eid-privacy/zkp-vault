---
type: proof_system
status: research
year: 2024
abbreviation: PPZ24
authors:
  - Christian Paquin
  - Guru-Vamsi Policharla
  - Greg Zaverucha
paper: "Crescent: Stronger Privacy for Existing Credentials"
tags:
  - zkp
  - snark
  - eid
  - applications
---

[Home](../README.md) > [Proof Systems](README.md) > Crescent

# Crescent

## Description
A modular ZK credential scheme from Microsoft that enables privacy-preserving presentations of existing SD-JWT and X.509 credentials without changes to the issuer infrastructure. Splits proof generation into a one-time offline preparation phase (computing ~593 MB of reusable values, taking ~20 s) and a fast per-presentation phase (~1 s on mobile). Uses Groth16 (over BN254) for the credential circuit, Sigma protocols on Pedersen-style commitments for re-randomised presentations, and Spartan over the T-256 curve for device binding. Accepted at RWC 2025.

## Technical Characteristics

**Complexity:**
- Prover (online): ~1 s on mobile (after pre-computation)
- Verifier: fast (ms-range)
- Proof Size: compact (Groth16 output)
- Setup: trusted (Groth16 per-circuit setup); the Spartan device-binding proof is transparent

**Security:**
- Assumption: pairing-based (Groth16) + DL (Sigma / Pedersen)
- Post-quantum: no
- Basis: [[Groth16]], [[Spartan]], [[Sigma-Protocols-Damgard|Sigma protocols]], [[Pedersen-Commitments]]

## Dependencies
Based on: [[Groth16]], [[Spartan]]
Circuit representation: [[R1CS]]
Curve: T-256 (secp256r1-compatible)

## Design: prove once, show many times
Crescent splits the work by cost and frequency.

- **Once per credential (expensive):** the holder produces a [[Groth16]] proof that the credential's RSA/ECDSA signature verifies and that the claims parse correctly. The relevant attributes become the proof's *public inputs*. In Groth16 verification the public inputs enter through Σ aᵢ·[ICᵢ], which is a Pedersen-style vector commitment to the attributes. With an extra blinding term it hides them, in the spirit of [[LegoGroth16]] commit-and-prove. The proof and commitment are stored on the device. Proving takes seconds and needs large proving keys.
- **Per presentation (cheap):** the holder *re-randomises* the Groth16 proof (A, B, C) and the attribute commitment, then attaches [[Sigma-Protocols-Damgard|Σ-protocol]] proofs about the committed attributes. These cover selective disclosure (opening some attributes), predicates such as range proofs (e.g. "age ≥ 18" from a committed birth date), and equality with other commitments. Each showing looks fresh, so presentations are unlinkable even to the issuer, and they run in well under a second on a phone.

## Device binding
mDL credentials are bound to a device key: the device signs a verifier nonce with ECDSA P-256. To keep presentations unlinkable, the device public key cannot be revealed. Crescent instead proves knowledge of a valid ECDSA signature under a *committed* key, using [[Spartan]] over **T-256 (Tom-256)**. T-256 is the curve introduced for [[ZKAttest]], whose scalar field equals the P-256 base field, so P-256 point arithmetic is native in the circuit. This Pedersen commitment to the key is linked to the attributes committed in the Groth16 part by an equality-of-committed-values proof.

## Revocation
Because attributes sit in commitments, revocation can be added without touching the Groth16 circuit. A non-revocation proof shows in zero knowledge that a committed credential identifier is *not* in the issuer's revocation list, e.g. via an accumulator non-membership proof or a Σ-protocol over a committed serial number. Plain status-list lookups would reveal the identifier and break unlinkability.

## Comparison with BBS
- BBS signatures are natively re-randomisable: a presentation is a Σ-protocol proof of knowledge of a signature on committed messages, taking milliseconds with no circuit and no trusted setup. Issuers, however, must adopt a new pairing-based signature that today's HSMs and secure elements do not support.
- Crescent recreates the same "commit once, show with Σ-protocols" shape for *existing* RSA/ECDSA credentials. The price is a heavy one-time proof and a per-circuit Groth16 setup.
- Neither scheme is post-quantum; [[Longfellow]] is the transparent, hash-based alternative for the same use case.

## Applications
Used by: [[microsoft-crescent-credentials]]

## Resources
- Paper: [[PPZ24-Crescent]]
- Code: [[microsoft-crescent-credentials]]
- Blog: [[MSR-Crescent-Library-Blog]]
- Paper: [[FLM22-ZKAttest]] (origin of the Tom-256 curve)
- Paper: [[COPZ22-DLEQ-Across-Groups]]
- Paper: [[TZ23-Revisiting-BBS]]
