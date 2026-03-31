---
type: cryptographic_primitive
year: 1997
authors:
  - Jan Camenisch
  - Markus Stadler
paper: Proof Systems for General Statements about Discrete Logarithms
doi: 10.3929/ETHZ-A-006651937
tags:
  - zkp
  - sigma
  - discrete-log
  - mathematics
---

[Home](../README.md) > [Cryptographic Primitives](README.md) > Proof-Systems-for-DL

# Proof Systems for General Statements about Discrete Logarithms

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
- Paper: [[CS97-DL-Proofs]]
- Explainer:
