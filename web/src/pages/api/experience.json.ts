import type { APIRoute } from 'astro'
import { kv } from '../../libs/kv'

export const GET: APIRoute = async () => {
  const data = await kv.json.get('experience', '$')
  return new Response(
    JSON.stringify({
      experience: data[0].data,
    }),
  )
}
