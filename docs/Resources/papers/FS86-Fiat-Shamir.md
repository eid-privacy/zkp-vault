---
type: resource
subtype: paper
cite_as: FS86-Fiat-Shamir
year: 1986
authors:
  - Amos Fiat
  - Adi Shamir
url: "https://link.springer.com/content/pdf/10.1007/3-540-47721-7_12.pdf"
tags:
  - non-interactive
  - sigma
  - transformation
  - foundational
doi: "10.1007/3-540-47721-7_12"
citations: 3949
citations_updated: 2026-10-27
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > FS86-Fiat-Shamir

# How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)

## Summary
Introduces the Fiat-Shamir transform, which converts an interactive sigma protocol into a non-interactive proof by replacing the verifier's random challenge with a hash of the transcript. This heuristic (secure in the random oracle model) is the basis for most practical SNARK and signature constructions.

## Used by
- [[Fiat-Shamir]]
- [[ZK-Proof-Taxonomy]]

## Related resources

- [[GQ88-Identity-Signature|A "Paradoxical" Identity-Based Signature Scheme Resulting from Zero-Knowledge (Guillou, Quisquater 1988)]] (paper, 1988)
- [[Sch91-Schnorr-Signatures|Efficient Signature Generation by Smart Cards (Schnorr 1991)]] (paper, 1991)
- [[Dam04-Sigma-Protocols|On Sigma Protocols (Damgård)]] (paper, 2004)
- [[CPV24-Last-Challenge|The Last Challenge Attack: Exploiting a Vulnerable Implementation of the Fiat-Shamir Transform in a KZG-based SNARK (Ciobotaru, Peter, Velichkov 2024)]] (paper, 2024)
