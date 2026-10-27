---
type: resource
subtype: paper
cite_as: KMN23-Sigmabus
year: 2023
authors:
  - George Kadianakis
  - Mary Maller
  - Andrija Novakovic
url: "https://eprint.iacr.org/2023/1406"
tags:
  - sigma
  - snark
  - elliptic-curves
  - commit-and-prove
related:
  - OKMZ25-Beyond-Circuit
  - CFQW19-LegoSNARK
  - BL26-SoK-AnonCreds
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > KMN23-Sigmabus

# Sigmabus: Binding Sigmas in Circuits for Fast Curve Operations (Kadianakis, Maller, Novakovic 2023)

## Summary
Moves expensive elliptic-curve scalar multiplications out of the SNARK circuit: a Sigma protocol proves the group operation outside the circuit, and a small in-circuit check binds it to the circuit's witness. This cuts constraint counts for statements that involve curve operations. Cited in [[BL26-SoK-AnonCreds]] as an example of tailoring proof systems by moving costly sub-proofs out of the circuit.

## Related resources

- [[OKMZ25-Beyond-Circuit|Beyond the Circuit: How to Minimize Foreign Arithmetic in ZKP Circuits (Orrù, Kadianakis, Maller, Zaverucha 2025)]] (paper, 2025)
- [[CFQW19-LegoSNARK|LegoSNARK: Modular Design and Composition of Efficient Zero-Knowledge Proofs (Campanelli et al. 2019)]] (paper, 2019)
- [[BL26-SoK-AnonCreds|SoK: Anonymous Credentials for Digital Identity Wallets (Bormann, Lehmann 2026)]] (paper, 2026)
