---
type: application
tags:
  - eid
  - revocation
  - accumulators
  - privacy
---

[Home](../README.md) > [Anonymous Credentials](README.md) > Revocation-in-eID

# Revocation in e-ID

## Description
A verifier must be convinced that a credential is still valid: not expired (a date comparison, see [[Predicate-Proofs]]) and **not revoked**. The privacy requirement (eid-privacy WP6) is that the verifier and the revocation provider learn only the minimum during revocation, during creation of a non-revocation proof and during its verification, and that a non-revocation proof cannot be reused with another credential or verifier. Target: proof and daily updates under 1 s and 1 MB ([[GHE25-MS2]]).

## Taxonomy of approaches

| Approach | How it works | Privacy | Cost / issues |
|---|---|---|---|
| Central status list | One list with a bit per credential; the credential carries its index. Standards: [[IETF-OAuth-Token-Status-List]], [[W3C-Bitstring-Status-List]] | Herd privacy when fetching the list, but the verifier learns the index and can re-check it later (revocation as a tracking signal); the index is a linkable identifier | Large compressed blocks: in a ZKP, decompression inflates the circuit prohibitively ([[DHG26-MS4]]) |
| Short-lived credentials | No list; credentials are renewed only if not revoked | Good, but issuance becomes frequent | Trade-off: frequent renewal vs. a window in which revoked credentials are accepted |
| Multiple lists (swiyu) | Status lists split into smaller packets | Packet size must be large enough to avoid identification, small enough to download ([[GHE25-MS2]]) | Still index-revealing and compressed |
| Signed list proven in ZK | Holder downloads its list block and proves non-revocation of a hidden credential ID | Verifier learns nothing; removes the need for batch issuance | See [[Signed-Revocation-Lists]] |
| Cryptographic accumulators | Revoked (or valid) IDs compressed into a constant-size value; holders prove (non-)membership with a witness | Strong; proofs are cheap and small | Every update requires all holders to update their witnesses |
| Polynomial blacklists | Committed value is a non-root of a public polynomial whose roots are revoked IDs ([[BG13-Polynomial-Evaluation]]) | Strong, discrete-log only | Logarithmic communication in list size |
| PIR | Holder fetches its status without revealing which entry ([[Private-Information-Retrieval-for-eID]]) | Hides the query from the server | Server computation; complements, does not replace, the ZK proof |

## Accumulators
Accumulators are the most popular privacy-preserving revocation technique because they never keep a direct reference to the revoked credential; they apply to any privacy-preserving membership check. References:
- [[BBC24-Accumulators]] — modern definitions and security notions.
- [[JLM22-ALLOSAUR]] — witness updates computed by several servers via MPC in time sublinear in the number of revocations, used by AnonCreds v2.
- [[HKRW20-Sovrin-Revocation]] — shows witness updates are the bottleneck of the Sovrin / Indy accumulator; distributes the trapdoor via MPC.
- [[Col24-Revocation]] — EPFL thesis on a pairing-based accumulator compatible with BBS, targeting national-scale witness updates for the Swiss e-ID.
- Implementation: the VB accumulator in [[docknetwork-crypto]] ([[Docknetwork]]).

## Measurements

| Implementation | Time / size | Comment | Source |
|---|---|---|---|
| Noir, signed revocation list (`noir/c06_non_revocation`) | 0.8 s / 16 kB | Specific binary list format | WP6, [[GHE25-MS2]] |
| Docknetwork VB accumulator | 0.01 s / 1 kB | Expensive witness updates for holders once there are many (more than 10'000) holders | WP6, [[GHE25-MS2]] |
| Longfellow | — | Code includes a status-list proof, but no published measurements | [[GHE25-MS2]] |

Because of the holder-side witness-update overhead, eid-privacy chose not to use accumulators, and abandoned the swiyu status-list format because of compression, in favour of [[Signed-Revocation-Lists]] ([[DHG26-MS4]]).

## Related
- [[Signed-Revocation-Lists]]
- [[Private-Information-Retrieval-for-eID]]
- [[Credential-Data-Structures]]
- [[Unlinkable-Anonymous-Credentials]]
- [[eID-Systems-Overview]]

## Resources
- Paper: [[GHE25-Taxonomy]], [[GHE25-MS2]], [[DHG26-MS4]]
- Wiki: [[IETF-OAuth-Token-Status-List]], [[W3C-Bitstring-Status-List]]
- Paper: [[BBC24-Accumulators]], [[JLM22-ALLOSAUR]], [[HKRW20-Sovrin-Revocation]], [[Col24-Revocation]], [[BG13-Polynomial-Evaluation]], [[MW22-Spiral]]
- Code: [[docknetwork-crypto]], [[eid-privacy-zkp-pocs]], [[anoncreds-anoncreds-v2-rs]]
- Docs: [[swiyu-Technical-Documentation]]
