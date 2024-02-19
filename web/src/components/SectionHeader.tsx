import { type FC, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const SectionHeader: FC<Props> = ({ children }) => {
  return (
    <h3 className='font-bold text-xl mb-2 flex items-center gap-2'>
      {children}
    </h3>
  )
}
