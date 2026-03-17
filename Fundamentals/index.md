---
type: fundamentals
status: production
tags:
  - zkp
  - cryptography
  - mathematics
---

# ZKP Fundamentals

This section covers the theoretical background and mathematical foundations of Zero-Knowledge Proofs, including cryptographic primitives, complexity theory, and mathematical concepts essential for understanding ZKP systems.

## Overview

Zero-Knowledge Proofs (ZKPs) are cryptographic protocols that allow one party (the prover) to convince another party (the verifier) that a statement is true without revealing any information beyond the validity of the statement itself.

## Core Concepts

- **Zero-Knowledge**: The verifier learns nothing beyond the fact that the statement is true
- **Completeness**: If the statement is true, an honest prover can convince an honest verifier
- **Soundness**: If the statement is false, no cheating prover can convince an honest verifier (except with negligible probability)

## Mathematical Foundations

- Elliptic Curve Cryptography
- Polynomial Commitments
- Bilinear Pairings
- Hash Functions
- Complexity Theory (NP, IP, PCP)

## Key Properties

- **Succinctness**: Proofs are short and verification is fast
- **Non-interactivity**: Proofs can be verified without interaction
- **Knowledge Soundness**: The prover must know a witness

## Related Areas

- Interactive Proof Systems
- Probabilistically Checkable Proofs (PCP)
- Commitment Schemes
- Accumulators
