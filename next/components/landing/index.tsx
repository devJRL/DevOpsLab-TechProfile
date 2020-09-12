import "./index.scss";
import Cover from "./cover";

const cname = "landing";
const Landing = () => {
  return (
    <>
      <div className={`${cname}__center`}>
        <Cover />
      </div>
    </>
  );
};

export default Landing;
