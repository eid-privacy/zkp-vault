---
type: resource
subtype: wiki
year: 2023
authors:
  - NIST
url: "https://csrc.nist.gov/pubs/fips/186-5/final"
tags:
  - standard
  - signatures
  - elliptic-curves
---

[Home](../../README.md) > [Resources](../README.md) > [wikis](README.md) > NIST-FIPS-186-5

# FIPS 186-5: Digital Signature Standard (DSS)

## Summary
NIST standard (2023) specifying RSA, ECDSA and EdDSA signatures and approved curves (P-256 etc.). ECDSA-P256 is the signature used by most deployed e-ID credentials (mdoc, SD-JWT ES256) and by phone secure elements for holder binding, which is why systems like Longfellow, Crescent and zkAttest prove ECDSA verification in zero knowledge.
