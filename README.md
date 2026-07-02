# SharvaOS Today Cockpit — Vercel Ready

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

## Daily update rule

Do not edit HTML daily.

Update only:

```text
today.json
```

Then redeploy or push to Git if using GitHub integration.

## Recommended long-term setup

1. Put this folder into a GitHub repo.
2. Connect the repo to Vercel.
3. Edit `today.json` daily.
4. Push changes.
5. Notion embed keeps the same URL.
