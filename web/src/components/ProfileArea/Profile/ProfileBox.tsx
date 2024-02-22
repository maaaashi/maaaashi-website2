import { BoxTitle } from '../BoxTitle'
import { ProfileItem } from './ProfileItem'
import { useProfileUsecase } from '../../../usecases/profileUsecase'

export const ProfileBox = () => {
  const profile = useProfileUsecase()

  if (!profile) return <>loading...</>

  return (
    <div className='py-4 md:p-4 bg-base-100 rounded-lg flex flex-col gap-4'>
      <div className='hidden md:block'>
        <BoxTitle text='Profile' />
      </div>
      <div className='flex gap-2 flex-col lg:flex-row lg:justify-center items-center'>
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
