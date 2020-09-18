import Link from "next/link";

import "./index.scss";

type props = {
  href: string;
  as: string;
  isDraggable?: boolean;
};

const makeArrowWithDirection = (
  arrowImg: string = "arrow-down.svg",
  { href, as, isDraggable }: props
) => {
  return (
    <div className={`arrow ${isDraggable ? "fixed" : "isDraggable"}`}>
      <Link href={href} as={as}>
        <a>
          <img src={`/static/images/etc-parts/${arrowImg}`} />
        </a>
      </Link>
    </div>
  );
};

const ArrowDown = ({ href, as }: props) => {
  return makeArrowWithDirection("arrow-down.svg", { href, as });
};

const Arrow = {
  down: ArrowDown,
};

export default Arrow;
