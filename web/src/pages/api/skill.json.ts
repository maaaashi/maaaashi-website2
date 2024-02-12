import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      skill: [
        { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
        {
          category: 'JaveScript',
          items: [
            'Typescript',
            'Next.js',
            'React',
            'VueJS',
            'SvelteKit',
            'Svelte',
          ],
        },
        {
          category: 'Backend',
          items: ['Ruby', 'RubyOnRails', 'NestJS', 'GraphQL'],
        },
      ],
    }),
  )
}
