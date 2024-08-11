import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      technicalPortfolio: [
        {
          imageUrl: '/chatgpt-cooking-assistant.png',
          name: "Maaaashi's Cooking Assistant",
          title: 'ChatGPTが料理のレシピとイメージ画像を生成',
          url: 'https://chatgpt-cooking-assistant.mss-rep.com/',
          description:
            'ChatGPTを使って料理のレシピとイメージ画像を生成するアプリケーションです。',
        },
      ],
    }),
  )
}
