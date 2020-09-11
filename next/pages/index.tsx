// REF | https://github.com/vercel/next-learn-starter/blob/master/typescript-final/pages/index.tsx
import "@/public/_global.scss";

import Layout from "@/components/layout";
import LandingTitle from "@/components/home/landing-title";

const Index = () => {
  return (
    <Layout title="SPONGE Tech Profiel 2021" landingArea={<LandingTitle />} />
  );
};

export default Index;
