---
type: resource
subtype: paper
cite_as: CDL16-DAA-qSDH
year: 2016
authors:
  - Jan Camenisch
  - Manu Drijvers
  - Anja Lehmann
url: "https://eprint.iacr.org/2016/663"
tags:
  - signatures
  - attestation
  - pairing
  - anonymous-credentials
related:
  - BBS04-ShortGroupSigs
  - TZ23-Revisiting-BBS
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > CDL16-DAA-qSDH

# Anonymous Attestation Using the Strong Diffie Hellman Assumption Revisited (Camenisch, Drijvers, Lehmann 2016)

## Summary
Shows that the security proofs of several q-SDH-based Direct Anonymous Attestation (DAA) schemes are flawed and proposes a new, provably secure DAA scheme based on BBS+ signatures (TRUST 2016). Along the way it proves the security of BBS+ in a setting that allows a more efficient signature (dropping one element), cited by the IRTF BBS draft. Relevant to e-ID because DAA is the TPM/hardware analogue of holder-bound anonymous credentials.

## Related resources

- [[BBDT16-KVAC|Improved Algebraic MACs and Practical Keyed-Verification Anonymous Credentials (Barki, Brunet, Desmoulins, Traoré 2016)]] (paper, 2016)
- [[TZ23-Revisiting-BBS|Revisiting BBS Signatures (Tessaro, Zhu 2023)]] (paper, 2023)
- [[BBS04-ShortGroupSigs|Short Group Signatures (Boneh, Boyen, Shacham 2004)]] (paper, 2004)
