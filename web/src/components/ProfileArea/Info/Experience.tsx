import { BoxTitle } from '../BoxTitle'
import { BoxBody } from '../BoxBody'
import type { FC } from 'react'

interface Props {
  experience: { date: string; topic: string }[]
}

export const Experience: FC<Props> = ({ experience }) => {
  const formatDate = (date: string) => {
    return `${new Date(date).getFullYear()}年${(new Date(date).getMonth() + 1)
      .toString()
      .padStart(2, '0')}月`
  }
  return (
    <div>
      <BoxTitle text={'経歴'} />
      <BoxBody>
        {experience.map((exp, index) => {
          return (
            <div className='flex flex-col' key={index}>
              <dt className='text-end w-fit self-start'>
                <b>{formatDate(exp.date)}</b>
              </dt>
              <dd className='self-end'>{exp.topic}</dd>
            </div>
          )
        })}
      </BoxBody>
    </div>
  )
}
