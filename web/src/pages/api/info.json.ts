import type { APIRoute } from 'astro'
import { kv } from '../../libs/kv'

export const GET: APIRoute = async () => {
  const aboutme = await kv.json.get('aboutme', '$')
  const experience = await kv.json.get('experience', '$')
  const skills = await kv.json.get('skills', '$')
  const qualifications = await kv.json.get('qualifications', '$')

  return new Response(
    JSON.stringify({
      info: {
        aboutme: aboutme[0].data,
        experience: experience[0].data,
        skills: skills[0].data,
        qualifications: qualifications[0].data,
      },
    }),
  )
}
