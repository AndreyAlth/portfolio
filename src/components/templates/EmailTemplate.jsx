import * as React from 'react'
import { Tailwind } from '@react-email/tailwind'

function EmailTemplate({ email, message }) {
  return (
    <Tailwind>
      <div className='bg-black w-full h-full text-white'>
        <div className='flex flex-col max-w-sm mx-auto py-14'>
          <div className='text-4xl font-bold p-4 border border-slate-100 rounded-sm w-fit mb-24'>
            A
          </div>
          <div className='text-xl font-semibold'>Mensaje enviado</div>
          <div className=''>
            Enviaste un mensaje a <span className='italic'>andrey.site</span>{' '}
          </div>
          <div className='mb-5'>
            Desde <span className='italic'>{email}</span>
          </div>

          <div className='text-lg italic font-medium'>Mensaje</div>
          <div>{message}</div>
        </div>
      </div>
    </Tailwind>
  )
}

export default EmailTemplate
