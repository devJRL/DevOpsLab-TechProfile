// REF | https://github.com/vercel/next.js/blob/canary/examples/with-typescript/components/Layout.tsx
import React, { ReactNode } from "react";

import "./oneBodyLayout.scss";

import Title from "@/components/_layouts/parts/title";
import Header from "@/components/_layouts/parts/header";
import Footer from "@/components/_layouts/parts/footer";

type props = {
  title?: string;
  oneBodyComponent?: ReactNode;
};

const OneBodyLayout = ({
  title = "SP.ON.GE Tech Profile 2020",
  oneBodyComponent,
}: props) => {
  return (
    <>
      <Title title={title} />
      <Header />
      <div className="oneBodyComponent">{oneBodyComponent}</div>
      <Footer />
    </>
  );
};

export default OneBodyLayout;
