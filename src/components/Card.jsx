import React from 'react'

function Card({ children, bgColor = 'bg-slate-200', disabled = false, px = 'px-6', py = 'py-8', h = 'h-full' }) {
  return (
    <div
      className={`${bgColor} ${!disabled && 'transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'} rounded-lg w-full ${h} ${px} ${py} col-span-4`}
    >
      {children}
    </div>
  )
}

export default Card
