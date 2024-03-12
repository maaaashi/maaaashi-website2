import type { APIRoute } from 'astro'
import { kv } from '@vercel/kv'

export const GET: APIRoute = async () => {
  process.env.KV_REST_API_URL = import.meta.env.KV_REST_API_URL
  process.env.KV_REST_API_TOKEN = import.meta.env.KV_REST_API_TOKEN
  console.log(process.env.KV_REST_API_URL)
  console.log(import.meta.env.KV_REST_API_URL)
  console.log(process.env.KV_REST_API_TOKEN)
  console.log(import.meta.env.KV_REST_API_TOKEN)
  const data = await kv.json.get('experience', '$')
  return new Response(
    JSON.stringify({
      experience: data[0].data,
    }),
  )
  return new Response(JSON.stringify({}))
}
