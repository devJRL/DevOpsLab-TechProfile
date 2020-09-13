import "./contacts.scss";

type contact = {
  name: string;
  thumbnail: string;
  endpoint: string;
};

// simple-icons | https://simpleicons.org/ | https://github.com/simple-icons/simple-icons
const simpleIconCDN = "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons";
const contacts: contact[] = [
  {
    name: "Github",
    thumbnail: `${simpleIconCDN}/github.svg`,
    endpoint: "https://github.com/devJRL",
  },
  {
    name: "LinkedIn",
    thumbnail: `${simpleIconCDN}/linkedin.svg`,
    endpoint: "https://www.linkedin.com/in/devjrl/",
  },
  {
    name: "KakaoTalk",
    thumbnail: "/static/images/logos/kakao-talk-logo.png",
    endpoint: "https://open.kakao.com/me/sponge_devJRL",
  },
];

const makeContacts = () => {
  return contacts.map((item) => {
    return (
      <div className="contact__item">
        <a target="_blank" href={item.endpoint}>
          <img src={item.thumbnail} alt={item.name} />
        </a>
      </div>
    );
  });
};

const Contacts = () => {
  return <div className="contact">{makeContacts()}</div>;
};

export default Contacts;
