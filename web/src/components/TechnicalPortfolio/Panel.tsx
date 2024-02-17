import { GoLinkExternal } from 'react-icons/go'

export const Panel = () => {
  return (
    <a
      href='https://chatgpt-cooking-assistant.mss-rep.com'
      target='_blank'
      className='md:hover:brightness-75 md:hover:bg-base-200 w-96 bg-base-300 rounded-lg'
    >
      <img src='/chatgpt-cooking-assistant.png' alt='' />
      <div className='p-4 flex flex-col gap-4'>
        <h3 className='text-xl font-bold flex items-center'>
          <span>{"Maaaashi's Cooking Assistant"}</span>
          <span className='p-2'>
            <GoLinkExternal />
          </span>
        </h3>

        <div>
          <p className='font-bold'>ChatGPTが料理のレシピとイメージ画像を生成</p>
          <p>
            ダミー説明。ダミー説明。ダミー説明。ダミー説明。ダミー説明。ダミー説明。ダミー説明。ダミー説明。ダミー説明。ダミー説明。ダミー説明。ダミー説明。ダミー説明。ダミー説明。ダミー説明。ダミー説明。
          </p>
        </div>
      </div>
    </a>
  )
}
