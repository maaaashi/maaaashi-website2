import { BoxTitle } from '../BoxTitle'
import { BoxBody } from '../BoxBody'
import type { FC } from 'react'

interface Props {
  experience: { date: string; topic: string }[]
}

export const Experience: FC<Props> = ({ experience }) => {
  const formatDate = (date: string) => {
    const d = date ? new Date(date) : new Date()
    return `${d.getFullYear()}年${(d.getMonth() + 1)
      .toString()
      .padStart(2, '0')}月`
  }

  return (
    <div>
      <BoxTitle text={'経歴'} />
      <BoxBody>
        {experience.map((exp, index) => {
          return (
            <div
              className='flex flex-col md:flex-row md:justify-between'
              key={index}
            >
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
