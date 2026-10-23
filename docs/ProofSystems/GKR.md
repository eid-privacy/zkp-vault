---
type: proof_system
status: research
year: 2008
abbreviation: GKR08
authors:
  - Shafi Goldwasser
  - Yael Tauman Kalai
  - Guy N. Rothblum
predecessors: []
paper: "Delegating Computation: Interactive Proofs for Muggles"
doi: 10.1145/1374376.1374396
tags:
  - zkp
  - interactive-proof
  - sumcheck
  - information-theoretic
  - transparent
---

[Home](../README.md) > [Proof Systems](README.md) > GKR

# GKR Protocol

## Description
The GKR protocol is a **doubly-efficient interactive proof** for evaluating a layered arithmetic circuit: the honest prover runs in time close to the circuit size S, and the verifier runs in time roughly linear in the input/output size plus polylog(S) per layer — much less than re-executing the circuit. Unlike the [[IP-PSPACE|IP = PSPACE]] protocol, the prover is efficient, which made GKR the starting point for "verifiable computation" and later for sumcheck-based SNARKs ([[Hyrax]], [[Libra]], Virgo, [[Longfellow]], Expander).

**Layered circuits.** The circuit has depth d; layer 0 is the output, layer d the input, and every gate at layer i is an addition or multiplication gate whose two inputs come from layer i+1. Write W_i : {0,1}^{s_i} → 𝔽 for the gate values of layer i, and add_i, mult_i : {0,1}^{s_i + 2s_{i+1}} → {0,1} for the wiring predicates (1 iff gate a at layer i adds/multiplies gates b, c of layer i+1).

**Multilinear extensions.** Each function on the Boolean hypercube has a unique multilinear extension (MLE) W̃_i over 𝔽^{s_i}. The key identity expresses one layer through the next:

```
W̃_i(z) = Σ_{b,c ∈ {0,1}^{s_{i+1}}}  ãdd_i(z,b,c)·(W̃_{i+1}(b) + W̃_{i+1}(c))
                                  + m̃ult_i(z,b,c)·W̃_{i+1}(b)·W̃_{i+1}(c)
```

**Protocol.**
1. The prover sends the claimed outputs; the verifier picks a random r_0 and computes the claim W̃_0(r_0) itself.
2. For each layer i = 0 … d−1, the parties run the [[SumcheckProofs|sumcheck protocol]] on the identity above (2·s_{i+1} variables, degree 2 per variable). It reduces the claim about W̃_i(r_i) to claims about W̃_{i+1}(b*) and W̃_{i+1}(c*) at random points.
3. The two claims are merged into one, either by restricting W̃_{i+1} to the line through b* and c* or by a random linear combination of the two claims.
4. At the input layer the verifier evaluates the input MLE W̃_d(r_d) itself in O(n) time.

The verifier must also evaluate ãdd_i and m̃ult_i at a random point. This is fast (polylog S) for **log-space uniform** circuits, i.e. circuits whose wiring has a succinct description. For arbitrary circuits this cost is moved into a preprocessing step or into a commitment to the wiring polynomials.

## Technical Characteristics

**Complexity:**
- Prover: originally poly(S); O(S log S) (Cormode–Mitzenmacher–Thaler 2012); O(S) for arbitrary layered circuits (Libra's two-phase sumcheck with bookkeeping tables)
- Verifier: O(n + d·log S) field operations for log-space uniform circuits
- Proof Size: O(d·log S) field elements, O(d·log S) rounds
- Setup: transparent (none, as an interactive proof)

**Security:**
- Assumption: information-theoretic (unconditional) soundness
- Soundness error: O(d·log S / |𝔽|) by [[Schwartz-Zippel]] (one bound per sumcheck round)
- Post-quantum: yes (as an IP); after compilation it depends on the commitment scheme
- Basis: sumcheck protocol, multilinear extensions

**From IP to SNARK.** GKR alone is not zero-knowledge and not succinct in the witness: the verifier needs the whole input. Practical systems therefore (a) commit to the witness part of the input layer with a multilinear polynomial commitment, so the final check W̃_d(r_d) becomes an opening proof, (b) add zero knowledge, either by masking the sumcheck (Libra) or by committing to every sumcheck message (Hyrax), and (c) apply [[Fiat-Shamir]]. Since the circuit must be layered, general circuits are first "layered" by adding relay gates. Compilers such as Polyhedra's Expander Compiler Collection translate R1CS-style circuits into layered circuits.

## Dependencies
Based on: [[SumcheckProofs]], [[Interactive-Proof-Model]], [[Schwartz-Zippel]]
Circuit representation: layered arithmetic circuits (fan-in 2)

## Applications
Used by: [[Libra]] (white-box ZK variant with linear-time prover), [[Hyrax]], [[Longfellow]] (sumcheck/GKR verifier checks proven inside [[Ligero]]), Polyhedra Expander

## Resources
- Paper: [[GKR08-Muggles]]
- Paper: [[LFKN92-Sumcheck]]
- Paper: [[XZZPS19-Libra]]
- Paper: [[WTSTW17-Hyrax]]
- Blog: [[Polyhedra-Expander-Compiler-Collection]]
- Book: [[Thaler-Proofs-Arguments-ZK]] (Chapter 4 covers GKR, MLEs and fast prover algorithms)
- Course: [[Chiesa-Foundations-Probabilistic-Proofs]]
