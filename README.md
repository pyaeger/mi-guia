# Mi Guía de Ayuda

A single-page, offline-capable personal help guide in Spanish, designed for mobile phones.

- **Live app:** https://pyaeger.github.io/mi-guia/
- Fully self-contained: one HTML file, no accounts, no analytics, no external requests.
- Everything the user types is stored in the device's localStorage only — nothing is ever sent anywhere.
- Works completely offline after the first online load (service worker pre-caches the app and its song).
- Install on iPhone: open the link in Safari → Share → **Add to Home Screen** → open once while online.

## Contents

Seven collapsible sections with check-off steps and a progress bar: immigration legal resources (Louisville, KY), debt and credit card plan, honest income paths, weekly budget tracker, secure document checklist (including immigration case number), know-your-rights information, and mental health / community support — plus the original ballad *"The Other Side of Yesterday"* with an offline audio player.

## Files

- `index.html` — the entire app (markup, styles, logic)
- `sw.js` — service worker for offline caching
- `o-hache-eme.mp3` — original song, playable offline
- `LICENSE` — MIT

## Verification

**[mi-guia-verification.md](mi-guia-verification.md)** records every phone number
and web address in the app, checked 2026-09-21 against each organisation's own
site or an independent legal-services directory, with a confidence grade each.
One address was dead and has been corrected; one extension could not be
confirmed and is marked as such.

## History

This project was moved out of the repository now called
[`far-field`](https://github.com/pyaeger/far-field) into its own. Because both
live on the same `pyaeger.github.io` origin, users' saved data survived the move.

**The old link no longer works.** `pyaeger.github.io/keons-playlist/guia.html`
returned a redirect stub until that repository was renamed on 2026-09-21;
GitHub does not redirect Pages URLs across a rename, so it now returns 404.
Anyone holding the original link needs the new one.

## License

**MIT**, covering everything here — `index.html`, `sw.js`, the README, the
verification file, and the ballad *"The Other Side of Yesterday"*.

The track was generated with Suno under a Pro subscription, and Suno's terms
give Pro subscribers ownership of what they make, so it is licensed on the same
terms as the code.

**Separately from the licence: the contact data is reproduced, not authored.**
The organisation names, phone numbers and web addresses are public information
published by those organisations. They carry no warranty beyond what
[mi-guia-verification.md](mi-guia-verification.md) records for a given date.
Re-check before relying on them.

Full terms in [LICENSE](LICENSE).
