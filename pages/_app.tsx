import '@mantine/core/styles.css';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme, resolver } from '../theme';

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <Head>
        <title>Arrow Flicks</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.ico?" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
