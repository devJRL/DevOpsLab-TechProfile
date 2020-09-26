import "./postTitle.scss";
import { Title } from "./_PostSet";

type props = {
  title: Title;
};

const PostTitle = ({ title = "No titled!" }: props) => {
  return (
    <div className="post-title">
      <div className="post-title__bar"></div>
      <span className="post-title__txt">{title}.</span>
    </div>
  );
};

export default PostTitle;
