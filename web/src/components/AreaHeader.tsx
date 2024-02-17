import type { FC } from 'react'

interface Props {
  text: string
  bgColor: string
}

export const AreaHeader: FC<Props> = ({ text, bgColor }) => {
  return (
    <h2
      className={`font-bold text-2xl p-4 sticky top-0 w-full z-10 bg-transparent`}
    >
      {text}
    </h2>
  )
}
