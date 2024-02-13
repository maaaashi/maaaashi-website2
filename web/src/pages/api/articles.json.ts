import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  // const response = await fetch(
  //   'https://qiita.com/api/v2/items?per_page=100&query=user:maaaashi',
  // )
  // const articles = await response.json()
  // console.log(await response.json())
  // return new Response(
  //   JSON.stringify({
  //     articles,
  //   }),
  // )
  return new Response(
    JSON.stringify({
      message: 'success!',
    }),
  )
}
