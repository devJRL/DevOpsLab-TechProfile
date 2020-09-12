import "./hamburger.scss";

const cls = "hamburger";

const makePetties = () => {
  return [0, 1, 2].map((index) => (
    <div key={index} className={`${cls}__petty`} />
  ));
};

const Hamburger = () => {
  return <div className={`${cls}`}>{makePetties()}</div>;
};

export default Hamburger;
