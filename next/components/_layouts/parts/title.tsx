import Head from "next/head";

type props = {
  title?: string;
};

const Title = ({ title = "SP.ON.GE Tech Profile 2020" }: props) => {
  return (
    <Head>
      {/* [Google Font] Ubuntu */}
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
        rel="stylesheet"
      ></link>
      <title>{title}</title>
    </Head>
  );
};

export default Title;
