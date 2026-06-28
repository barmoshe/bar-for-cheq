# bar-for-cheq

An AI Engineer application to [CHEQ](https://cheq.ai), with a live
traffic-intelligence console instead of a cover letter.

The page is a one-screen pitch in CHEQ's visual language, with a live demo at its
center: sessions stream in and get classified the way CHEQ frames it, human, bot,
AI agent or bad actor, each with a risk score, the signals behind it, granular
per-action access decisions (browse / sign up / checkout), and a one-line read
from an AI analyst. Pick any session, then apply the recommended policy.

The demo is fully client-side and deterministic: no network and no model call. The
real thing would run CHEQ's detection behind a Snowflake-fed pipeline; the product
thinking is the same.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind v4 (CSS-first `@theme`)
- `next/og` for the share image

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Layout

- `app/` — layout, page, global tokens, generated OG image
- `components/ThreatConsole.tsx` — the interactive console (streaming feed, decisions)
- `components/` — Hero, ProofCards, HowIBuild, Contact and the rest of the page
- `lib/demoData.ts` — the scripted sessions and verdicts

Built by Bar Moshe. Not affiliated with CHEQ.
