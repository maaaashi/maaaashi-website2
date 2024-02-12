import { GiSkills } from 'react-icons/gi'
import { TbActivity, TbArrowAutofitUp, TbHistoryToggle } from 'react-icons/tb'

export const TableOfContent = () => {
  return (
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
  )
}
