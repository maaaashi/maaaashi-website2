import axios from 'axios'
import { useEffect, useState } from 'react'

type Qualifications = {
  date: string
  topic: string
  imageUrl: string
}

export const Qualifications = () => {
  const getQualifications = async () => {
    const { data } = await axios.get('/api/qualifications.json')
    setQualifications(data.qualifications)
  }

  const [qualifications, setQualifications] = useState<Qualifications[]>()
  useEffect(() => {
    getQualifications()
  }, [])

  if (!qualifications) return <div className='skeleton h-40 w-40'></div>

  return (
    <div className='flex gap-10 p-10 justify-center'>
      {qualifications.map((q, index) => (
        <div key={index} className='flex flex-col items-center'>
          <img src={q.imageUrl} alt='' className='h-40 w-40' />
          <div>{q.topic}</div>
          <div>{new Date(q.date).toLocaleDateString()}</div>
        </div>
      ))}
    </div>
  )
}
