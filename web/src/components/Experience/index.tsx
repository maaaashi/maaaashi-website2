import axios from 'axios'
import { useEffect, useState } from 'react'

type Experience = {
  date: string
  topic: string
  content: string
}

export const Experience = () => {
  const getExperience = async () => {
    const { data } = await axios.get('/api/experience.json')
    setExperience(data.experience)
  }
  const [experience, setExperience] = useState<Experience[]>()

  useEffect(() => {
    getExperience()
  }, [])

  if (!experience) return <>loading...</>

  return (
    <>
      <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
        {experience.map((e, index) => {
          if (index % 2 === 0) {
            return (
              <li key={index}>
                <hr />
                <div className='timeline-middle'>
                  <img src='/point.svg' className='h-5 w-5' />
                </div>
                <div className='timeline-end mb-10'>
                  <time className='font-mono italic'>{e.date}</time>
                  <div className='text-lg font-black'>{e.topic}</div>
                  {e.content}
                </div>
                {experience.length !== index + 1 && <hr />}
              </li>
            )
          } else {
            return (
              <li key={index}>
                <hr />
                <div className='timeline-middle'>
                  <img src='/point.svg' className='h-5 w-5' />
                </div>
                <div className='timeline-start md:text-end mb-10'>
                  <time className='font-mono italic'>
                    {(new Date(e.date).getMonth() + 1)
                      .toString()
                      .padStart(2, '0')}
                    , {new Date().getFullYear()}
                  </time>
                  <div className='text-lg font-black'>{e.topic}</div>
                  {e.content}
                </div>
                {experience.length !== index + 1 && <hr />}
              </li>
            )
          }
        })}
      </ul>
    </>
  )
}
