// REF | https://github.com/vercel/next-learn-starter/blob/master/typescript-final/pages/index.tsx
import "@/public/_global.scss";

import Layouts from "@/components/_layouts/";
import Landing from "@/components/landing";

const Index = () => {
  return (
    <Layouts.OneBody
      isVisableLogo={false}
      isVisableFooter={false}
      oneBodyComponent={<Landing />}
      isDraggable={false}
    />
  );
};

export default Index;
