---
type: resource
subtype: paper
cite_as: PPZ24-Crescent
year: 2024
authors:
  - Christian Paquin
  - Guru-Vamsi Policharla
  - Greg Zaverucha
url: "https://eprint.iacr.org/2024/2013"
tags:
  - snark
  - eid
  - elliptic-curves
  - applications
related:
  - Gro16-Groth16
  - Set19-Spartan
  - microsoft-crescent-credentials
  - Crescent
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > PPZ24-Crescent

# Crescent: Stronger Privacy for Existing Credentials (Paquin, Policharla, Zaverucha 2024)

## Summary
Introduces Crescent, a modular ZK credential scheme for privacy-preserving presentations of SD-JWT and X.509 credentials. Splits proof generation into a one-time offline preparation phase (pre-computation of reusable cryptographic values) and a fast per-presentation phase using Groth16 and Spartan over the T-256 curve. Accepted at RWC 2025.

## Used by
- [[Crescent]]

## Related resources

- [[eid-privacy-comparing-zk-systems|Comparing ZK Systems (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-crescent-longfellow|Crescent and Longfellow (eid-privacy, 2025)]] (blog, 2025)
- [[microsoft-crescent-credentials|Microsoft Crescent Credentials (Spartan-t256 Fork)]] (code, 2023)
- [[Gro16-Groth16|On the Size of Pairing-Based Non-interactive Arguments (Groth16)]] (paper, 2016)
- [[eid-privacy-privacy-unlinkability|Overview of Privacy and Unlinkability (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-poc-report|Proof-of-Concept for ZKPs (eid-privacy, 2026)]] (blog, 2026)
- [[Set19-Spartan|Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup (Setty 2020)]] (paper, 2019)
- [[LSZ25-Vision|Vision: A Modular Framework for Anonymous Credential Systems (Lehmann, Sidorenko, Zacharakis 2025)]] (paper, 2025)
