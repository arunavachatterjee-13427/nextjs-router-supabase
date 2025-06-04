# Architecture Overview

The project uses Next.js 15 with the App Router. All pages and API routes live inside the `app/` directory. UI components are organized under `src/components` following the guidelines in [`src/components/AGENTS.md`](../src/components/AGENTS.md).

```
app/
  (auth)/    # authentication layouts and routes
  (dashboard)/
  api/        # route handlers
  dashboard/posts/ # server actions
  globals.css
  layout.tsx  # root layout
  page.tsx    # home page
lib/
  auth/       # RBAC helpers
  supabase/   # client and server auth
  types/      # shared TypeScript interfaces
src/
  components/ # UI components
```

## Technologies

- **Next.js 15** – React framework with the App Router
- **Supabase** – Postgres database and authentication
- **Vercel AI SDK** – OpenAI streaming chat utilities
- **Tailwind CSS** – Utility-first styling
- **TypeScript** – Static type checking

This structure is based on the Makerkit course recommendations.
