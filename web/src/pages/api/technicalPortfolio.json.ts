import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      technicalPortfolio: [
        {
          name: "Maaaashi's Cooking Assistant",
          url: 'https://maaaashi-cooking-assistant.mss-rep.com',
          title: 'ChatGPTが料理のレシピとイメージ画像を生成',
          description:
            'ChatGPTを使って料理のレシピとイメージ画像を生成するアプリケーションです。',
          imageUrl: '/chatgpt-cooking-assistant.png',
        },
      ],
    }),
  )
}
