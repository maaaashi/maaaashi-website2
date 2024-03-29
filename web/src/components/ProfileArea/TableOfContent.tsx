import { FaPhotoVideo } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'
import { TbActivity, TbArrowAutofitUp, TbHistoryToggle } from 'react-icons/tb'
import { IoIosContact } from 'react-icons/io'

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
        <a href='#Ability'>Ability</a>
      </li>
      <li className='flex items-center gap-1'>
        <TbActivity />
        <a href='#Activities'>Activities</a>
      </li>
      <li className='flex items-center gap-1'>
        <FaPhotoVideo />
        <a href='#TechnicalPortfolio'>TechnicalPortfolio</a>
      </li>
      <li className='flex items-center gap-1'>
        <IoIosContact />
        <a href='#Contact'>Contact</a>
      </li>
    </ul>
  )
}
