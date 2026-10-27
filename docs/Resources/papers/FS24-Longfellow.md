---
type: resource
subtype: paper
cite_as: FS24-Longfellow
year: 2024
authors:
  - Matteo Frigo
  - abhi shelat
url: "https://eprint.iacr.org/2024/2010"
tags:
  - snark
  - transparent
  - eid
  - elliptic-curves
  - applications
related:
  - AHIV17-Ligero
  - Set19-Spartan
  - Longfellow
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > FS24-Longfellow

# Anonymous Credentials from ECDSA (Frigo & shelat 2024)

## Summary
Presents Longfellow, a ZK proof system that builds anonymous credential schemes directly over ECDSA-signed documents (JWTs, ISO mDOC). Combines sumcheck, the Ligero argument system, efficient Reed-Solomon encoding, and specialised ECDSA circuits. ECDSA proofs are generated in 60 ms; fully standardised ISO MDOC proofs in 1.2 s on mobile. No pre-computation or trusted setup required; the construction is transparent and post-quantum safe.

## Used by
- [[Longfellow]]

## Related resources

- [[DFKP16-Cinderella|Cinderella: Turning Shabby X.509 Certificates into Elegant Anonymous Credentials with the Magic of Verifiable Computation (Delignat-Lavaud, Fournet, Kohlweiss, Parno 2016)]] (paper, 2016)
- [[eid-privacy-comparing-zk-systems|Comparing ZK Systems (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-crescent-longfellow|Crescent and Longfellow (eid-privacy, 2025)]] (blog, 2025)
- [[WOSPG25-Legacy-PoP|Efficient Proofs of Possession for Legacy Signatures (Woo, Ozdemir, Sharp, Pornin, Grubbs 2025)]] (paper, 2025)
- [[Mom25-GP-ZKP-VCs|General-Purpose Zero-Knowledge Proofs for Verifiable Credentials (Mombelli 2025)]] (paper, 2025)
- [[AHIV17-Ligero|Ligero: Lightweight Sublinear Arguments Without a Trusted Setup (Ames et al. 2017)]] (paper, 2017)
- [[QCY21-Blind-ECDSA|One-more Unforgeability of Blind ECDSA (Qin, Cai, Yuen 2021)]] (paper, 2021)
- [[eid-privacy-privacy-unlinkability|Overview of Privacy and Unlinkability (eid-privacy, 2025)]] (blog, 2025)
- [[eid-privacy-poc-report|Proof-of-Concept for ZKPs (eid-privacy, 2026)]] (blog, 2026)
- [[DHG26-MS4|Secure and Privacy-Preserving Credentials for E-ID - Final Report (Dengler, Humbert, Gasser 2026)]] (paper, 2026)
- [[BL26-SoK-AnonCreds|SoK: Anonymous Credentials for Digital Identity Wallets (Bormann, Lehmann 2026)]] (paper, 2026)
- [[Set19-Spartan|Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup (Setty 2020)]] (paper, 2019)
- [[LSZ25-Vision|Vision: A Modular Framework for Anonymous Credential Systems (Lehmann, Sidorenko, Zacharakis 2025)]] (paper, 2025)
- [[RWGM23-zk-creds|zk-creds: Flexible Anonymous Credentials from zkSNARKs and Existing Identity Infrastructure (Rosenberg, White, Garman, Miers 2023)]] (paper, 2023)
