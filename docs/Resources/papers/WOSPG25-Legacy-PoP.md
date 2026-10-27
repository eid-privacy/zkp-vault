---
type: resource
subtype: paper
cite_as: WOSPG25-Legacy-PoP
year: 2025
authors:
  - Anna P. Y. Woo
  - Alex Ozdemir
  - Chad Sharp
  - Thomas Pornin
  - Paul Grubbs
url: "https://eprint.iacr.org/2025/538"
tags:
  - snark
  - signatures
  - anonymous-credentials
related:
  - FS24-Longfellow
  - PPZ24-Crescent
  - CLR23-CDLS
  - BL26-SoK-AnonCreds
doi: "10.1109/sp61157.2025.00080"
citations: 4
citations_updated: 2026-10-27
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > WOSPG25-Legacy-PoP

# Efficient Proofs of Possession for Legacy Signatures (Woo, Ozdemir, Sharp, Pornin, Grubbs 2025)

## Summary
Brings zero-knowledge proofs of possession of a message and signature close to practicality for widely deployed legacy schemes (RSA, ECDSA, Ed25519) by encoding signature verification as R1CS and optimizing it for a zkSNARK backend. Published at IEEE S&P 2025. [[BL26-SoK-AnonCreds]] lists it with [[FS24-Longfellow]] and [[PPZ24-Crescent]] as the recent works enabling ZKPs over ECDSA-signed data in a few seconds, and as an option for proving an ECDSA device-binding signature.

## Related resources

- [[FS24-Longfellow|Anonymous Credentials from ECDSA (Frigo & shelat 2024)]] (paper, 2024)
- [[CLR23-CDLS|CDLS: Proving Knowledge of Committed Discrete Logarithms with Soundness (Celi, Levin, Rowell 2023)]] (paper, 2023)
- [[PPZ24-Crescent|Crescent: Stronger Privacy for Existing Credentials (Paquin, Policharla, Zaverucha 2024)]] (paper, 2024)
- [[BL26-SoK-AnonCreds|SoK: Anonymous Credentials for Digital Identity Wallets (Bormann, Lehmann 2026)]] (paper, 2026)
