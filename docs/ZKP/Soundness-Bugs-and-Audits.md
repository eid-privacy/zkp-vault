---
type: theoretical_model
tags:
  - zkp
  - snark
  - threat-modeling
---

[Home](../README.md) > [ZKPs](README.md) > Soundness-Bugs-and-Audits

# Soundness Bugs and Audits

## Description
General-purpose ZKPs are far more complex than Sigma proofs: Longfellow is about 17,000 lines of code without tests and benchmarks, and proving a single SHA-256 preimage takes between 27k and 600k constraints and 0.28 s to 556 s depending on circuit and proof system ([[BL26-SoK-AnonCreds]], citing [[LHWYSW25-SoK-zkSNARKs]]). A ZKP-based credential typically contains several such sub-proofs. This complexity has led to real attacks that let a malicious prover forge proofs. For credentials, a soundness bug means forged attributes.

## Known classes of bugs
- **Under-constrained circuits** — the most common bug class in circuit code: a constraint is missing, so the circuit accepts witnesses it shouldn't. Systematised in [[CETWJL24-SoK-SNARK-Vulns]].
- **Fiat–Shamir mistakes** — challenges that don't hash all of the transcript, e.g. the "last challenge" attack on PLONK implementations ([[CPV24-Last-Challenge]]); see also [[Fiat-Shamir]] and [[Green-How-To-Prove-False-Statements]].
- **Credential-specific bugs** — the security review of Google's Longfellow found a high-severity issue allowing "arbitrary forgery of mdoc attribute claims" ([[BL26-SoK-AnonCreds]]; see also [[Dyne-Longfellow-ZK-Review]]).
- **Reduced security levels** — efficiency is sometimes bought with security: Longfellow's 1.2 s prover time is for 86-bit security, with no published numbers at higher levels ([[BL26-SoK-AnonCreds]]).

## Formal verification
Formal verification of proof systems, circuits and their implementations is ongoing work, e.g. machine-checked soundness proofs of SNARKs ([[BM23-Formalizing-SNARK-Soundness]]) and compositional verification of R1CS circuits in ACL2 ([[CMSCGD23-ZK-Circuit-Verification]]). It is not yet feasible for systems as complex as anonymous credentials over ECDSA, so independent audits remain essential.

## Our external review
The eid-privacy circuits and the Spartan prover were reviewed by zkSecurity in 2026-10: [security review (PDF)](https://github.com/eid-privacy/zkp-reports/blob/main/security-review/zksecurity-epfl-sicpa.pdf).

## Related
- [[Framework-Decision-Guide]]
- [[Fiat-Shamir]]
- [[eID-Threat-Models]]

## Resources
- Paper: [[BL26-SoK-AnonCreds]], [[LHWYSW25-SoK-zkSNARKs]], [[CETWJL24-SoK-SNARK-Vulns]], [[CPV24-Last-Challenge]], [[BM23-Formalizing-SNARK-Soundness]], [[CMSCGD23-ZK-Circuit-Verification]]
- Blog: [[Dyne-Longfellow-ZK-Review]], [[Green-How-To-Prove-False-Statements]]
