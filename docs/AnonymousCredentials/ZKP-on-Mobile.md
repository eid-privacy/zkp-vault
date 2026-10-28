---
type: application
tags:
  - eid
  - zkp
  - hardware
  - implementations
---

[Home](../README.md) > [Anonymous Credentials](README.md) > ZKP-on-Mobile

# ZKP on Mobile

## Description
In e-ID, the prover is the holder's phone. Unlike blockchain applications, which optimise proof size first to save on-chain storage, e-ID work optimises **prover run time first**, because proofs are generated on resource-constrained consumer phones at presentation time; proof size matters second, for transmission ([[GHE25-Taxonomy]]). The eid-privacy target was less than 1 s and less than 1 MB per proof ([[GHE26-MS2]]). Verifier cost matters mainly for server-side deployments.

## Measurements

### Full swiyu SD-JWT age proof (issuer signature + holder binding, without non-revocation)
From [[DHG26-MS4]], circuits `c0200_swiyu_jwt` (Spartan) and `c9200_swiyu_jwt` (UltraHonk) in [[eid-privacy-spartan-backend]]:

| Prover | MacBook Pro M2 Max | Dual Intel i7-7700 | Samsung Galaxy A54 |
|---|---|---|---|
| UltraHonk / Barretenberg | 3.1 s | 8.8 s | 16.1 s |
| Spartan | 3.7 s | 8.3 s | 11.0 s |
| Spartan, pre-computed (total incl. loading) | 1.5 s | 3.0 s | 4.5 s |

Pre-computing the challenge-independent part takes about 5 s on desktop (18 s on the phone) and produces a file of about 31 MB; it is needed once per credential and whenever the revocation list is refreshed (weekly). The pre-computed data contains sensitive holder information and must be stored accordingly. Getting there required compressing a 2 GB serialised structure to 28 MB and skipping self-checks on load ([[DHG26-MS4]]).

### Other systems (as reported)
- [[Longfellow]]: 1.17 s prover / 0.68 s verifier on a Pixel 6 Pro, ~300 kB proof, mdoc ([[eid-privacy-crescent-longfellow]]).
- [[Crescent]]: ~1 s online proof on mobile after a ~20 s pre-computation ([[eid-privacy-crescent-longfellow]]).
- Desktop comparison for a 1920-byte MSO, reproduced in [[DHG26-MS4]] from [[ENRTTX26-OpenAC]]: prove 680 ms (Longfellow), 237 ms (Crescent), 247 / 212 ms (Vega single / multi-circuit), 102 ms (OpenAC), measured on different hardware.
- Building blocks with Noir / UltraHonk and Docknetwork on desktop: see [[Holder-Binding]], [[Predicate-Proofs]], [[Revocation-in-eID]] ([[GHE26-MS2]]).

## Lessons
- **Pre-computation** ("prepare and prove") is the most effective lever: only the part depending on the verifier challenge is computed per presentation ([[Crescent]], Vega, [[ENRTTX26-OpenAC]], [[DHG26-MS4]]).
- **SHA-256 over the credential dominates**; folding and reusing a SHA-256 block circuit (Vega) is the natural next optimisation ([[DHG26-MS4]]).
- **Circuit size thresholds**: Spartan pads to a power of two; the age circuit is just above 2^21 constraints and padded to 2^22, so small savings (lookup-based range checks, multi-scalar multiplication) could give large gains ([[DHG26-MS4]]).
- **CPU architecture**: rankings differ between ARM and x86 (UltraHonk faster on Apple silicon, Spartan on Intel), so benchmark on target phones ([[DHG26-MS4]]).
- **Integration**: Rust provers can be called from Kotlin (and Swift) through UniFFI bindings, as in [[eid-privacy-zkp-android-spartan]].
- **Server-side wallets** are not free either: SICPA's cloud wallet integration took about 30 s for proving and verification with one vCPU and 10 GB RAM ([[DHG26-MS4]]).

Most SNARKs were designed for blockchains and optimise proof size and verifier time; for credentials the prover runs on the phone, so prover time matters most. Recent work reduces it with ECDSA-specific building blocks ([[Longfellow]]) or by splitting proving into an expensive pre-computation and a fast presentation step ([[Crescent]]); these optimisations are new and less reviewed than the underlying proof systems ([[BL26-SoK-AnonCreds]]).

## Related
- [[Holder-Binding]]
- [[Selective-Disclosure]]
- [[Hardware-Security-for-eID]]
- [[Noir]], [[Spartan]], [[Spartan-Framework]], [[Longfellow]], [[Crescent]]

## Resources
- Paper: [[DHG26-MS4]], [[GHE26-MS2]], [[GHE25-Taxonomy]]
- Paper: [[Mom25-GP-ZKP-VCs]] — benchmarks general-purpose ZKP frameworks for the Swiss e-ID
- Paper: [[ENRTTX26-OpenAC]], [[PPZ24-Crescent]], [[FS24-Longfellow]], [[SAKK25-ZKP-Frameworks-Survey]], [[RES24-ZK-Systematic-Review]]
- Code: [[eid-privacy-zkp-android-spartan]], [[eid-privacy-spartan-backend]], [[eid-privacy-zkp-pocs]], [[mombelld-general-purpose-zkps-vcs]], [[microsoft-Spartan2]]
- Blog: [[eid-privacy-comparing-zk-systems]], [[eid-privacy-crescent-longfellow]], [[eid-privacy-poc-report]], [[MSR-Crescent-Library-Blog]], [[Dyne-Longfellow-ZK-Review]]
