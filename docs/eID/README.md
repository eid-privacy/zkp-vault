---
type: applications
tags:
  - eid
  - overview
---

[Home](../README.md) > eID

# Electronic Identity (e-ID)

Electronic identity lets a person prove facts about themselves — name, age, nationality, a diploma — with credentials issued by a government or another trusted party and kept in a wallet on their phone. Switzerland (swiyu) and the EU (EUDI wallet) are rolling out such systems now, built on SD-JWT / mdoc credentials signed with ECDSA. This tab covers what these systems need to provide, how they are built and regulated, and where privacy falls short. It condenses the public work of the eid-privacy project — the taxonomy paper [[GHE25-Taxonomy]] and the reports [[GHE25-MS2]] and [[DHG26-MS4]] — and links to the papers, standards and code in [Resources](../Resources/README.md). How to add unlinkability and other privacy features with zero-knowledge proofs is in [Anonymous Credentials](../AnonymousCredentials/README.md) in the ZKPs tab.

Suggested reading order: actors and threats first, then the deployed systems, then the building blocks they share.

## Actors, Trust & Threats

Who takes part in an e-ID system and what each of them needs. [Actors and Trust Goals](eID-Actors-and-Trust-Goals.md) separates legal entities (individuals, businesses, government) from functional roles (issuer, holder, verifier), and lists their goals, from anonymity and autonomy for users to fraud prevention and audit trails for businesses. [Threat Models](eID-Threat-Models.md) covers external, internal and systemic threats, including collusion between actors and supply-chain attacks. [Privacy Requirements](Privacy-Requirements.md) turns this into a checklist — selective disclosure, unlinkability, untraceability, freshness, pseudonyms — and explains why salted-hash credentials need batch issuance. [Pseudonyms in e-ID](Pseudonyms-in-eID.md) compares per-verifier pseudonyms with Austria's sector-specific identifiers.

## Deployed Systems

How real systems make these choices. The [Systems Overview](eID-Systems-Overview.md) compares them in one table (credential format, signatures, protocols, unlinkability, revocation) and covers other systems such as AnonCreds v2, Aadhaar, MOSIP, Estonia and BankID. [swiyu](swiyu.md) describes the Swiss e-ID with its base and trust registries and our proof of concept on top of it; [EUDI Wallet and the ARF](EUDI-ARF.md) the EU wallet, its implementing acts and the debate about batch issuance vs. anonymous credentials; [ID Austria](ID-Austria.md) Austria's central authentication service.

## Building Blocks

The standards these systems share. [Credential Data Structures](Credential-Data-Structures.md) covers SD-JWT VC, ISO mdoc, the W3C VC Data Model, X.509 and DIDs, and how ZKP-friendly each is. [Communication Protocols](Communication-Protocols.md) covers OpenID4VCI / VP, SIOPv2, ISO 18013-5, DIDComm and DID methods, with a library table. [Status Lists](Status-Lists.md) describes how revocation is checked today and why the list index is a linkable identifier. [Hardware Security](Hardware-Security-for-eID.md) covers secure elements, TEEs, the Secure Enclave and HSMs, and why ECDSA P-256 is the common denominator on phones.

## Regulation

The [Legal Framework](eID-Legal-Framework.md) explains the legal hierarchy in Switzerland (E-ID Act BGEID and ordinance VEID) and the EU (eIDAS and the 2024 EUDI regulation), and where law prescribes technical properties such as data minimisation and unlinkability.

## Open Questions

[Open Questions](eID-Open-Questions.md) collects what is still unsolved: post-quantum migration with today's phone hardware, assurance of complex ZKP constructions, ZKP-friendly revocation, circuit distribution and versioning, performance on mid-range phones, and where ZKPs help at all.

## eID Papers

[eID Papers](eID-Papers.md) lists the vault's papers on e-ID, privacy and anonymous credentials, ranked by citations into foundation, relevant and other papers.
