import "./index.scss";
import Contacts from "./contacts";

const powerredMsg = () => {
  return (
    <p>
      Powerred by{" "}
      <a target="_blank" href="https://vercel.com/">
        Vercel.com
      </a>
    </p>
  );
};

const controlMsg = () => {
  return (
    <p>
      Version controlled in{" "}
      <a target="_blank" href="https://vercel.com/">
        Github repository
      </a>{" "}
      with{" "}
      <a
        target="_blank"
        href="https://gist.github.com/ihoneymon/a28138ee5309c73e94f9#git-flow%EC%9D%84-%EA%B8%B0%EC%A4%80%EC%9C%BC%EB%A1%9C-%ED%95%9C-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%A0%84%EB%9E%B5"
      >
        git flow
      </a>
    </p>
  );
};

const makeFooter = (isVisableFooter: boolean) => {
  return isVisableFooter ? (
    <>
      <Contacts />
      {powerredMsg()}
      {controlMsg()}
    </>
  ) : (
    <div className="footer__empty"></div>
  );
};

type props = {
  isVisableFooter?: boolean;
};

const Footer = ({ isVisableFooter = true }: props) => {
  return (
    <footer>
      <div className="footer-wrapper">{makeFooter(isVisableFooter)}</div>
    </footer>
  );
};

export default Footer;
