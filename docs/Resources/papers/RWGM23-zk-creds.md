---
type: resource
subtype: paper
cite_as: RWGM23-zk-creds
year: 2023
authors:
  - Michael Rosenberg
  - Jacob White
  - Christina Garman
  - Ian Miers
url: "https://doi.org/10.1109/SP46215.2023.10179430"
tags:
  - anonymous-credentials
  - snark
  - eid
related:
  - DFKP16-Cinderella
  - PPZ24-Crescent
  - FS24-Longfellow
  - BL26-SoK-AnonCreds
doi: "10.1109/sp46215.2023.10179430"
citations: 112
citations_updated: 2026-10-27
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > RWGM23-zk-creds

# zk-creds: Flexible Anonymous Credentials from zkSNARKs and Existing Identity Infrastructure (Rosenberg, White, Garman, Miers 2023)

## Summary
Builds anonymous credentials on top of general-purpose zkSNARKs so that existing identity documents (e.g. the signed data in NFC passports) can be turned into credentials without new issuer infrastructure. Credentials are stored in a public list and shown via Groth16 proofs with flexible, reusable presentation gadgets. Identified by [[BL26-SoK-AnonCreds]] as the first anonymous credential system built on legacy identity infrastructure, a predecessor of [[PPZ24-Crescent]] and [[FS24-Longfellow]].

## Related resources

- [[FS24-Longfellow|Anonymous Credentials from ECDSA (Frigo & shelat 2024)]] (paper, 2024)
- [[DFKP16-Cinderella|Cinderella: Turning Shabby X.509 Certificates into Elegant Anonymous Credentials with the Magic of Verifiable Computation (Delignat-Lavaud, Fournet, Kohlweiss, Parno 2016)]] (paper, 2016)
- [[PPZ24-Crescent|Crescent: Stronger Privacy for Existing Credentials (Paquin, Policharla, Zaverucha 2024)]] (paper, 2024)
- [[BL26-SoK-AnonCreds|SoK: Anonymous Credentials for Digital Identity Wallets (Bormann, Lehmann 2026)]] (paper, 2026)
