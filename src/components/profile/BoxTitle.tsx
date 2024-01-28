import React, { type FC } from 'react'
interface Props {
  text: string
}

export const BoxTitle: FC<Props> = ({ text }) => {
  return <h3 className='font-bold'>{text}</h3>
}
