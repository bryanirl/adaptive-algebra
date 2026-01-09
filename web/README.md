# Algebra Practice App

A simple web app for practicing algebra problems with instant feedback and progress tracking.  
Built to explore clean state modeling, controlled inputs, and deliberate UI state transitions in React.

---

## Motivation

I built this project to practice frontend fundamentals:
- state-driven UI
- predictable rendering
- clear separation of concerns
- finishing a complete interaction loop instead of isolated demos

---

## Features

- Randomized algebra problems (no repeats until full coverage)
- Controlled input with numeric validation
- Instant feedback on answers
- Attempt and correctness tracking
- Clear progression between problems
- Minimal, focused UI

---

## How It Works

- A fixed set of problems is shuffled once at load
- The app tracks a `currentIndex` to move through the shuffled list
- Each problem can only be submitted once
- UI state is driven entirely by React state (no direct DOM manipulation)
- When all problems are completed, the list reshuffles and restarts

Key state variables:
- `currentIndex` — which problem is active
- `attempts` — total number of submissions
- `correct` — number of correct answers
- `value` — current input value
- `result` — null | true | false (drives UI phase)

---

## Tech Stack

- React (Next.js App Router)
- TypeScript
- Tailwind CSS

No backend or persistence yet — intentionally kept client-only for clarity.

---

## Tradeoffs & Design Decisions

- Used a shuffle-once + index pattern instead of random selection to avoid repeats and simplify state
- Avoided combining unrelated state variables (e.g. attempts vs progression)
- Conditional rendering is driven by semantic state (`result === null`) rather than extra flags
- Deferred backend, auth, and AI features to keep the core loop solid first

---

## Future Improvements

- Persist progress using localStorage
- Add difficulty tiers with adaptive progression
- Extract logic into custom hooks
- Optional backend for user accounts
- AI generated problem sets

---

## What This Project Demonstrates

- Clean React state modeling
- Thoughtful UI state transitions
- Ability to finish a feature end-to-end
- Debugging and iteration on real user behavior
