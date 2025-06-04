# Supabase Authentication

Authentication is handled with server actions that use the Supabase SSR client. Helpers are defined in `lib/supabase/auth.ts`.

```
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'

function getClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: () => cookies() } as any
  )
}
```

### Actions
- `signIn(formData)` – Parses form data with Zod and calls `supabase.auth.signInWithPassword`.
- `signUp(formData)` – Calls `supabase.auth.signUp`.
- `signOut()` – Invokes `supabase.auth.signOut`.

These actions can be imported into client components using the `use server` directive for secure server-side authentication flows.
