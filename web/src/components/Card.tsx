import { CiBookmark, CiHeart } from 'react-icons/ci'
import { QiitaCard } from './Activities/QiitaCard'
import type { FC } from 'react'

interface Props {
  title: string
  likes: number
  stocks: number
}

export const Card: FC<Props> = ({ title, likes, stocks }) => {
  return (
    <div className='min-w-96 w-96 card glass'>
      <figure>
        <a
          href='https://qiita.com/maaaashi/items/43210e781f657777fe56'
          target='_blank'
        >
          <QiitaCard title={title} />
        </a>
      </figure>
      <div className='card-body'>
        <div className='card-title justify-end'>
          <dl className='flex items-center gap-2'>
            <dt>
              <CiHeart />
            </dt>
            <dd>{likes}</dd>
          </dl>
          <dl className='flex items-center gap-2'>
            <dt>
              <CiBookmark />
            </dt>
            <dd>{stocks}</dd>
          </dl>
        </div>
      </div>
    </div>
  )
}
