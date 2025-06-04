# AGENTS.md

## Project Overview
Build a smart blogging assistant SaaS application using Next.js App Router (v14+), Supabase, and the OpenAI API, following the Makerkit.dev course structure.

## Coding Standards
- Use TypeScript for all code files.
- Follow Next.js App Router conventions:
  - Place all pages, layouts, templates, and API routes in the `app` directory.
  - Use `page.tsx` for pages, `layout.tsx` for layouts, `template.tsx` for templates, and `route.ts` for API handlers.
- Use Tailwind CSS for styling.
- Prefer functional React components.
- Use `use client` directive for interactive/client components.
- Use `use server` directive for server actions.

## Architecture & Features
- Implement authentication using Supabase.
- Store and retrieve data from Supabase (Postgres).
- Integrate the OpenAI API via the Vercel AI SDK for content generation.
- Implement CRUD operations for blog posts.
- Add Stripe integration for payments and subscription management.
- Enforce permissions and usage thresholds based on subscription plan.
- Prepare for deployment to Vercel and Supabase.

## Best Practices
- Write clear, concise, and well-documented code.
- Use environment variables for API keys and secrets.
- Validate all user input.
- Ensure accessibility (a11y) in UI components.
- Write reusable and modular components.

## Testing & Linting
- Use ESLint and Prettier for code formatting and linting.
- Add basic tests for critical business logic (if possible).

## Pull Requests & Commits
- Use descriptive commit messages (e.g., `[Feature] Add Supabase auth flow`).
- Summarize changes and testing steps in pull requests.

## Additional Notes
- Reference the Makerkit.dev course for step-by-step implementation.
- Ask for clarification if requirements are ambiguous.
