import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const myAge = Math.abs(
    new Date(
      new Date().getTime() - new Date('1996-07-23').getTime(),
    ).getUTCFullYear() - 1970,
  )

  return new Response(
    JSON.stringify({
      info: {
        aboutme: {
          text: '<p>こんにちは！大岡正志と申します。</p><p>現在、株式会社ユーザベースでWebエンジニアをしています。</p><p>フロントエンド、バックエンド、インフラなど、幅広く開発を行っています。</p>',
        },
        experience: [
          {
            date: new Date('2020-03-31'),
            topic: '千葉大学 工学部建築学科 卒業',
          },
          {
            date: new Date('2020-04-01'),
            topic: '木村情報技術株式会社 入社',
          },
          {
            date: new Date('2023-10-31'),
            topic: '木村情報技術株式会社 退社',
          },
          {
            date: new Date('2023-11-01'),
            topic: '株式会社ユーザベース 入社',
          },
        ],
        skills: [
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
        qualifications: [
          {
            date: new Date('2020-03-31'),
            topic: 'AWS Solution Artitect Associate',
          },
        ],
      },
    }),
  )
}
