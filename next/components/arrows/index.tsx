import Link from "next/link";

import "./index.scss";

type props = {
  href: string;
  as: string;
};

const endpoint = "/static/images/etc-parts";

const ArrowDown = ({ href, as }: props) => {
  return (
    <div className="arrow">
      <Link href={href} as={as}>
        <a>
          <img src={`${endpoint}/arrow-down.svg`} />
        </a>
      </Link>
    </div>
  );
};
const Arrows = {
  down: ArrowDown,
};

export default Arrows;
