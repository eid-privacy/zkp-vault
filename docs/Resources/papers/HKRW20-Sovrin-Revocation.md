---
type: resource
subtype: paper
cite_as: HKRW20-Sovrin-Revocation
year: 2020
authors:
  - Lukas Helminger
  - Daniel Kales
  - Sebastian Ramacher
  - Roman Walch
url: "https://eprint.iacr.org/2020/724"
tags:
  - accumulators
  - revocation
  - mpc
related:
  - JLM22-ALLOSAUR
  - BBC24-Accumulators
doi: "10.1007/978-3-030-75539-3_22"
citations: 9
citations_updated: 2026-10-27
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > HKRW20-Sovrin-Revocation

# Multi-Party Revocation in Sovrin: Performance through Distributed Trust (Helminger, Kales, Ramacher, Walch 2020)

## Summary
Analyzes the pairing-based accumulator revocation used in Sovrin/Hyperledger Indy and shows that its witness updates are a performance bottleneck (CT-RSA 2021). Proposes to keep the accumulator trapdoor distributed among several parties via MPC, allowing much faster witness updates and private setup without a single trusted party. Relevant to e-ID revocation for large credential populations.

## Related resources

- [[JLM22-ALLOSAUR|ALLOSAUR: Accumulator with Low-Latency Oblivious Sublinear Anonymous credential Updates with Revocations (Jaques, Lodder, Montgomery 2022)]] (paper, 2022)
- [[BBC24-Accumulators|Cryptographic Accumulators: New Definitions, Enhanced Security, and Delegatable Proofs (Barthoulot, Blazy, Canard 2024)]] (paper, 2024)
- [[Col24-Revocation|Scalable and Privacy-Preserving Revocation of Verifiable Credentials (Colombo 2024)]] (paper, 2024)
