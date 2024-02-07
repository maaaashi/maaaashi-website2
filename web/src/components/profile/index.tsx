import { InfoBox } from './InfoBox'
import { ProfileBox } from './ProfileBox'
import { TbArrowAutofitUp, TbActivity, TbHistoryToggle } from 'react-icons/tb'
import { GiSkills } from 'react-icons/gi'

export const MyProfileArea = () => {
  return (
    <>
      <div className='mockup-window border bg-base-300 hidden md:block'>
        <div className='flex px-4 py-4 bg-base-200 gap-4'>
          <div className='min-w-40 bg-base-100 rounded-lg p-2'>
            <ul className='underline flex flex-col gap-2'>
              <li className='flex items-center gap-1'>
                <TbArrowAutofitUp />
                <a href='#maaaashi-website'>Top</a>
              </li>
              <li className='flex items-center gap-1'>
                <TbHistoryToggle />
                <a href='#Experience'>Experience</a>
              </li>
              <li className='flex items-center gap-1'>
                <GiSkills />
                <a href='#Skill'>Skill</a>
              </li>
              <li className='flex items-center gap-1'>
                <TbActivity />
                <a href='#Activities'>Activities</a>
              </li>
            </ul>
          </div>
          <div className='min-w-96 flex flex-col gap-4'>
            <ProfileBox />
            <InfoBox />
          </div>
        </div>
      </div>
      <div className='mockup-phone block md:hidden'>
        <div className='camera'></div>
        <div className='display'>
          <div className='artboard artboard-demo phone-1 p-2 pt-12 block overflow-y-auto overflow-x-hidden bg-base-200'>
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
