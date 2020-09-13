import "./postTitle.scss";
import { title } from "./_PostSet";

type props = {
  title: title;
};

const PostTitle = ({ title = "No titled!" }: props) => {
  return (
    <div className="post-title">
      <div className="post-title__bar"></div>
      <span className="post-title__txt">{title}</span>
    </div>
  );
};

export default PostTitle;
