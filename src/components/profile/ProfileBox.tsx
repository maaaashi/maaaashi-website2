import React from 'react'
import { BoxTitle } from './BoxTitle'
import { ProfileItem } from './ProfileItem'

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
        <dl>
          <ProfileItem
            definitionTerm='Name'
            definitionDescription='大岡 正志 / Masashi Ooka'
          />
          <ProfileItem
            definitionTerm='Age'
            definitionDescription={myAge.toString()}
          />
          <ProfileItem
            definitionTerm='Job'
            definitionDescription='Web Application Engineer'
          />
          <ProfileItem
            definitionTerm='Email'
            definitionDescription={
              <a
                href='mailto:ooka.ms.0r7e2p3@gmail.com'
                className='underline text-info'
              >
                ooka.ms.0r7e2p3@gmail.com
              </a>
            }
          />
        </dl>
      </div>
    </div>
  )
}
