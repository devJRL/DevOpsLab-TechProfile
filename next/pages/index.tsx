// REF | https://github.com/vercel/next-learn-starter/blob/master/typescript-final/pages/index.tsx
import "@/public/_global.scss";

import OneBodyLayout from "@/components/_layouts/oneBodyLayout";
import Landing from "@/components/landing";

const Index = () => {
  return (
    <OneBodyLayout
      title="SPONGE Tech Profiel 2021"
      oneBodyComponent={<Landing />}
    />
  );
};

export default Index;
