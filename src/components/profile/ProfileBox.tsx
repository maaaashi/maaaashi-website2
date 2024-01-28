import React from 'react'
import { BoxTitle } from './BoxTitle'

export const ProfileBox = () => {
  return (
    <div className='p-4 bg-white rounded-lg flex flex-col gap-4'>
      <BoxTitle text='Profile' />
      <div className='flex gap-2'>
        <div className='avatar'>
          <div className='w-24 rounded-xl'>
            <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
          </div>
        </div>
        <div>
          <div>name:</div>
          <div>age:</div>
        </div>
      </div>
    </div>
  )
}
