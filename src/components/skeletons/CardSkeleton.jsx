import React from 'react'

function CardSkeleton() {
  return (
    <div
      role='status'
      class='flex items-center justify-center w-full h-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700'
    >
      <span class='sr-only'>Loading...</span>
    </div>
  )
}

export default CardSkeleton
