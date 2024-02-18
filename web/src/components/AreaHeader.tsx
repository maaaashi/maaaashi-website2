import { type FC } from 'react'

interface Props {
  text: string
}

export const AreaHeader: FC<Props> = ({ text }) => {
  return (
    <div className='p-4 w-full bg-transparent h-44 flex justify-start items-end'>
      <h2 className='px-4 py-2 font-bold text-xl w-fit h-fit bg-base-300 rounded-lg'>
        {text}
      </h2>
    </div>
  )
}
