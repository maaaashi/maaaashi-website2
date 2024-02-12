import { useState, type ReactNode, type FC, useEffect } from 'react'
import { AboutMe } from './AboutMe'
import { Experience } from './Experience'
import { Skill } from './Skill'
import axios from 'axios'
import { Tab } from '../../../domains/Tab'

interface Info {
  aboutme: {
    text: string
  }
  experience: { date: string; topic: string }[]
}

export const InfoBox = () => {
  const getInfo = async () => {
    const { data } = await axios.get('/api/info.json')
    setInfo(data.info)

    setTabs([
      new Tab(0, 'ABOUT ME', <AboutMe aboutme={data.info.aboutme} />),
      new Tab(
        1,
        'EXPERIENCE',
        <Experience experience={data.info.experience} />,
      ),
      new Tab(2, 'SKILL', <Skill />),
    ])
    setActiveTab(
      new Tab(0, 'ABOUT ME', <AboutMe aboutme={data.info.aboutme} />),
    )
  }
  const [info, setInfo] = useState<Info>()
  const [tabs, setTabs] = useState<Tab[]>([])
  const [activeTab, setActiveTab] = useState<Tab>()

  useEffect(() => {
    getInfo()
  }, [])

  if (!info || !activeTab) return <>loading...</>

  return (
    <div>
      <div role='tablist' className='tabs tabs-lifted'>
        {tabs.map((tab) => (
          <button
            className={`tab tab-border-none ${
              activeTab.id === tab.id && 'tab-active bg-base-100'
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
          activeTab.id === 0 && 'rounded-tl-none'
        } ${activeTab.id === tabs.length - 1 && 'rounded-tr-none'}`}
      >
        <div className='md:w-80'>{activeTab.component}</div>
      </div>
    </div>
  )
}
