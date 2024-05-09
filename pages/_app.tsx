import '@mantine/core/styles.css';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme, resolver } from '../theme';
import { AppProps } from 'next/app';
import { Layout } from '@/components/layout/layout';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router.pathname);

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
      {/* {getLayout(<Component {...pageProps} />)} */}

      {router.pathname === '/movies' || router.pathname === '/rated-movies' ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Layout disabled>
          <Component {...pageProps} />
        </Layout>
      )}
    </MantineProvider>
  );
}
