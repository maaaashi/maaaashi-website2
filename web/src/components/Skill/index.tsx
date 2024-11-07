import { Tag } from './Tag'

export const Skill = () => {
  return (
    <div className='flex justify-center p-10'>
      <div className='flex gap-2'>
        <Tag name='typescript' />
        <Tag name='react' />
        <Tag name='next' />
        <Tag name='astro' />
        <Tag name='golang' />
        <Tag name='kotlin' />
        <Tag name='java' />
        <Tag name='clojure' />
        <Tag name='aws' />
      </div>
    </div>
  )
}
