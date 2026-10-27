---
type: application
tags:
  - anonymous-credentials
  - privacy
  - eid
---

[Home](../README.md) > [Anonymous Credentials](README.md) > AC-Features

# Anonymous Credential Features

## Description
The features anonymous credentials can provide to an e-ID wallet, following [[BL26-SoK-AnonCreds]] §2. The discussion around the EUDI wallet focuses on multi-show unlinkability, but standards that only target that feature risk hard-coding a bare-bones design. The eID-side view of these requirements, and how far salted-hash credentials get, is in [[Privacy-Requirements]].

## Core features
| Feature | What it gives | References |
|---|---|---|
| Selective disclosure | The user chooses which attributes to reveal in each presentation | [[Selective-Disclosure]] |
| Multi-show unlinkability | Presentations of the same credential to different verifiers can't be linked | [[Unlinkable-Anonymous-Credentials]] |
| Untraceability | The issuer can't link a presentation to the credential it issued | [[Unlinkable-Anonymous-Credentials]] |
| Single key binding | All of a user's credentials bound to one secret key: simpler for the device, and sharing one credential means sharing all (all-or-nothing transferability) | [[Holder-Binding]] |
| Presentation freshness | A presentation is a proof bound to a context (nonce, verifier identity) and can't be reused elsewhere | [[Privacy-Requirements]] |
| Certified pseudonyms | Many unlinkable pseudonyms derived from the user's secret key, optionally one per verifier or context (rate limiting, 1-to-1 binding) | [[Pseudonyms-in-eID]], [[IRTF-CFRG-BBS-Per-Verifier-Linkability]] |

## Further features
| Feature | What it gives | References |
|---|---|---|
| Predicate proofs | Prove a statement about an attribute (age over 18) instead of revealing it; also hides correlating values such as the expiry date | [[Predicate-Proofs]] |
| Composite proofs | One presentation over several credentials, e.g. a diploma and an ID with matching (hidden) names. Lets attribute credentials bind to a user secret and only one credential bind to the device, which simplifies backup | [[BCD+14-ABC4Trust]] |
| Deniable presentations | Designated-verifier proofs that convince only the intended verifier, so a forwarded presentation is not evidence | [[Predicate-Proofs]] |
| (Partially) blind issuance | The issuer signs attributes it doesn't see, e.g. a central service signing grades vouched for by a university | [[IRTF-CFRG-BBS-Blind-Signatures]], [[BL13-ACL]] |
| Issuer hiding | Prove the issuer belongs to an accepted set (e.g. any German university) without revealing which one | [[BEKRS21-Issuer-Hiding]] |
| Conditional disclosure | Attributes encrypted for a designated party, revealed only when needed (address for the postal service, card number on a hotel no-show) | [[BCD+14-ABC4Trust]] |

## Support by family
For BBS and PS credentials, all of these features have been proposed and compose through Sigma-proof statements ([[BCD+14-ABC4Trust]], [[IRTF-CFRG-Sigma-Protocols]]). General-purpose ZKPs can in theory express any of them, but practical instantiations hard-code a credential format, signature and policy for efficiency, so each new feature means new circuit work ([[BL26-SoK-AnonCreds]]).

## Related
- [[Privacy-Requirements]]
- [[Unlinkable-Anonymous-Credentials]]
- [[Pairing-Free-ACs]]

## Resources
- Paper: [[BL26-SoK-AnonCreds]], [[KMPQ23-SoK-AnonCreds]], [[BCD+14-ABC4Trust]], [[BEKRS21-Issuer-Hiding]], [[BL13-ACL]]
- Wiki: [[IRTF-CFRG-BBS-Signatures]], [[IRTF-CFRG-BBS-Blind-Signatures]], [[IRTF-CFRG-BBS-Per-Verifier-Linkability]], [[IRTF-CFRG-Sigma-Protocols]]
