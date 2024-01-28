import React, { useState } from 'react'

export const ProfileArea = () => {
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
        {activeTab === 0 && <>Tab 1</>}
        {activeTab === 1 && <>Tab 2</>}
        {activeTab === 2 && <>Tab 3</>}
      </div>
    </>
  )
}
