import Head from "next/head";

export interface HeaderProp {
  title: string;
  metaContent: string;
}
export const Header = ({ title, metaContent }: HeaderProp) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaContent} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
