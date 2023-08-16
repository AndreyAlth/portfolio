import '@/styles/globals.css'
import Layout from '@/components/layout/Layout'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
}
