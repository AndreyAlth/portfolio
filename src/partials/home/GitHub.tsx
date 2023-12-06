import React from 'react'
import Card from '../../components/Card'
import Link from 'next/link'

function GitHub() {
  return (
    <Card bgColor='dark:bg-gray-800 dark:border-[.5px] dark:border-slate-500 bg-black' py='py-0' px='px-0'>
      <Link href='https://github.com/AndreyAlth'>
        <div className='bg-[url(/coding.gif)]  rounded-lg h-[200px] md:h-full'>
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
      </Link>
    </Card>
  )
}

export default GitHub
