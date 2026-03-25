---
type: cryptographic_primitive
year: 1991
authors:
  - Torben Pryds Pedersen
tags:
  - zkp
  - sigma
  - commitment
  - mathematics
---

# Pedersen Commitments

Paper:: Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing
DOI:: 10.1007/3-540-46766-1_9

## Description
A commitment scheme allowing a party to commit to a value while keeping it hidden, with the ability to reveal it later. Information-theoretically hiding and computationally binding.

## Properties
- Completeness: A party can always open the commitment to the committed value
- Soundness: Computationally binding under the discrete logarithm assumption
- Zero-knowledge: Information-theoretically hiding

## Based on
Discrete Logarithm assumption over a cyclic group

## Used by
[[Bulletproofs]], [[ZKAttest]], [[Docknetwork]], [[Sigma-Protocols-Damgard]], [[Proof-Systems-for-DL]]

## Resources
- Paper: https://link.springer.com/content/pdf/10.1007/3-540-46766-1_9.pdf
- Explainer:
