import axios from 'axios'
import { useEffect, useState } from 'react'
import { Qualification } from '../domains/Qualification'

export const useQualificationsUsecase = () => {
  const getQualifications = async () => {
    const { data } = await axios.get('/api/qualifications.json')
    setQualifications(
      data.qualifications.map((q: any) => Qualification.create(q)),
    )
  }

  const [qualifications, setQualifications] = useState<Qualification[]>()
  useEffect(() => {
    getQualifications()
  }, [])

  return qualifications
}
