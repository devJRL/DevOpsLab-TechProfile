// REF | https://github.com/vercel/next.js/blob/canary/examples/with-typescript/components/Layout.tsx
import React, { ReactNode } from "react";

import "./oneBodyLayout.scss";

import Title from "@/components/_layouts/title";
import Header from "@/components/_layouts/parts/header";
import Footer from "@/components/_layouts/parts/footer";

type props = {
  isVisableLogo?: boolean;
  isVisableFooter?: boolean;
  title?: string;
  oneBodyComponent?: ReactNode;
  isDraggable?: boolean;
};

const OneBodyLayout = ({
  isVisableLogo,
  isVisableFooter,
  title,
  oneBodyComponent,
  isDraggable,
}: props) => {
  return (
    <>
      <Title title={title} />
      <Header isVisableLogo={isVisableLogo} />
      <div
        className={`oneBodyComponent is_${isDraggable ? `draggable` : `fixed`}`}
      >
        {oneBodyComponent}
      </div>
      <Footer isVisableFooter={isVisableFooter} />
    </>
  );
};

export default OneBodyLayout;
