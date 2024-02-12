import { useState, type ReactNode, type FC } from 'react'
import { AboutMe } from './AboutMe'
import { Experience } from './Experience'
import { Skill } from './Skill'

interface Props {
  info: {
    aboutme: {
      text: string
    }
    experience: { date: Date; topic: string }[]
  }
}

export const InfoBox: FC<Props> = ({ info }) => {
  class Tab {
    constructor(
      public id: number,
      public title: string,
      public component: ReactNode,
    ) {}
  }
  const tabs = [
    new Tab(0, 'ABOUT ME', <AboutMe aboutme={info.aboutme} />),
    new Tab(1, 'EXPERIENCE', <Experience experience={info.experience} />),
    new Tab(2, 'SKILL', <Skill />),
  ]
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0])

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
