import Link from "next/link";

import "./index.scss";
import Hamburger from "./hamburger";

type props = {
  isVisableLogo?: boolean;
};

const makeLogo = (isVisableLogo: boolean) => {
  return isVisableLogo ? (
    <>
      <img src="/static/images/logos/sponge-logo-300.png" />
      <div className="title">
        <p className="title-up">SP.ON.GE</p>
        <p className="title-down">Speciality on Generality</p>
      </div>
    </>
  ) : (
    <>
      <div className="logo__empty"></div>
    </>
  );
};

const Header = ({ isVisableLogo = true }: props) => {
  return (
    <header>
      <div className="header-wrapper">
        {isVisableLogo ? (
          <Link href="/" as="/">
            <a>
              <div className="logo">{makeLogo(isVisableLogo)}</div>
            </a>
          </Link>
        ) : (
          <div className="logo"></div>
        )}
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
