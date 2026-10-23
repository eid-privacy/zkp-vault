---
type: resource
subtype: wiki
year: 2025
authors:
  - Daniel Fett
  - Kristina Yasuda
  - Brian Campbell
url: "https://www.rfc-editor.org/rfc/rfc9901.html"
tags:
  - standard
  - credential-format
  - eid
---

[Home](../../README.md) > [Resources](../README.md) > [wikis](README.md) > IETF-RFC9901-SD-JWT

# RFC 9901: Selective Disclosure for JSON Web Tokens (SD-JWT)

## Summary
IETF RFC (November 2025) specifying SD-JWT: the issuer signs a JWT containing salted hashes of claims, and the holder reveals chosen claims by sending the corresponding disclosures, optionally with a key-binding JWT. Selective disclosure is hash-based, so presentations remain linkable through the signature and hashes — the gap that ZKP-based approaches over SD-JWT aim to close. SD-JWT is the basis of the Swiss swiyu credentials and one EUDI format.
