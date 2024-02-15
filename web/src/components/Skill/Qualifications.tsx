import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Qualifications = {
  date: Date
  topic: string
}

export const Qualifications = () => {
  const getQualifications = async () => {
    const { data } = await axios.get('/api/qualifications.json')
    console.log(data)
    setQualifications(data.qualifications)
  }

  const [qualifications, setQualifications] = useState<Qualifications[]>()
  useEffect(() => {
    getQualifications()
  }, [])

  if (!qualifications) return <>loading...</>

  return (
    <div>
      {qualifications.map((q, index) => (
        <div key={index}>{q.topic}</div>
      ))}
    </div>
  )
}
