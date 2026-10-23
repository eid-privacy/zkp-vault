---
type: resource
subtype: paper
cite_as: STW23-CCS
year: 2023
authors:
  - Srinath Setty
  - Justin Thaler
  - Riad Wahby
url: "https://eprint.iacr.org/2023/552"
tags:
  - arithmetization
  - snark
  - iop
related:
  - Set19-Spartan
  - CBBZ23-HyperPlonk
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > STW23-CCS

# Customizable Constraint Systems for Succinct Arguments (Setty, Thaler, Wahby 2023)

## Summary
Defines Customizable Constraint Systems (CCS), a generalization of R1CS that also captures Plonkish and AIR without overhead, and gives SuperSpartan, a polynomial-IOP for CCS whose prover cost does not grow with the degree of the custom gates beyond the work to evaluate them. CCS lets one front-end target several back-ends and is the constraint format used by HyperNova-style folding schemes; relevant when choosing a circuit representation for credential-verification circuits.

## Related resources

- [[CBBZ23-HyperPlonk|HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates (Chen et al. 2023)]] (paper, 2023)
- [[Set19-Spartan|Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup (Setty 2020)]] (paper, 2019)
