---
type: theoretical_model
year: 1991
authors:
  - László Babai
  - Lance Fortnow
  - Leonid Levin
  - Mario Szegedy
paper: "Checking Computations in Polylogarithmic Time"
doi: 10.1145/103418.103428
tags:
  - zkp
  - theory
  - iop
  - preprocessing
---

[Home](../README.md) > [Theoretical Models](README.md) > Holography-Preprocessing

# Holography and Preprocessing SNARKs

## Description
A verifier that must read the statement, here the circuit C, cannot run faster than |C|. For a non-uniform circuit, verification is therefore at least linear in the circuit size, however short the proof is. **Holographic proofs** (Babai–Fortnow–Levin–Szegedy 1991) remove this barrier by giving the verifier *oracle access to an encoding* of the statement instead of the statement itself.

**Holographic IOP.**
- An **indexer** I is a deterministic, public algorithm. It runs once per circuit and outputs index oracles, i.e. encodings of the circuit. In Marlin/Fractal these are low-degree extensions of the non-zero entries of the R1CS matrices A, B, C, stored as `row`, `col`, `val` polynomials.
- Prover and verifier then run an IOP in which the verifier *queries* the index oracles instead of reading C. Verification costs only polylog(|C|) + O(|x|).

**From holography to preprocessing.** Compiling a holographic IOP with a commitment scheme gives a **preprocessing SNARK**:

| Object | Contents | Size |
|---|---|---|
| Proving key pk | the index polynomials/oracles themselves (+ SRS or hash parameters) | O(\|C\|) |
| Verifying key vk | commitments to the index oracles | O(1) or O(λ) |
| Proof | evaluations of committed oracles + opening proofs | succinct |

The preprocessing is deterministic and public, so anyone can recompute vk from C and check it. No trust is involved beyond whatever the commitment scheme needs.

## Setup flavours
- **Circuit-specific trusted setup:** [[Groth16]], [[Pinocchio]]. The key generation does the preprocessing, but it also needs secret randomness (toxic waste).
- **Universal setup + deterministic preprocessing:** [[PLONK]] (selector and permutation commitments in vk) and Marlin. One SRS serves all circuits up to a size bound, and each circuit is indexed once.
- **Transparent preprocessing:** Fractal (hash-based). [[Spartan]] obtains sublinear verification with its "computation commitment" to the sparse R1CS matrices, using the SPARK sparse polynomial commitment.
- **Uniform computations need no holography:** for machine computations / [[AIR]], the constraint description has constant size, so the verifier reads it directly. This is why [[zk-STARKs]] can verify in polylog time without a preprocessing phase.

## Significance
Holography explains why practical SNARKs have keys at all: vk is the short commitment to the circuit that the verifier needs in order to be sublinear. Commitments to the index are also what make recursion possible, because a recursive verifier circuit only needs the small vk.

## Built upon by
[[PLONK]], [[Spartan]], [[Groth16]], [[IOP]]

## Resources
- Paper: [[GWC19-PLONK]]
- Paper: [[Set19-Spartan]]
- Code: [[scipr-lab-libiop]] (includes Fractal)
- Book: [[Thaler-Proofs-Arguments-ZK]]
- Course: [[Chiesa-Foundations-Probabilistic-Proofs]]
