# AGENTS.md

## Core Stack Requirements
- Next.js 14+ with App Router
- TypeScript 5.3+
- Tailwind CSS 3.4+
- Supabase JS Client v5
- Vercel AI SDK 3.1+

## Directory Structure Rules
### App Router Convention
```
// Route handlers: app/api/[route]/route.ts
export async function GET(request: Request) {
  // Implementation
}
```

### Component Organization
```
app/
  components/
    ui/ # Shadcn/ui components
    core/ # Business logic components
  lib/ # Shared utilities
```

## Supabase Integration Standards
```
// lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

## AI Implementation Rules
```
// app/api/chat/route.ts
export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    stream: true,
    messages
  })
  return new StreamingTextResponse(response)
}
```

## Validation Workflow
```
# Pre-commit checks
npm run lint && npm run type-check && npm run test:ci

# Security scan
npx snyk test --severity-threshold=high
```

## PR Guidelines
### Title Format
`[Lesson X] [Feature|Fix|Chore] Brief description`

### Required Sections
```
## Changes Made
- List structural changes

## Testing Performed
- [ ] Local dev server
- [ ] Type checking
- [ ] Cross-browser (Chrome, Safari, Firefox)
```

## Course Implementation
Follow structure from:  
https://makerkit.dev/courses/nextjs-app-router

### Key Requirements
1. Implement blog post editor from Chapter 3
2. Add subscription tiers from Chapter 5
3. Configure Vercel deployment per Chapter 8
```
