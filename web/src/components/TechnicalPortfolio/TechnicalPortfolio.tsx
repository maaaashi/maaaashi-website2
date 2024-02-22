import { Portfolio } from './Panel'
import { useTechnicalPortfolioUsecase } from '../../usecases/TechnicalPortfolioUsecase'

type Portfolio = {
  name: string
  url: string
  title: string
  description: string
  imageUrl: string
}

export const TechnicalPortfolio = () => {
  const portfolio = useTechnicalPortfolioUsecase()

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
