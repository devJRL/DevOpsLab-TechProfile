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
      <a target="_blank" href="https://github.com/devJRL/DevOpsLab-TechProfile">
        Github repository
      </a>{" "}
      with{" "}
      <a
        target="_blank"
        href="https://gist.github.com/ihoneymon/a28138ee5309c73e94f9#file-use-git-and-git-flow-adoc"
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
