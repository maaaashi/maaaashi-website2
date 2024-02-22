import type { APIRoute } from 'astro'
import { prisma } from '../../libs/prisma'

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

  const data = await prisma.webSite.findFirst({
    where: {
      OR: [{ key: 'profile' }],
    },
  })

  const { name, job, email } = data!.value as Profile

  return new Response(
    JSON.stringify({
      profile: {
        name: name,
        age: myAge.toString(),
        job: job,
        email: email,
      },
    }),
  )
}
