import React from 'react'
import Card from '@/components/Card'

function ContactForm() {
  return (
    <Card bgColor='bg-[#A3E635]' disabled py='py-4'>
      <form
        className='text-left space-y-5'
        onSubmit={(e) => {
          e.preventDefault()
          console.log('enviado')
        }}
      >
        <div className='flex flex-col'>
          <h2 className='font-semibold text-lg'>Let&apos;s talk</h2>
          <p className='font-normal'>Drop me a message with the form below</p>
        </div>
        <div className='flex flex-col items-end gap-5'>
          <input
            className='p-2 w-full rounded-lg'
            type='email'
            placeholder='Your email'
          />
          <textarea
            className='p-2 w-full rounded-lg'
            placeholder='Message'
            name='body'
            id=''
            cols='30'
            rows='10'
          ></textarea>
          <button
            type='submit'
            className='py-2 px-14 w-fit bg-black text-white rounded-lg hover:bg-slate-900'
          >
            Send
          </button>
        </div>
      </form>
    </Card>
  )
}

export default ContactForm
