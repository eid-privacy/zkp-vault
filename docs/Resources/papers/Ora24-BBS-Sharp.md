---
type: resource
subtype: paper
cite_as: Ora24-BBS-Sharp
year: 2024
authors:
  - Orange
url: "https://github.com/user-attachments/files/15905230/BBS_Sharp_Short_TR.pdf"
tags:
  - signatures
  - anonymous-credentials
  - eid
  - attestation
related:
  - BBS04-ShortGroupSigs
  - TZ23-Revisiting-BBS
  - BBDT16-KVAC
  - LZ26-AnonCreds-Legacy
  - FHLL25-AnonCreds-TrustedHW
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > Ora24-BBS-Sharp

# The BBS# protocol: Technical details (Orange 2024)

## Summary
Technical report by Orange (June 2024, shared in the EUDI ARF discussion #211) describing BBS#, a BBS/BBS+ variant designed for the EU Digital Identity Wallet. BBS# avoids pairings on the holder side and binds credentials to keys held in existing secure hardware using standard ECDSA or EC-Schnorr, so that unlinkable presentations can be produced without changing deployed secure elements; it also covers selective disclosure compatible with ISO mDL and deniable presentations. A peer-reviewed version appeared as ePrint 2025/619 (Making BBS Anonymous Credentials eIDAS 2.0 Compliant).

## Related resources

- [[LZ26-AnonCreds-Legacy|Device Binding for Anonymous Credentials on Legacy Phones (Lehmann, Zacharakis 2026)]] (paper, 2026)
- [[FHLL25-AnonCreds-TrustedHW|Device-Bound Anonymous Credentials With(out) Trusted Hardware (Friedrichs, Harding, Lehmann, Lysyanskaya 2025)]] (paper, 2025)
- [[BBDT16-KVAC|Improved Algebraic MACs and Practical Keyed-Verification Anonymous Credentials (Barki, Brunet, Desmoulins, Traoré 2016)]] (paper, 2016)
- [[TZ23-Revisiting-BBS|Revisiting BBS Signatures (Tessaro, Zhu 2023)]] (paper, 2023)
- [[CHLT25-Server-Aided-AC|Server-Aided Anonymous Credentials (Chairattana-Apirom, Harding, Lysyanskaya, Tessaro 2025)]] (paper, 2025)
- [[BBS04-ShortGroupSigs|Short Group Signatures (Boneh, Boyen, Shacham 2004)]] (paper, 2004)
