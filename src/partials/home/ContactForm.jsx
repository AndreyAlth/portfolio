import React, { useState } from 'react'
import sendEmail from '@/api/email/sendEmail';
import Card from '@/components/Card'
import { toast } from 'react-toastify'

function ContactForm() {
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)

  const handleSubmit = async() => {
    if (!email || ! message) {
      toast.info('Form needs emai and message', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
      return
    }
    const resp = await fetch('/api/email/sendEmail')
    if (resp.status === 200) {
      toast.success('Correo enviado', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    }
  }

  return (
    <Card bgColor='bg-[#A3E635]' disabled py='py-4'>
      <div
        className='text-left space-y-5'
        // onSubmit={(e) => {
        //   e.preventDefault()
        //   handleSubmit()
        // }}
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className='p-2 w-full rounded-lg'
            placeholder='Message'
            name='body'
            id=''
            cols='30'
            rows='10'
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            className='py-2 px-14 w-fit bg-black text-white rounded-lg hover:bg-slate-900'
            onClick={() => handleSubmit()}
          >
            Send
          </button>
        </div>
      </div>
    </Card>
  )
}

export default ContactForm
