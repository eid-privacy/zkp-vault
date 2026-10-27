---
type: resource
subtype: paper
cite_as: HSS23-Bind-AC-Humans
year: 2023
authors:
  - Julia Hesse
  - Nitin Singh
  - Alessandro Sorniotti
url: "https://www.usenix.org/conference/usenixsecurity23/presentation/hesse"
tags:
  - anonymous-credentials
  - hardware
  - attestation
related:
  - CDL16-DAA-qSDH
  - FHLL25-AnonCreds-TrustedHW
  - LZ26-AnonCreds-Legacy
  - BL26-SoK-AnonCreds
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > HSS23-Bind-AC-Humans

# How to Bind Anonymous Credentials to Humans (Hesse, Singh, Sorniotti 2023)

## Summary
Studies how to make anonymous credentials non-transferable by binding them to a user's device while keeping presentations unlinkable (USENIX Security 2023). For device binding, the secure element only contributes a Schnorr-type signature, and a key shared between the secure element and the host lets a presentation need a single call to the secure element, instead of two as in DAA. Discussed in [[BL26-SoK-AnonCreds]] as one of the native device-binding options for BBS credentials.

## Related resources

- [[CDL16-DAA-qSDH|Anonymous Attestation Using the Strong Diffie Hellman Assumption Revisited (Camenisch, Drijvers, Lehmann 2016)]] (paper, 2016)
- [[LZ26-AnonCreds-Legacy|Device Binding for Anonymous Credentials on Legacy Phones (Lehmann, Zacharakis 2026)]] (paper, 2026)
- [[FHLL25-AnonCreds-TrustedHW|Device-Bound Anonymous Credentials With(out) Trusted Hardware (Friedrichs, Harding, Lehmann, Lysyanskaya 2025)]] (paper, 2025)
- [[BL26-SoK-AnonCreds|SoK: Anonymous Credentials for Digital Identity Wallets (Bormann, Lehmann 2026)]] (paper, 2026)
