import { useRef, type FC, useEffect } from 'react'

interface Props {
  text: string
  backGroundColor?: string
}

export const AreaHeader: FC<Props> = ({ text, backGroundColor }) => {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {}, [])

  return (
    <h2
      className={`font-bold text-2xl p-4 sticky top-0 w-fit z-10 ${backGroundColor || 'bg-base-100'}`}
      ref={ref}
    >
      {text}
    </h2>
  )
}
