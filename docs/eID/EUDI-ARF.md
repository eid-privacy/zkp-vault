---
type: application
tags:
  - eid
  - credential-format
  - openid4vc
  - regulation
  - privacy
---

[Home](../README.md) > [eID](README.md) > EUDI-ARF

# EUDI Wallet and the ARF (European Union)

## Description
- **Legal basis**: [[eIDAS-Regulation-910-2014]] (2014, mutual recognition of national eID schemes) and its 2024 amendment [[EU-Digital-Identity-Regulation-2024-1183]] (EUDI / "eIDAS 2"), which requires every member state to offer a European Digital Identity Wallet, with implementing acts 2024/2977–2982.
- **Technical framework**: the [[EUDI-ARF]] describes PID and attestations in ISO mdoc and SD-JWT VC, OID4VCI / OID4VP and ISO 18013-5, issuer keys in HSMs and wallet secure cryptographic devices. Reference implementation: [[eu-digital-identity-wallet]].
- **ARF discussion topics** relevant to privacy: A (privacy risks and mitigations), B (re-issuance and batch issuance), C (wallet unit attestation), E (pseudonyms), G (zero-knowledge proofs), and later topics on transaction logs, wallet-to-wallet interaction, combined presentations and relying-party registration.
- **Critique**: [[BBC+24-ARF-Feedback]] argues that SD-JWT / mdoc with conventional signatures cannot meet the regulation's unlinkability requirements and recommends BBS-family anonymous credentials. [[KVRSCLT26-EUDIF-Harms]] formally models the framework's information leakage and concludes that PETs reduce information flows but cannot mitigate harms fundamental to deploying digital identity at scale.
- ZKP candidates under discussion include [[Longfellow]] (proposed as an IETF draft, [[IETF-draft-google-cfrg-libzk]]) and BBS ([[IRTF-CFRG-BBS-Signatures]]); ETSI is standardising BBS, Longfellow, Vega and OpenAC ([[DHG26-MS4]]).

## Timeline and implementing acts
The EUDI regulation entered into force in May 2024 and gives member states 24 months to offer a wallet; the EU aims to roll it out by the end of 2026 ([[BL26-SoK-AnonCreds]]). Five implementing regulations were adopted on 2024-11-28: integrity and core functionality (2024/2979), protocols and interfaces (2024/2982), person identification data and electronic attestations of attributes (2024/2977), certification (2024/2981) and notifications to the Commission (2024/2980). The first four are updated regularly to stay in sync with the ARF.

## Technical stack of the reference implementation
- Presentation: [[OpenID4VP]] (remote) and [[ISO-IEC-18013-5-mDL]] (proximity); issuance: [[OpenID4VCI]].
- Credentials: ISO mdoc and SD-JWT VC ([[Credential-Data-Structures]]), with DPoP and JWT proofs for key binding during issuance.
- Code: [[eu-digital-identity-wallet]] (wallet core, Android and iOS wallets, test issuers and verifiers).

## Privacy: batch issuance vs. anonymous credentials
The regulation mandates strong privacy: the wallet's technical framework shall not allow issuers or any other party to obtain data that allows transactions or user behaviour to be tracked, linked or correlated, and shall enable privacy-preserving techniques which ensure unlinkability (eIDAS Art. 5a(16)) ([[BL26-SoK-AnonCreds]]). The ARF instead relies on classical ECDSA signatures with **salted hashes** for selective disclosure and **batch issuance** of one-time credentials for unlinkability. This cannot provide unlinkability when issuer and verifier collude, and unlinkability across verifiers requires a fresh credential for every presentation, which loads the issuer infrastructure and complicates key management on the device ([[BL26-SoK-AnonCreds]], [[BBC+24-ARF-Feedback]]). The EU is now gathering requirements for an anonymous-credential standard; the options are compared in [Anonymous Credentials](../AnonymousCredentials/README.md).

## Related
- [[eID-Systems-Overview]] — comparison with other systems
- [[eID-Legal-Framework]] — eIDAS and the EUDI regulation
- [[Privacy-Requirements]]
- [[Pseudonyms-in-eID]]

## Resources
- Paper: [[BBC+24-ARF-Feedback]], [[KVRSCLT26-EUDIF-Harms]], [[BL26-SoK-AnonCreds]], [[DHG26-MS4]], [[MRHHL25-Physical-Identities]]
- Docs: [[EUDI-ARF]]
- Wiki: [[eIDAS-Regulation-910-2014]], [[EU-Digital-Identity-Regulation-2024-1183]], [[IETF-draft-google-cfrg-libzk]], [[IRTF-CFRG-BBS-Signatures]]
- Code: [[eu-digital-identity-wallet]]
