---
type: application
tags:
  - eid
  - post-quantum
  - signatures
  - anonymous-credentials
---

[Home](../README.md) > [Anonymous Credentials](README.md) > Post-Quantum-and-eID

# Post-Quantum and e-ID

## Description
A large, high-quality universal quantum computer could invert integer factorisation and discrete logarithms in polynomial time ([[Taurus-Quantum-Doomsday-Planning]]), breaking RSA, ECDSA, EdDSA, Schnorr and pairing-based schemes. Publicly known quantum computers in 2025 lacked the scale and quality for useful attacks ([[GHE25-Taxonomy]]). For e-ID the question is less "when" than how long decisions taken now (hardware, standards, issuer infrastructure) will stay in place.

## What breaks, and how
- **Signatures**: e-ID systems mainly use vulnerable one-way functions for signatures, not encryption. Once a cryptographically relevant quantum computer exists, *all* signatures, past and future, must be considered forgeable; there is no "store now, decrypt later" for signed data, but credentials and trust anchors must be migrated before that point ([[GHE25-Taxonomy]]).
- **Unlinkability — "store now, link later"**: if a privacy scheme is broken later, stored presentations may become linkable. The eid-privacy WP1 notes raise this question for BBS: if the hardness assumption falls and the issuer key is recovered, could past presentations be linked? The answer depends on the scheme: if the presentation proofs are statistically or perfectly zero-knowledge, they carry nothing a future adversary could exploit, and linkability can only come from other artefacts (disclosed attributes, holder-binding signatures, revocation indices, metadata). Only computationally hiding components are at risk.
- **Transport**: TLS / JWE encryption of presentations is subject to classic "store now, decrypt later" by nation-state adversaries ([[eID-Threat-Models]]).

## Constraints specific to e-ID
Phone secure elements only offer ECDSA P-256, pairing-based credentials are not available in hardware, and NIST plans to deprecate non-post-quantum algorithms by 2030. These deployment constraints are discussed in [[eID-Open-Questions]].

## Post-quantum status of proof systems
- Hash-based proof systems ([[Ligero]], [[FRI]], [[zk-STARKs]]) are plausibly post-quantum. [[Longfellow]] (Ligero + sumcheck) is the exception among e-ID proposals ([[DHG26-MS4]]); its statement still involves ECDSA, whose *soundness* would fall with a quantum computer.
- Discrete-log or pairing based systems are not: [[Spartan]] as used in the eid-privacy backend ([[DHG26-MS4]]), [[Groth16]] in [[Crescent]], [[Bulletproofs]] and sigma protocols.
- Post-quantum anonymous credentials with efficient protocols are an active research area, e.g. the lattice-based scheme of [[AGJLRS24-PQ-Sigs-Privacy]].

## Soundness vs. privacy
Quantum computers threaten anonymous credentials differently from encryption ([[BL26-SoK-AnonCreds]]):
- Only **soundness** (unforgeability) is at risk for DL-based schemes. If the zero-knowledge property is perfect or statistical, as for BBS presentations and many proof systems, **privacy holds unconditionally**. Extensions such as pseudonyms or conditional disclosure are often DL-based too and need checking.
- So there is no harvest-now-decrypt-later urgency: schemes with quantum-vulnerable soundness but unconditional privacy can be used until a cryptographically relevant quantum computer exists, in line with [[NIST-IR-8547]] for authentication.
- A post-quantum proof system doesn't make a credential post-quantum if the credential is still an ECDSA signature. Efficient circuits are tailored to ECDSA; switching to ML-DSA will need new optimisations, possibly new proof systems.
- Post-quantum building blocks: lattice-based proof systems [[BS23-LaBRADOR]] and [[LSS24-LaZer]], lattice-based proof-friendly signatures ([[DKLW25-Lattice-Proof-Friendly-Sigs]], [[AGJLRS24-PQ-Sigs-Privacy]]).

## Related
- [[eID-Threat-Models]]
- [[Unlinkable-Anonymous-Credentials]]
- [[Hardware-Security-for-eID]]
- [[eID-Open-Questions]]

## Resources
- Paper: [[GHE25-Taxonomy]], [[GHE25-MS2]], [[DHG26-MS4]]
- Paper: [[AGJLRS24-PQ-Sigs-Privacy]]
- Blog: [[Taurus-Quantum-Doomsday-Planning]], [[Quanta-Which-Computational-Universe]], [[eid-privacy-comparing-zk-systems]]
- Wiki: [[NIST-FIPS-186-5]], [[IRTF-CFRG-BBS-Signatures]]
