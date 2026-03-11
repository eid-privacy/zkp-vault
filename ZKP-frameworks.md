# ZKP Frameworks

Wanted attributes:

1. based on

2. easy to create new circuits (do not need a PhD in ZKP)

3. fast (\< 1s) and short (\<1MB) proof generation

4. nice to have: post-quantum secure

5. mobile and web application possible to create

6. maintained with recent commits and community

7. Open source license

8. Security review

9. needed capabilities:

   a. secp256k1 signature verification (for the holder binding)

   b. sha256 (for the signature)

# Known Frameworks

## Docknetwork

[https://github.com/docknetwork/crypto](https://github.com/docknetwork/crypto) 

| Based on | Bulletproofs, LegoGroth, ZKAttest, Pedersen Committments |
| - | - |
| Easyness | medium |
| Fast and short | yes |
| Post-quantum | yes/no |
| Mobile and web | yes |
| Maintained | medium/bad |
| Open Source | yes |
| Security Review | no |
| Sign. and Hash | yes |


Docknetwork is a library from a startup. Ahmed did various PRs on the library, but since end of ‘25 it has been slow to merge PRs.

## Noir

| Based on | *ACIR (circuit representation) + Barretenberg (Plonk-based Ultrahonk*) |
| - | - |
| Easyness | easy |
| Fast and short | yes |
| Post-quantum | no (barretenberg) |
| Mobile and web | possible (libraries for older versions exist, but have never been tried out by C4DT) |
| Maintained | yes, very much, but moves a lot |
| Open Source | yes |
| Security Review | no |
| Sign. and Hash | yes |


Noir is very complex as it implements a full compiler pipeline with optimisations. There might be a lot of bugs in there...

## Circom 2

Carine

[https://github.com/iden3/circom](https://github.com/iden3/circom) 

| Based on | ZK-SNARK |
| - | - |
| Easyness | so-so, pre-defined circuits are provided |
| Fast and short | unclear, but used in blockchain so probably optimized for that |
| Post-quantum | no |
| Mobile and web | uses WASM |
| Maintained | ecosystem yes, for Circom have a better look, e.g., [https://github.com/iden3/circom/issues/206,](https://github.com/iden3/circom/issues/206,) PRs without comment from the team |
| Open Source | yes |
| Security Review | no |
| Sign. and Hash | Hash yes Signature maybe |


More trusted than noir.

## Ligero (Ligetron)

Ahmed

Commercial, closed source  
[https://platform.ligetron.com/marketplace](https://platform.ligetron.com/marketplace)   
[https://acmccs.github.io/papers/p2087-amesA.pdf](https://acmccs.github.io/papers/p2087-amesA.pdf) (New work: [https://eprint.iacr.org/2021/121.pdf](https://eprint.iacr.org/2021/121.pdf))

It seems that ligero-inc open-sources their product after sometime, I looked at thier open-sourced version here: [https://github.com/ligeroinc/ligero-prover](https://github.com/ligeroinc/ligero-prover) and ran this example: [https://github.com/ligeroinc/ligero-prover/blob/main/sdk/rust/examples/sha256/sha256.rs](https://github.com/ligeroinc/ligero-prover/blob/main/sdk/rust/examples/sha256/sha256.rs)

| Based on | Ligero |
| - | - |
| Easyness | yes (available in rust, circom, c++) |
| Fast and short | half (simple examples run under 1 sec, but sha256 example is 2MB of proof) |
| Post-quantum | Yes (reported from an obsecure source) |
| Mobile and web | Yes - uses WASM so can run on a web browser on mobile |
| Maintained | yes — opensourced after a while  |
| Open Source | Yes — Apache-2.0— they open-source their product after a while [https://github.com/ligeroinc/ligero-prover](https://github.com/ligeroinc/ligero-prover) |
| Security Review | no |
| Sign. and Hash | yes |

Some notes:

- When running the sha256 example, the size is ~1.9 megabytes (with a different packing, it goes up)

An alternative OSS based on Ligero: [https://github.com/scipr-lab/libiop](https://github.com/scipr-lab/libiop)

Closed Source

## Spartan

Clement

Copy from fork of Spartan in Crescent Credentials, as they have a secp256r1 signature proof – Clement is working on this

| Based on | Spartan paper SNARK |
| - | - |
| Easyness | Yes for low-level circuits, no for something like we do with Noir |
| Fast and short | Yes (qualifies as SNARK) |
| Post-quantum | No - not the discrete logarithm version used for the ECDSA PoP at least |
| Mobile and web | Rust based - most likely yes |
| Maintained | Meh - main repo is not dead but T-256 is buried as a fork within crescent |
| Open Source | Yes |
| Security Review | no |
| Sign. and Hash | yes |


This is not dead but I'd classify as academic-level maturity. The version we're interested in is a fork of the original Spartan to which T-256 was added, in the meantime, a second implementation has appeared completely disconnected from that fork.

Main reason of interest is the speed for ECDSA. To be confirmed.

Original - [https://github.com/microsoft/Spartan/commits/master/](https://github.com/microsoft/Spartan/commits/master/)

Second impl - [https://github.com/microsoft/Spartan2](https://github.com/microsoft/Spartan2)

Crescent fork with T-256 - [https://github.com/microsoft/crescent-credentials/tree/main/forks/Spartan-t256](https://github.com/microsoft/crescent-credentials/tree/main/forks/Spartan-t256)


Sent an email to Srinath who is apparently oof for quite some time: "Hello, I'm OOF and will be back to work on 10/17"

## Google

Linus wrote an email to Matteo Frigo on the 16th of Feb. ‘26. Matteo replied, saying that they will not pursue the development, as it’s too complicated to know which parts to do in “unconstrained” mode, and how to verify it’s correctly constrained on return.

## Halo 2

Linus

[https://github.com/zcash/halo2](https://github.com/zcash/halo2)   
[https://zcash.github.io/halo2/user/simple-example.html](https://zcash.github.io/halo2/user/simple-example.html)  
[https://blog.trailofbits.com/2025/05/30/a-deep-dive-into-axioms-halo2-circuits/](https://blog.trailofbits.com/2025/05/30/a-deep-dive-into-axioms-halo2-circuits/) 

| Based on | UltraPLONK / PLONKish, based on EC |
| - | - |
| Easyness | hard |
| Fast and short | probably? |
| Post-quantum | no |
| Mobile and web | not found |
| Maintained | some activity on github |
| Open Source | MIT / Apache2 |
| Security Review | no |
| Sign. and Hash | sha256 / but no signature verification |


Quote from [Halo document](https://zcash.github.io/halo2/concepts/proofs.html):

*To create a proof of a statement, the prover will need to know the private inputs, and also intermediate values, called advice values, that are used by the circuit.*

*Some authors use “witness” as just a synonym for private inputs. But in our usage, a witness includes advice, i.e. it includes all values that the prover supplies to the circuit.*

## Modular Sigma Proofs

Paper from Anja - ZKAttest - Pedersen Committments with SNARKS or other types

Crescent - Groth16

## RISC Zero

Carine / Ahmed

[https://medium.com/@gwrx2005/comparative-analysis-of-sp1-and-risc-zero-zero-knowledge-virtual-machines-4abf806daa70](https://medium.com/@gwrx2005/comparative-analysis-of-sp1-and-risc-zero-zero-knowledge-virtual-machines-4abf806daa70) 

[https://risczero.com/](https://risczero.com/) 

Claude: If developer ergonomics is the priority. You write standard Rust; no need to learn a circuit DSL. Ideal for parsing complex credential structures (like ASN.1 in ePassports). The STARK-based proof sizes are larger but proving is fast.

| Based on | zk-STARKS |
| - | - |
| Easyness | Easy to medium |
| Fast and short | Not sure, but Claude says Yes! (I couldn’t test it locally) |
| Post-quantum | Yes |
| Mobile and web | Yes - Verifier uses WASM, Prover runs on server |
| Maintained | Yes - Very active |
| Open Source | Yes - [https://github.com/risc0/risc0](https://github.com/risc0/risc0)  |
| Security Review | Yes - [https://github.com/risc0/rz-security/tree/main/audits](https://github.com/risc0/rz-security/tree/main/audits)  |
| Sign. and Hash | Yes |

The issue is, I don’t understand how verification happens on Risc Zero

## gnark 

Ahmed

[https://github.com/ConsenSys/gnark](https://github.com/ConsenSys/gnark) 

Claude: If your backend is Go-based and you want excellent performance with Groth16 (small proofs, fast verification). Clean API for defining constraints.

| Based on | Groth16, PLONK |
| - | - |
| Easyness | Easy to medium — Circuits are written in Go |
| Fast and short | Yes - 190 bytes for sha256 circuit, prove in 0.5 second  |
| Post-quantum | No |
| Mobile and web | No - Not compiled to WASM |
| Maintained | Yes - Very Active |
| Open Source | Yes |
| Security Review | Yes - 9 audits |
| Sign. and Hash | Yes - Standard library contains both features |

## Circom 2 + iden3 

Claude: You already have Circom 2; pairing it with iden3's identity primitives gives you a battle-tested identity stack with Groth16 proofs.

Iden3 creates an own protocol atop Circom2, but is very application-specific to what it’s doing. As such it is not an alternative to other tools.

## ZoKrates - dead - no commit since August 2024

Linus

[https://github.com/Zokrates/ZoKrates](https://github.com/Zokrates/ZoKrates) 

Claude: Best for rapid prototyping if your team is less experienced with ZK; the Python-like syntax has the lowest learning curve.

# Virtual Machines

Full machines running ZKP programs. As per the comparison from 8ulce28 not very performant yet. But you can take any rust program and compile it to zkVM:

[https://doc.rust-lang.org/rustc/platform-support/riscv32im-risc0-zkvm-elf.html](https://doc.rust-lang.org/rustc/platform-support/riscv32im-risc0-zkvm-elf.html) 

## SP1

Linus

[https://github.com/succinctlabs/sp1](https://github.com/succinctlabs/sp1) 

[https://medium.com/@gwrx2005/comparative-analysis-of-sp1-and-risc-zero-zero-knowledge-virtual-machines-4abf806daa70](https://medium.com/@gwrx2005/comparative-analysis-of-sp1-and-risc-zero-zero-knowledge-virtual-machines-4abf806daa70) 

*SP1 races ahead when heavy cryptography (hashing, ECDSA) is involved, thanks to its 5–10× cycle reduction via precompiles, whereas RISC Zero shines for general computation and small/medium programs with its highly-optimized core prover.*

*[https://github.com/8ulce28/zkVM-ecdsa-benchmark*](https://github.com/8ulce28/zkVM-ecdsa-benchmark)

*Compares different frameworks for ECDSA signature verification: *

| **zkVM** | **Proof Generation Time (s)** | **Verification Time (ms)** | **Proof Size (bytes)** | **Execution Time (ms)** |
| :-: | :-: | :-: | :-: | :-: |
| SP1 | 11.14 | 763.12 | 9277678 | 55.12 |
| OpenVM | 2.517 | 885 | 4173289 | 166 |
| Pico | 141.17 | 1081.19 | 16436918 | 615 |
| Valida | 184 | 1344 | 5973657 | 589 |
| Powdr | 116.31 | NA | 11477033 | 740 |


Claude: If developer ergonomics is the priority. You write standard Rust; no need to learn a circuit DSL. Ideal for parsing complex credential structures (like ASN.1 in ePassports). The STARK-based proof sizes are larger but proving is fast.

| Based on	 | STARK + SNARK (Groth16 on BN254) |
| - | - |
| Easyness | very, similar to noir |
| Fast and short | no, see table above |
| Post-quantum | no |
| Mobile and web | probably, but couldn’t find code |
| Maintained | yes, active issues and PRs |
| Open Source | Apache2 / MIT |
| Security Review |  |
| Sign. and Hash | yes: [https://github.com/sp1-patches/elliptic-curves](https://github.com/sp1-patches/elliptic-curves)  |

## OpenVM

Linus

[https://github.com/openvm-org/openvm](https://github.com/openvm-org/openvm) 

| Based on | Plonky3/STARK, SP1 |
| - | - |
| Easyness | yes |
| Fast and short | near-miss, according to 8ulce28 |
| Post-quantum | yes(?) |
| Mobile and web | probably - it’s rust |
| Maintained | yes, very much so |
| Open Source | Apache2 / MIT |
| Security Review | 5 audits |
| Sign. and Hash | yes, not sure if only secp256k1 curves or also signature |

## Pico

Linus

[https://github.com/brevis-network/pico](https://github.com/brevis-network/pico) 

| Based on | Plonky3, SP1, Valida, RISC0 |
| - | - |
| Easyness | yes, can run rust programs compiled to riscv32im-risc0-zkvm-elf |
| Fast and short | very slow, at least in August 2025: 8ulce28 |
| Post-quantum | yes(?) |
| Mobile and web | probably - it’s rust |
| Maintained | yes |
| Open Source | Apache2 / MIT |
| Security Review | yes, from Sherlock |
| Sign. and Hash | yes, according to benchmark from 8ulce28 |

## Valida - dead, last commit July ‘25

[https://github.com/valida-xyz/valida](https://github.com/valida-xyz/valida) 

Based on Plonky3

## Powdr

[https://github.com/powdr-labs/powdr](https://github.com/powdr-labs/powdr) 

Optimizer for vmLLVM based provers to fit into zkVMs.

# Add a Spartan backend

- Clement has some code

- Needs to:

  - find how to go from ACIR to Spartn matrix

  - how to integrate blackbox functions, at least sha256 and secp256k1 signature verification

  - how to integrate brillig functions - 

    - is it in a VM?

    - how are inputs/outputs handled?

    - Can it be put directly in the matrix? (Linus says we should not, for efficiency reasons)

    - Look at Barretenberg's code

# General Comments

## ZK Families

*Deepseek’s answer to I'm looking for a graph which shows which ZKPs developed out of which other ZKPs, and what kind of proof system they use behind. [https://en.wikipedia.org/wiki/Zero-knowledge\_proof](https://en.wikipedia.org/wiki/Zero-knowledge_proof):*

***Careful**

| **ZKP Family** | **Arithmetic Layer (The Constraint System)** | **Information-Theoretic Model** | **Cryptographic Compiler (The "Magic")** |
| - | - | - | - |
| **zk-SNARKs (e.g., Groth16, Marlin)** | R1CS | PIOP (Polynomial Interactive Oracle Proof) | KZG Polynomial Commitments (using Elliptic Curve Pairings) |
| **zk-STARKs (e.g., in RISC Zero)**  | AIR | IOPP (Interactive Oracle Proof of Proximity) | FRI (using Hash Functions) |
| **Bulletproofs** | R1CS | PIOP | IPA (Inner Product Argument) |
| **PLONK-based (e.g., Halo2, Aztec)** | Plonkish | PIOP | IPA or KZG  |
| **Spartan** | R1CS | Sumcheck | Hyrax (or other multilinear commitments) |



## TODO for Linus

- Push flake for latest noir/barretenberg
