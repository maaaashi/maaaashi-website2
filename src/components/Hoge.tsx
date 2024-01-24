import React, { useState } from 'react'

export const Hoge = () => {
  const [count, setCount] = useState(0)
  const add = () => setCount(count + 1)
  const sub = () => setCount(count - 1)
  return (
    <div className='text-black flex gap-1 items-center'>
      <div>
        {'React Component '}
        {count}
      </div>
      <button className='btn' onClick={add}>
        +
      </button>
      <button className='btn' onClick={sub}>
        -
      </button>
    </div>
  )
}
