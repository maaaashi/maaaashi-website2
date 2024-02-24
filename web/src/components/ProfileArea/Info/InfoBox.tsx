import { useState, type ReactNode } from 'react'
import { AboutMe } from './AboutMe'
import { Experience } from './Experience'
import { Skill } from './Skill'
import { useInfoUsecase } from '../../../usecases/infoUsecase'

type Tab = {
  id: number
  title: string
  component: ReactNode
}

export const InfoBox = () => {
  const [tabs, setTabs] = useState<Tab[]>([])
  const [activeTab, setActiveTab] = useState<Tab>()
  const [isLoading, setIsLoading] = useState(true)

  useInfoUsecase((i) => {
    setTabs([
      {
        id: 0,
        title: 'ME',
        component: <AboutMe aboutme={i.aboutme} />,
      },
      {
        id: 1,
        title: 'EXPERIENCE',
        component: <Experience experience={i.experience} />,
      },
      {
        id: 2,
        title: 'SKILL',
        component: (
          <Skill skills={i.skills} qualifications={i.qualifications} />
        ),
      },
    ])
    setActiveTab({
      id: 0,
      title: 'ME',
      component: <AboutMe aboutme={i.aboutme} />,
    })

    setIsLoading(false)
  })

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
        {activeTab!.component}
      </div>
    </div>
  )
}
