import type { APIRoute } from 'astro'
import { prisma } from '../../libs/prisma'

export const GET: APIRoute = async () => {
  const data = await prisma.webSite.findFirst({
    where: {
      OR: [{ key: 'qualifications' }],
    },
  })

  return new Response(
    JSON.stringify({
      qualifications: data!.value,
    }),
  )
}
