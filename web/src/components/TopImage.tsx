export const TopImage = () => {
  return (
    <div>
      <div className='fixed -z-10 top-16 left-1/2 -translate-x-1/2 w-max'>
        <img className='h-screen object-cover' src='/top_no_gazou.png' alt='' />
      </div>
      <div className='w-full h-screen relative'>
        <span className='mb-4 text-3xl font-extrabold text-gray-400 dark:text-white md:text-5xl lg:text-6xl left-12 top-1/2 -translate-y-12 absolute'>
          {'This is '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
            Maaaashi's Website
          </span>
          .
        </span>
      </div>
    </div>
  )
}
