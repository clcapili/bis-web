import 'faust.config';
import { FaustProvider } from '@faustjs/next';
import 'styles/main.scss';
import "aos/dist/aos.css";
import "@fancyapps/ui/dist/fancybox.css";
import React from 'react';
import { client } from 'client';
import ThemeStyles from 'components/ThemeStyles/ThemeStyles';
import { ActiveBackground } from 'components';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeStyles />
      <ActiveBackground />
      <FaustProvider client={client} pageProps={pageProps}>
        <Component {...pageProps} />
      </FaustProvider>
    </>
  );
}
