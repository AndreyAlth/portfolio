import React from 'react'
import Image from 'next/image'
import MapComponent from '../../components/maps/MapComponent'

function Maps() {
  return (
    <div className='relative rounded-lg w-full h-full col-span-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
      <div className='h-[200px]'>
        <MapComponent lat={20.96} lng={-89.62} /> 
      </div>
      <div className='absolute left-[calc(50%-87.88px)] top-[calc(50%-48px)] flex flex-col justify-center items-center space-y-2 bg-opacity-0'>
        <Image
          src={'/images/perfil.png'}
          width={60}
          height={60}
          alt='Picture of the author'
        />
        <div className='bg-slate-200 rounded-lg px-4 py-1 flex space-x-2 items-center justify-center w-fit'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M6 1C3.79086 1 2 3.00129 2 5.25C2 7.48109 3.27666 9.90621 5.26853 10.8372C5.73287 11.0543 6.26713 11.0543 6.73147 10.8372C8.72334 9.90621 10 7.48109 10 5.25C10 3.00129 8.20914 1 6 1ZM6 6C6.55228 6 7 5.55228 7 5C7 4.44772 6.55228 4 6 4C5.44772 4 5 4.44772 5 5C5 5.55228 5.44772 6 6 6Z'
              fill='#E73B1B'
            />
          </svg>
          <span className='text-sm'>Mérida, Yuc, México</span>
        </div>
      </div>
    </div>
  )
}

export default Maps
