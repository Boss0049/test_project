import Head from "next/head";
import useSWR from "swr";

const Hello = (props) => {
  return (
    <>
      <Head>
        <title>{props?.router.query?.name} Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>สวัสดี{props?.router.query?.name}</h1>
    </>
  );
};

export default Hello;
