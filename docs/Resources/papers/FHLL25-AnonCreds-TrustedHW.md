---
type: resource
subtype: paper
cite_as: FHLL25-AnonCreds-TrustedHW
year: 2025
authors:
  - Karla Friedrichs
  - Franklin Harding
  - Anja Lehmann
  - Anna Lysyanskaya
url: "https://eprint.iacr.org/2025/1995.pdf"
tags:
  - eid
  - applications
  - cryptography
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > FHLL25-AnonCreds-TrustedHW

# Device-Bound Anonymous Credentials With(out) Trusted Hardware (Friedrichs, Harding, Lehmann, Lysyanskaya 2025)

## Summary
Formalises device binding for anonymous credentials, where a credential is tied to a secure element (SE) key and each presentation requires a fresh SE contribution. Identifies shortcomings in prior constructions — multiple SE calls, stateful SEs, or privacy that depends on SE honesty — which violate core SE design principles. Proposes new constructions compatible with BBS credentials that require only a single stateless SE call and whose privacy does not rely on SE honesty.

## Related resources

- [[LZ26-AnonCreds-Legacy|Device Binding for Anonymous Credentials on Legacy Phones (Lehmann, Zacharakis 2026)]] (paper, 2026)
- [[BBS04-ShortGroupSigs|Short Group Signatures (Boneh, Boyen, Shacham 2004)]] (paper, 2004)
