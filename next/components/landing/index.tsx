import "./index.scss";
import Cover from "./cover";
import Owner from "./owner";
import Arrow from "../_units/arrow";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <Cover />
        <Arrow.down href={"/intro"} as={"/intro"} />
        <Owner />
      </div>
    </>
  );
};

export default Landing;
