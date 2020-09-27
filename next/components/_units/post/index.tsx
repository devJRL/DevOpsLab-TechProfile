import { ReactNode } from "react";

import "./index.scss";
import { Title } from "./_PostSet";
import PostTitle from "./postTitle";
import Arrow from "@/components/_units/arrow";

type props = {
  title: Title;
  generatedContents: ReactNode;
  isNeedToOffset?: boolean;
  arrow_href?: string;
  arrow_as?: string;
  isScrollable?: boolean;
};

const cls = "post";

const Post = ({
  title,
  generatedContents,
  isNeedToOffset = false,
  arrow_href,
  arrow_as,
  isScrollable,
}: props) => {
  return (
    <div className={cls}>
      <div className={`${cls}__title-wrapper`}>
        <PostTitle title={title} />
      </div>
      <div
        className={`${cls}__content-wrapper ${isNeedToOffset && "need-offset"}`}
      >
        {generatedContents}
      </div>
      {arrow_href && arrow_as && (
        <Arrow.down
          href={arrow_href}
          as={arrow_as}
          isScrollable={isScrollable}
        />
      )}
    </div>
  );
};

export default Post;
