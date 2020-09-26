export type tech = {
  title: string;
  stacks: string[];
  link: string;
};

const techLeft: tech[] = [
  {
    title: "Cloud Services",
    stacks: ["AWS & GCP", "KT G-Cloud"],
    link: "/cloud",
  },
  {
    title: "Database",
    stacks: ["MySQL", "ORACLE"],
    link: "/database",
  },
];

const techRight: tech[] = [
  {
    title: "DevOps",
    stacks: ["Docker & Kubernetes", "Jenkins, Ansible, etc."],
    link: "/devops",
  },
  {
    title: "Full stack",
    stacks: ["Spring/Boot", "Next.js & Express.js"],
    link: "/full-stack",
  },
];

export type info = {
  imgUrl: string;
  title: string;
  content: string;
};

const simpleInfo: info[] = [
  {
    imgUrl: "location.svg",
    title: "Location",
    content: "Seoul, South Korea",
  },
  {
    imgUrl: "email.svg",
    title: "Contact",
    content: "dev2sponge@gmail.com",
  },
  {
    imgUrl: "community.svg",
    title: "Community",
    content: "AWSKRUG, Jr.Dev-QnA",
  },
];

export { techLeft, techRight, simpleInfo };
