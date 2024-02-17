import { QiitaCard } from './QiitaCard'
import type { FC } from 'react'
import { FaBookmark, FaHeart } from 'react-icons/fa'

interface Props {
  article?: {
    title: string
    likes: number
    stocks: number
    link: string
  }
}

export const Card: FC<Props> = ({ article }) => {
  if (!article)
    return (
      <div className='min-w-72 w-72 card glass'>
        <figure className='p-4'>
          <div className='skeleton h-[175px] w-[350px]'></div>
        </figure>
        <div className='card-body'>
          <div className='card-title justify-end'>
            <dl className='flex items-center gap-2'>
              <dt className='text-red-300'>
                <FaHeart />
              </dt>
              <dd>
                <div className='skeleton h-4 w-4'></div>
              </dd>
            </dl>
            <dl className='flex items-center gap-2'>
              <dt>
                <FaBookmark />
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
    <div className='min-w-72 w-72 card glass md:hover:brightness-90 award'>
      <figure>
        <a href={article.link} target='_blank'>
          <QiitaCard title={article.title} />
        </a>
      </figure>
      <div className='card-body'>
        <div className='card-title justify-end'>
          <dl className='flex items-center gap-2'>
            <dt className='text-red-300'>
              <FaHeart />
            </dt>
            <dd>{article.likes}</dd>
          </dl>
          <dl className='flex items-center gap-2'>
            <dt className='text-lime-700'>
              <FaBookmark />
            </dt>
            <dd>{article.stocks}</dd>
          </dl>
        </div>
      </div>
    </div>
  )
}
