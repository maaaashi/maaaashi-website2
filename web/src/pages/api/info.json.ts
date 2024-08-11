import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      info: {
        aboutme: {
          text: '<p>こんにちは！大岡正志と申します。</p><p>現在、株式会社ユーザベースでWebエンジニアをしています。</p><p>フロントエンド、バックエンド、インフラなど、幅広く開発を行っています。</p>',
        },
        experience: [
          {
            content:
              'In April 2016, I embarked on my academic journey in architecture, dedicating four years to the study of building design and construction. Throughout this period, I was constantly challenged by rigorous coursework and demanding projects, which made it an intensely demanding four years. Through this journey, I realized that while architecture offered valuable lessons and experiences, my true passion lay elsewhere. This realization led me to pivot towards the IT industry, an area where my interest had significantly grown. Motivated by this newfound direction, I embarked on job hunting in the IT sector, eager to explore the opportunities it presented.',
            date: '2020-03-31',
            topic: '千葉大学 工学部建築学科 卒業',
          },
          {
            content:
              "In April 2020, I joined Kimura Information Technology Co., Ltd., an IT company based in Saga Prefecture. For the initial six months, I spent my time in Saga, training as a Web Application Engineer. Following this period, I moved to the company's Tokyo branch, where I engaged in the development of AI chatbots.",
            date: '2020-04-01',
            topic: '木村情報技術株式会社 入社',
          },
          {
            content:
              'In October 2023, I left Kimura Information Technology Co., Ltd.',
            date: '2023-10-31',
            topic: '木村情報技術株式会社 退社',
          },
          {
            content:
              'Following an invitation from a former colleague, I joined Userbase Inc., a company focused on developing a platform for economic information. Here, I am involved in agile development processes and fully embrace pair programming practices.',
            date: '2023-11-01',
            topic: '株式会社ユーザベース 入社',
          },
          { content: '', date: '', topic: '現在' },
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
            date: '2023-06-03',
            imageUrl: '/aws-saa.png',
            topic: 'AWS Solution Artitect Associate',
          },
        ],
      },
    }),
  )
}
