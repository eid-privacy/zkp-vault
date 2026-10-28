---
type: resource
subtype: doc
authors:
  - Austrian Stammzahlenregisterbehörde
url: "https://www.bundeskanzleramt.gv.at/agenda/digitalisierung/stammzahlenregisterbehoerde/bereichsspezifische-personenkennzeichen/beschreibung.html"
tags:
  - eid
  - privacy
---

[Home](../../README.md) > [Resources](../README.md) > [docs](README.md) > Austria-bPK-Description

# Description of sector-specific person identifiers (bPK), Austria

## Summary
Official description (German) by the Austrian Stammzahlenregisterbehörde of how *bereichsspezifische Personenkennzeichen* (bPK) are computed. A string `Stammzahl + "+urn:publicid:gv.at:cdid+" + sector code` (e.g. `BW`, building and housing, per the E-Gov-BerAbgrV) is hashed with SHA-1 and Base64-encoded. Variants: bPKs for public officials are symmetrically encrypted with a key known only to the authority, and encrypted bPKs (vbPK) for transfers between sectors use RSA (at least 1024 bit). The Stammzahl itself is derived from the central register (ZMR) number under § 6 E-GovG: the number is extended with a secret seed and encrypted with the authority's secret Triple-DES key (CBC mode), see the [publications of the Stammzahlenregisterbehörde](https://www.bundeskanzleramt.gv.at/agenda/digitalisierung/stammzahlenregisterbehoerde/veroeffentlichungen.html).
