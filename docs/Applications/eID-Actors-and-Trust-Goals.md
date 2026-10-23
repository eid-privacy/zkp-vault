---
type: application
tags:
  - eid
  - privacy
  - threat-modeling
  - regulation
---

[Home](../README.md) > [Applications](README.md) > eID-Actors-and-Trust-Goals

# e-ID Actors and Trust Goals

## Description
The first step in reasoning about an electronic identity (e-ID) system is to fix *who* interacts with it and *what each party expects* from it. The taxonomy of [[GHE25-Taxonomy]] describes actors from two angles, their **legal status** and their **functional role** in an interaction, and maps each legal entity to a group of **trust goals**. The trade-offs between these goals (e.g. unlinkability vs. audit trails) drive most design decisions in e-ID systems.

## Actors

| Angle | Actor | Notes |
|---|---|---|
| Legal entity | Private individual | Most common user; in the Swiss proposal the e-ID is only defined for individuals, so they are *holders* by default. |
| Legal entity | Business | Needs a Unique Enterprise Identification Number (UID) in Switzerland; currently a *verifier*, naturally also a holder or issuer later. |
| Legal entity | Government | Responsible for the system and runs the infrastructure: the *base registry* (public keys / DIDs) and the *trust registry* (verified name, address and purpose of issuers and verifiers). |
| Functional role | Issuer | Creates credentials and gives them to holders. The first credential (the e-ID itself) can only be issued by the government. |
| Functional role | Holder | Stores the e-ID and other credentials in a wallet app, usually on an Android or iOS smartphone, and decides what is presented to whom. |
| Functional role | Verifier | Requests proofs of attributes. Legally obliged to request only the minimum needed; unregistered verifiers trigger a warning in the wallet ([[Swiss-E-ID-Ordinance-VEID]], Art. 14). |

Roles belong to *interactions*, not to entities: the same entity may verify one credential in order to issue another. The roles are defined in the Swiss [[Swiss-E-ID-Act-BGEID]] and [[Swiss-E-ID-Ordinance-VEID]]; the EU [[EUDI-ARF]] uses the same issuer / holder / verifier (relying party) model.

## Trust Goals

```
Trust Goals
├── User Agency (private individuals)
│   ├── Anonymity (data minimisation)
│   │   ├── Unlinkability
│   │   └── Predicate proofs
│   └── Autonomy (decentralisation)
│       ├── Coercion resistance
│       ├── User-centric identity
│       └── Offline usage
├── Business Interests
│   ├── Fraud prevention
│   └── Audit trails
└── Government Requirements
    ├── Unforgeability of the e-ID
    ├── Non-transferability (holder binding)
    └── Government oversight / transparency
```

### User agency
- **Anonymity**: following [[PH10-Privacy-Terminology]], a subject is anonymous if it is not identifiable within an *anonymity set*. The taxonomy prefers "anonymity" over "data minimisation" to keep the focus on people rather than data.
- **Unlinkability**: an attacker cannot sufficiently distinguish whether two items of interest (e.g. presentations) are related. *Verifier unlinkability* (multi-show unlinkability) is against colluding verifiers; *issuer unlinkability* (untraceability) is against the issuer. See [[Unlinkable-Anonymous-Credentials]].
- **Predicate proofs**: statements about an attribute without revealing its value (e.g. "over 18"); they still leak the predicate itself. See [[Predicate-Proofs]].
- **Coercion resistance**: can identities be altered, deactivated or cloned by the issuer after issuance if political benevolence shifts?
- **User-centric identity**: the self-determination power of participants (Self-Sovereign Identity is one instance), which must not come at the cost of identity theft. See [[KPRK24-SoK-SSI-Trust]].
- **Offline usage**: use without connectivity to a central server, via BLE or QR codes; requires pre-loading issuer keys, trust registries and revocation data.

### Business interests
- **Fraud prevention**: data must be authentic, unaltered and belong to the presenting party.
- **Audit trails**: compliance (e.g. KYC/AML) may require full identification, which clashes with zero-knowledge presentations; see the privacy/oversight analysis in [[ABCD25-PETs-Payments]].

### Government requirements
- **Unforgeability**: it must be computationally infeasible to make claims in another party's name.
- **Non-transferability (holder binding)**: an e-ID should only be usable by the person it represents; the closest practical approximation is binding it to the device it was issued to. See [[Holder-Binding]].
- **Oversight / transparency**: sometimes required (e.g. AML), in direct conflict with user agency. [[ABCD25-PETs-Payments]] distinguishes *soft/hard privacy* from *soft/hard oversight*.

## Related
- [[eID-Threat-Models]] — what can go wrong for each actor
- [[eID-Legal-Framework]] — where roles and obligations are defined
- [[eID-Systems-Overview]] — how deployed systems realise these roles
- [[Holder-Binding]], [[Unlinkable-Anonymous-Credentials]], [[Predicate-Proofs]]

## Resources
- Paper: [[GHE25-Taxonomy]]
- Paper: [[PH10-Privacy-Terminology]]
- Paper: [[ABCD25-PETs-Payments]]
- Paper: [[KPRK24-SoK-SSI-Trust]]
- Wiki: [[Swiss-E-ID-Act-BGEID]], [[Swiss-E-ID-Ordinance-VEID]]
- Docs: [[EUDI-ARF]], [[swiyu-Trust-Protocol]]
- Blog: [[eid-privacy-taxonomy-101]], [[eid-privacy-taxonomy-digital-identity]]
