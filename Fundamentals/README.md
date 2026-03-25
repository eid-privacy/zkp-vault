# Fundamentals

Mathematical and cryptographic foundations required to understand ZKP systems. See [index.md](./index.md) for the full overview.

## Core ZKP Properties

- **Completeness** — an honest prover always convinces an honest verifier
- **Soundness** — a cheating prover cannot convince a verifier of a false statement (except with negligible probability)
- **Zero-Knowledge** — the verifier learns nothing beyond the truth of the statement

## Mathematical Topics

- Elliptic curve cryptography and bilinear pairings
- Polynomial commitments (KZG, IPA, FRI)
- Hash functions and the random oracle model
- Complexity theory: NP, IP, PCP theorem

## Related Concepts

- Interactive proof systems → [TheoreticalModels/](../TheoreticalModels/README.md)
- Commitment schemes → [CryptographicPrimitives/](../CryptographicPrimitives/README.md)
- Circuit representations → [IntermediateRepresentations/](../IntermediateRepresentations/README.md)

> Detailed foundational notes are distributed across [TheoreticalModels/](../TheoreticalModels/README.md) and [CryptographicPrimitives/](../CryptographicPrimitives/README.md).
