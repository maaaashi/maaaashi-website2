import type { APIRoute } from 'astro'
import { kv } from '../../libs/kv'

export const GET: APIRoute = async () => {
  const technicalPortfolio = await kv.json.get('technicalPortfolio', '$')

  return new Response(
    JSON.stringify({
      technicalPortfolio: technicalPortfolio[0].data,
    }),
  )
}
