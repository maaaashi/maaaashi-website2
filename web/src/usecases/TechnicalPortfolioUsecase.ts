import axios from 'axios'
import { useEffect, useState } from 'react'
import { TechnicalPortfolio } from '../domains/TechnicalPort'

export const useTechnicalPortfolioUsecase = () => {
  const getPortfolio = async () => {
    const { data } = await axios.get('/api/technicalPortfolio.json')
    setPortfolio(
      data.technicalPortfolio.map((p: any) => TechnicalPortfolio.create(p)),
    )
  }

  const [portfolio, setPortfolio] = useState<TechnicalPortfolio[]>()
  useEffect(() => {
    getPortfolio()
  }, [])

  return portfolio
}
