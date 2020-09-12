// REF | https://github.com/vercel/next-learn-starter/blob/master/typescript-final/pages/_app.tsx
import { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SPONGE TechProfile 2021</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
