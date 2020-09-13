import "./index.scss";
import Cover from "./cover";
import Owner from "./owner";
import Arrows from "../arrows";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <Cover />
        <Owner />
        <Arrows.down href={"/intro"} as={"/intro"} />
      </div>
    </>
  );
};

export default Landing;
