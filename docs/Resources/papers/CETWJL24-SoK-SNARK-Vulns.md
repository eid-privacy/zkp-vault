---
type: resource
subtype: paper
cite_as: CETWJL24-SoK-SNARK-Vulns
year: 2024
authors:
  - Stefanos Chaliasos
  - Jens Ernstberger
  - David Theodore
  - David Wong
  - Mohammad Jahanara
  - Benjamin Livshits
url: "https://www.usenix.org/conference/usenixsecurity24/presentation/chaliasos"
tags:
  - snark
  - overview
  - implementations
related:
  - CPV24-Last-Challenge
  - CMSCGD23-ZK-Circuit-Verification
  - ECZJG24-Need-ZKP
  - LHWYSW25-SoK-zkSNARKs
doi: "10.48550/arxiv.2402.15293"
citations: 2
citations_updated: 2026-10-27
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > CETWJL24-SoK-SNARK-Vulns

# SoK: What Don't We Know? Understanding Security Vulnerabilities in SNARKs (Chaliasos, Ernstberger, Theodore, Wong, Jahanara, Livshits 2024)

## Summary
Systematizes 141 real-world vulnerabilities in SNARK implementations and builds a taxonomy by layer (circuit, front end, back end, integration) and root cause. Under-constrained circuits are the most common class, followed by Fiat-Shamir and backend bugs (USENIX Security 2024). Essential reading for anyone deploying circuit-based credential proofs, and cited in [[BL26-SoK-AnonCreds]] as evidence of the security risks of general-purpose ZKPs.

## Related resources

- [[CMSCGD23-ZK-Circuit-Verification|Compositional Formal Verification of Zero-Knowledge Circuits (Coglio, McCarthy, Smith, Chin, Gaddamadugu, Dellepere 2023)]] (paper, 2023)
- [[ECZJG24-Need-ZKP|Do You Need a Zero Knowledge Proof? (Ernstberger, Chaliasos, Zhou, Jovanovic, Gervais 2024)]] (paper, 2024)
- [[BM23-Formalizing-SNARK-Soundness|Formalizing Soundness Proofs of SNARKs (Bailey, Miller 2023)]] (paper, 2023)
- [[LHWYSW25-SoK-zkSNARKs|SoK: Understanding zk-SNARKs: The Gap Between Research and Practice (Liang et al. 2025)]] (paper, 2025)
- [[CPV24-Last-Challenge|The Last Challenge Attack: Exploiting a Vulnerable Implementation of the Fiat-Shamir Transform in a KZG-based SNARK (Ciobotaru, Peter, Velichkov 2024)]] (paper, 2024)
