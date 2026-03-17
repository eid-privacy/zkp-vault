---
type: frameworks
status: production
tags:
  - zkp
  - frameworks
  - implementations
---

# ZKP Frameworks

This section covers different Zero-Knowledge Proof systems and frameworks, including their characteristics, trade-offs, and implementation details.

## Overview

Various ZKP frameworks have been developed, each with different performance characteristics, security assumptions, and use cases. These frameworks provide developers with tools to implement ZKP applications without deep cryptographic knowledge.

## Categories

### Polynomial IOP-based
- PLONK
- Groth16
- Marlin
- Sonic

### Lookup-based
- Cairo
- Noir
- Circom

### Transparent Setup
- FRI
- STARKs
- Bulletproofs

### Trusted Setup
- Groth16
- Pinocchio
- Libsnark

## Comparison Criteria

- **Proof Size**: How large are the generated proofs?
- **Prover Time**: How long does it take to generate a proof?
- **Verifier Time**: How long does it take to verify a proof?
- **Setup Type**: Trusted setup, universal setup, or transparent?
- **Security Assumptions**: What cryptographic assumptions are made?

## Implementation Considerations

- Language support
- Developer tooling
- Community support
- Performance optimization
- Security audits
