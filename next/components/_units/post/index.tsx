import { ReactNode } from "react";

import "./index.scss";
import { Title } from "./_PostSet";
import PostTitle from "./postTitle";
import Arrow from "@/components/_units/arrow";

type props = {
  title: Title;
  generatedContents: ReactNode;
  arrow_href?: string;
  arrow_as?: string;
};

const Post = ({ title, generatedContents, arrow_href, arrow_as }: props) => {
  return (
    <div className="post">
      <div className="post__title-wrapper">
        <PostTitle title={title} />
      </div>
      <div className="post__content-wrapper">{generatedContents}</div>
      {arrow_href && arrow_as && <Arrow.down href={arrow_href} as={arrow_as} />}
    </div>
  );
};

export default Post;
