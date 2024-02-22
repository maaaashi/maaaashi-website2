import axios from 'axios'
import { useEffect, useState } from 'react'
import { Experience } from '../domains/Experience'

export const useExperienceUsecase = (): Experience[] | undefined => {
  const getExperience = async () => {
    const { data } = await axios.get('/api/experience.json')
    setExperience(data.experience.map((e: any) => Experience.create(e)))
  }
  const [experience, setExperience] = useState<Experience[]>()

  useEffect(() => {
    getExperience()
  }, [])

  return experience
}
