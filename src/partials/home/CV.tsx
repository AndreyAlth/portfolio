import React from 'react'
import Card from '../../components/Card'
import Link from 'next/link'

function CV() {
  return (
    <Card bgColor='dark:bg-gray-800 dark:border-[.5px] dark:border-slate-500 bg-orange'>
      <Link
        role='button'
        href={
          'https://drive.usercontent.google.com/download?id=1HPpSo9SyQWeU4sPsOLDMQFMURqufr5Bm&export=download&authuser=0&confirm=t&uuid=42abd7d8-cc52-46bb-be9c-db12443f5561&at=APZUnTVdf_8iTm48G8R9GCwhpgIQ:1692235187795'
        }
        download
      >
        <div className='flex items-center w-full h-full space-x-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='35'
            height='35'
            viewBox='0 0 35 35'
            fill='none'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M6.08354 4.6252C4.375 6.33374 4.375 9.0836 4.375 14.5833V20.4167C4.375 25.9164 4.375 28.6662 6.08354 30.3748C7.79209 32.0833 10.5419 32.0833 16.0417 32.0833H18.9583C24.4581 32.0833 27.2079 32.0833 28.9165 30.3748C30.625 28.6662 30.625 25.9164 30.625 20.4167V14.5833C30.625 9.0836 30.625 6.33374 28.9165 4.6252C27.2079 2.91666 24.4581 2.91666 18.9583 2.91666H16.0417C10.5419 2.91666 7.79209 2.91666 6.08354 4.6252ZM11.6667 13.4896C11.0626 13.4896 10.5729 13.9793 10.5729 14.5833C10.5729 15.1874 11.0626 15.6771 11.6667 15.6771H23.3333C23.9374 15.6771 24.4271 15.1874 24.4271 14.5833C24.4271 13.9793 23.9374 13.4896 23.3333 13.4896H11.6667ZM11.6667 19.3229C11.0626 19.3229 10.5729 19.8126 10.5729 20.4167C10.5729 21.0207 11.0626 21.5104 11.6667 21.5104H18.9583C19.5624 21.5104 20.0521 21.0207 20.0521 20.4167C20.0521 19.8126 19.5624 19.3229 18.9583 19.3229H11.6667Z'
              fill='white'
            />
          </svg>
          <span className='text-medium text-white'>Download CV</span>
        </div>
      </Link>
    </Card>
  )
}

export default CV
