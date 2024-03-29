import { useExperienceUsecase } from '../../usecases/experienceUsecase'

export const Experience = () => {
  const experience = useExperienceUsecase()

  const formatDate = (date: string) => {
    const d = date ? new Date(date) : new Date()
    return `${(d.getMonth() + 1).toString().padStart(2, '0')}, ${d.getFullYear()}`
  }

  if (!experience)
    return (
      <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
        <li>
          <hr className='bg-primary' />
          <div className='timeline-middle'>
            <img src='/point.svg' className='h-5 w-5' />
          </div>
          <div className='timeline-end mb-10'>
            <time className='font-mono italic'>
              <div className='skeleton h-5 w-5'></div>
            </time>
            <div className='text-lg font-black'>
              <div className='skeleton h-5 w-10'></div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='skeleton h-5 w-20'></div>
              <div className='skeleton h-5 w-20'></div>
              <div className='skeleton h-5 w-20'></div>
            </div>
          </div>
          <hr className='bg-primary' />
        </li>
        <li>
          <hr className='bg-primary' />
          <div className='timeline-middle'>
            <img src='/point.svg' className='h-5 w-5' />
          </div>
          <div className='timeline-start md:text-end mb-10'>
            <time className='font-mono italic'>
              <div className='skeleton h-5 w-5'></div>
            </time>
            <div className='text-lg font-black'>
              <div className='skeleton h-5 w-10'></div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='skeleton h-5 w-20'></div>
              <div className='skeleton h-5 w-20'></div>
              <div className='skeleton h-5 w-20'></div>
            </div>
          </div>
          <hr className='bg-primary' />
        </li>
      </ul>
    )

  return (
    <>
      <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
        {experience.map((e, index) => {
          if (index % 2 === 0) {
            return (
              <li key={index}>
                <hr className='bg-primary' />
                <div className='timeline-middle'>
                  <img src='/point.svg' className='h-5 w-5' />
                </div>
                <div className='timeline-end mb-10'>
                  <time className='font-mono italic'>{formatDate(e.date)}</time>
                  <div className='text-lg font-black'>{e.topic}</div>
                  {e.content}
                </div>
                {experience.length !== index + 1 && (
                  <hr className='bg-primary' />
                )}
              </li>
            )
          } else {
            return (
              <li key={index}>
                <hr className='bg-primary' />
                <div className='timeline-middle'>
                  <img src='/point.svg' className='h-5 w-5' />
                </div>
                <div className='timeline-start md:text-end mb-10'>
                  <time className='font-mono italic'>{formatDate(e.date)}</time>
                  <div className='text-lg font-black'>{e.topic}</div>
                  {e.content}
                </div>
                {experience.length !== index + 1 && (
                  <hr className='bg-primary' />
                )}
              </li>
            )
          }
        })}
      </ul>
    </>
  )
}
