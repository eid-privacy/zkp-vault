---
type: application
tags:
  - eid
  - privacy
  - revocation
---

[Home](../README.md) > [Applications](README.md) > Private-Information-Retrieval-for-eID

# Private Information Retrieval for e-ID

## Description
Private Information Retrieval (PIR) lets a client fetch an entry from a server's database without the server learning which entry was requested. In e-ID systems it addresses **metadata leakage** that ZKPs do not cover: the proof can hide everything from the verifier, but the *download* of supporting data can still reveal the holder to the server operator ([[GHE25-Taxonomy]]).

## Use cases
- **Revocation status**: the holder fetches the status-list block or [[Signed-Revocation-Lists]] block covering its credential without revealing which block, i.e. its ID range. Most deployed systems use simple status lists ([[IETF-OAuth-Token-Status-List]], [[W3C-Bitstring-Status-List]]), where the requested block is the leak.
- **Trust-registry lookups**: in swiyu, wallets and verifiers query the base and trust registries ([[swiyu-Trust-Protocol]]). PIR could hide from the registry operator which issuer or verifier a holder is about to interact with ([[GHE25-Taxonomy]]).
- **Verifier-side queries** are harder: a verifier using PIR would need to know what to query (e.g. a holder identifier), which a privacy-preserving presentation should not give it. The WP1 notes ask whether a *blinded* holder key could be retrieved this way; this remains open.

## Schemes
- **Single-server PIR** based on lattice homomorphic encryption, e.g. Spiral ([[MW22-Spiral]]), which composes Regev and GSW encryption for high rate and server throughput. No trust in non-colluding servers is needed; cost is server computation and larger queries.
- **Multi-server PIR** is cheaper but assumes non-colluding servers.
- **Trivial PIR**: download the whole database. For small revocation lists (208 bytes per 1024 credentials in the [[Signed-Revocation-Lists]] layout) this can be practical, and is the baseline to beat.

Network-level anonymity (e.g. Tor) is complementary: PIR hides *what* is queried, anonymity networks hide *who* queries ([[eid-privacy-privacy-unlinkability]]).

## Related
- [[Revocation-in-eID]]
- [[Signed-Revocation-Lists]]
- [[eID-Threat-Models]] — global network view, metadata linking
- [[eID-Open-Questions]]

## Resources
- Paper: [[GHE25-Taxonomy]]
- Paper: [[MW22-Spiral]]
- Wiki: [[IETF-OAuth-Token-Status-List]], [[W3C-Bitstring-Status-List]]
- Docs: [[swiyu-Trust-Protocol]]
- Blog: [[eid-privacy-privacy-unlinkability]]
