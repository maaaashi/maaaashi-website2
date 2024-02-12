import type { FC } from 'react'
import { BoxTitle } from '../BoxTitle'
import { ProfileItem } from './ProfileItem'

interface Props {
  profile: {
    name: string
    age: string
    job: string
    email: string
  }
}

export const ProfileBox: FC<Props> = ({ profile }) => {
  return (
    <div className='p-4 bg-base-100 rounded-lg flex flex-col gap-4'>
      <BoxTitle text='Profile' />
      <div className='flex gap-2 flex-col lg:flex-row items-center'>
        <div className='avatar'>
          <div className='w-24 rounded-xl'>
            <img src='/profile.JPG' alt='IMAGE' />
          </div>
        </div>
        <dl>
          <ProfileItem
            definitionTerm='Name'
            definitionDescription={profile.name}
          />
          <ProfileItem
            definitionTerm='Age'
            definitionDescription={profile.age}
          />
          <ProfileItem
            definitionTerm='Job'
            definitionDescription={profile.job}
          />
          <ProfileItem
            definitionTerm='Email'
            definitionDescription={
              <a
                href={`mailto:${profile.email}`}
                className='underline text-info'
              >
                {profile.email}
              </a>
            }
          />
        </dl>
      </div>
    </div>
  )
}
