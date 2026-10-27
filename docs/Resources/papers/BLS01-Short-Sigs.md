---
type: resource
subtype: paper
cite_as: BLS01-Short-Sigs
year: 2001
authors:
  - Dan Boneh
  - Ben Lynn
  - Hovav Shacham
url: "https://doi.org/10.1007/3-540-45682-1_30"
tags:
  - signatures
  - pairing
  - elliptic-curves
related:
  - BBS04-ShortGroupSigs
doi: "10.1007/3-540-45682-1_30"
citations: 3091
citations_updated: 2026-10-27
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > BLS01-Short-Sigs

# Short Signatures from the Weil Pairing (Boneh, Lynn, Shacham 2001)

## Summary
Introduces BLS signatures: a signature is a single group element H(m)^x on a pairing-friendly curve, verified with a pairing equation, giving very short signatures secure under CDH in gap Diffie–Hellman groups in the random-oracle model. BLS signatures aggregate naturally and are widely deployed (e.g. Ethereum consensus); pairing-based signatures of this family underlie BBS-style anonymous credentials. (ASIACRYPT 2001; journal version JoC 2004.)

## Related resources

- [[AFG24-Pairing-Curves-192|A Short-List of Pairing-Friendly Curves Resistant to the Special TNFS Algorithm at the 192-bit Security Level (Aranha, Fotiadis, Guillevic 2024)]] (paper, 2024)
- [[BBS04-ShortGroupSigs|Short Group Signatures (Boneh, Boyen, Shacham 2004)]] (paper, 2004)
