// REF | https://github.com/vercel/next.js/blob/canary/examples/with-typescript/components/Layout.tsx
import React, { ReactNode } from "react";

import "./oneBodyLayout.scss";

import Title from "@/components/_layouts/parts/title";
import Header from "@/components/_layouts/parts/header";
import Footer from "@/components/_layouts/parts/footer";

type props = {
  isVisableLogo?: boolean;
  isVisableFooter?: boolean;
  title?: string;
  oneBodyComponent?: ReactNode;
};

const OneBodyLayout = ({
  isVisableLogo,
  isVisableFooter,
  title = "SP.ON.GE Tech Profile 2020",
  oneBodyComponent,
}: props) => {
  return (
    <>
      <Title title={title} />
      <Header isVisableLogo={isVisableLogo} />
      <div className="oneBodyComponent">{oneBodyComponent}</div>
      <Footer isVisableFooter={isVisableFooter} />
    </>
  );
};

export default OneBodyLayout;
