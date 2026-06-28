# The Small Good Moments

A calm, single-page app that surfaces a culturally specific wellbeing ritual suited to the time of
day, lets you browse 52 rituals across five feeling clusters (Pause, Outside, Savour, Gather,
Reflect), runs a quiet breathing "moment" timer, and keeps a personal journal of the moments you've
gathered.

Built with **React + Vite + TypeScript**, backed by **Supabase** (Postgres + anonymous auth), and
deployed to **GitHub Pages**.

> Grown from the Claude-Design prototype in [`claude-design-artefacts/`](claude-design-artefacts/).

## How it works

- **Rituals** live in a public-read Postgres table (`rituals`), seeded from the catalogue.
- **Gathered moments** are a per-user journal (`gathered_moments`). Each device gets a hidden
  **anonymous** Supabase user, so your count, history and streak persist server-side (per device).
- Row-level security ensures each user can only ever read or write their own moments.

## Local development

```bash
npm install
cp .env.example .env   # fill in VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
npm run dev
```

The anon key is safe to expose in the client — access is constrained by RLS.

## Project layout

| Path | What it is |
|---|---|
| `src/` | React app — components, `lib/` data layer, `lib/timeOfDay.ts`, `lib/icons.tsx` |
| `supabase/migrations/0001_init.sql` | Schema, RLS policies |
| `supabase/seed.sql` | Generated ritual rows (don't edit by hand) |
| `scripts/parse-catalogue.mjs` | Parses the prototype catalogue → `seed.sql` (`npm run seed`) |
| `.github/workflows/deploy.yml` | Builds and deploys to GitHub Pages on push to `main` |

## Database changes

Edit `supabase/migrations/*.sql` and apply via the Supabase MCP server (registered for this project)
or the dashboard. To regenerate the ritual seed after editing the catalogue:

```bash
npm run seed   # writes supabase/seed.sql
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow, which builds with the
`VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` repository secrets and publishes to Pages at
`https://markrodseth-mmt.github.io/small-good-moments-app/`.

GitHub Pages requires either a **public** repository or a paid plan.

## A note of respect

Several of these words come from living cultures and traditions, some sacred. Entries that touch on
sacred practice, commercialisation, or ambivalent meaning carry a "hold this gently" caution and
their cultural context in the app. They are shared with care, not as decoration.

## Source

Definitions are condensed and rephrased from:
Lomas, T. (2016). *Towards a positive cross-cultural lexicography: Enriching our emotional landscape
through 216 'untranslatable' words pertaining to wellbeing.* Journal of Positive Psychology.
