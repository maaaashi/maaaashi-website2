import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      qualifications: [
        {
          date: '2023-06-03',
          imageUrl: '/aws-saa.png',
          topic: 'AWS Solution Artitect Associate',
        },
      ],
    }),
  )
}
