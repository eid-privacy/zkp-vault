---
type: resource
subtype: paper
cite_as: BCTV13-vonNeumann
year: 2013
authors:
  - Eli Ben-Sasson
  - Alessandro Chiesa
  - Eran Tromer
  - Madars Virza
url: "https://eprint.iacr.org/2013/879"
tags:
  - snark
  - zkvm
  - trusted-setup
related:
  - BCGTV13-SNARKs-for-C
  - PHGR13-Pinocchio
  - GGPR12-QSP-SNARK
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > BCTV13-vonNeumann

# Succinct Non-Interactive Zero Knowledge for a von Neumann Architecture (Ben-Sasson, Chiesa, Tromer, Virza 2013)

## Summary
Builds a zkSNARK for proving correct execution of programs on a simple von Neumann architecture (TinyRAM) using a universal circuit, so one preprocessing serves all programs up to a size bound (USENIX Security 2014). Introduces the efficient routing-network based universal circuit and the libsnark implementation. An early ancestor of today's zkVMs.

## Related resources

- [[PHGR13-Pinocchio|Pinocchio: Nearly Practical Verifiable Computation (Parno et al. 2013)]] (paper, 2013)
- [[GGPR12-QSP-SNARK|Quadratic Span Programs and Succinct NIZKs without PCPs (GGPR 2013)]] (paper, 2012)
- [[BCGTV13-SNARKs-for-C|SNARKs for C: Verifying Program Executions Succinctly and in Zero Knowledge (Ben-Sasson et al. 2013)]] (paper, 2013)
