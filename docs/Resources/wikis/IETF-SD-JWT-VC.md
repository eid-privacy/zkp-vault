---
type: resource
subtype: wiki
year: 2026
authors:
  - IETF OAuth Working Group
url: "https://datatracker.ietf.org/doc/draft-ietf-oauth-sd-jwt-vc/"
tags:
  - standard
  - credential-format
  - eid
---

[Home](../../README.md) > [Resources](../README.md) > [wikis](README.md) > IETF-SD-JWT-VC

# SD-JWT-based Verifiable Digital Credentials (SD-JWT VC) — IETF draft

## Summary
IETF OAuth WG draft (draft-ietf-oauth-sd-jwt-vc) defining how to express verifiable digital credentials with JSON payloads using SD-JWT: the `vct` credential type, issuer key resolution, status references and type metadata. It is the credential profile used by the EUDI wallet PID and by swiyu. Any ZK proof over such credentials must handle its JSON/base64url encoding and ES256 signatures.
