[Home](../README.md) > Theoretical Models

# Theoretical Models

Foundational computational models and taxonomies that underpin the theory of Zero-Knowledge Proofs.

## Contents

| Note | Description |
|------|-------------|
| [ZK Families Overview](./ZK-Families-Overview.md) | High-level taxonomy of ZKP families: SNARKs, STARKs, IOP-based, MPC-in-the-head, etc. |
| [ZK Proof Taxonomy](./ZK-Proof-Taxonomy.md) | Taxonomy by abstraction level: native sigma → composed (CP-SNARKs) → circuit-based → ZK VMs |
| [Interactive Proof Model](./Interactive-Proof-Model.md) | The IP / Arthur-Merlin model from Goldwasser-Micali-Rackoff (1985) — defines completeness, soundness, and zero-knowledge |
| [Schwartz-Zippel Lemma](./Schwartz-Zippel.md) | The core polynomial identity test lemma underpinning soundness in sumcheck, PLONK, FRI, and most polynomial IOPs |
| [Complexity Classes Map](./Complexity-Classes-Map.md) | P, NP, BPP, MA, AM, IP, PSPACE, EXP, NEXP, MIP, PCP — definitions and inclusions |
| [IP = PSPACE](./IP-PSPACE.md) | Arithmetization, sumcheck (LFKN) and Shamir's TQBF protocol with degree reduction |
| [PCP](./PCP.md) | Probabilistically checkable proofs: parameters, PCP theorem, composition, robust PCPs, PCPs of proximity |
| [Linearity and Low-Degree Testing](./Linearity-and-Low-Degree-Testing.md) | BLR test, local correction, Hadamard/linear PCPs, Reed–Muller and Reed–Solomon proximity |
| [IOP](./IOP.md) | Interactive oracle proofs (IP + PCP): linear-length IOP for R1CS, univariate sumcheck, PIOPs, BCS compilation |
| [Holography and Preprocessing](./Holography-Preprocessing.md) | Holographic proofs and indexers → proving/verifying keys of preprocessing SNARKs |
| [Kilian, Merkle and BCS](./Kilian-Merkle.md) | Merkle commitments, Kilian's succinct argument, Micali's CS proofs and the BCS transform |
| [Limits of Probabilistic Proofs](./Limits-of-Probabilistic-Proofs.md) | Public vs private coins, perfect completeness, parallel repetition, impossibility results, hardness of approximation |
| [MPC-in-the-Head](./MPC-in-the-Head.md) | IKOS07 paradigm: ZK from simulated MPC; ZKBoo/KKW/Picnic and its relation to Ligero |
