import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      experience: [
        {
          date: new Date('2020-03-31'),
          topic: '千葉大学 工学部建築学科 卒業',
          content:
            'In April 2016, I embarked on my academic journey in architecture, dedicating four years to the study of building design and construction. Throughout this period, I was constantly challenged by rigorous coursework and demanding projects, which made it an intensely demanding four years. Through this journey, I realized that while architecture offered valuable lessons and experiences, my true passion lay elsewhere. This realization led me to pivot towards the IT industry, an area where my interest had significantly grown. Motivated by this newfound direction, I embarked on job hunting in the IT sector, eager to explore the opportunities it presented.',
        },
        {
          date: new Date('2020-04-01'),
          topic: '木村情報技術株式会社 入社',
          content:
            'In April 2016, I embarked on my academic journey in architecture, dedicating four years to the study of building design and construction. Throughout this period, I was constantly challenged by rigorous coursework and demanding projects, which made it an intensely demanding four years. Through this journey, I realized that while architecture offered valuable lessons and experiences, my true passion lay elsewhere. This realization led me to pivot towards the IT industry, an area where my interest had significantly grown. Motivated by this newfound direction, I embarked on job hunting in the IT sector, eager to explore the opportunities it presented.',
        },
        {
          date: new Date('2023-10-31'),
          topic: '木村情報技術株式会社 退社',
          content:
            'In April 2016, I embarked on my academic journey in architecture, dedicating four years to the study of building design and construction. Throughout this period, I was constantly challenged by rigorous coursework and demanding projects, which made it an intensely demanding four years. Through this journey, I realized that while architecture offered valuable lessons and experiences, my true passion lay elsewhere. This realization led me to pivot towards the IT industry, an area where my interest had significantly grown. Motivated by this newfound direction, I embarked on job hunting in the IT sector, eager to explore the opportunities it presented.',
        },
        {
          date: new Date('2023-11-01'),
          topic: '株式会社ユーザベース 入社',
          content:
            'In April 2016, I embarked on my academic journey in architecture, dedicating four years to the study of building design and construction. Throughout this period, I was constantly challenged by rigorous coursework and demanding projects, which made it an intensely demanding four years. Through this journey, I realized that while architecture offered valuable lessons and experiences, my true passion lay elsewhere. This realization led me to pivot towards the IT industry, an area where my interest had significantly grown. Motivated by this newfound direction, I embarked on job hunting in the IT sector, eager to explore the opportunities it presented.',
        },
        {
          date: new Date(),
          topic: '現在',
          content:
            'In April 2016, I embarked on my academic journey in architecture, dedicating four years to the study of building design and construction. Throughout this period, I was constantly challenged by rigorous coursework and demanding projects, which made it an intensely demanding four years. Through this journey, I realized that while architecture offered valuable lessons and experiences, my true passion lay elsewhere. This realization led me to pivot towards the IT industry, an area where my interest had significantly grown. Motivated by this newfound direction, I embarked on job hunting in the IT sector, eager to explore the opportunities it presented.',
        },
      ],
    }),
  )
}
