---
type: application
tags:
  - eid
  - revocation
  - standard
  - privacy
---

[Home](../README.md) > [eID](README.md) > Status-Lists

# Status Lists

## Description
Deployed e-ID systems check revocation with **status lists**: the issuer publishes a list with one bit (or a few bits) per credential, and each credential carries its index in the list. The verifier downloads the list and looks up the index. Two standards exist: the IETF [[IETF-OAuth-Token-Status-List]] (used by swiyu and SD-JWT VC) and the W3C [[W3C-Bitstring-Status-List]] (used with the VC Data Model). Lists are compressed to keep downloads small.

## Variants in deployment
| Variant | How it works | Trade-off |
|---|---|---|
| One central list | One list per issuer with a bit per credential | Fetching the whole list gives herd privacy, but the list can be large |
| Multiple lists ([[swiyu]]) | The status list is split into smaller packets | Packets must be large enough to avoid identifying the holder and small enough to download ([[GHE26-MS2]]) |
| Short-lived credentials | No list; credentials are only renewed if not revoked | Frequent issuance vs. a window in which a revoked credential is still accepted |

## Privacy problems
- The **index is a linkable identifier**: every presentation of the same credential shows the same index, and the verifier can re-check the index later, which turns revocation into a tracking signal ([[GHE25-Taxonomy]]).
- Batch-issued single-use credentials need one index each, multiplying list size.
- **Not ZKP-friendly**: proving non-revocation of a hidden index in zero knowledge requires decompressing the list inside the circuit, which inflates the circuit prohibitively ([[DHG26-MS4]]).

Privacy-preserving alternatives (signed lists proven in ZK, accumulators, polynomial blacklists, PIR) are compared in [[Revocation-in-eID]].

## Related
- [[Revocation-in-eID]]
- [[Signed-Revocation-Lists]]
- [[Credential-Data-Structures]]
- [[swiyu]]

## Resources
- Wiki: [[IETF-OAuth-Token-Status-List]], [[W3C-Bitstring-Status-List]]
- Paper: [[GHE25-Taxonomy]], [[GHE26-MS2]], [[DHG26-MS4]]
- Docs: [[swiyu-Technical-Documentation]]
