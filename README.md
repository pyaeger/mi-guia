# Mi Guía de Ayuda

A single-page, offline-capable personal help guide in Spanish, designed for mobile phones.

- **Live app:** https://pyaeger.github.io/mi-guia/
- Fully self-contained: one HTML file, no accounts, no analytics, no external requests.
- Everything the user types is stored in the device's localStorage only — nothing is ever sent anywhere.
- Works completely offline after the first online load (service worker pre-caches the app and its song).
- Install on iPhone: open the link in Safari → Share → **Add to Home Screen** → open once while online.

## Contents

Seven collapsible sections with check-off steps and a progress bar: immigration legal resources (Louisville, KY), debt and credit card plan, honest income paths, weekly budget tracker, secure document checklist (including immigration case number), know-your-rights information, and mental health / community support — plus the original ballad *"O, Hache, Eme"* with an offline audio player.

## Files

- `index.html` — the entire app (markup, styles, logic)
- `sw.js` — service worker for offline caching
- `o-hache-eme.mp3` — original song, playable offline

This project was moved out of [`keons-playlist`](https://github.com/pyaeger/keons-playlist) into its own repository; the old URL redirects here. Because both live on the same `pyaeger.github.io` origin, users' saved data survived the move.
