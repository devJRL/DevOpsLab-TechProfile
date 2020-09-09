// REF | https://github.com/vercel/next-learn-starter/blob/master/typescript-final/pages/_app.tsx
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
