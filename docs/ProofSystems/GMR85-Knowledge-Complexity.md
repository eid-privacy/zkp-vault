---
type: proof_system
status: research
year: 1985
authors:
  - Shafi Goldwasser
  - Silvio Micali
  - Charles Rackoff
paper: The knowledge complexity of interactive proof-systems
doi: 10.1145/22145.22178
tags:
  - zkp
  - interactive-proof
  - foundational
---

[Home](../README.md) > [Proof Systems](README.md) > GMR85-Knowledge-Complexity

# The Knowledge Complexity of Interactive Proof Systems

## Description
The seminal paper that laid the theoretical bedrock for the entire ZKP field. It redefined a "proof" as an interactive game and formally defined knowledge complexity and the three pillars of ZKPs: completeness, soundness, and zero-knowledge. It proved that proofs could be both interactive and probabilistic — a paradigm shift in computer science.

## Technical Characteristics

**Complexity:**
- Prover: Polynomial
- Verifier: Polynomial
- Proof Size: Interactive (multiple rounds)
- Setup: transparent

**Security:**
- Assumption: information-theoretic (for some instances)
- Post-quantum: yes (information-theoretic variants)
- Basis: Interactive proof model, computational complexity

## Dependencies
Based on: Complexity theory, interactive computation
Circuit representation:

## Applications
Used by: All modern ZKP systems — [[Fiat-Shamir]], [[NIZK-Blum]], [[Sigma-Protocols-Damgard]]

## Resources
- Paper: [[GMR85-ZK-Complexity]]
- Code:
- Explainer:
