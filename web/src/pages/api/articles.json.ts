import type { APIRoute } from 'astro'
import axios from 'axios'

export const GET: APIRoute = async () => {
  // const response = await axios(
  //   'https://qiita.com/api/v2/items?per_page=50&query=user:maaaashi',
  //   {
  //     headers: {
  //       Authorization: `Bearer 31ad377d84f305eb057a445f6d44b06fb0586274`,
  //     },
  //   },
  // )
  const qiitaToken = import.meta.env.QIITA_TOKEN
  const response = await axios(
    'https://qiita.com/api/v2/authenticated_user/items?per_page=100',
    {
      headers: {
        Authorization: `Bearer ${qiitaToken}`,
      },
    },
  )
  console.log(response.headers['total-count'])
  // const articles = await response.data()
  return new Response(
    JSON.stringify({
      articles: response.data.filter((article: any) => !article.private),
    }),
  )
}
