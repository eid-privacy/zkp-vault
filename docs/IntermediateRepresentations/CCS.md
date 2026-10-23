---
type: intermediate_representation
tags:
  - zkp
  - circuit
  - arithmetization
---

[Home](../README.md) > [Intermediate Representations](README.md) > CCS

# CCS — Customizable Constraint Systems

## Description
CCS (Setty, Thaler, Wahby 2023) is a constraint format that generalises [[R1CS]] and also captures [[PLONKish]] and [[AIR]] without overhead. A front-end can emit one format and target several back-ends.

**Definition.** A CCS structure consists of sparse matrices M_1, …, M_t ∈ 𝔽^{m×n}, q multisets S_1, …, S_q ⊆ {1, …, t} and constants c_1, …, c_q. With public input x and witness w, set z = (w, 1, x). The instance is satisfied iff

```
Σ_{i=1}^{q}  c_i · ∘_{j ∈ S_i} (M_j · z)  =  0      (∘ = Hadamard / entry-wise product)
```

The degree of the system is d = max |S_i|. Each of the m rows is one constraint, which is a degree-d polynomial in linear combinations of z.

**Special cases.**
- **R1CS**: t = 3, q = 2, S_1 = {1, 2}, S_2 = {3}, c_1 = 1, c_2 = −1, which gives (A·z) ∘ (B·z) − C·z = 0.
- **Plonkish**: each monomial of the gate polynomial becomes one term. Matrices pick out the wire values a gate uses, so copy constraints are encoded in the matrices rather than in a separate permutation argument. Selector values can be folded into the matrices or the constants.
- **AIR**: matrices select the "current row" and "next row" cells of the execution trace, and each transition constraint becomes a row of the CCS.

**CCS+** adds lookup constraints for formats that rely on lookup tables.

## Proving CCS
- **SuperSpartan** generalises [[Spartan]]'s sumcheck-based polynomial IOP to CCS. Beyond evaluating the constraints, the prover does not pay for the degree of custom gates, and it commits only to the witness. With a multilinear polynomial commitment it gives SNARKs for R1CS, Plonkish and AIR from a single protocol.
- **HyperNova** and later folding/accumulation schemes use CCS as the relation that is folded, so high-degree custom gates are supported in incremental verifiable computation.
- Multilinear PIOPs such as [[HyperPlonk]] work in a similar sumcheck-based setting, but they keep Plonkish as their native format.

## Relation to other IRs
CCS is closer to a "normal form" than to a programming target. Circuit DSL intermediate representations such as [[ACIR]] (where `AssertZero` expressions are quadratic) can be lowered to R1CS and therefore to CCS. A CCS back-end can also absorb high-degree gates directly instead of splitting them into rank-1 rows.

## Used by Proof Systems
[[Spartan]] (SuperSpartan), HyperNova-style folding schemes

## Supported by Tools
Research implementations only (SuperSpartan, HyperNova prototypes). Mainstream DSLs emit R1CS or Plonkish, which convert to CCS mechanically (see [[Spartan-Framework]] for the R1CS-based Spartan code).

## Resources
- Paper: [[STW23-CCS]]
- Paper: [[Set19-Spartan]]
- Paper: [[CBBZ23-HyperPlonk]]
- Book: [[Thaler-Proofs-Arguments-ZK]]
