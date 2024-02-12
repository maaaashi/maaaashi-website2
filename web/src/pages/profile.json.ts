import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const myAge = Math.abs(
    new Date(
      new Date().getTime() - new Date('1996-07-23').getTime()
    ).getUTCFullYear() - 1970
  )

  return new Response(
    JSON.stringify({
      name: '大岡 正志 / Masashi Ooka',
      age: myAge.toString(),
      job: 'Web Application Engineer',
      email: 'ooka.ms.0r7e2p3@gmail.com',
      aboutme: {
        text: `<p>こんにちは！大岡正志と申します。</p>
      <p>現在、株式会社ユーザベースでWebエンジニアをしています。</p>
      <p>
        フロントエンド、バックエンド、インフラなど、幅広く開発を行っています。
      </p>
      `,
      },
      experience: [
        {
          date: new Date('2020-03-31'),
          topic: '千葉大学 建築学科 卒業',
          description:
            'In April 2016, I embarked on my academic journey in architecture, dedicating four years to the study of building design and construction. Throughout this period, I was constantly challenged by rigorous coursework and demanding projects, which made it an intensely demanding four years. Through this journey, I realized that while architecture offered valuable lessons and experiences, my true passion lay elsewhere. This realization led me to pivot towards the IT industry, an area where my interest had significantly grown. Motivated by this newfound direction, I embarked on job hunting in the IT sector, eager to explore the opportunities it presented.',
        },
        {
          date: new Date('2020-04-01'),
          topic: '木村情報技術株式会社 入社',
          description:
            'In April 2016, I embarked on my academic journey in architecture, dedicating four years to the study of building design and construction. Throughout this period, I was constantly challenged by rigorous coursework and demanding projects, which made it an intensely demanding four years. Through this journey, I realized that while architecture offered valuable lessons and experiences, my true passion lay elsewhere. This realization led me to pivot towards the IT industry, an area where my interest had significantly grown. Motivated by this newfound direction, I embarked on job hunting in the IT sector, eager to explore the opportunities it presented.',
        },
        {
          date: new Date('2023-10-31'),
          topic: '木村情報技術株式会社 退社',
          description:
            'In April 2016, I embarked on my academic journey in architecture, dedicating four years to the study of building design and construction. Throughout this period, I was constantly challenged by rigorous coursework and demanding projects, which made it an intensely demanding four years. Through this journey, I realized that while architecture offered valuable lessons and experiences, my true passion lay elsewhere. This realization led me to pivot towards the IT industry, an area where my interest had significantly grown. Motivated by this newfound direction, I embarked on job hunting in the IT sector, eager to explore the opportunities it presented.',
        },
        {
          date: new Date('2023-11-01'),
          topic: '株式会社ユーザベース 入社',
          description:
            'In April 2016, I embarked on my academic journey in architecture, dedicating four years to the study of building design and construction. Throughout this period, I was constantly challenged by rigorous coursework and demanding projects, which made it an intensely demanding four years. Through this journey, I realized that while architecture offered valuable lessons and experiences, my true passion lay elsewhere. This realization led me to pivot towards the IT industry, an area where my interest had significantly grown. Motivated by this newfound direction, I embarked on job hunting in the IT sector, eager to explore the opportunities it presented.',
        },
      ],
      skill: [
        { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
      ],
      qualification: [
        {
          date: new Date('2020-03-31'),
          topic: 'AWS Solution Artitect Associate',
        },
      ],
      activities: [
        {
          title: 'Qiita',
          content: 'https://qiita.com/maaaashi',
          image:
            'https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZoPTMzNiZ0eHQ9Q2hhdEdQVCVFMyU4MSVBQiVFNiU5NiU5OSVFNyU5MCU4NiVFMyU4MSVBRSVFMyU4MyVBQyVFMyU4MiVCNyVFMyU4MyU5NCVFMyU4MyVCQiVFMyU4MiVCNSVFMyU4MyVBMCVFMyU4MyU4RCVFMyU4MiVBNCVFMyU4MyVBQiVFNyU5NCVCQiVFNSU4MyU4RiVFMyU4MiU5MiVFNCVCRCU5QyVFNiU4OCU5MCVFMyU4MSU5NyVFMyU4MSVBNiVFMyU4MiU4MiVFMyU4MiU4OSVFMyU4MSU4NiVFMyU4MiVBMiVFMyU4MyU5NyVFMyU4MyVBQSVFMyU4MiU5MiVFNCVCRCU5QyVFMyU4MSVBMyVFMyU4MSVBNiVFMyU4MSVCRiVFMyU4MSU5RiZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTU2JnR4dC1jbGlwPWVsbGlwc2lzJnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9MDg4NWQwZmFjOWM4MmVmYjE0ZmM1NTIxNGZjNTYxMDE&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwbWFhYWFzaGkmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zNiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPTE2MmMyZWE3YmExNTg2Y2RlYzhiYzc2ODA3OWM4NDQ3&blend-x=142&blend-y=491&blend-mode=normal&s=84809979c679b291069b7fb1e98412f2',
          good: 11,
          stocked: 6,
        },
      ],
    })
  )
}
