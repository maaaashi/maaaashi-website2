import type { APIRoute } from 'astro'
import { prisma } from '../../libs/prisma'

export const GET: APIRoute = async () => {
  const data = await prisma.webSite.findFirst({
    where: {
      OR: [{ key: 'experience' }],
    },
  })

  return new Response(
    JSON.stringify({
      experience: data!.value,
    }),
  )
}
