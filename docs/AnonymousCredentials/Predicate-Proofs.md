---
type: application
tags:
  - eid
  - range-proof
  - privacy
  - sigma
---

[Home](../README.md) > [Anonymous Credentials](README.md) > Predicate-Proofs

# Predicate Proofs

## Description
Sending an attribute's value is often more than a verifier needs and can enable linking or de-anonymisation. A **predicate proof** shows only that the value satisfies a condition, e.g. "older than 18" instead of the birth date ([[GHE25-Taxonomy]]). The predicate itself still leaks information (an age range). The eid-privacy WP5 targeted range proofs, inclusion (set-membership) proofs and combinations of credentials, with proof generation under 1 s and 1 MB ([[GHE25-MS2]]).

## Types of statements
From the use-case analysis in [[DHG26-MS4]], ordered from most to least probable for the Swiss e-ID ecosystem:

| Statement type | Examples |
|---|---|
| Threshold on a date | Over 18 / over 16 (youth protection), under 26 or over 65 for tariffs, driving licence held more than 2 years, credential not expired without revealing the expiry date |
| Empty or negative statements | Criminal-record or debt-collection extract has no entries; credential is not on the revocation list ([[Revocation-in-eID]]) |
| Pseudonyms and uniqueness | One signature per person per popular initiative; one account per person ([[Pseudonyms-in-eID]]) |
| Set membership | Postal code belongs to a commune; nationality in EU/EFTA; residence permit B or C; driving licence includes category B |
| Threshold on a number | Taxable income below a limit; salary above an amount (speculative, no such credentials planned yet) |

**Cross-credential** statements (e.g. a commune credential tied to the federal e-ID) require proving that two credentials belong to the same person. How credentials will be linked (name and birth date, or the AHV number) was not yet defined in swiyu at the time of [[DHG26-MS4]].

## Techniques
- **Sigma protocols on commitments** ([[Sigma-Protocols-Damgard]], [[Pedersen-Commitments]]): equality, linear relations, products and AND/OR compositions of committed values; OR-proofs for small sets. Not suitable for hash relations such as `a = SHA256(b)`.
- **Range proofs**: [[Bulletproofs]] with logarithmic proof size, no trusted setup.
- **Accumulators** for large-set membership or non-membership ([[Revocation-in-eID]]); polynomial-evaluation arguments for blacklists ([[BG13-Polynomial-Evaluation]]).
- **Circuits** (e.g. [[Noir]] on [[Spartan]] or UltraHonk): every row of the table above becomes a small function on top of common building blocks (parse SD-JWT, verify issuer signature, holder binding, non-revocation), which an IT professional can write and an auditor can review ([[DHG26-MS4]]). With sigma protocols each row needs a different protocol.
- **Salted-hash credentials** (SD-JWT, mdoc) only support predicates pre-computed by the issuer, e.g. a list of `age_over_X` claims ([[GHE25-MS2]]).

### Measurements (age range proof)

| Implementation | Time | Size | Source |
|---|---|---|---|
| Noir / UltraHonk (`c05_age_verification`, range proof only) | ~0.13 s proof (+0.04 s key generation) | 16 kB | [[GHE25-MS2]] benchmark data |
| Docknetwork / Bulletproofs (BBS credential) | ~0.03 s | ~2 kB | [[GHE25-MS2]] benchmark data |
| Longfellow (from the paper, phone, signature verification deducted) | 410 ms | 291 kB | [[GHE25-MS2]], from [[FS24-Longfellow]] |
| Full swiyu SD-JWT age proof incl. issuer signature and holder binding, Spartan with pre-computation | 4.5 s on a Galaxy A54 | — | [[DHG26-MS4]] |

## Alternative: issuer-precomputed attribute proofs
A non-ZKP idea from eid-privacy WP5: verifiers register the predicates they need with the issuer; the issuer vets them, evaluates them for every credential, and signs statements like `Predicate_X_Valid`. Holders download updated predicate attestations and present them (the presentation itself still needs an unlinkable proof, see [[Unlinkable-Anonymous-Credentials]]).
- Pros: no complex mathematics to audit; issuers can refuse requests not made in good faith; faster and smaller proofs; universal.
- Cons: delay between a verifier needing a new predicate and the issuer publishing it; the issuer learns which predicates exist (but not who uses them).

## Verifier-exclusive and deniable proofs
Two stretch goals of WP5:
- **Verifier-exclusive proofs**: a proof bound to one verifier, so that if it leaks, the leaking verifier can be identified, or it is legible only by the intended recipient. Designated-verifier SNARKs ([[WPSP26-DV-Dynamic-zkSNARKs]]) are one direction.
- **Deniable proofs**: a leaked proof cannot be used against the holder, because it does not convince third parties. [[Ora24-BBS-Sharp]] describes deniable presentations for BBS#.

## Related
- [[Selective-Disclosure]]
- [[Unlinkable-Anonymous-Credentials]]
- [[Pseudonyms-in-eID]]
- [[Revocation-in-eID]]
- [[ZKP-on-Mobile]]

## Resources
- Paper: [[GHE25-Taxonomy]], [[GHE25-MS2]], [[DHG26-MS4]]
- Paper: [[BBB+17-Bulletproofs]], [[BG13-Polynomial-Evaluation]], [[FS24-Longfellow]], [[WPSP26-DV-Dynamic-zkSNARKs]], [[Ora24-BBS-Sharp]]
- Paper: [[ECZJG24-Need-ZKP]]
- Code: [[eid-privacy-zkp-pocs]], [[eid-privacy-spartan-backend]], [[zkcrypto-bulletproofs]], [[docknetwork-crypto]]
- Blog: [[eid-privacy-poc-report]]
