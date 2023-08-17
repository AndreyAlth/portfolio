import Image from 'next/image'
import Card from '@/components/Card'
import Link from 'next/link'
import MapComponent from '@/components/maps/MapComponent'

export default function Home() {
  return (
    <div className='grid grid-cols-6 gap-6'>
      {/* Perifl */}
      <div className='col-span-6 md:col-span-4'>
        <Card bgColor='bg-pink-200' disabled>
          <div className='flex items-center w-full h-full space-x-4'>
            <Image
              src={'/images/perfil.png'}
              width={96}
              height={96}
              alt='Picture of the author'
            />
            <div>
              <h1 className='text-xl font-bold text-pink-900'>Andrey Alth</h1>
              <h2 className='font-medium text-pink-800'>
                FullStack JavaScript
              </h2>
            </div>
          </div>
        </Card>
      </div>
      {/* Donwload */}
      <div className='col-span-6 md:col-span-2'>
        <Card bgColor='bg-orange'>
          <Link role='button' href={process.env.NEXT_PUBLIC_CV_URL} download>
            <div className='flex items-center w-full h-full space-x-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='35'
                height='35'
                viewBox='0 0 35 35'
                fill='none'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M6.08354 4.6252C4.375 6.33374 4.375 9.0836 4.375 14.5833V20.4167C4.375 25.9164 4.375 28.6662 6.08354 30.3748C7.79209 32.0833 10.5419 32.0833 16.0417 32.0833H18.9583C24.4581 32.0833 27.2079 32.0833 28.9165 30.3748C30.625 28.6662 30.625 25.9164 30.625 20.4167V14.5833C30.625 9.0836 30.625 6.33374 28.9165 4.6252C27.2079 2.91666 24.4581 2.91666 18.9583 2.91666H16.0417C10.5419 2.91666 7.79209 2.91666 6.08354 4.6252ZM11.6667 13.4896C11.0626 13.4896 10.5729 13.9793 10.5729 14.5833C10.5729 15.1874 11.0626 15.6771 11.6667 15.6771H23.3333C23.9374 15.6771 24.4271 15.1874 24.4271 14.5833C24.4271 13.9793 23.9374 13.4896 23.3333 13.4896H11.6667ZM11.6667 19.3229C11.0626 19.3229 10.5729 19.8126 10.5729 20.4167C10.5729 21.0207 11.0626 21.5104 11.6667 21.5104H18.9583C19.5624 21.5104 20.0521 21.0207 20.0521 20.4167C20.0521 19.8126 19.5624 19.3229 18.9583 19.3229H11.6667Z'
                  fill='white'
                />
              </svg>
              <span className='text-medium text-white'>Download CV</span>
            </div>
          </Link>
        </Card>
      </div>
      {/*Maps */}
      <div className='col-span-6 md:col-span-3 h-[200px]'>
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
      </div>
      {/* Github */}
      <div className='col-span-6 md:col-span-3'>
        <Card bgColor='bg-black' py='py-0' px='px-0'>
          <a href='https://github.com/AndreyAlth'>
            <div className='bg-[url(/coding.gif)] h-full rounded-lg'>
              <div className='flex flex-col justify-between bg-black/40 h-full px-4 py-4 rounded-lg'>
                <div className='flex items-center justify-between w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='30'
                    viewBox='0 0 30 30'
                    fill='none'
                  >
                    <path
                      d='M15 0C6.7125 0 0 6.88677 0 15.3808C0 22.1779 4.2975 27.9419 10.2563 29.9734C11.0063 30.1183 11.2812 29.6427 11.2812 29.2339C11.2812 28.8686 11.2688 27.9009 11.2625 26.6191C7.09 27.5471 6.21 24.5555 6.21 24.5555C5.5275 22.7803 4.54125 22.3061 4.54125 22.3061C3.1825 21.3525 4.64625 21.3717 4.64625 21.3717C6.1525 21.4794 6.94375 22.9559 6.94375 22.9559C8.28125 25.3079 10.455 24.6286 11.3125 24.2351C11.4475 23.2405 11.8338 22.5624 12.2625 22.1779C8.93125 21.7934 5.43 20.4706 5.43 14.5772C5.43 12.8981 6.01125 11.5267 6.97375 10.45C6.805 10.0616 6.29875 8.49792 7.105 6.37921C7.105 6.37921 8.36125 5.96649 11.23 7.95574C12.43 7.61352 13.705 7.44433 14.98 7.43664C16.255 7.44433 17.53 7.61352 18.73 7.95574C21.58 5.96649 22.8362 6.37921 22.8362 6.37921C23.6425 8.49792 23.1362 10.0616 22.9862 10.45C23.9425 11.5267 24.5238 12.8981 24.5238 14.5772C24.5238 20.486 21.0175 21.787 17.68 22.1651C18.205 22.6265 18.6925 23.5699 18.6925 25.0105C18.6925 27.069 18.6737 28.7224 18.6737 29.2223C18.6737 29.6261 18.9363 30.1067 19.705 29.9529C25.7062 27.9355 30 22.1676 30 15.3808C30 6.88677 23.2838 0 15 0Z'
                      fill='white'
                    />
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 15 15'
                    fill='none'
                  >
                    <path
                      d='M6 2.66667H2.66667C2.22464 2.66667 1.80072 2.84226 1.48816 3.15482C1.17559 3.46738 1 3.89131 1 4.33333V12.6667C1 13.1087 1.17559 13.5326 1.48816 13.8452C1.80072 14.1577 2.22464 14.3333 2.66667 14.3333H11C11.442 14.3333 11.866 14.1577 12.1785 13.8452C12.4911 13.5326 12.6667 13.1087 12.6667 12.6667V9.33333M9.33333 1H14.3333M14.3333 1V6M14.3333 1L6 9.33333'
                      stroke='white'
                      strokeWidth={2}
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
                <div className='text-white text-left'>
                  <h1 className='font-medium'>GitHub</h1>
                  <span>My work on github</span>
                </div>
              </div>
            </div>
          </a>
        </Card>
      </div>
      {/* Projects */}
      {/* <div className='col-span-6 md:col-span-6'>
        <Card bgColor='bg-[#C7D2FE]' disabled py='py-4'>
          <div className='text-left space-y-5'>
            <h2 className='font-semibold text-lg'>Recent Projects</h2>
            <ul>
              <li>
                <div>proyecto 1</div>
              </li>
              <li>
                <div>proyecto 1</div>
              </li>
              <li>
                <div>proyecto 1</div>
              </li>
            </ul>
          </div>
        </Card>
      </div> */}
      {/* Form */}
      <div className='col-span-6 md:col-span-6'>
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
              <p className='font-normal'>
                Drop me a message with the form below
              </p>
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
      </div>
    </div>
  )
}
