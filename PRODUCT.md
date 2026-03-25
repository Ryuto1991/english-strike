# English Strike Product Spec

## Mission

Optimize a low-intermediate English learner for work survival first.
English Strike exists to install the habits that serious multilingual learners use, but compress them into a work-first operating system.

This product is for a user who cannot wait for "eventual fluency".
It is for a user who must become functional in business English within this year.

## User reality

- estimated level: IELTS 3.5-4.0
- current risk: freezes under pressure, cannot reliably produce work English
- real need: short, reusable English for real work situations
- non-goal: sounding advanced before becoming functional

## Product outcome

The user should be able to take one Japanese work sentence per day and convert it into usable English under pressure.

The first concrete outcome is:

- give a short update
- report a blocker
- confirm understanding
- ask for action
- buy time when listening fails

## Evidence-backed product rules

### 1. Retrieval before reveal

The product must force output before showing the model answer.

Reason:

- retrieval practice outperforms passive restudy for retention
- foreign-language digital flashcard research reports a robust retrieval practice effect

### 2. Immediate corrective feedback

After the attempt, the product must return:

- a natural answer
- a concise answer
- a polite answer
- the main gap in the user's attempt

Reason:

- learners improve through output-feedback contrast, not passive exposure alone

### 3. Fixed spaced review

The product must re-surface prior items on a fixed loop.
V1 uses `1 / 3 / 7` days.

Reason:

- repetition and spaced encounters improve vocabulary learning

Inference boundary:

- `1 / 3 / 7` is a product judgment, not a single-paper requirement

### 4. Spoken repetition is mandatory

The product must require at least three read-aloud repetitions after correction.

Reason:

- pronunciation support is useful when active practice and feedback are present

### 5. Work-task grounding

The product must prefer business tasks over free chat.

Examples:

- progress report
- delay explanation
- alignment check
- request
- follow-up
- proposal
- listening recovery

Reason:

- dialogue-based CALL shows positive effects on L2 speaking development
- goal-oriented systems are more relevant than generic chat for this user

## Product shape

English Strike is not a broad course.
It is a daily output loop.

### Morning loop

1. Capture one Japanese work sentence.
2. Force recall in English.
3. Reveal support.
4. Read aloud three times.

### Evening loop

1. Review prior items.
2. Mark reuse in real work.
3. Re-queue weak items.

## Initial curriculum

The first curriculum should not start with free discussion.
It should start with high-frequency work survival sentences.

### Phase 1

- progress reporting
- issue reporting
- confirmation
- requests

### Phase 2

- proposals
- tradeoff explanations
- meeting control
- follow-up summaries

### Phase 3

- recovery lines
- soft disagreement
- escalation
- short live speaking drills

## First assignment

Before sophisticated content generation, collect a personal sentence bank.

The first assignment is:

- write 12 Japanese work sentences
- 3 for progress reporting
- 3 for issue reporting
- 3 for confirmation
- 3 for requests

Constraints:

- every sentence must be realistic
- one sentence, one intent
- no abstract study examples

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
