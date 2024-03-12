import type { APIRoute } from 'astro'
import { kv } from '../../libs/kv'

type Profile = {
  name: string
  job: string
  email: string
}

export const GET: APIRoute = async () => {
  const myAge = Math.abs(
    new Date(
      new Date().getTime() - new Date('1996-07-23').getTime(),
    ).getUTCFullYear() - 1970,
  )
  const profile = await kv.json.get('profile', '$')
  const data = profile[0].data as Profile

  return new Response(
    JSON.stringify({
      profile: {
        name: data.name,
        age: myAge.toString(),
        job: data.job,
        email: data.email,
      },
    }),
  )
}
