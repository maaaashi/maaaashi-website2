import { CiBookmark, CiHeart } from 'react-icons/ci'
import { QiitaCard } from './Activities/QiitaCard'
import type { FC } from 'react'

interface Props {
  article?: {
    title: string
    likes: number
    stocks: number
  }
}

export const Card: FC<Props> = ({ article }) => {
  if (!article)
    return (
      <div className='min-w-96 w-96 card glass'>
        <figure className='p-4'>
          <div className='skeleton h-[185px] w-[350px]'></div>
        </figure>
        <div className='card-body'>
          <div className='card-title justify-end'>
            <dl className='flex items-center gap-2'>
              <dt>
                <CiHeart />
              </dt>
              <dd>
                <div className='skeleton h-4 w-4'></div>
              </dd>
            </dl>
            <dl className='flex items-center gap-2'>
              <dt>
                <CiBookmark />
              </dt>
              <dd>
                <div className='skeleton h-4 w-4'></div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    )
  return (
    <div className='min-w-96 w-96 card glass'>
      <figure>
        <a
          href='https://qiita.com/maaaashi/items/43210e781f657777fe56'
          target='_blank'
        >
          <QiitaCard title={article.title} />
        </a>
      </figure>
      <div className='card-body'>
        <div className='card-title justify-end'>
          <dl className='flex items-center gap-2'>
            <dt>
              <CiHeart />
            </dt>
            <dd>{article.likes}</dd>
          </dl>
          <dl className='flex items-center gap-2'>
            <dt>
              <CiBookmark />
            </dt>
            <dd>{article.stocks}</dd>
          </dl>
        </div>
      </div>
    </div>
  )
}
