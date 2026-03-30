# Trivia Arena

A browser-based trivia game built with vanilla JavaScript, HTML, and CSS. Users select a category, answer timed multiple-choice questions, and track scores across sessions using local storage.

## Live Demo

(Need to add after creating personal site)

## Project Overview

This project was built to strengthen core JavaScript fundamentals by creating a fully interactive application without using frameworks.

It focuses on managing UI state, handling user input, and coordinating timed events in a clean and predictable way.

## Key Features

- Category selection before starting the quiz
- 10 randomized questions per game (no duplicates)
- One-question-at-a-time flow with controlled navigation
- 15-second timer per question with visual progress bar
- Automatic progression when time expires
- Immediate feedback after each answer:
  - Correct answer revealed
  - Visual indication (correct vs incorrect)
- Final score screen with:
  - Calculated score
  - Persistent scoreboard
  - Play again / reset options

## Data Persistence

- Scores are stored in `localStorage`
- Scoreboard persists across sessions
- Ability to reset stored scores

## Technical Highlights

- Fisher-Yates shuffle algorithm to randomize questions
- Controlled interval management to prevent timer stacking
- State-driven UI rendering using boolean flags
- Efficient DOM updates with minimal reflows
- Defensive handling of edge cases (no selection, timer expiry)

## Concepts Demonstrated

- DOM manipulation and dynamic element creation
- Event-driven architecture (form submit, button clicks)
- Timer control (`setInterval`, `clearInterval`)
- Application state management without frameworks
- Working with browser storage (`localStorage`)
- Refactoring for readability and maintainability

## Code Structure

- UI state handled through centralized flags and `checkUI()`
- Reusable helper functions for rendering
- Separation of concerns between:
  - data (questions)
  - logic (JS)
  - presentation (CSS)

## What I Learned

- How to manage application state without React or frameworks
- Preventing multiple intervals from running simultaneously
- Structuring code for readability and scalability
- Building UI flows that depend on asynchronous timing
- Identifying and fixing subtle bugs in event/timer interactions

## Things I Could Improve In The Future

- Add more categories and dynamic question loading
- Improve accessibility (keyboard navigation, ARIA)
- Enhance animations and transitions
- Add difficulty levels and scoring variations
- Prevent repeated questions across sessions

\*\* No dependencies or build tools required.
