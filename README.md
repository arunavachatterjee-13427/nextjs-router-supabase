# Next.js Supabase Starter

This project is a learning exercise following the [Makerkit Next.js App Router Course](https://makerkit.dev/courses/nextjs-app-router). It demonstrates how to combine **Next.js 15**, **Supabase**, **Vercel AI SDK**, and **Tailwind CSS** to build a simple dashboard with authentication and AI-powered chat.

## Features

- App Router structure with `app/` directory
- Supabase authentication via server actions
- Streaming chat endpoint using Vercel AI SDK and OpenAI
- Basic blog post CRUD operations
- Tailwind CSS styling
- Role-based access control helpers

## Setup

1. Install dependencies:
   ```bash
   npm ci
   ```
2. Create a `.env.local` file and provide the following variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   OPENAI_API_KEY=your-openai-key
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Local Development

Use the default `next dev` command. Type checking and linting can be run with:

```bash
npm run lint
npm run type-check
```

There are currently no unit tests, so `npm run test:ci` simply echoes a message.

## Key Scripts

- `npm run dev` – start the local dev server
- `npm run build` – build for production
- `npm run start` – run the production server
- `npm run lint` – ESLint checks
- `npm run type-check` – TypeScript validation
- `npm run test:ci` – placeholder test script

## Deployment

### Vercel

1. Push the repository to GitHub.
2. Create a new project in Vercel and import the repo.
3. Add the environment variables from `.env.local` in the Vercel dashboard.
4. Vercel will install dependencies and run `npm run build` automatically.

### Supabase

1. Create a Supabase project.
2. Obtain the project URL and anon key and add them to your environment variables.
3. Use the Supabase dashboard to manage your database and authentication settings.

## Reference

- This codebase follows guidelines defined in [`AGENTS.md`](./AGENTS.md).
- Based on lessons from the [Makerkit Next.js App Router course](https://makerkit.dev/courses/nextjs-app-router).

