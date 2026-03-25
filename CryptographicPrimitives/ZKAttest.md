---
type: cryptographic_primitive
year: 2022
authors:
  - Armando Faz-Hernández
  - Watson Ladd
  - Deepak Maram
tags:
  - zkp
  - sigma
  - ecdsa
  - attestation
---

# ZKAttest

Paper:: ZKAttest: Ring and Group Signatures for Existing ECDSA Keys
DOI:: 10.1007/978-3-030-99277-4_4

## Description
Enables ring and group signatures for existing ECDSA keys using zero-knowledge proofs. A party can prove membership in a group or ring without revealing which key they hold, using Pedersen commitments combined with SNARKs.

## Properties
- Completeness: Yes
- Soundness: Computational
- Zero-knowledge: Yes (which key is used is hidden)

## Based on
[[Pedersen-Commitments]], [[Sigma-Protocols-Damgard]]

## Used by
[[Docknetwork]]

## Resources
- Paper: https://link.springer.com/chapter/10.1007/978-3-030-99277-4_4
- Explainer:
