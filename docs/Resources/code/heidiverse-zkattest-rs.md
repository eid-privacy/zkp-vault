---
type: resource
subtype: code
year: 2025
authors:
  - Ubique Innovation
url: "https://github.com/heidiverse/zkattest-rs"
tags:
  - eid
  - elliptic-curves
  - sigma
  - library
---

[Home](../../README.md) > [Resources](../README.md) > [code](README.md) > heidiverse-zkattest-rs

# heidiverse/zkattest-rs (formerly UbiqueInnovation/zkattest-rs)

## Summary
Proof-of-concept Rust code by Ubique Innovation for binding a BBS credential to a P-256 key held in a phone's secure element: a ZKAttest-style proof (ported from cloudflare/zkp-ecdsa, using the Tom-256 curve) shows an ECDSA signature verifies under a committed public key, and a cross-group equality proof (Chase et al.) links that key to attributes in a BBS signature. The README warns that the original ZKAttest optimisation is insecure (eprint 2023/1595) and points to docknetwork's `equality_across_groups` for a better implementation. Archived; now under the heidiverse organisation.
