import { InfoBox } from './InfoBox'
import { ProfileBox } from './ProfileBox'

export const MyProfileArea = () => {
  return (
    <>
      <div className='mockup-window border bg-base-300 hidden md:block'>
        <div className='flex px-4 py-4 bg-base-200 gap-4'>
          <div className='min-w-80'>
            <InfoBox />
          </div>
          <div className='min-w-96'>
            <ProfileBox />
          </div>
        </div>
      </div>
      <div className='mockup-phone block md:hidden'>
        <div className='camera'></div>
        <div className='display'>
          <div className='artboard artboard-demo phone-1 p-2 pt-12 block overflow-y-auto bg-base-200'>
            <ProfileBox />
            <div className='mt-4 md:m-0'>
              <InfoBox />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
