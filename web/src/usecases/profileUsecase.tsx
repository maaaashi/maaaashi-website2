import { useEffect, useState } from 'react'
import { Profile } from '../domains/Profile'
import axios from 'axios'

export const useProfileUsecase = (): Profile | undefined => {
  const getProfile = async () => {
    const { data } = await axios.get('/api/profile.json')
    setProfile(Profile.create(data.profile))
  }

  const [profile, setProfile] = useState<Profile>()

  useEffect(() => {
    getProfile()
  }, [])

  return profile
}
