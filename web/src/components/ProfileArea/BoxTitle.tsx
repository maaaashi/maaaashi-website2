import React, { type FC } from 'react'
interface Props {
  text: string
}

export const BoxTitle: FC<Props> = ({ text }) => {
  return <div className='font-bold text-lg'>{text}</div>
}
