---
type: application
tags:
  - eid
  - threat-modeling
  - privacy
  - post-quantum
---

[Home](../README.md) > [eID](README.md) > eID-Threat-Models

# e-ID Threat Models

## Description
A threat model states which adversaries are considered and what they can do. The taxonomy of [[GHE25-Taxonomy]] groups threats to e-ID systems into three branches: **external threats** (parties without legitimate keys), **internal threats** (legitimate actors misbehaving, intentionally or not, including technical and legal power imbalances) and **systemic failures** (broken assumptions affecting all actors), with **supply-chain attacks** as a particularly important systemic case. For methodology see [[Shostack-Threat-Modeling]] and the human-centred approach of [[UZ25-SoK-Threat-Modeling]].

```
Threat Models
├── External: nation state · hacking group · theft / device loss / coercion
├── Internal: functional-role abuse · legal-role abuse · collusion between actors
└── Systemic: quantum computers · cryptographic soundness · implementation failure · supply chain
```

## External threats
External adversaries start with public access only. If they obtain secrets, they will not behave like the secrets' owners: an adversary who steals a holder key will use it even if it harms the holder.

- **Nation states** have the largest resources: possibly a *global network view* (breaking anonymity that relies on a partial view), *store now, decrypt later* collection, soft power to coerce companies into giving access to data or modifying operating systems, and the ability to *change the law* to access previously protected data.
- **Hacking groups** are financially motivated: denial of service, phishing / social engineering (the most common vector), data theft and ransomware with (double) extortion.
- **Theft, device loss and coercion**: the device must be secure enough that the identity cannot be abused when it falls into the wrong hands, or when the holder is coerced to present a credential.

## Internal threats
- **Functional-role abuse**
  - *Verifiers* may request too many attributes (over-identification) or keep data longer than allowed; without an e-ID people send copies of identity cards, a lucrative target.
  - *Issuers* centralise toxic information during issuance (signature-to-holder links, IP addresses, documents presented) that must be deleted, and must be trusted not to re-issue a credential to a third party.
  - *Holders* have little incentive to break the system; the most frequent misbehaviour is *credential sharing* (mitigated by [[Holder-Binding]]).
- **Legal-role abuse**: systems relying on law to protect data held by private actors (e.g. bank-based e-IDs) are vulnerable to regulatory drift, changes of law and *legal loopholes*.
- **Collusion**
  - *Several verifiers* can link presentations through metadata (IP, time, access patterns) or through credential artefacts: issuer signature, issuance and expiry dates, revocation index, salted hashes. See [[PB23-SoK-Linkage-Attacks]].
  - *Verifiers plus issuer*: if the issuer stores signatures with identities, any linkable artefact gives full de-anonymisation. This motivates issuer-unlinkable designs ([[Unlinkable-Anonymous-Credentials]]).
  - The taxonomy found no specific threats for verifier–holder or holder–holder collusion.

## Systemic failures
- **Quantum computers** would invert factorisation and discrete logarithms. In e-ID systems these are mainly used for signatures, so once broken all past and future signatures must be considered invalid; for unlinkability the concern is *store now, link later*. See [[Post-Quantum-and-eID]] and [[Taurus-Quantum-Doomsday-Planning]]. The underlying question of [[Quanta-Which-Computational-Universe]] is that no scheme has a proof of absolute hardness.
- **Cryptographic soundness**: "don't roll your own crypto". Most deployed systems rely on elliptic curves being one-way and SHA-256 behaving like a random oracle. Newer ZKP constructions such as [[Longfellow]] and [[Crescent]] are complex; their security relies on reviews by multiple teams rather than formal proofs. Backdoored parameters (Dual EC) motivate nothing-up-my-sleeve constants.
- **Implementation failures**: memory-safety bugs (C/C++ dependencies of high-level languages), untested edge cases, mixing test and production configuration (e.g. accepting test certificates), leaked access tokens, and side channels (timing, EM, power). External code review and bug bounties help; the security analysis of swiyu in [[Egg25-Swiss-eID-Security]] reported more than 90 vulnerabilities.
- **Supply-chain attacks**: transitive software dependencies (Log4Shell-style) and hardware, e.g. a backdoored HSM exfiltrating keys.

## Related
- [[eID-Actors-and-Trust-Goals]] — the actors and goals these threats target
- [[Hardware-Security-for-eID]] — device and issuer hardware assumptions
- [[Post-Quantum-and-eID]]
- [[eID-Open-Questions]]

## Resources
- Paper: [[GHE25-Taxonomy]]
- Book: [[Shostack-Threat-Modeling]]
- Book: [[Howard-Lipner-Security-Development-Lifecycle]]
- Paper: [[UZ25-SoK-Threat-Modeling]]
- Paper: [[KPRK24-SoK-SSI-Trust]]
- Paper: [[PB23-SoK-Linkage-Attacks]]
- Paper: [[Egg25-Swiss-eID-Security]]
- Paper: [[KVRSCLT26-EUDIF-Harms]]
- Blog: [[Taurus-Quantum-Doomsday-Planning]], [[Quanta-Which-Computational-Universe]], [[eid-privacy-privacy-unlinkability]]
