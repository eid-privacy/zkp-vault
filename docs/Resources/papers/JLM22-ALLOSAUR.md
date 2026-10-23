---
type: resource
subtype: paper
cite_as: JLM22-ALLOSAUR
year: 2022
authors:
  - Samuel Jaques
  - Michael Lodder
  - Hart Montgomery
url: "https://eprint.iacr.org/2022/1362"
tags:
  - accumulators
  - revocation
  - anonymous-credentials
  - mpc
related:
  - HKRW20-Sovrin-Revocation
  - BBC24-Accumulators
  - Col24-Revocation
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > JLM22-ALLOSAUR

# ALLOSAUR: Accumulator with Low-Latency Oblivious Sublinear Anonymous credential Updates with Revocations (Jaques, Lodder, Montgomery 2022)

## Summary
Proposes ALLOSAUR, a pairing-based accumulator for anonymous credential revocation where witness updates are computed by multiple servers via MPC in time sublinear in the number of revocations, without the servers learning which credential is being updated. Addresses the main practical bottleneck of accumulator-based revocation: keeping holder witnesses up to date. Directly relevant to privacy-preserving e-ID revocation.

## Related resources

- [[BBC24-Accumulators|Cryptographic Accumulators: New Definitions, Enhanced Security, and Delegatable Proofs (Barthoulot, Blazy, Canard 2024)]] (paper, 2024)
- [[HKRW20-Sovrin-Revocation|Multi-Party Revocation in Sovrin: Performance through Distributed Trust (Helminger, Kales, Ramacher, Walch 2020)]] (paper, 2020)
- [[Col24-Revocation|Scalable and Privacy-Preserving Revocation of Verifiable Credentials (Colombo 2024)]] (paper, 2024)
