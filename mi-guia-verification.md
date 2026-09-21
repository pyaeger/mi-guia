# Mi Guía de Ayuda — Claims Verification

Checked **2026-09-21** against each organisation's own site or an independent
legal-services directory. Confidence: **H** verified against a primary or
independent source · **M** partially confirmed · **L** could not confirm.

This app carries higher stakes than anything else in this account. A wrong
number in a festival guide costs a search. A wrong number here means someone
in legal jeopardy calls a dead line and concludes there is no help.

---

## Contacts

| In the app | Result | Class |
|---|---|---|
| Catholic Charities of Louisville — Immigration Legal Services · **502-637-9097** | **Correct.** Confirmed by two independent legal-services directories as the direct Immigration Legal Services line. Note: `cclou.org` publishes only the general agency number, 502-637-9786, so the app's number is the *more useful* of the two. | H |
| `cclou.org/gethelp/immigration` | Live, HTTP 200, and is the immigration page. | H |
| Kentucky Refugee Ministries · **502-479-9180** | **Correct.** Listed on `kyrm.org/contact` as the Louisville main office. | H |
| KRM immigration **extension 586** | **Could not confirm.** No extensions are published on the KRM contact page. It may be right; nothing public verifies it. | L |
| `kyrm.org` | Live, HTTP 200. | H |
| Maxwell Street Legal Clinic · **859-233-3840** | **Correct.** Agrees across directories, with 315 Lexington Avenue, Lexington KY 40508, Mon–Fri 9:00–16:00. | H |
| NFCC · **877-360-6322** | **Correct**, and Spanish service is confirmed — `nfcc.org` offers "Seleccionar Español". | H |
| EOIR automated case line · **1-800-898-7180** | **Correct.** justice.gov: *"dial 1-800-898-7180 (toll-free) to obtain case status information 24 hours a day, 7 days a week"* in English and Spanish. | H |
| **988**, press **2** for Spanish | **Correct.** 988lifeline.org: free, confidential, 24/7, *"Para español, oprima dos."* Also confirmed: texting 988 with the word **Ayuda** reaches a Spanish-speaking counsellor — that option has been added to the app, since it needs no speaking. | H |

## Web addresses

| In the app | Result | Class |
|---|---|---|
| `kyequaljustice.org/maxlegalaid` | **DEAD — corrected.** The entire `kyequaljustice.org` domain returns 404, root and every path. DNS resolves to a Wix address, so the domain exists but serves nothing. Search engines still index the old page. Replaced with `immigrationlawhelp.org`, which is live and carries Maxwell Street's current phone, address and hours alongside alternatives. | H |
| `acis.eoir.justice.gov/es/` | Live, HTTP 200. | H |
| `immigrantjustice.org/es/` | Live, HTTP 202. | H |
| `irs.gov/es` | Live, HTTP 200. | H |
| `egov.uscis.gov/casestatus/landing.do` | **Inconclusive.** Returns 403 from this network even with a phone browser user-agent. This is almost certainly a datacenter-IP block rather than a dead page — USCIS case status is a core federal service. Not treated as broken; not confirmed working either. | L |
| `immigrantdefenseproject.org/conozca-sus-derechos/` | **Inconclusive**, same 403 pattern, including at the site root. Same reasoning. | L |

## Capacity note

A February 2025 WEKU report described Maxwell Street Legal Clinic resuming
operations after layoffs. Their phone and address are current; their intake
capacity may not match what it once was. Worth knowing before treating them as
the first call.

---

## Legal content

The know-your-rights section was reviewed against established guidance. It is
accurate on the point that decides outcomes:

> Solo una **orden judicial firmada por un juez** … les permite entrar.
> **Un formulario de ICE no es una orden de un juez.**

That distinction — a judicial warrant versus an ICE administrative form — is
correct and is the thing most material either omits or garbles. The practical
test it gives (look for a court name) and the procedure (ask for it to be
passed under the door) are both standard correct advice.

The "never do this" card is also correctly scoped: do not run, do not resist
physically, do not lie, do not present false documents. The last two are
separate federal offences that convert a status problem into a prosecution.

The bilingual silence-and-counsel script is provided in Spanish and English so
it can be **shown** rather than spoken.

*This is a review of published guidance for accuracy. It is not legal advice,
and the app correctly tells the reader to speak to a lawyer.*

---

## What is not claimed

- **No tracking, no accounts, no backend.** Zero external `script`, `link` or
  `img` sources; everything typed stays in `localStorage` on the device. (H)
- **Works offline.** `sw.js` is present and registered; the app and its audio
  pre-cache after one online load. (H)
- **Saved data is not encrypted.** The app invites storing an A-Number. It is
  held in browser storage on that phone, in the clear. Anyone with the unlocked
  phone can read it. The app's advice to also memorise the number and give it to
  a trusted person is the right mitigation. (H)

## Contacts decay, and the app knows it

Every phone number and web address is an editable field saved to the device. If
something changes, the reader can correct it and the correction persists. That
is a better answer to link rot than a static list, and it is why this file
records *what was true on a date* rather than pretending to be permanent.

**Re-check before sharing this app with anyone new.**
