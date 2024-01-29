import { InfoBox } from './InfoBox'
import { ProfileBox } from './ProfileBox'

export const WindowMock = () => {
  return (
    <div className='mockup-window border bg-base-300'>
      <div className='flex px-4 py-4 bg-base-200 gap-4'>
        <div className='min-w-80 animate-slide-down'>
          <InfoBox />
        </div>
        <div className='min-w-96 animate-slide-down-2s'>
          <ProfileBox />
        </div>
      </div>
    </div>
  )
}
