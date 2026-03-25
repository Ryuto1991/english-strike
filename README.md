# English Strike

English Strike is not a generic English-learning app.
It is a business-English survival training system for a learner around IELTS 3.5-4.0 who still needs to function in work English within this year.

The goal is not broad English improvement.
The goal is to make short, useful work English come out on demand.

## Core design

English Strike is built around five evidence-informed rules:

1. Forced recall before answer reveal.
2. Immediate corrective feedback after output.
3. Spoken repetition after correction.
4. Spaced review on a fixed loop.
5. Real-world reuse tracking.

This app does not optimize for native-like elegance first.
It optimizes for survival, clarity, and repeatable work use.

## Daily loop

1. Write one Japanese sentence you are likely to need at work today.
2. Produce the English version from memory before seeing support.
3. Compare with natural, concise, and polite variants.
4. Read the chosen version aloud three times.
5. Review older prompts on a 1 / 3 / 7 day loop.
6. Mark whether you reused it in real work.

## What this app is for

- progress updates
- blocker reporting
- confirmation and alignment
- requests and follow-ups
- proposals and tradeoff explanations
- recovery lines when listening or speaking breaks down

## What this app is not for

- long grammar lectures
- passive video-first study
- abstract chat detached from work situations
- streaks without output
- perfection-first speaking practice

## First milestone

The first milestone is not fluency.
It is the ability to survive work communication with short, reusable English.

The initial training target is a bank of high-frequency work sentences across:

- progress reporting
- issue escalation
- confirmation
- requests

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

The exact 1 / 3 / 7 review schedule is a product judgment inferred from the evidence base.
