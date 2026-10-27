---
type: application
tags:
  - eid
  - regulation
---

[Home](../README.md) > [eID](README.md) > eID-Legal-Framework

# e-ID Legal Framework (EU and Switzerland)

## Description
Legal texts define the actors' rights and obligations and often constrain the technology (e.g. holder binding, data minimisation, certified hardware). The taxonomy ([[GHE25-Taxonomy]]) considers the EU and Swiss frameworks and orders them in three levels, from abstract to applied:

| Level | Switzerland | European Union |
|---|---|---|
| Constitution / Treaties | Federal Constitution (the E-ID Act is based on Art. 81, public works) | Treaty on the Functioning of the EU, Art. 26 (internal market); Charter of Fundamental Rights, Art. 7 (private life) and Art. 8 (protection of personal data) |
| Law / Regulation | E-ID Act ([[Swiss-E-ID-Act-BGEID]]) | eIDAS ([[eIDAS-Regulation-910-2014]]) and EUDI ([[EU-Digital-Identity-Regulation-2024-1183]]) |
| Ordinance / Implementing regulation | E-ID Ordinance ([[Swiss-E-ID-Ordinance-VEID]]) | Implementing regulations 2024/2977–2982, plus the technical [[EUDI-ARF]] |

The higher levels use general language and are rarely modified; ordinances and implementing regulations state concretely what MAY, SHOULD and MUST be implemented.

## Switzerland
- A first E-ID Act, which foresaw issuance by private companies, was rejected by referendum in 2021; issuance and data handling by private actors was one of the main criticisms.
- The new **E-ID Act (BGEID)** is based on government-run services: a state-issued E-ID, a public trust infrastructure (base and trust registries) and a state wallet (swiyu). It mandates privacy by design, data minimisation and decentralised storage of credentials in the holder's wallet. It was adopted by Parliament in December 2024 and accepted in the referendum of 28 September 2025 ([[Swiss-E-ID-Act-BGEID]]).
- The **E-ID Ordinance (VEID)**, consulted from June 2025, details eligibility and issuance, how verifiers use the trust infrastructure, limits on the data verifiers may request and keep, and a complaint procedure that can flag over-asking verifiers in the trust registry. Unregistered verifiers may request data, but the wallet warns the holder (Art. 14).
- Switzerland develops swiyu publicly on GitHub, building on its experience with the open SwissCovid app ([[SwissCovid-Keeps-Your-Secrets]]).

## European Union
- **eIDAS (2014)** created the legal framework for electronic identification and trust services and the mutual recognition of notified national eID schemes; offering an eID was not mandatory.
- **EUDI regulation (2024/1183, "eIDAS 2")**, in force since May 2024, amends eIDAS and makes it mandatory for member states to offer a European Digital Identity Wallet within 24 months (counted from the entry into force of the implementing acts, i.e. by the end of 2026; earlier summaries cite May 2026). It requires selective disclosure and that relying parties must not be able to link or track users, and explicitly mentions zero-knowledge proofs as a possible means ([[EU-Digital-Identity-Regulation-2024-1183]]).
- **Implementing regulations** adopted on 28 November 2024: integrity and core functionality (2024/2979), protocols and interfaces (2024/2982), person identification data and electronic attestations of attributes (2024/2977), certification (2024/2981) and notifications to the Commission (2024/2980). The first four are to be updated regularly and kept in sync with the ARF.
- High-assurance attestations such as the PID must be issued with certified HSMs, like (qualified) trust service providers ([[Hardware-Security-for-eID]]).

## Interplay with technology
- Data-minimisation and unlinkability requirements motivate [[Selective-Disclosure]], [[Predicate-Proofs]] and [[Unlinkable-Anonymous-Credentials]].
- Non-transferability requirements motivate hardware [[Holder-Binding]], which ties schemes to what phone hardware supports and complicates [[Post-Quantum-and-eID]] migration.
- KYC / AML obligations require full identification for some use cases (e.g. opening a bank account), where ZKPs do not help ([[DHG26-MS4]], [[ABCD25-PETs-Payments]]).
- Systems that rely on law rather than cryptography are exposed to legal-role abuse and changes of law ([[eID-Threat-Models]]); see also how regulations are implemented in practice in [[BRD+24-SoK-Privacy-Regulations]].

## Related
- [[eID-Systems-Overview]]
- [[eID-Actors-and-Trust-Goals]]
- [[eID-Threat-Models]]

## Resources
- Paper: [[GHE25-Taxonomy]]
- Wiki: [[Swiss-E-ID-Act-BGEID]], [[Swiss-E-ID-Ordinance-VEID]], [[eIDAS-Regulation-910-2014]], [[EU-Digital-Identity-Regulation-2024-1183]]
- Docs: [[EUDI-ARF]], [[swiyu-Technical-Documentation]]
- Paper: [[KVRSCLT26-EUDIF-Harms]], [[BBC+24-ARF-Feedback]], [[BRD+24-SoK-Privacy-Regulations]], [[ABCD25-PETs-Payments]]
