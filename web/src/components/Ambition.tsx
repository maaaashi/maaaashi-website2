import { SectionHeader } from './SectionHeader'
import { FaFire } from 'react-icons/fa'

export const Ambition = () => {
  return (
    <div>
      <section className='p-10 flex flex-col gap-4 bg-base-100'>
        <SectionHeader>
          <FaFire />
          直近の野望
        </SectionHeader>
        <div className='text-lg font-black'>
          アジャイル・XPの考え方を中心に、社内で最も挑戦的でクリエイティブなチームを作り上げたい
        </div>
        <SectionHeader>
          <FaFire />
          野望
        </SectionHeader>
        <div className='text-lg font-black'>楽しく生きる</div>
      </section>
    </div>
  )
}
