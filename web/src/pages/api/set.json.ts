import { kv } from '@vercel/kv'
import type { APIRoute } from 'astro'

export const POST: APIRoute = async (c) => {
  c.params
  await kv.json.set('experience', '$', {})

  return new Response()
}
