import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      qualifications: [
        {
          date: new Date('2023-06-04'),
          topic: 'AWS Solution Artitect Associate',
          imageUrl: '/aws-saa.png',
        },
      ],
    }),
  )
}
