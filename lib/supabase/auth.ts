'use server'

import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'
import { z } from 'zod'

const signInSchema = z.object({ email: z.string().email(), password: z.string() })
const signUpSchema = signInSchema

function getClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: () => cookies() } as any
  )
}

export async function signIn(formData: FormData) {
  const data = Object.fromEntries(formData)
  const { email, password } = signInSchema.parse(data)
  const supabase = getClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
}

export async function signUp(formData: FormData) {
  const data = Object.fromEntries(formData)
  const { email, password } = signUpSchema.parse(data)
  const supabase = getClient()
  const { error } = await supabase.auth.signUp({ email, password })
  if (error) throw error
}

export async function signOut() {
  const supabase = getClient()
  await supabase.auth.signOut()
}
