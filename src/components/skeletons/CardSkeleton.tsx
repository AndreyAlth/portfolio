import React from 'react'

function CardSkeleton() {
  return (
    <div
      role='status'
      className='flex items-center justify-center w-full h-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  )
}

export default CardSkeleton
