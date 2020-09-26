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

export { techLeft, techRight };
