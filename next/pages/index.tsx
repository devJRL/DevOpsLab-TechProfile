// REF | https://github.com/vercel/next-learn-starter/blob/master/typescript-final/pages/index.tsx
import "@/public/_global.scss";

import Layouts from "@/components/_layouts/";
import Landing from "@/components/landing";

const Index = () => {
  return (
    <>
      <div className="intro-wrapper">
        <a href="/intro"></a>
        <Layouts.OneBody
          isVisableLogo={false}
          isVisableFooter={false}
          oneBodyComponent={<Landing />}
        />
      </div>

      <style jsx>{`
        /* yarn add @zeit/next-sass node-sass */
        .intro-wrapper {
          margin-top: 3.5rem;
        }
        .intro-wrapper > a {
          width: 100vw;
          height: 100vh;
          display: block;
          position: fixed;
          z-index: 99;
        }
      `}</style>
    </>
  );
};

export default Index;
