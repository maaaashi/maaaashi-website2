import React, { useState } from 'react'
import { BoxTitle } from './BoxTitle'

export const InfoBox = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div role='tablist' className='tabs tabs-lifted'>
        {[0, 1, 2].map((i) => (
          <button
            className={`tab tab-border-none ${activeTab === i && 'tab-active'}`}
            key={`tab_${i}`}
            onClick={() => setActiveTab(i)}
          >
            Tab {i + 1}
          </button>
        ))}
      </div>
      <div className='p-4 bg-white rounded-lg'>
        {activeTab === 0 && <BoxTitle text={`Tab ${activeTab + 1}`} />}
        {activeTab === 1 && <BoxTitle text={`Tab ${activeTab + 1}`} />}
        {activeTab === 2 && <BoxTitle text={`Tab ${activeTab + 1}`} />}
      </div>
    </>
  )
}