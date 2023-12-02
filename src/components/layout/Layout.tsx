import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Layout({children}: any) {
  return (
    <main
      className={`mx-auto px-6 pb-40 pt-16 h-full w-full`}
    >
      {children}
    </main>
  )
}

export default Layout