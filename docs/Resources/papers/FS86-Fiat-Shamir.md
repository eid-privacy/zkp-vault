---
type: resource
subtype: paper
cite_as: FS86-Fiat-Shamir
year: 1986
authors:
  - Amos Fiat
  - Adi Shamir
tags:
  - non-interactive
  - sigma
  - transformation
  - foundational
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > FS86-Fiat-Shamir

# How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)

URL:: https://link.springer.com/content/pdf/10.1007/3-540-47721-7_12.pdf

## Summary
Introduces the Fiat-Shamir transform, which converts an interactive sigma protocol into a non-interactive proof by replacing the verifier's random challenge with a hash of the transcript. This heuristic (secure in the random oracle model) is the basis for most practical SNARK and signature constructions.
