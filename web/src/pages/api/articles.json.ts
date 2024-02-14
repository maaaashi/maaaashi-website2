import type { APIRoute } from 'astro'
import axios from 'axios'

export const GET: APIRoute = async ({ params }) => {
  console.log(params)
  const qiitaToken = import.meta.env.QIITA_TOKEN
  let page = 1
  let articles: any[] = []
  let searcheable = true
  do {
    const response = await axios(
      `https://qiita.com/api/v2/authenticated_user/items?page=${page}&per_page=100`,
      {
        headers: {
          Authorization: `Bearer ${qiitaToken}`,
        },
      },
    )

    articles = [
      ...articles,
      ...response.data.filter((article: any) => !article.private),
    ]

    const links: string[] = response.headers['link'].split(',')
    searcheable = links.some(
      (link) => link.trim().split(';')[1].trim() === 'rel="next"',
    )
    page++
  } while (searcheable)

  return new Response(
    JSON.stringify({
      articles: articles
        .sort((a, b) => {
          const aScore = a.likes_count + a.stocks_count
          const bScore = b.likes_count + b.stocks_count
          if (aScore > bScore) {
            return -1
          } else if (aScore === bScore) {
            return 0
          }
          return 1
        })
        .slice(0, 10),
    }),
  )
}
