export type Image = {
  src: string;
  alt: string;
};

export type Contents = {
  images: Image[];
  texts: string[][];
};

export type Title = string;

export type postJson = {
  title: Title;
  contents: Contents;
};
