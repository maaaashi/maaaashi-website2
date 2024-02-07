import { BsArrowRightSquareFill } from 'react-icons/bs'

export const Card = () => {
  return (
    <div className='card min-w-96 w-96 glass'>
      <figure>
        <img src='/qiita.png' alt='qiita' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          ChatGPTに料理のレシピ・サムネイル画像を作成してもらうアプリを作ってみた
        </h2>
        <p>AWS TypeScript Next.js prisma ChatGPT</p>
        <div className='card-actions justify-end'>
          <a
            className='btn btn-primary btn-link'
            href='https://qiita.com/maaaashi/items/43210e781f657777fe56'
          >
            View
            <BsArrowRightSquareFill size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
