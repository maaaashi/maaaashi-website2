import { ProfileArea } from './ProfileArea'

export const WindowMock = () => {
  return (
    <div className='mockup-window border bg-base-300'>
      <div className='flex px-4 py-4 bg-base-200 gap-4'>
        <div className='min-w-80'>
          <ProfileArea />
        </div>
        <div className='min-w-96'>
          <div className='p-4 bg-white rounded-lg'>みぎ</div>
        </div>
      </div>
    </div>
  )
}
