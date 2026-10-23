---
type: resource
subtype: wiki
year: 2026
authors:
  - IETF OAuth Working Group
url: "https://datatracker.ietf.org/doc/draft-ietf-oauth-status-list/"
tags:
  - standard
  - revocation
  - eid
---

[Home](../../README.md) > [Resources](../README.md) > [wikis](README.md) > IETF-OAuth-Token-Status-List

# Token Status List (TSL) — IETF draft

## Summary
IETF OAuth WG draft defining a compressed bit-array status list, published as a signed JWT or CWT, that issuers use to represent revocation/suspension of JOSE/COSE-secured tokens such as SD-JWT VCs and ISO mdocs. Each credential references an index in the list. Used by swiyu and the EUDI wallet; proving non-revocation against such a list in zero knowledge (without revealing the index) is one of the e-ID project's revocation proof-of-concepts.
