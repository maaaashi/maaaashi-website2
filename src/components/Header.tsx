import { ThemeController } from './ThemeController'

const Header = () => {
  return (
    <div className='border-b-[1px] w-screen font-bold'>
      <nav className='navbar'>
        <div className='flex-1'>
          <button className='btn btn-ghost'>
            <h1>{"MAAAASHI'S WEBSITE"}</h1>
          </button>
        </div>
        <div className='flex-none'>
          <ThemeController />
        </div>
      </nav>
    </div>
  )
}

export default Header
