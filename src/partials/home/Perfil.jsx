import React from 'react'
import Image from 'next/image'
import Card from '@/components/Card'

function Perfil() {
  return (
    <Card bgColor='bg-pink-200' disabled>
      <div className='flex items-center w-full h-full space-x-4'>
        <Image
          src={'/images/perfil.png'}
          width={96}
          height={96}
          alt='Picture of the author'
        />
        <div>
          <h1 className='text-xl font-bold text-pink-900'>Andrey Alth</h1>
          <h2 className='font-medium text-pink-800'>FullStack JavaScript</h2>
        </div>
      </div>
    </Card>
  )
}

export default Perfil
