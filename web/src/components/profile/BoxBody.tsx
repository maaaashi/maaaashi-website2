import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const BoxBody: FC<Props> = ({ children }) => {
  return <div className='mt-2 flex flex-col gap-2'>{children}</div>
}
