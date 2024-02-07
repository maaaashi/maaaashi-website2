import { ThemeController } from './ThemeController'

const Header = () => {
  return (
    <div className='border-b-[1px] w-screen font-bold bg-base-200'>
      <nav className='navbar px-4'>
        <div className='flex-1'>
          <h1 id='maaaashi-website'>{"MAAAASHI'S WEBSITE"}</h1>
        </div>
        <div className='flex-none'>
          <ThemeController />
        </div>
      </nav>
    </div>
  )
}

export default Header
