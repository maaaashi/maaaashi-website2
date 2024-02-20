import type { FC } from 'react'
import { GoLinkExternal } from 'react-icons/go'

interface Props {
  portfolio: {
    name: string
    url: string
    title: string
    description: string
    imageUrl: string
  }
}

export const Portfolio: FC<Props> = ({ portfolio }) => {
  return (
    <a
      href={portfolio.url}
      target='_blank'
      className='md:hover:brightness-75 md:hover:bg-base-200 w-96 bg-base-300 rounded-lg'
    >
      <img src={portfolio.imageUrl} alt={portfolio.name} />
      <div className='p-4 flex flex-col gap-4'>
        <h3 className='text-xl font-bold flex items-center'>
          <span>{portfolio.name}</span>
          <span className='p-2'>
            <GoLinkExternal />
          </span>
        </h3>

        <div>
          <p className='font-bold'>{portfolio.title}</p>
          <p>{portfolio.description}</p>
        </div>
      </div>
    </a>
  )
}
