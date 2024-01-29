import React from 'react'
import { BoxTitle } from './BoxTitle'

export const ProfileBox = () => {
  const myAge = Math.abs(
    new Date(
      new Date().getTime() - new Date('1996-07-23').getTime()
    ).getUTCFullYear() - 1970
  )
  return (
    <div className='p-4 bg-white rounded-lg flex flex-col gap-4'>
      <BoxTitle text='Profile' />
      <div className='flex gap-2'>
        <div className='avatar'>
          <div className='w-24 rounded-xl'>
            <img src='/profile.JPG' alt='IMAGE' />
          </div>
        </div>
        <div>
          <div>name: 大岡 正志 / Masashi Ooka</div>
          <div>age: {myAge}</div>
          <div>job: Web Application Engineer</div>
        </div>
      </div>
    </div>
  )
}
