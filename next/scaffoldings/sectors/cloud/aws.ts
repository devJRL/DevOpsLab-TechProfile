import Sector, { level, spec } from "../Sector";

const sec: string = "AWS";
const lev: level = { point: 3, basis: "Prod." };
const specs: spec[] = [
  {
    subtitle: "Used Services list.",
    relations: [
      "Basic: Route53 / ELB(ALB,NLB) / EC2(EBS,EFS) / S3 / RDS",
      "Ops: Code Series with CI/CD (CodeCommit ~ CodeDeploy)",
      "Monitoring: AWS CLI + CloudWatch + SNS / SQS / Lambda",
      "Security: IAM / STS Assume Role on Java / SSL with ACM",
      "Architects: Draw.io",
    ],
  },
  {
    subtitle: "Special Note.",
    relations: [
      "Monitoring Script with CloudWath Agent & Alert with SNS",
      "Used Protocol: HTTP, SMTP, POP3, IMAP + TLS/SSL",
      "Set DNS: EIP + PTR record ( rDNS )",
      "Requested  Unlimited Throttling for SMTP",
      "Resolved trouble with AWS Abuse Team based on App Logs",
    ],
  },
  {
    subtitle: "Related.",
    relations: [
      "Crinity Mail on AWS (SaaS Production)",
      "AWS Certificated Solutions Architect - Associate (SAA)",
      "( RC81MJCC12E4Q2C9 / 2019.10.08 - 2022.10.08 )",
    ],
  },
];

const aws: Sector = new Sector(sec, lev, specs);

export default aws;
