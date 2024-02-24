import { IoMdArrowRoundUp } from 'react-icons/io'

export const PageUpButton = () => {
  const clickHandler = () => {
    const main = document.getElementById('main')
    main?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <button
        className='hidden md:flex md:items-center btn btn-primary absolute bottom-5 right-10 z-20'
        onClick={clickHandler}
      >
        <span className='block'>Page Up</span>
        <IoMdArrowRoundUp />
      </button>
      <button
        className='md:hidden btn btn-circle btn-primary absolute bottom-5 right-10 z-20'
        onClick={clickHandler}
      >
        <IoMdArrowRoundUp />
      </button>
    </>
  )
}
