// REF | https://github.com/vercel/next.js/blob/canary/examples/with-typescript/components/Layout.tsx
import React, { ReactNode } from "react";
import Head from "next/head";

type props = {
  landingArea?: ReactNode;
  title?: string;
};

const Layout = ({
  landingArea,
  title = "SP.ON.GE Tech Profile 2020",
}: props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav>Here is Navigator</nav>
      </header>
      {landingArea}
      <footer>
        <hr />
        <span>Here is Footer</span>
      </footer>
    </>
  );
};

export default Layout;
