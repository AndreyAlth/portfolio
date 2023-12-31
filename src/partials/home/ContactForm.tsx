import React, { useState } from 'react'
import Card from '../../components/Card'
import { toast } from 'react-toastify'
import api from '../../components/requests/api'

function ContactForm() {
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)
  const [subject, setSubject] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    if (!email || !message || !subject) {
      setLoading(false)
      toast.info('Form needs email, subject and message', {
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

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!email.match(validRegex)) {
      setLoading(false)
      toast.info('Email invalid', {
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

    const resp = await api.post('/api/email/sendEmail', {
      message,
      email,
      subject,
    })
    if (resp.status === 200) {
      setLoading(false)
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
    <Card bgColor='dark:bg-gray-800 dark:border-[.5px] dark:border-slate-500 bg-[#A3E635]' disabled py='py-4'>
      <div className='text-left space-y-5'>
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
          <input
            className='p-2 w-full rounded-lg'
            type='text'
            placeholder='Subject'
            maxLength={50}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className='p-2 w-full rounded-lg'
            placeholder='Message'
            name='body'
            id=''
            cols={30}
            rows={10}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            disabled={loading}
            className={`py-2 px-14 w-fit bg-black text-white rounded-lg hover:bg-slate-900 ${
              loading && 'cursor-not-allowed'
            }`}
            onClick={() => handleSubmit()}
          >
            {loading ? (
              <div className='flex flex-row items-center justify-center gap-2'>
                <svg
                  className='animate-spin h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z'
                  ></path>
                </svg>
                Sending...
              </div>
            ) : (
              'Send'
            )}
          </button>
        </div>
      </div>
    </Card>
  )
}

export default ContactForm
