import React, { type FC, type ReactNode } from 'react'

interface Props {
  definitionTerm: string
  definitionDescription: string | ReactNode
}

export const ProfileItem: FC<Props> = ({
  definitionDescription,
  definitionTerm,
}) => {
  return (
    <div className='flex gap-2'>
      <dt className='w-12 text-end'>{`${definitionTerm}: `}</dt>
      <dd>{definitionDescription}</dd>
    </div>
  )
}
