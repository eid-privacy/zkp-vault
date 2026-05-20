---
type: resource
subtype: paper
cite_as: LZ26-AnonCreds-Legacy
year: 2026
authors:
  - Anja Lehmann
  - Alexandros Zacharakis
url: "https://eprint.iacr.org/2026/965.pdf"
tags:
  - eid
  - applications
  - cryptography
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > LZ26-AnonCreds-Legacy

# Device Binding for Anonymous Credentials on Legacy Phones (Lehmann, Zacharakis 2026)

## Summary
Addresses the curve incompatibility problem for adding device binding to anonymous credentials in the EUDI Wallet context: anonymous credentials require pairing-friendly curves for efficiency, but consumer phone secure elements are restricted to ECDSA on P-256. Device binding ties a credential to a hardware-protected key and requires a fresh proof-of-possession per presentation; this paper bridges the curve gap to enable that binding without requiring new hardware.

## Related resources

- [[FHLL25-AnonCreds-TrustedHW|Device-Bound Anonymous Credentials With(out) Trusted Hardware (Friedrichs, Harding, Lehmann, Lysyanskaya 2025)]] (paper, 2025)
- [[GHE25-Taxonomy|Taxonomy for Privacy-Preserving Electronic Identities (Gasser, Humbert, Elghareeb 2025)]] (paper, 2025)
