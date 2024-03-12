import type { APIRoute } from 'astro'
// import { kv } from '@vercel/kv'

export const GET: APIRoute = async () => {
  // await kv.json.set('aboutme', '$', {
  //   data: {
  //     text: '<p>こんにちは！大岡正志と申します。</p><p>現在、株式会社ユーザベースでWebエンジニアをしています。</p><p>フロントエンド、バックエンド、インフラなど、幅広く開発を行っています。</p>',
  //   },
  // })
  // await kv.json.set('skills', '$', {
  //   data: [
  //     { items: ['HTML', 'CSS', 'JavaScript'], category: 'Frontend' },
  //     {
  //       items: [
  //         'Typescript',
  //         'Next.js',
  //         'React',
  //         'VueJS',
  //         'SvelteKit',
  //         'Svelte',
  //       ],
  //       category: 'JaveScript',
  //     },
  //     {
  //       items: ['Ruby', 'RubyOnRails', 'NestJS', 'GraphQL'],
  //       category: 'Backend',
  //     },
  //   ],
  // })
  // await kv.json.set('qualifications', '$', {
  //   data: [
  //     {
  //       date: '2023-06-03',
  //       topic: 'AWS Solution Artitect Associate',
  //       imageUrl: '/aws-saa.png',
  //     },
  //   ],
  // })
  // await kv.json.set('profile', '$', {
  //   data: {
  //     job: 'Web Developer',
  //     name: '大岡 正志 / Masashi Ooka',
  //     email: 'ooka.ms.0r7e2p3@gmail.com',
  //   },
  // })
  // const aboutme = await kv.json.get('aboutme', '$')
  return new Response(
    JSON.stringify({
      info: {
        // aboutme: aboutme[0].data,
        aboutme: {},
        // experience: experienceValue,
        // skills: skillsValue,
        // qualifications: qualificationsValue,
      },
    }),
  )
}
