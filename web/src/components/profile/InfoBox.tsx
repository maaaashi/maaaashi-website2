import { useState, type ReactNode } from 'react'
import { BoxTitle } from './BoxTitle'
import { AboutMe } from './info/AboutMe'
import { Experience } from './info/Experience'
import { Skill } from './info/Skill'

export const InfoBox = () => {
  class Tab {
    constructor(
      public id: number,
      public title: string,
      public component: ReactNode
    ) {}
  }
  const tabs = [
    new Tab(0, 'ABOUT ME', <AboutMe />),
    new Tab(1, 'EXPERIENCE', <Experience />),
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
