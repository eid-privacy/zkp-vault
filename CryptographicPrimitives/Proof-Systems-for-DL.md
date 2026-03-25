---
type: cryptographic_primitive
year: 1997
authors:
  - Jan Camenisch
  - Markus Stadler
tags:
  - zkp
  - sigma
  - discrete-log
---

# Proof Systems for General Statements about Discrete Logarithms

Paper:: Proof Systems for General Statements about Discrete Logarithms
DOI:: 10.3929/ETHZ-A-006651937

## Description
Establishes a general framework and notation for constructing zero-knowledge proofs for arbitrary statements about discrete logarithms via Sigma-protocol composition. Enables proving relations among discrete logarithms such as equality of exponents across groups.

## Properties
- Completeness: Yes
- Soundness: Computational (under DL assumption)
- Zero-knowledge: HVZK; made non-interactive via Fiat-Shamir

## Based on
[[Sigma-Protocols-Damgard]], [[Pedersen-Commitments]]

## Used by
[[Docknetwork]], [[ZKAttest]]

## Resources
- Paper: https://crypto.ethz.ch/publications/files/CamSta97b.pdf
- Explainer:
