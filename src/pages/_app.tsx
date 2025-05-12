import React from 'react';
import '@mantine/core/styles.css';
import '@app/styles/globals.css';
import { AppProps } from 'next/app';
import Layout from '@app/components/layout/Layout';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import theme from '@app/styles/theme';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/next';

const App = ({ Component, pageProps }: AppProps) => {
  const metaDescription = 'FRAGO';
  const metaTitle = 'FRAGO';
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <meta charSet="utf-8" />
        <meta key="name" itemProp="name" content={metaTitle} />
        <meta key="description" name="description" content={metaDescription} />
        <meta key="og:title" property="og:title" content={metaTitle} />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:description" property="og:description" content={metaDescription} />
        <meta key="og:site_name" property="og:site_name" content="FRAGO" />
        <link rel="icon" href="/favicon.svg" />
        <title>{metaTitle}</title>
      </Head>
      <ColorSchemeScript forceColorScheme="light" />
      <MantineProvider theme={theme} withGlobalClasses withCssVariables forceColorScheme="light">
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </MantineProvider>
    </>
  );
};

export default App;
