import Head from "next/head";

type props = {
  title?: string;
};

const Title = ({ title = "SP.ON.GE Tech Profile 2020" }: props) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Title;
