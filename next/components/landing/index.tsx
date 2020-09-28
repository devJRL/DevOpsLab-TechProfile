import "./index.scss";
import Cover from "./cover";
import Owner from "./owner";
import Arrow from "../_units/arrow";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <Cover />
        <Arrow.Down href={"/intro"} as={"/intro"} isScrollable={false} />
        <Owner />
      </div>
    </>
  );
};

export default Landing;
