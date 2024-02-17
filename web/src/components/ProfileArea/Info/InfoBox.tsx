import { useState, type ReactNode, useEffect } from 'react'
import { AboutMe } from './AboutMe'
import { Experience } from './Experience'
import { Skill } from './Skill'
import axios from 'axios'

interface Info {
  info: {
    aboutme: {
      text: string
    }
    experience: { date: string; topic: string }[]
    skills: { category: string; items: string[] }[]
    qualifications: { date: string; topic: string }[]
  }
}

type Tab = {
  id: number
  title: string
  component: ReactNode
}

export const InfoBox = () => {
  const getInfo = async () => {
    const { data } = await axios.get<Info>('/api/info.json')

    setTabs([
      {
        id: 0,
        title: 'ME',
        component: <AboutMe aboutme={data.info.aboutme} />,
      },
      {
        id: 1,
        title: 'EXPERIENCE',
        component: <Experience experience={data.info.experience} />,
      },
      {
        id: 2,
        title: 'SKILL',
        component: (
          <Skill
            skills={data.info.skills}
            qualifications={data.info.qualifications}
          />
        ),
      },
    ])
    setActiveTab({
      id: 0,
      title: 'ME',
      component: <AboutMe aboutme={data.info.aboutme} />,
    })

    setIsLoading(false)
  }

  const [tabs, setTabs] = useState<Tab[]>([])
  const [activeTab, setActiveTab] = useState<Tab>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getInfo()
  }, [])

  if (isLoading) return <>loading...</>

  return (
    <div>
      <div role='tablist' className='tabs tabs-lifted'>
        {tabs.map((tab) => (
          <button
            className={`tab tab-border-none ${
              activeTab!.id === tab.id && 'tab-active bg-base-100'
            }`}
            key={`tab_${tab.id}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div
        className={`p-4 bg-base-100 rounded-lg ${
          activeTab!.id === 0 && 'rounded-tl-none'
        } ${activeTab!.id === tabs.length - 1 && 'rounded-tr-none'}`}
      >
        <div className='md:w-80'>{activeTab!.component}</div>
      </div>
    </div>
  )
}
