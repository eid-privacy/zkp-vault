---
type: theoretical_model
tags:
  - zkp
  - theory
  - complexity-theory
---

[Home](../README.md) > [Theoretical Models](README.md) > Complexity-Classes-Map

# Complexity Classes Map

## Description
This note is a reference map of the complexity classes that appear in the theory of probabilistic proofs, and of where the different proof models sit among them.

| Class | Definition (informal) |
|---|---|
| **P** | decidable in deterministic polynomial time |
| **NP** | membership has a polynomial-size certificate checkable in polynomial time (a "static proof") |
| **coNP** | complements of NP languages: *non*-membership has short certificates |
| **BPP** | decidable in randomized polynomial time with bounded two-sided error |
| **MA** | Merlin sends one message (a proof) and Arthur verifies it with randomness: NP + randomized verifier |
| **AM** | Arthur sends public coins, then Merlin answers (constant rounds, public coin) |
| **IP** | polynomial-round interactive proofs with private coins ([[Interactive-Proof-Model]]) |
| **PSPACE** | decidable in polynomial space; TQBF is complete |
| **EXP** | decidable in time 2^poly(n) |
| **NEXP** | nondeterministic exponential time; succinct/oracle versions of NP-complete problems (e.g. oracle-3SAT) are complete |
| **MIP** | interactive proofs with several non-communicating provers ([[BGKW88-MIP]]) |
| **PCP[r, q]** | proofs checked with r random bits and q queries ([[PCP]]) |

**Inclusions.**

```
P ⊆ NP ⊆ MA ⊆ AM ⊆ IP = PSPACE ⊆ EXP ⊆ NEXP = MIP = PCP[poly, poly]
P ⊆ coNP ⊆ IP           P ⊆ BPP ⊆ MA
NP = PCP[O(log n), O(1)]                (PCP theorem)
AM[k] = AM[2] for constant k            (Babai–Moran)
IP[k] ⊆ AM[k+2]                          (Goldwasser–Sipser)
```

The time hierarchy theorems give P ≠ EXP and NP ≠ NEXP. Hence at least one of P ⊊ PSPACE or PSPACE ⊊ EXP is strict, but it is not known which.

## Significance
- **What each proof model buys:** static proofs give NP; adding randomness gives MA; adding interaction gives IP = PSPACE ([[IP-PSPACE]]); adding a second prover gives MIP = NEXP (Babai–Fortnow–Lund 1991); the PCP oracle model also gives NEXP.
- **MIP and ZK:** Ben-Or–Goldwasser–Kilian–Wigderson (1988) introduced MIPs and showed that every NP language has a *perfect* ZK two-prover proof without cryptographic assumptions. A single-prover proof needs one-way functions for ZK (GMW/BGGHKMR: everything provable in IP is provable in computational ZK).
- **Limits of statistical ZK:** SZK ⊆ AM ∩ coAM. NP-complete languages therefore have no statistical ZK proofs unless the polynomial hierarchy collapses (see [[Limits-of-Probabilistic-Proofs]]).
- **Beyond:** with entangled provers, MIP* = RE (Ji–Natarajan–Vidick–Wright–Yuen 2020).
- **Cryptographic assumptions:** succinct *arguments* for NP need computational assumptions, e.g. collision-resistant hashing (see [[Kilian-Merkle]]). Which of Impagliazzo's "worlds" we live in decides which primitives exist.

## Built upon by
[[IP-PSPACE]], [[PCP]], [[IOP]], [[Limits-of-Probabilistic-Proofs]]

## Resources
- Paper: [[GMR85-ZK-Complexity]]
- Paper: [[BGKW88-MIP]]
- Paper: [[LFKN92-Sumcheck]]
- Blog: [[Quanta-Which-Computational-Universe]]
- Book: [[Thaler-Proofs-Arguments-ZK]]
- Course: [[Chiesa-Foundations-Probabilistic-Proofs]]
- Course: [[MIT-6-5630-Advanced-Topics-Cryptography]]
