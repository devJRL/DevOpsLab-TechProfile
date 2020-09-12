// REF | https://github.com/vercel/next-learn-starter/blob/master/typescript-final/pages/index.tsx
import "@/public/_global.scss";

import OneBodyLayout from "@/components/_layouts/oneBodyLayout";
import Landing from "@/components/landing";

const Index = () => {
  return (
    <OneBodyLayout
      isVisableLogo={false}
      isVisableFooter={false}
      oneBodyComponent={<Landing />}
    />
  );
};

export default Index;
