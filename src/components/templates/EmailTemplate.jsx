import React from 'react'

function EmailTemplate({ firstName }) {
  return (
    <div className='bg-black'>
      <h1 className='text-lg text-fuchsia-600'>Welcome, {firstName}!</h1>
    </div>
  )
}

export default EmailTemplate
