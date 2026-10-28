---
type: application
tags:
  - eid
  - privacy
  - anonymous-credentials
---

[Home](../README.md) > [eID](README.md) > Pseudonyms-in-eID

# Pseudonyms in e-ID

## Description
Many services need a *stable* identifier for a returning user (an account, one vote per person, one signature per referendum) without learning the person's identity. A **per-verifier pseudonym** is stable for a given verifier or context but unlinkable across contexts, giving a login-like identifier without cross-service tracking. Pseudonyms were a stretch goal of the eid-privacy WP4 and appear as discussion topic E in the [[EUDI-ARF]].

## Construction
In general terms, the holder holds a secret `k` inside a credential (or derived from the device key), and computes `nym = PRF_k(context)`, e.g. a hash or verifiable random function (VRF) of `k` and the verifier or context identifier. In a ZKP the holder proves that `nym` was computed correctly from a secret contained in a valid, issuer-signed credential, without revealing `k`.

- With circuit-based ZKPs this is a few lines in the circuit. [[DHG26-MS4]] gives the example of one signature per person and per popular initiative: the circuit proves Swiss nationality, age over 18 and residence in the commune, and outputs a pseudonym derived from the credential and the initiative identifier. The same mechanism gives one account per person on a platform or anonymous polls.
- With sigma-protocol credentials, pseudonyms need a dedicated protocol (VRF-style), see [[DHG26-MS4]]; the BBS cryptosuite for VCs includes a pseudonym feature ([[W3C-VC-DI-BBS]]).
- Uniqueness ("this person has not voted yet") follows from the determinism of `nym` for a fixed context; unlinkability across contexts follows from the PRF.

## Sector-specific identifiers in Austria (bPK)
ID Austria derives *bereichsspezifische Personenkennzeichen* (bPK) from a lifelong unique person identifier, the *Stammzahl*, per service sector (e.g. health, finance), so that services within a sector share an identifier while sectors are not directly linkable. The derivation is public ([[Austria-bPK-Description]]):

- `Stammzahl = Base64(3DES-CBC_K(ZMR-number | seed))`: the central register number, extended with a secret seed and encrypted with a Triple-DES key, both kept by the Stammzahlenregisterbehörde (§ 6 E-GovG).
- `bPK = Base64(SHA-1(Stammzahl + "+urn:publicid:gv.at:cdid+" + sector))`: a plain hash of the Stammzahl and the sector code.

So the bPK is exactly the simple `H(Stammzahl | sector)` construction. Unlinkability across sectors rests entirely on the Stammzahl being secret: the register number has low entropy, but the secret seed and key make enumeration infeasible for outsiders. Anyone who learns a person's Stammzahl can compute all their bPKs, and the authority holding the key can link everything. Transfers between sectors use encrypted bPKs (vbPK, RSA with at least 1024 bits). The primitives (SHA-1, 3DES, RSA-1024) are dated. Unlike ZKP pseudonyms, the derivation is performed centrally by the state, which therefore sees every login (see [[eID-Systems-Overview]]).

## Considerations
- A pseudonym is only as unlinkable as the rest of the presentation: other disclosed attributes, the holder-binding artefacts and revocation data must also be unlinkable ([[Unlinkable-Anonymous-Credentials]], [[Holder-Binding]]).
- Recovery: if the secret `k` is bound to a lost device, all pseudonyms change; re-issuance policies decide whether the same `k` can be restored.
- Context identifiers must be authenticated (e.g. through the trust registry) to prevent a verifier from using another verifier's context to link users.

## Related
- [[Unlinkable-Anonymous-Credentials]]
- [[Predicate-Proofs]]
- [[eID-Actors-and-Trust-Goals]]
- [[eID-Systems-Overview]]

## Resources
- Paper: [[DHG26-MS4]], [[GHE25-Taxonomy]], [[MMZ+21-CanDID]] (Sybil resistance with accountability)
- Paper: [[PH10-Privacy-Terminology]] (definition of pseudonymity)
- Docs: [[EUDI-ARF]], [[Austria-bPK-Description]]
- Wiki: [[W3C-VC-DI-BBS]]
- Blog: [[eid-privacy-privacy-unlinkability]]
