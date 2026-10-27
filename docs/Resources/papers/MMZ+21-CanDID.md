---
type: resource
subtype: paper
cite_as: MMZ+21-CanDID
year: 2021
authors:
  - Deepak Maram
  - Harjasleen Malvai
  - Fan Zhang
  - Nerla Jean-Louis
  - Alexander Frolov
  - Tyler Kell
  - Tyrone Lobban
  - Christine Moy
  - Ari Juels
  - Andrew Miller
url: "https://eprint.iacr.org/2020/934"
tags:
  - eid
  - did
  - anonymous-credentials
  - mpc
  - applications
doi: "10.1109/sp40001.2021.00038"
citations: 166
citations_updated: 2026-10-27
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > MMZ+21-CanDID

# CanDID: Can-Do Decentralized Identity with Legacy Compatibility, Sybil-Resistance, and Accountability (Maram et al. 2021)

## Summary
Decentralized identity system (IEEE S&P 2021, doi:10.1109/SP40001.2021.00038) that bootstraps privacy-preserving credentials from existing web services without their cooperation, by proving facts about TLS sessions with DECO-style oracles. A committee of nodes uses MPC to enforce Sybil resistance (one credential per real-world identity, deduplicated on a unique identifier without revealing it) and to support accountability: key recovery for users and court-ordered revocation or de-anonymization under a threshold. Relevant to e-ID as an alternative to issuer-centric designs and for the trade-off between unlinkable presentations and Sybil resistance / accountability (see [[Pseudonyms-in-eID]]).
