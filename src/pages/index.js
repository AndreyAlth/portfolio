import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className='w-[100%] h-[100%] flex justify-center items-center'>
        <h1 className='text-slate-900'>Portfolio</h1>
      </div>
    </main>
  )
}
