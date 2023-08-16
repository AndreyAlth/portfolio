import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Layout({children}) {
  return (
    <main
      className={`mx-auto max-w-3xl px-6 pb-40 pt-16 h-full w-full`}
    >
      {children}
    </main>
  )
}

export default Layout