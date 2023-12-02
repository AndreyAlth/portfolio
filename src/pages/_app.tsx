import React from "react";
// import '../styles/globals'
import "../styles/globals.scss";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <title>andreyalth.site</title>
        <link rel="icon" href="/icons/3dcube.svg" sizes="any" />
      </Head>
      <ThemeProvider attribute="class">
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      </ThemeProvider>
    </>
  );
}
