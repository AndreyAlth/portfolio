import React from 'react'
import Image from 'next/image'
import Card from '../../components/Card'

function Perfil() {
  return (
    <Card bgColor='dark:bg-gray-800 dark:border-[.5px] dark:border-slate-500 bg-pink-200' disabled>
      <div className='flex items-center w-full h-full space-x-4'>
        <Image
          src={'/images/perfil.png'}
          width={96}
          height={96}
          alt='Picture of the author'
        />
        <div>
          <h1 className='text-xl font-bold dark:text-slate-200 text-pink-900'>Andrey Alth</h1>
          <h2 className='font-medium dark:text-slate-200 text-pink-800'>FullStack JavaScript</h2>
        </div>
      </div>
    </Card>
  )
}

export default Perfil
