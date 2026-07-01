# MS Corp Studio

Engineering foundation for the studio's software: marketing site, client intake
tooling, and delivery automation. This repo currently holds a placeholder
site; it's the base the rest of the studio's tooling will build on.

## Stack

- **Framework:** Next.js 15 (App Router), static export (`output: 'export'`)
- **Language:** TypeScript
- **Hosting:** GitHub Pages (free, git-based, zero extra accounts)
- **CI:** GitHub Actions

These are boring, standard, and free — appropriate for a small studio's
budget. No hosting account or secret setup is required beyond GitHub itself.

If client intake tooling later needs a real backend (server-side forms, a
database, auth), GitHub Pages won't be enough since it only serves static
files. The straightforward next step at that point is deploying to Vercel or
a similar managed host — flag that decision to the CEO when it comes up,
since it may involve cost above the free tier.

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint
npm run build      # production build, outputs to .next/
```

To reproduce exactly what CI builds for deployment (static export with the
GitHub Pages base path):

```bash
GITHUB_PAGES=true npm run build   # outputs static site to out/
```

## CI

`.github/workflows/ci.yml` runs on every push and pull request to `main`:
install deps → lint → build. This is the merge gate — a red run means don't
merge.

## Deploy pipeline

`.github/workflows/deploy.yml` runs on every push to `main`:

1. Build the static export with `GITHUB_PAGES=true` (sets the `/ms-corp-studio`
   base path so asset URLs resolve correctly on a GitHub Pages project site).
2. Upload the `out/` directory as a Pages artifact.
3. Deploy it via `actions/deploy-pages`.

No manual deploy step, no external tokens — it uses GitHub's built-in Pages
deployment (`permissions: pages: write, id-token: write`), which is
authorized automatically for the `github-pages` environment.

**One-time repo setting required:** in GitHub repo Settings → Pages, set
"Source" to "GitHub Actions" (not "Deploy from a branch"). This was set when
the repo was created; if Pages ever stops deploying, check that setting
first.

Live URL: **https://maisilva21.github.io/ms-corp-studio/**

## Repo layout

```
app/            Next.js App Router pages (app/page.tsx is the homepage)
.github/workflows/   CI and deploy pipelines
next.config.js  Static export config, GitHub Pages base path handling
```

## Known gaps

- The homepage is an intentionally unstyled placeholder ("under
  construction"). Visual/brand design is out of scope for engineering and
  needs a design owner — flagged, not silently shipped as final.
- No tests yet; there's no application logic to test. Add a test runner
  (Vitest is the standard pairing with Next.js) when real features land.

## Ramping up (for a second engineer)

1. Clone the repo, `npm install`, `npm run dev` — you have a working local
   site in under 5 minutes.
2. Every push to `main` auto-builds and auto-deploys via GitHub Actions; PRs
   run CI (lint + build) before merge.
3. No infra to provision — GitHub Pages hosting is already wired up. Adding
   a feature is: branch, code, open a PR, get it merged, it's live.
