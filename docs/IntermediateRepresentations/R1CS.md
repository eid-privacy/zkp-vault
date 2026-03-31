---
type: intermediate_representation
tags:
  - zkp
  - circuit
  - snark
  - arithmetization
  - mathematics
---

[Home](../README.md) > [Intermediate Representations](README.md) > R1CS

# R1CS — Rank-1 Constraint System

## Description
The standard arithmetization for pairing-based SNARKs. A set of rank-1 quadratic constraints of the form (A·z) ∘ (B·z) = C·z over a prime field, where z is the witness vector. Equivalent to expressing a computation as a system of bilinear equations. The circuit compiler produces R1CS; the SNARK prover works over R1CS.

## Used by Proof Systems
[[Groth16]], [[Pinocchio]], [[QSP-GGPR13]], [[Spartan]], [[Bulletproofs]], [[Ligero]], [[Hyrax]]

## Supported by Tools
[[Circom2]], [[gnark]], [[Docknetwork]]

## Resources
- Spec:
- Explainer: [[R1CS-Docs]]