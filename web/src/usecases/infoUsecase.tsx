import { useEffect, useState } from 'react'
import axios from 'axios'
import { Info } from '../domains/Info'

export const useInfoUsecase = (
  callback: (i: Info) => void,
): Info | undefined => {
  const getInfo = async () => {
    const { data } = await axios.get('/api/info.json')
    setInfo(Info.create(data.info))
    callback(data.info)
  }

  const [info, setInfo] = useState<Info>()

  useEffect(() => {
    getInfo()
  }, [])

  return info
}
