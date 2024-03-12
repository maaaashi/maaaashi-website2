import type { APIRoute } from 'astro'
import { kv } from '../../libs/kv'

export const GET: APIRoute = async () => {
  const qualifications = await kv.json.get('qualifications', '$')

  return new Response(
    JSON.stringify({
      qualifications: qualifications[0].data,
    }),
  )
}
