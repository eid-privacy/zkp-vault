---
type: application
tags:
  - anonymous-credentials
  - signatures
  - eid
---

[Home](../README.md) > [Anonymous Credentials](README.md) > Pairing-Free-ACs

# Pairing-Free Anonymous Credentials

## Description
BBS, PS and the other efficient multi-show anonymous credentials need a pairing-friendly curve ([[Pairing-Friendly-Curves]]), which is neither standardised by NIST nor supported in phone secure elements. Pairing-free alternatives trade each pairing computation for an interaction with the issuer (or a computation with the issuer's secret key). They improve privacy over today's batch-issued ECDSA credentials, but don't remove the issuer involvement that batch issuance brings ([[BL26-SoK-AnonCreds]]).

## One-time anonymous credentials
Blind signatures extended with attributes: U-Prove ([[PZ11-U-Prove]]) and Anonymous Credentials Light ([[BL13-ACL]]). A blind signature is inherently single-show, so multi-show unlinkability needs batch issuance, as with salted-hash credentials ([[Privacy-Requirements]]).

## Keyed-verification anonymous credentials (KVAC)
Symmetric (MAC-based) anonymous credentials for deployments where issuer and verifier are the same entity: algebraic MACs ([[CMZ14-KVAC]]) — PS signatures are their publicly verifiable counterpart — and BBS-MAC ([[BBDT16-KVAC]], [[Orr25-Revisiting-KVAC]]). Deployed in the Signal private group system ([[CPZ20-Signal-Groups]]) and proposed by Apple and Google to overcome deployment problems of Privacy Pass-style tokens.

## Server-aided anonymous credentials
KVACs alone don't fit a decentralised identity system where verifiers are not the issuer. Server-aided credentials adapt them: the verifier checks all attribute statements itself, and only the one equation that needs the issuer's secret key is checked with the issuer's help, which reveals nothing about the user ([[Ora24-BBS-Sharp]] as BBS#, refined and analysed as SAAC in [[CHLT25-Server-Aided-AC]]). Two deployment options:
- **Verifier–issuer interaction**: the issuer checks part of every proof; requires a highly available issuer.
- **Batch issuance**: the user fetches one-time sub-tokens from the issuer in advance; SAAC shows how to keep them untraceable. Similar to today's ECDSA batch issuance, but with the full feature set of anonymous credentials.

Because the ZKP part is identical to the pairing-based BBS/PS version and only the pairing check is replaced, server-aided credentials can serve as a **migration path** to full anonymous credentials. BBS# device binding also works with existing ECDSA secure elements in the pairing-free setting ([[Holder-Binding]]).

## Related
- [[Unlinkable-Anonymous-Credentials]]
- [[Pairing-Friendly-Curves]]
- [[Holder-Binding]]

## Resources
- Paper: [[BL26-SoK-AnonCreds]], [[PZ11-U-Prove]], [[BL13-ACL]], [[CMZ14-KVAC]], [[BBDT16-KVAC]], [[Orr25-Revisiting-KVAC]], [[CPZ20-Signal-Groups]], [[Ora24-BBS-Sharp]], [[CHLT25-Server-Aided-AC]]
