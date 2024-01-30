import { useState } from 'react'
import { BoxTitle } from './BoxTitle'
import './profile.css'

export const InfoBox = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div role='tablist' className='tabs tabs-lifted'>
        {[0, 1, 2].map((i) => (
          <button
            className={`tab tab-border-none ${
              activeTab === i && 'tab-active bg-stone-50'
            }`}
            key={`tab_${i}`}
            onClick={() => setActiveTab(i)}
          >
            Tab {i + 1}
          </button>
        ))}
      </div>
      <div
        className={`p-4 bg-stone-50 rounded-lg ${
          activeTab === 0 && 'rounded-tl-none'
        } ${activeTab === 2 && 'rounded-tr-none'}`}
      >
        {activeTab === 0 && <BoxTitle text={`Tab ${activeTab + 1}`} />}
        {activeTab === 1 && <BoxTitle text={`Tab ${activeTab + 1}`} />}
        {activeTab === 2 && <BoxTitle text={`Tab ${activeTab + 1}`} />}
      </div>
    </>
  )
}
