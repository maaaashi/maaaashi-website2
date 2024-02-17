import type { FC } from 'react'

interface Props {
  text: string
}

export const AreaHeader: FC<Props> = ({ text }) => {
  return (
    <h2
      className={`font-bold text-2xl p-4 sticky top-0 w-full z-10 bg-transparent`}
    >
      {text}
    </h2>
  )
}
