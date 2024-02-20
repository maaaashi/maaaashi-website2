import { useEffect, useState } from 'react'
import { Portfolio } from './Panel'
import axios from 'axios'

type Portfolio = {
  name: string
  url: string
  title: string
  description: string
  imageUrl: string
}

export const TechnicalPortfolio = () => {
  const getPortfolio = async () => {
    const { data } = await axios.get('/api/technicalPortfolio.json')
    setPortfolio(data.technicalPortfolio)
  }

  const [portfolio, setPortfolio] = useState<Portfolio[]>()
  useEffect(() => {
    getPortfolio()
  }, [])

  if (!portfolio) return <>loading...</>

  return (
    <div className='flex flex-col gap-4 bg-base-100 p-10'>
      これまでの作品を紹介します。
      <div className='flex flex-col items-center gap-4'>
        {portfolio.map((item, index) => (
          <Portfolio portfolio={item} key={index} />
        ))}
      </div>
    </div>
  )
}
