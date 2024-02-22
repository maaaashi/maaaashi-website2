import type { APIRoute } from 'astro'
import { prisma } from '../../libs/prisma'

export const GET: APIRoute = async () => {
  const data = await prisma.webSite.findFirst({
    where: {
      OR: [{ key: 'technicalPortfolio' }],
    },
  })

  return new Response(
    JSON.stringify({
      technicalPortfolio: data!.value,
    }),
  )
}
