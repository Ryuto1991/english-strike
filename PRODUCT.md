# English Strike Product Spec

## Mission

Install the daily habits that serious multilingual learners actually use, but compress them into a work-first English product.

## V1 outcome

The user should be able to take one Japanese work sentence per day and convert it into usable English under pressure.

## Core mechanisms

1. Forced recall before answer reveal.
2. Immediate feedback after attempt.
3. Spoken repetition after correction.
4. Spaced review on a fixed loop.
5. Reuse tracking in real work.

## Daily pack contract

- `run_date`
- `today.id`
- `today.japanese`
- `today.theme`
- `today.focus`
- `reviews[]`
- `evidence_summary[]`

## Hosting decision

Default stack:

- Cloudflare Workers
- static assets in `public/`
- cron trigger once daily

Why:

- clean separation from existing Vercel apps
- simple static deployment
- daily refresh is lightweight
