import Link from "next/link";

import "./index.scss";

type props = {
  href: string;
  as: string;
  isScrollable?: boolean;
  rotateDegree?: number;
};

const makeArrow = (
  arrowImg: string = "arrow-down.svg",
  { href, as, isScrollable = true, rotateDegree = 0 }: props
) => {
  const degree = rotateDegree % 360;

  let direction: string = "";
  if (degree === 0) direction = "down";
  else if (degree > 0 && degree <= 90) direction = "left";
  else if (degree > 90 && degree <= 180) direction = "up";
  else if (degree > 180 && degree <= 270) direction = "right";
  else if (degree > 270 && degree < 360) direction = "down";

  const cls = "arrow";
  return (
    <div className={`${cls} ${!isScrollable && "fixed"}`}>
      <Link href={href} as={as}>
        <a>
          <img
            className={`${cls}__${direction}`}
            src={`/static/images/etc-parts/${arrowImg}`}
          />
        </a>
      </Link>
    </div>
  );
};

const ArrowDown = (args: props) => {
  return makeArrow("arrow-down.svg", { ...args, rotateDegree: 0 });
};

const ArrowLeft = (args: props) => {
  return makeArrow("arrow-down.svg", { ...args, rotateDegree: 90 });
};

const ArrowUp = (args: props) => {
  return makeArrow("arrow-down.svg", { ...args, rotateDegree: 180 });
};

const ArrowRight = (args: props) => {
  return makeArrow("arrow-down.svg", { ...args, rotateDegree: 270 });
};

const Arrow = {
  Down: ArrowDown,
  Left: ArrowLeft,
  Up: ArrowUp,
  Right: ArrowRight,
};

export default Arrow;
