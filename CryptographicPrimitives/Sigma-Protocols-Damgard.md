---
type: cryptographic_primitive
year: 2010
authors:
  - Ivan Damgard
tags:
  - zkp
  - sigma
  - foundational
  - mathematics
---

[Home](../README.md) > [Cryptographic Primitives](README.md) > Sigma-Protocols-Damgard

# On Σ-protocols

Paper:: On Σ-protocols
DOI:: N/A

## Description
A Σ-protocol is a three-move interactive proof: commit, challenge, response. Fundamental building blocks for zero-knowledge proofs about discrete logarithms and related algebraic problems. Can be made non-interactive via [[Fiat-Shamir]].

## Properties
- Completeness: Yes
- Soundness: Special soundness (2-extractability of witness)
- Zero-knowledge: Special honest-verifier zero-knowledge (HVZK)

## Based on
Discrete logarithm / algebraic group settings

## Used by
[[Pedersen-Commitments]], [[Proof-Systems-for-DL]], [[ZKAttest]], [[Camenisch-Michels-Safe-Primes]], [[Sigma-Protocols-Proposal]]

## Resources
- Paper: [[Sigma-Protocols-Damgard-Paper]]
- Explainer:
