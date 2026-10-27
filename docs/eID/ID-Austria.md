---
type: application
tags:
  - eid
  - privacy
---

[Home](../README.md) > [eID](README.md) > ID-Austria

# ID Austria

## Description
Designed as an **authentication system**: holders log in to services through OpenID Connect or SAML2 / PVP2. Registries are state-run; when a service requests data, the user consents and the state registry sends the data to the service. This avoids over-sharing to the service but gives the state a full log of who received what data, when — and the state can in principle log in on the user's behalf. Sector-specific identifiers (bPK) provide linkability within a sector only; see [[Pseudonyms-in-eID]]. Developer documentation is only partly available in English.

## Protocols
As an authentication service, ID Austria offers OpenID Connect and SAML2 / PVP2 to relying parties. There are no holder-side credentials to present selectively; data flows from the state registry to the service after the user consents.

## Related
- [[eID-Systems-Overview]] — comparison with other systems
- [[Pseudonyms-in-eID]] — how bPK compares with ZKP pseudonyms
- [[EUDI-ARF]] — the EU wallet that Austria must also offer

## Resources
- Paper: [[GHE25-Taxonomy]]
