import { ReactNode } from "react";

import "./index.scss";
import { Contents, Image, postJson } from "@/components/_units/post/_PostSet";
import Layouts from "@/components/_layouts/";
import Post from "@/components/_units/post";

type props = {
  postData: postJson;
};

const IntroPage = ({ postData }: props) => {
  return (
    <Layouts.OneBody
      oneBodyComponent={
        <Post
          title={postData.title}
          generatedContents={makeContents(postData.contents)}
          arrow_href="/dashboard"
          arrow_as="/dashboard"
        />
      }
    />
  );
};

const cls = "intro-content";

const makeContents = (contents: Contents): ReactNode => {
  const { texts, images } = contents;
  return (
    <div className={`${cls}`}>
      {makeTextBlock(texts)}
      {makeImage(images)}
    </div>
  );
};

const makeTextBlock = (texts: string[][]) => {
  const clstxt = `${cls}-txt`;
  return (
    <div className={`${clstxt}`}>
      {
        /* mapping lines */
        texts.map((lines: string[], index: number) => (
          <div key={index} className={`${clstxt}__box`}>
            <ul key={index} className={`${clstxt}__lines`}>
              {
                /* mapping each line */
                lines.map((eachLine: string, _index: number) => (
                  <li key={_index} className={`${clstxt}__eachLine`}>
                    {eachLine}
                  </li>
                ))
                /* mapping each line [end] */
              }
            </ul>
          </div>
        ))
        /* mapping lines [end] */
      }
    </div>
  );
};

const makeImage = (images: Image[]) => {
  const clsimg = `${cls}-img`;
  return (
    <div className={`${clsimg}`}>
      {images.map((img: Image, index: number) => (
        <img key={index} src={img.src} alt={img.alt} />
      ))}
    </div>
  );
};

IntroPage.getInitialProps = () => {
  // TODO: Transfer with REST API
  return {
    postData: {
      title: "Intro",
      contents: {
        texts: [
          [
            "Thank you for reading this profile.",
            "My nickname is ‘SPONGE’ that has a couple of means.",
          ],
          [
            "First, I learn like a sponge that absorbs anything.",
            "Second, ‘SPONGE’ is short that ‘Speciality on Generality’",
            "Therefore, my nickname contains my wants that",
            "I grow widely with various experiences and technics.",
          ],
          ["So let me introduce myself now.", "Come with me!"],
        ],
        images: [
          {
            alt: "sponge-logo",
            src: "/static/images/logos/sponge-logo-300.png",
          },
        ],
      },
    },
  };
};

export default IntroPage;
