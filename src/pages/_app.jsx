import '@/styles/globals.css'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <Head>
        <title>andreyalth.site</title>
      </Head>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </>
  )
}
