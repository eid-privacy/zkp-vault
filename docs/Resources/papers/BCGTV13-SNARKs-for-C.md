---
type: resource
subtype: paper
cite_as: BCGTV13-SNARKs-for-C
year: 2013
authors:
  - Eli Ben-Sasson
  - Alessandro Chiesa
  - Daniel Genkin
  - Eran Tromer
  - Madars Virza
url: "https://eprint.iacr.org/2013/507.pdf"
tags:
  - snark
  - trusted-setup
  - foundational
related:
  - PHGR13-Pinocchio
  - GGPR12-QSP-SNARK
doi: "10.1007/978-3-642-40084-1_6"
citations: 596
citations_updated: 2026-10-27
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > BCGTV13-SNARKs-for-C

# SNARKs for C: Verifying Program Executions Succinctly and in Zero Knowledge (Ben-Sasson et al. 2013)

## Summary
Presents a publicly-verifiable, non-interactive zero-knowledge argument system for verifying correct execution of arbitrary C programs. Programs are compiled (via a GCC port) to TinyRAM, a random-access machine designed for efficient nondeterministic-computation verification, whose executions are then encoded into quadratic arithmetic programs and proven with a linear-PCP-based SNARK. This closed the gap between SNARK theory (QSP/QAP, Pinocchio) and practical verification of general-purpose programs, rather than only static circuits.

## Related resources

- [[PHGR13-Pinocchio|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] (paper, 2013)
- [[GGPR12-QSP-SNARK|Quadratic Span Programs and Succinct NIZKs without PCPs (GGPR 2013)]] (paper, 2012)
- [[BCTV13-vonNeumann|Succinct Non-Interactive Zero Knowledge for a von Neumann Architecture (Ben-Sasson, Chiesa, Tromer, Virza 2013)]] (paper, 2013)
