---
type: intermediate_representation
tags:
  - zkp
  - circuit
  - noir
---

[Home](../README.md) > [Intermediate Representations](README.md) > ACIR

# ACIR — Abstract Circuit Intermediate Representation

## Description
The intermediate representation used by [[Noir]]. ACIR is a backend-agnostic circuit representation that sits between Noir's frontend (Rust-like language) and the backend prover (e.g., [[Barretenberg]]). It supports both arithmetic constraints and "blackbox" functions (SHA-256, ECDSA, etc.) that are handled natively by the backend. This separation lets Noir target multiple proving backends.

## Used by Proof Systems
[[UltraHonk]] (via [[Barretenberg]])

## Supported by Tools
[[Noir]], [[Barretenberg]]

## Resources
- Spec: [[noir-lang-noir]]
- Explainer:
