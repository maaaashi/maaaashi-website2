import { BoxTitle } from '../BoxTitle'
import { BoxBody } from '../BoxBody'
import type { FC } from 'react'

type Skill = { category: string; items: string[] }
type Qualification = { date: string; topic: string }

interface Props {
  skills: Skill[]
  qualifications: Qualification[]
}

export const Skill: FC<Props> = ({ skills, qualifications }) => {
  return (
    <div>
      <BoxTitle text={'スキル'} />
      <BoxBody>
        {skills.map((s, index) => (
          <p key={index}>{s.items.join(', ')}</p>
        ))}
        <b>資格</b>
        <ul>
          {qualifications?.map((q, index) => <li key={index}>{q.topic}</li>)}
        </ul>
      </BoxBody>
    </div>
  )
}
