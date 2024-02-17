import type { FC } from 'react'

interface Props {
  title: string
}

export const QiitaCard: FC<Props> = ({ title }) => {
  return (
    <div className='text-stone-800 font-bold'>
      <img src='/qiita.png' alt={title} />
      <div className='absolute top-0 translate-y-8 -translate-x-1/2 left-1/2 w-5/6 text-lg'>
        {title}
      </div>
    </div>
  )
}
