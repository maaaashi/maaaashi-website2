import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const myAge = Math.abs(
    new Date(
      new Date().getTime() - new Date('1996-07-23').getTime(),
    ).getUTCFullYear() - 1970,
  )

  return new Response(
    JSON.stringify({
      profile: {
        name: '大岡 正志 / Masashi Ooka',
        age: myAge.toString(),
        job: 'Web Application Engineer',
        email: 'ooka.ms.0r7e2p3@gmail.com',
      },
    }),
  )
}
