import "./owner.scss";

const cls = "owner";
const Owner = () => {
  return (
    <>
      <div className={`${cls}`}>
        <div className={`${cls}__small`}>Cloud Service Architect</div>
        <div className={`${cls}__large`}>Jeongryeol Lee</div>
      </div>
    </>
  );
};

export default Owner;
