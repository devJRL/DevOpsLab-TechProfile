import { ReactNode } from "react";

import "./index.scss";
import { Title } from "./_PostSet";
import PostTitle from "./postTitle";

type props = {
  title: Title;
  generatedContents: ReactNode;
};

const Post = ({ title, generatedContents }: props) => {
  return (
    <div className="post">
      <div className="post__title-wrapper">
        <PostTitle title={title} />
      </div>
      <div className="post__content-wrapper">{generatedContents}</div>
    </div>
  );
};

export default Post;
