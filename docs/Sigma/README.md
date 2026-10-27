[Home](../README.md) > Sigma Proofs

# Sigma Proofs

Proofs expressed directly as algebraic relations over a group: commitment schemes, Sigma protocols and their composition. This is the proof family behind BBS/CL/PS anonymous credentials. Commit-and-prove constructions bridge Sigma proofs and circuit-based proofs.

## Contents

| Note | Description |
|------|-------------|
| [Pedersen Commitments](./Pedersen-Commitments.md) | Hiding and binding commitment scheme based on discrete log (1991) |
| [Camenisch-Michels Safe Primes](./Camenisch-Michels-Safe-Primes.md) | Efficient proofs of knowledge over RSA-group elements (1999) |
| [Proof Systems for DL](./Proof-Systems-for-DL.md) | Camenisch/Stadler framework for discrete-log-based proofs (1997) |
| [Sigma Protocols (Damgard)](./Sigma-Protocols-Damgard.md) | Formal treatment of 3-move honest-verifier ZK proofs (2010) |
| [Sigma Protocols (Proposal)](./Sigma-Protocols-Proposal.md) | Krenn et al. compositional sigma-protocol proposal (2021) |
| [ZKAttest](./ZKAttest.md) | ZK attestation using ECDSA / secp256k1 (2022) |
| [LegoGroth16](./LegoGroth16.md) | Commit-and-prove Groth16 (LegoSNARK): bridges committed values between Sigma proofs and circuits |
| [Docknetwork](./Docknetwork.md) | Rust crypto library; includes BBS+ signatures and ZK credential primitives |

## Commit-and-prove: bridging Sigma proofs and circuits
A commit-and-prove construction lets a Sigma proof and a circuit proof share a witness through a commitment, so each part is proven with the system that suits it ([[ZK-Proof-Taxonomy]]). Examples: [[LegoGroth16]] ([[CFQW19-LegoSNARK]]), proving Sigma statements inside circuits cheaply ([[KMN23-Sigmabus]]), moving expensive operations out of the circuit ([[OKMZ25-Beyond-Circuit]]), and linking a BBS credential to an ECDSA device signature ([[Holder-Binding]]). The IRTF draft [[IRTF-CFRG-Sigma-Protocols]] standardises the Sigma-protocol layer.
