import { type FC } from 'react'

export const Tag: FC<{ name: string }> = ({ name }) => {
  return <div className='px-2 py-1 bg-base-300 rounded'>{name}</div>
}
