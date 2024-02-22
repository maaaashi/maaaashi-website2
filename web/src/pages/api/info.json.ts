import type { APIRoute } from 'astro'
import { prisma } from '../../libs/prisma'

export const GET: APIRoute = async () => {
  const data = await prisma.webSite.findMany({
    where: {
      OR: [
        { key: 'aboutme' },
        { key: 'experience' },
        { key: 'skills' },
        { key: 'qualifications' },
      ],
    },
  })

  const { value: aboutMeValue } = data.find((d) => d.key === 'aboutme')!
  const { value: experienceValue } = data.find((d) => d.key === 'experience')!
  const { value: skillsValue } = data.find((d) => d.key === 'skills')!
  const { value: qualificationsValue } = data.find(
    (d) => d.key === 'qualifications',
  )!

  return new Response(
    JSON.stringify({
      info: {
        aboutme: aboutMeValue,
        experience: experienceValue,
        skills: skillsValue,
        qualifications: qualificationsValue,
      },
    }),
  )
}
