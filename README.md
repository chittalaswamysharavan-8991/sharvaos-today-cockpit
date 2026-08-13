# SharvaOS Today Cockpit — frozen predecessor

> **Lifecycle:** Frozen. [SharvaOS-Pulse](https://github.com/chittalaswamysharavan-8991/SharvaOS-Pulse) is the canonical SharvaOS daily front door. This static cockpit remains available as historical/reference material; it is not an active second Today system.

Do not add features or resume routine `today.json` updates here. Move reusable presentation ideas to SharvaOS-Pulse through a reviewed change. No GitHub workflow or other writer automation was present when this boundary was established on 2026-08-13.

The previous deployment notes below are retained as historical operating context; they are not an instruction to create a parallel production surface.

## Historical implementation

This folder is ready to deploy to Vercel as a static site.

## Files

- `index.html` — root cockpit page for Vercel
- `today-cockpit.html` — same cockpit page, explicit file path
- `today.json` — daily-changing data file
- `last-good-snapshot.json` — fallback data
- `today-cockpit.schema.json` — schema and completion gate
- `vercel.json` — static deployment settings and no-cache headers for JSON
- `package.json` — optional convenience scripts

## Deploy with Vercel CLI

From this folder:

```bash
npm i -g vercel
vercel login
vercel deploy --prod
```

Vercel will return a public URL like:

```text
https://sharvaos-today-cockpit.vercel.app
```

Use that URL in Notion with `/embed`.

## Historical update rule

Do not edit HTML daily.

The predecessor was designed to update only:

```text
today.json
```

That routine is now stopped. Do not redeploy or push daily data updates.

## Superseded long-term setup

Use SharvaOS-Pulse for active Daily/Today work. Keep this repository frozen until repository settings can be changed to archived after consumer verification.
