# AI Resume Parser & Job Matcher

**Estimated time:** ~4 hours  
(We care far more about clean architecture, thoughtful design, and readability than about finishing every single bullet point. A beautiful partial solution beats a rushed complete one every time.)

### What you’ll be building

Implement the core AI-powered feature our ATS lives on:

1. User opens the web app
2. Uploads a PDF resume (we already provide a sample PDF in `apps/web/public/sample-resume.pdf`)
3. Backend receives the PDF → extracts text → sends it to **Grok** (xAI)
4. Grok returns structured candidate data (name, email, years of experience, skills[], work history, etc.) using structured outputs
5. Backend saves the parsed candidate and computes a match score + explanation against the **pre-seeded job** in the database
6. Frontend displays: parsed candidate, match score (0–100%), and AI-generated explanation

There is **no authentication**, **no job creation**, and **no user management** — everything is deliberately stripped away so you can focus on the hard parts we actually care about.

### Tech Requirements (non-negotiable)

-   Backend: **NestJS** with **CQRS** (`@nestjs/cqrs`)
-   Frontend: **Next.js 14+ App Router** + React Server Components / Server Actions encouraged
-   AI: Use **only** `@ai-sdk/xai` and the **Grok** model  
    → You will receive your personal xAI API key separately (never commit it)
-   PDF text extraction: `pdf-parse` (already installed)
-   Structured output from Grok: JSON mode or tools — your choice
-   Database: PostgreSQL + TypeORM (already wired)

### Pre-seeded Data

After `docker compose up --build` a job posting already exists:

```json
{
    "id": "00000000-0000-0000-0000-000000000001",
    "title": "Senior Full-Stack Engineer (NestJS + Next.js + AI)",
    "description": "...",
    "requirements": "5+ years TypeScript · Expert in NestJS & CQRS · Next.js App Router · Experience calling LLMs · Clean architecture · Prompt engineering skills"
}
```

You must match against this exact job.

### Must-Have Deliverables

| Priority | Feature                                                                    |
| -------- | -------------------------------------------------------------------------- |
| 1        | File upload from Next.js → NestJS (multipart/form-data)                    |
| 2        | Extract text from PDF on backend                                           |
| 3        | Call Grok via `@ai-sdk/xai` with a prompt that returns strictly-typed JSON |
| 4        | Save parsed candidate (create a Candidate entity + migration)              |
| 5        | CQRS command(s) + query(ies) for the parsing & matching flow               |
| 6        | Compute a numeric score (0–100) + short AI-generated explanation           |
| 7        | Return results to frontend and display them nicely                         |
| 8        | At least 2–3 meaningful backend tests (unit or integration)                |

### Bonus (only if you have time)

-   Streaming Grok response to frontend
-   Background job / queue simulation
-   Retry logic when Grok returns invalid JSON
-   Highlight matching/missing requirements in UI
-   Idempotent uploads (same resume → same candidate)

### What We Evaluate (in order of importance)

1. Clean CQRS architecture & separation of concerns
2. Prompt design & reliable structured output with Grok + `@ai-sdk/xai`
3. Type safety, validation, DTOs
4. Error handling & user experience when parsing fails
5. Security (no key leaks, proper file size limits, etc.)
6. Modern Next.js patterns (Server Actions, RSC, streaming)
7. Readability, naming, commit history
8. Tests

### Getting Started

```bash
# First time only
docker compose up --build   # starts Postgres

# Then, in another terminal
npm run dev                 # starts both API + Web with hot-reload (TurboRepo)
```

-   Web: http://localhost:3001
-   API: http://localhost:3000
-   Sample resume: http://localhost:3001/sample-resume.pdf (already in `apps/web/public`)

Add your xAI API key to `.env` files (examples are provided):

```env
# apps/api/.env
XAI_API_KEY=your_key_here
```

### Submission

1. Push all your code to a **private** GitHub repo
2. Invite these GitHub users as collaborators (you’ll receive the list with your API key)
3. Send us the repo URL

We will:

-   Run `docker compose up --build && npm run dev`
-   Upload the sample resume
-   Read every line of code
-   Discuss your design decisions (especially prompts, CQRS structure, error handling, and trade-offs) in the technical interview

We’re genuinely excited to see how you think.  
Build something you’d be proud to ship — that’s exactly what we do every day.

Good luck!
