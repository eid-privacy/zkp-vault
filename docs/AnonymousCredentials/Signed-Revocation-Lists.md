---
type: application
tags:
  - eid
  - revocation
  - privacy
  - signatures
---

[Home](../README.md) > [Anonymous Credentials](README.md) > Signed-Revocation-Lists

# Signed Revocation Lists

## Description
A lightweight, ZKP-friendly revocation scheme proposed by eid-privacy (WP6) as an alternative to the compressed status lists used by swiyu ([[IETF-OAuth-Token-Status-List]]). The issuer publishes small, **uncompressed, binary** revocation lists, each covering a fixed range of credential IDs and signed with ECDSA. The holder downloads the list responsible for its credential and proves inside the presentation ZKP that its **hidden** credential ID is not revoked. It is at least as private as swiyu's lists but gives a much smaller circuit ([[DHG26-MS4]]).

Each credential gets a unique ID known only to the issuer; ideally IDs are assigned incrementally from 0. Since the credential never leaves the holder's device and is only used inside the ZKP, the ID is never shown to verifiers. This also removes the need for **batch issuance** of single-use credentials (which salted-hash formats need for unlinkability, see [[Selective-Disclosure]]).

## List layout

| Offset (bytes) | Length (bytes) | Field | Description |
|---:|---:|---|---|
| 0 | 8 | `first_credential_ID` | First credential ID covered by this list |
| 8 | 8 | `creation_timestamp` | List creation time, Unix epoch seconds |
| 16 | 128 | `revocation_list` | Bit field: bit = 1 means revoked; 128 × 8 = 1024 credentials per list |
| 144 | 64 | `issuer_signature` | ECDSA P-256 signature `(r, s)`, 2 × 32 bytes, over bytes 0..144 |

**Total: 208 bytes per list** (144 signed bytes + 64-byte signature).

System-wide parameters: `LIST_LENGTH` (= 1024 for a 128-byte bit field), `LIST_VALIDITY_SECONDS`, `issuer_public_key`, and the public input `timestamp_now`.

The MS4 variant stores an expiry time (`EXPIRES_AT`) instead of the creation time, with the check `timestamp_now < EXPIRES_AT` ([[DHG26-MS4]]); the MS2 PoC used a fixed validity of 7 days after the signature time ([[GHE26-MS2]]).

## Checks in the circuit
1. **The list covers the credential**
   - `first_credential_ID <= credential_ID`
   - `relative_pos = credential_ID - first_credential_ID`
   - `relative_pos < LIST_LENGTH`
2. **The list is fresh and authentic**
   - `creation_timestamp + LIST_VALIDITY_SECONDS > timestamp_now` (the list has not yet expired)
   - `ECDSA_verify(issuer_public_key, list[0..144], issuer_signature)` succeeds
3. **The credential is not revoked**
   - `(revocation_list[relative_pos / 8] >> (relative_pos % 8)) & 1 == 0`

In a full presentation, `credential_ID` must be taken from the issuer-signed credential proven in the same circuit; otherwise a holder could prove non-revocation for an arbitrary ID. The standalone benchmark circuit `c06_non_revocation` does not do this, which the external security review flagged as expected for a measurement-only circuit ([[DHG26-MS4]]). The most expensive operation is the ECDSA verification including its SHA-256 hash.

## Cost and variants
- Noir PoC (`noir/c06_non_revocation` in [[eid-privacy-zkp-pocs]]): 0.8 s / 16 kB ([[GHE26-MS2]]).
- Integrated in the e-ID circuit `circuits/eid` of [[eid-privacy-spartan-backend]].
- A JSON encoding of the same list is possible, but is expected to add about 20–40% proving time.
- With pre-computation, the non-revocation part only needs to be redone when the list is refreshed (once per week in the MS4 assumptions), not per presentation ([[DHG26-MS4]]).

## Security and privacy
- Not a new cryptographic construction: security relies on the issuer's ECDSA signature and the soundness of the ZKP. The scheme was part of the zkSecurity review reported in [[DHG26-MS4]] and was not marked as problematic.
- Downloading a list reveals to the list server which block of 1024 IDs the holder belongs to. This was not analysed in [[DHG26-MS4]]; mitigations are downloading all lists, or [[Private-Information-Retrieval-for-eID]].
- The list itself reveals how many credentials in a range are revoked, as with any public status list.

## Related
- [[Revocation-in-eID]]
- [[Private-Information-Retrieval-for-eID]]
- [[Credential-Data-Structures]]
- [[ZKP-on-Mobile]]

## Resources
- Paper: [[DHG26-MS4]], [[GHE26-MS2]]
- Wiki: [[IETF-OAuth-Token-Status-List]], [[W3C-Bitstring-Status-List]], [[NIST-FIPS-186-5]]
- Code: [[eid-privacy-zkp-pocs]], [[eid-privacy-spartan-backend]]
