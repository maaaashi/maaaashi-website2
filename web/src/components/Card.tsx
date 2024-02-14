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
        <a href='https://qiita.com/maaaashi/items/43210e781f657777fe56'>
          {/* <img src='/qiita.png' alt='qiita' /> */}
          {/* <img
            src='https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZoPTMzNiZ0eHQ9Q2hhdEdQVCVFMyU4MSVBQiVFNiU5NiU5OSVFNyU5MCU4NiVFMyU4MSVBRSVFMyU4MyVBQyVFMyU4MiVCNyVFMyU4MyU5NCVFMyU4MyVCQiVFMyU4MiVCNSVFMyU4MyVBMCVFMyU4MyU4RCVFMyU4MiVBNCVFMyU4MyVBQiVFNyU5NCVCQiVFNSU4MyU4RiVFMyU4MiU5MiVFNCVCRCU5QyVFNiU4OCU5MCVFMyU4MSU5NyVFMyU4MSVBNiVFMyU4MiU4MiVFMyU4MiU4OSVFMyU4MSU4NiVFMyU4MiVBMiVFMyU4MyU5NyVFMyU4MyVBQSVFMyU4MiU5MiVFNCVCRCU5QyVFMyU4MSVBMyVFMyU4MSVBNiVFMyU4MSVCRiVFMyU4MSU5RiZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTU2JnR4dC1jbGlwPWVsbGlwc2lzJnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9MDg4NWQwZmFjOWM4MmVmYjE0ZmM1NTIxNGZjNTYxMDE&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwbWFhYWFzaGkmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zNiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPTE2MmMyZWE3YmExNTg2Y2RlYzhiYzc2ODA3OWM4NDQ3&blend-x=142&blend-y=491&blend-mode=normal&s=84809979c679b291069b7fb1e98412f2'
            alt='画像取得失敗！'
          /> */}
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
