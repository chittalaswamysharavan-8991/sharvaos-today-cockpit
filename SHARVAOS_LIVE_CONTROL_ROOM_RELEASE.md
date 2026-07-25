# SharvaOS Live Control Room — v1.0.0

This isolated branch records the production release identity for SharvaOS Live Control Room. The existing `main` branch remains untouched.

## Release identity

- Production: https://sharvaos-live-control-room.vercel.app
- Vercel deployment: `dpl_B3Cup7VpHXxRGru6w9kBnQFFeR26`
- Vercel project: `prj_ZKdhtVQBwemUGBm1muQd2jaBzLib`
- Supabase project ref: `vhzzugeeadaijkzrvowx`
- Notion hub: https://app.notion.com/p/3a84c9f740e381fd8358e5ae9c1cb032
- Canonical reviewed source package: `/SharvaOS/BuildOS/SharvaOS Live Control Room/SharvaOS-Live-Control-Room-v1.0.0-source.zip`
- QA evidence package: `/SharvaOS/BuildOS/SharvaOS Live Control Room/SharvaOS-Live-Control-Room-v1.0.0-evidence.zip`
- Release verdict: `APPROVED WITH RECORDED LIMITATIONS`

## Why the full source is not committed here

The connected GitHub action can write individual UTF-8 files but cannot create a new repository or bulk-upload the reviewed local source tree. To avoid overwriting an unrelated application, this dedicated branch contains the release record while the complete source and checksums remain in the canonical SharvaOS Library folder.

## Remaining operational proof

Complete one approved-email magic-link sign-in from the production URL to prove callback, authenticated RLS reads, Realtime refresh, logout, and session recovery. No RLS or authentication protection was weakened to bypass this proof.
