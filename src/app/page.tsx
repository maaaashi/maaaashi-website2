'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen bg-stone-200'>
      <Image alt='log' src='/logo.svg' width={400} height={200} />
    </main>
  )
}
