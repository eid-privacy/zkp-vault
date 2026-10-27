---
type: resource
subtype: paper
cite_as: CPV24-Last-Challenge
year: 2024
authors:
  - Oana Ciobotaru
  - Maxim Peter
  - Vesselin Velichkov
url: "https://eprint.iacr.org/2024/398"
tags:
  - snark
  - non-interactive
related:
  - GWC19-PLONK
  - FS86-Fiat-Shamir
  - CETWJL24-SoK-SNARK-Vulns
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > CPV24-Last-Challenge

# The Last Challenge Attack: Exploiting a Vulnerable Implementation of the Fiat-Shamir Transform in a KZG-based SNARK (Ciobotaru, Peter, Velichkov 2024)

## Summary
Shows how an implementation of a KZG-based PLONK variant that does not bind the last Fiat-Shamir challenge to all previous prover messages lets a malicious prover forge proofs for false statements. A concrete example of "weak Fiat-Shamir" bugs, cited in [[BL26-SoK-AnonCreds]] among the attacks that make implementation correctness essential for general-purpose ZKP credentials.

## Related resources

- [[FS86-Fiat-Shamir|How to Prove Yourself: Practical Solutions to Identification and Signature Problems (Fiat-Shamir)]] (paper, 1986)
- [[GWC19-PLONK|PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge]] (paper, 2019)
- [[CETWJL24-SoK-SNARK-Vulns|SoK: What Don't We Know? Understanding Security Vulnerabilities in SNARKs (Chaliasos, Ernstberger, Theodore, Wong, Jahanara, Livshits 2024)]] (paper, 2024)
