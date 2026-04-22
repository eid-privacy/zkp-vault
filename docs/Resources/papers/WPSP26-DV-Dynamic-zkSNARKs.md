---
type: resource
subtype: paper
cite_as: WPSP26-DV-Dynamic-zkSNARKs
year: 2026
authors:
  - Weijie Wang
  - Charalampos Papamanthou
  - Shravan Srinivasan
  - Dimitrios Papadopoulos
url: "https://eprint.iacr.org/2026/144"
tags:
  - snark
  - non-interactive
  - applications
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > WPSP26-DV-Dynamic-zkSNARKs

# Designated-Verifier Dynamic zk-SNARKs with Applications to Dynamic Proofs of Index (Wang et al. 2026)

## Summary
Introduces designated-verifier dynamic zk-SNARKs: a zk-SNARK augmented with an efficient update algorithm where only a designated verifier holding secret verification state can be convinced. Constructs a dynamic proof of index — a SNARK certifying consistency between a digest of a set and a digest of its sorted index — that can be updated in sublinear time as the underlying set changes. Applies the construction to verifiable dynamic database outsourcing, enabling a client to maintain verifiable indices for efficient query answering after outsourcing.

## Used by
- [[DV-Dynamic-zkSNARKs]]
