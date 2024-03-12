import { kv } from '@vercel/kv'
import type { APIRoute } from 'astro'

export const POST: APIRoute = async (c) => {
  const json = await c.request.json()
  const key = json.key
  const value = json.value
  await kv.json.set(key, '$', value)

  return new Response()
}
