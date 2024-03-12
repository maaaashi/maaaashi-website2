import type { APIRoute } from 'astro'

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

  return new Response(
    JSON.stringify({
      profile: {
        name: '大岡',
        age: myAge.toString(),
        job: 'Web Developer',
        email: 'ooka.ms.0r7e2p3@gmail.com',
      },
    }),
  )
}
