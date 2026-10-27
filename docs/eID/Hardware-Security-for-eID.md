---
type: application
tags:
  - eid
  - hardware
  - attestation
  - signatures
---

[Home](../README.md) > [eID](README.md) > Hardware-Security-for-eID

# Hardware Security for e-ID

## Description
e-ID systems depend on secure hardware at both ends: on the **holder's phone** to keep the device key that implements [[Holder-Binding]], and at the **issuer** to protect signing keys. The taxonomy ([[GHE25-Taxonomy]]) distinguishes secure elements / TPMs in personal devices from Hardware Security Modules (HSMs) used by trust service providers. Because hardware feature sets are effectively immutable, they create long-term dependencies: changing the required algorithms is slow and expensive, which matters a lot given the coming post-quantum transition ([[Post-Quantum-and-eID]]).

## Terminology

| Term | What it is | Typical role in e-ID |
|---|---|---|
| Secure Element (SE) | Separate tamper-resistant chip with its own CPU and storage (e.g. Android StrongBox, eSIM / SIM, smart cards) | Holder device key |
| Trusted Execution Environment (TEE) | Isolated execution mode on the main application processor, e.g. [[ARM-TrustZone]] "Secure World" running [[Android-Trusty-TEE]] | Holder device key (Android Keystore / KeyMint) |
| Apple Secure Enclave | Dedicated security coprocessor in Apple SoCs ([[Apple-Platform-Security-Secure-Enclave]]) | Holder device key on iOS |
| TPM | Standardised security chip in PCs | Device keys, attestation (DAA, cf. [[CDL16-DAA-qSDH]]) |
| HSM | Physically separate, tamper-resistant appliance for key storage and signing | Issuer keys; mandated for (qualified) trust service providers and for high-assurance attestations such as the EU PID ([[EUDI-ARF]]) |

The taxonomy uses "secure element" loosely for the hardware-backed key store of a phone; in practice Android keys may live in the TEE or in a StrongBox SE.

## Mobile capabilities
- **iOS**: the CryptoKit SecureEnclave API supports only P-256 keys, for ECDSA signing and key agreement ([[Apple-CryptoKit-SecureEnclave]]).
- **Android**: the Keystore / KeyMint HAL offers RSA, ECDSA (P-256) and AES, including `Digest::NONE` for signing pre-hashed data ([[Android-Keystore-Implementer-Reference]]). Trusty, running on TrustZone, hosts KeyMint ([[Android-Trusty-TEE]]); see [[PS19-TrustZone-Survey]] for TrustZone background.
- **Common denominator**: **ECDSA over NIST P-256**. Pairing-friendly curves (BLS12-381) needed for BBS, CL or PS signatures, and post-quantum signatures, are not available in deployed phone hardware.

Consequence: an ECDSA signature by the device key and its public key are stable, linkable values. Unlinkable holder binding therefore needs a zero-knowledge proof of the ECDSA signature ([[Holder-Binding]]), or schemes such as [[Ora24-BBS-Sharp]], [[FHLL25-AnonCreds-TrustedHW]] and [[LZ26-AnonCreds-Legacy]] that work with what the SE offers.

## Key attestation
Key attestations prove to a third party that a key was generated in, and cannot leave, secure hardware, and sometimes that the device is not rooted or jailbroken. Apple's attestations must be verified via Apple, whereas Google's can be verified by third parties ([[GHE25-Taxonomy]]). This affects public-sector e-ID projects (dependence on a vendor service), and an attestation that is shown on every presentation is itself linkable.

## HSMs at the issuer
Issuer keys for the e-ID and PID are expected to live in certified HSMs. Practically, this restricts issuers to FIPS / standardised algorithms (ECDSA, RSA, EdDSA); BBS is not available in HSMs ([[GHE25-Taxonomy]]). This is a key reason why designs that keep ECDSA issuance and add privacy with ZKPs ([[Selective-Disclosure]]) are attractive.

## Related
- [[Holder-Binding]]
- [[eID-Threat-Models]] — hardware supply-chain and device-theft threats
- [[Post-Quantum-and-eID]]
- [[ZKP-on-Mobile]]

## Resources
- Paper: [[GHE25-Taxonomy]]
- Docs: [[Apple-Platform-Security-Secure-Enclave]], [[Apple-CryptoKit-SecureEnclave]]
- Docs: [[Android-Keystore-Implementer-Reference]], [[Android-Trusty-TEE]], [[ARM-TrustZone]]
- Paper: [[PS19-TrustZone-Survey]]
- Wiki: [[NIST-FIPS-186-5]]
- Paper: [[FHLL25-AnonCreds-TrustedHW]], [[LZ26-AnonCreds-Legacy]], [[Ora24-BBS-Sharp]]
