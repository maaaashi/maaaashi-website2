import { BoxTitle } from '../BoxTitle'
import { BoxBody } from '../BoxBody'
import axios from 'axios'
import { useEffect, useState } from 'react'

type Skill = { category: string; items: string[] }[]
type Qualification = { date: string; topic: string }[]

export const Skill = () => {
  const getSkill = async () => {
    const { data } = await axios.get('/api/skill.json')
    setSkill(data.skill)
  }
  const getQualification = async () => {
    const { data } = await axios.get('/api/qualification.json')
    setQualifications(data.qualification)
  }
  const [skillSets, setSkill] = useState<Skill>()
  const [qualifications, setQualifications] = useState<Qualification>()

  useEffect(() => {
    getSkill()
    getQualification()
  }, [])

  if (!skillSets || !qualifications) return <>loading...</>

  return (
    <div>
      <BoxTitle text={'スキル'} />
      <BoxBody>
        {skillSets.map((skills, index) => (
          <p key={index}>{skills.items.join(', ')}</p>
        ))}
        <b>資格</b>
        <ul>
          {qualifications?.map((q, index) => <li key={index}>{q.topic}</li>)}
        </ul>
      </BoxBody>
    </div>
  )
}
