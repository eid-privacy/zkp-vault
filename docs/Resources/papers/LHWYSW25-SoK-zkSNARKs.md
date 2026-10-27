---
type: resource
subtype: paper
cite_as: LHWYSW25-SoK-zkSNARKs
year: 2025
authors:
  - Junkai Liang
  - Daqi Hu
  - Pengfei Wu
  - Yunbo Yang
  - Qingni Shen
  - Zhonghai Wu
url: "https://eprint.iacr.org/2025/172"
tags:
  - snark
  - overview
  - implementations
related:
  - SAKK25-ZKP-Frameworks-Survey
  - CETWJL24-SoK-SNARK-Vulns
  - BL26-SoK-AnonCreds
doi: "10.48550/arxiv.2502.02387"
citations: 2
citations_updated: 2026-10-27
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > LHWYSW25-SoK-zkSNARKs

# SoK: Understanding zk-SNARKs: The Gap Between Research and Practice (Liang et al. 2025)

## Summary
Systematizes zk-SNARKs from theory to practice: a "master recipe" for turning a program into a zk-SNARK (front end, arithmetization, information-theoretic protocol, commitment compiler), a classification of existing schemes by key technique, and an evaluation of open-source implementations and toolchains. Its benchmarks illustrate how much circuit and backend choices matter, e.g. a SHA-256 preimage circuit spans roughly 27k to 600k constraints and 0.28 s to 556 s prover time. Cited by [[BL26-SoK-AnonCreds]] as the reference overview of zk-SNARK trade-offs.

## Related resources

- [[BL26-SoK-AnonCreds|SoK: Anonymous Credentials for Digital Identity Wallets (Bormann, Lehmann 2026)]] (paper, 2026)
- [[CETWJL24-SoK-SNARK-Vulns|SoK: What Don't We Know? Understanding Security Vulnerabilities in SNARKs (Chaliasos, Ernstberger, Theodore, Wong, Jahanara, Livshits 2024)]] (paper, 2024)
- [[SAKK25-ZKP-Frameworks-Survey|Zero-Knowledge Proof Frameworks: A Systematic Survey (Sheybani, Ahmed, Kinsy, Koushanfar 2025)]] (paper, 2025)
