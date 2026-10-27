---
type: resource
subtype: paper
cite_as: DFKP16-Cinderella
year: 2016
authors:
  - Antoine Delignat-Lavaud
  - Cédric Fournet
  - Markulf Kohlweiss
  - Bryan Parno
url: "https://doi.org/10.1109/SP.2016.22"
tags:
  - anonymous-credentials
  - snark
  - applications
  - eid
related:
  - PHGR13-Pinocchio
  - PPZ24-Crescent
  - FS24-Longfellow
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > DFKP16-Cinderella

# Cinderella: Turning Shabby X.509 Certificates into Elegant Anonymous Credentials with the Magic of Verifiable Computation (Delignat-Lavaud, Fournet, Kohlweiss, Parno 2016)

## Summary
Uses general-purpose zkSNARKs (Pinocchio/Geppetto) to prove possession of a valid X.509 certificate chain and compliance with a policy, without revealing the certificate (IEEE S&P 2016). Implements RSA-PKCS#1 verification and ASN.1 parsing in circuits and applies it to TLS client authentication and Helios voting. Early precursor of the 'anonymous credentials from legacy credentials' approach later taken by Crescent and Longfellow for e-ID.

## Related resources

- [[FS24-Longfellow|Anonymous Credentials from ECDSA (Frigo & shelat 2024)]] (paper, 2024)
- [[PPZ24-Crescent|Crescent: Stronger Privacy for Existing Credentials (Paquin, Policharla, Zaverucha 2024)]] (paper, 2024)
- [[PHGR13-Pinocchio|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] (paper, 2013)
- [[RWGM23-zk-creds|zk-creds: Flexible Anonymous Credentials from zkSNARKs and Existing Identity Infrastructure (Rosenberg, White, Garman, Miers 2023)]] (paper, 2023)
