import React from 'react'

function Card({ children, bgColor = 'bg-slate-200', propFunction, disabled = false, px = 'px-6', py = 'py-8' }) {
  return (
    <button
      disabled={disabled}
      className={`${bgColor} ${!disabled && 'transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'} rounded-lg w-full h-full ${px} ${py} col-span-4`}
      onClick={propFunction}
    >
      {children}
    </button>
  )
}

export default Card
