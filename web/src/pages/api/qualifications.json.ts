import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      qualifications: [
        {
          date: new Date('2020-03-31'),
          topic: 'AWS Solution Artitect Associate',
        },
      ],
    }),
  )
}
