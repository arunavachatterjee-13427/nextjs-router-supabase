'use server'

import { z } from 'zod'
import { supabase } from '@/lib/supabase/client'
import type { Post } from '@/lib/types/post'

const postSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string()
})

export async function createPost(data: Post) {
  postSchema.parse(data)
  const { error } = await supabase.from('posts').insert(data)
  if (error) throw error
}

export async function updatePost(id: string, data: Partial<Post>) {
  postSchema.parse({ ...data, id })
  const { error } = await supabase.from('posts').update(data).eq('id', id)
  if (error) throw error
}

export async function deletePost(id: string) {
  const { error } = await supabase.from('posts').delete().eq('id', id)
  if (error) throw error
}
