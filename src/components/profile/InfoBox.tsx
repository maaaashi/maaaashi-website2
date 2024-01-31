import { useState } from 'react'
import { BoxTitle } from './BoxTitle'

export const InfoBox = () => {
  class Tab {
    constructor(public id: number, public title: string) {}
  }
  const tabs = [
    new Tab(0, 'TabTitle 1'),
    new Tab(1, 'TabTitle 2'),
    new Tab(2, 'TabTitle 3'),
  ]
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0])
  return (
    <>
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
        } ${activeTab.id === 2 && 'rounded-tr-none'}`}
      >
        <BoxTitle text={activeTab.title} />
      </div>
    </>
  )
}
