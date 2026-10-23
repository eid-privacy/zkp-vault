---
type: theoretical_model
year: 2007
authors:
  - Yuval Ishai
  - Eyal Kushilevitz
  - Rafail Ostrovsky
  - Amit Sahai
paper: Zero-Knowledge from Secure Multiparty Computation
doi: 10.1145/1250790.1250794
tags:
  - zkp
  - theory
  - mpc
  - transparent
  - post-quantum
---

[Home](../README.md) > [Theoretical Models](README.md) > MPC-in-the-Head

# MPC-in-the-Head (IKOS07)

## Description
**MPC-in-the-head (MPCitH)** builds zero-knowledge proofs from secure multiparty computation (MPC) protocols, with the prover playing all parties itself. To prove knowledge of w such that R(x, w) = 1:

1. The prover secret-shares w into n shares w₁, …, wₙ.
2. "In its head", the prover runs an n-party MPC protocol that computes R(x, w₁ ⊕ … ⊕ wₙ). It records each party's *view*: its input share, its randomness and its received messages.
3. The prover commits to all n views.
4. The verifier asks to open a random subset of t views.
5. The verifier checks that the opened views are consistent with each other (messages sent match messages received) and that the output is 1.

**Security.**
- **Zero knowledge** follows from the *t-privacy* of the MPC: any t views reveal nothing about w.
- **Soundness** follows from *correctness/robustness*: if R(x, w) = 0, some pair of views must be inconsistent, and the verifier catches it with noticeable probability. Repetition reduces the error.

## Instantiations
- **ZKBoo / ZKB++** (3 parties, 2 opened): soundness error 2/3 per repetition, with proofs linear in circuit size.
- **KKW18** (MPC with a preprocessing phase, n parties, n − 1 opened, cut-and-choose on the preprocessing): soundness error about 1/n per repetition, giving much shorter proofs.
- **Picnic** is a post-quantum signature that applies [[Fiat-Shamir]] to ZKB++/KKW. It proves knowledge of a LowMC key k with y = LowMC_k(x), so security rests only on symmetric primitives. Later schemes (Banquet, Limbo, SDitH, MQOM, RYDE, Mirath, …) apply the same paradigm, or the related VOLE-in-the-head technique, to AES or to hard problems from coding theory and multivariate cryptography.

## Relation to Ligero
[[Ligero]] instantiates MPCitH with an *honest-majority* MPC protocol for many parties in the style of Damgård–Ishai ([[DI06-Scalable-MPC]]). It uses packed (Shamir) secret sharing, which is exactly Reed–Solomon encoding:

- the witness is arranged in a matrix, and each row is RS-encoded;
- one "party's view" is a column of the encoded matrix;
- opening t random columns, checked through Merkle paths, plays the role of opening t views.

With a √n × √n matrix the proof size is O(√n). Seen this way, Ligero is equivalently an [[IOP]] with an RS proximity test. It is the commitment layer of [[Ligero-Plus-Plus]] and of [[Longfellow]].

## Significance
- Transparent and plausibly post-quantum. Only hashing / symmetric primitives are needed (commitments via [[Kilian-Merkle|Merkle trees]]).
- The prover is very simple and fast for small-to-medium circuits, but proof size grows with the circuit: linearly for ZKBoo/KKW, as √n for Ligero.
- MPCitH explains the "MPC ↔ ZK" connection behind code-based and VOLE-based proof systems.

## Built upon by
[[Ligero]], [[Ligero-Plus-Plus]], [[Longfellow]]

## Resources
- Paper: [[DI06-Scalable-MPC]]
- Paper: [[AHIV17-Ligero]]
- Paper: [[FS24-Longfellow]]
- Spec: [[IETF-draft-google-cfrg-libzk]]
- Book: [[Thaler-Proofs-Arguments-ZK]]
