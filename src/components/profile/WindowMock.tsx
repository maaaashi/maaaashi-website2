import { InfoBox } from './InfoBox'
import { ProfileBox } from './ProfileBox'

export const MyProfileArea = () => {
  return (
    <>
      <div className='mockup-window border bg-stone-300 hidden lg:block'>
        <div className='flex px-4 py-4 bg-stone-200 gap-4'>
          <div className='min-w-80'>
            <InfoBox />
          </div>
          <div className='min-w-96'>
            <ProfileBox />
          </div>
        </div>
      </div>
      <div className='mockup-phone block lg:hidden'>
        <div className='camera'></div>
        <div className='display'>
          <div className='artboard artboard-demo phone-1 p-2 pt-12 block overflow-y-auto'>
            <ProfileBox />
            <div className='mt-4 lg:m-0'>
              <InfoBox />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
