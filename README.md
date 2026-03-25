# English Strike

English Strike is a daily business-English training app.
It is designed around evidence-backed habits:

- forced recall before answer reveal
- immediate corrective feedback
- spoken repetition
- spaced review
- real-world reuse tracking

## Product loop

1. Write one Japanese sentence you are likely to need at work today.
2. Produce the English version from memory.
3. Compare with natural, concise, and polite variants.
4. Read the chosen version aloud three times.
5. Review older prompts on a 1 / 3 / 7 day loop.
6. Mark whether you reused it in real work.

## Local commands

```bash
npm install
npm run build:daily-pack
npm run dev
```

## Deploy target

Default target: Cloudflare Workers with static assets.

- Static UI is served from `public/`
- Daily content is generated into `public/data/daily-pack.json`
- A daily cron job is configured in `wrangler.jsonc`

## Evidence note

The product loop is based on evidence-informed principles rather than a single study:

- retrieval practice improves retention relative to passive restudy
- repeated encounters improve vocabulary learning
- dialogue-based CALL shows positive effects on L2 speaking development
- pronunciation support is useful when it supports active practice and feedback

The exact 1 / 3 / 7 review schedule is a product judgment.
