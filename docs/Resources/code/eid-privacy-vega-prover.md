---
type: resource
subtype: code
year: 2026
authors:
  - eid-privacy project
url: "https://github.com/eid-privacy/vega-prover"
tags:
  - prover-backend
  - implementations
---

[Home](../../README.md) > [Resources](../README.md) > [code](README.md) > eid-privacy-vega-prover

# eid-privacy/vega-prover

## Summary
eid-privacy fork of Microsoft's Vega prover (client-side ZK proving over signed data, optimised for repeated proofs over the same credential). The default `raw-serde` branch stores the large precomputed prover state as raw, zstd-compressed frames decompressed in parallel: loading it for the swiyu JWT circuit of [[eid-privacy-spartan-backend]] takes 0.17 s instead of 0.89 s. Used on the `benchmark` branches of spartan-backend and zkp-android-spartan.
