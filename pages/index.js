import Router from "next/router";
import Image from "next/image";
import Head from "next/head";

const handleSubmit = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  Router.push({
    pathname: "/hello",
    query: { name },
  });
};

const Index = () => (
  <>
    <Head>
      <title>Index Page</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Sawatdee Next.js</h1>
    <Image alt="Vercel logo" src="/test.jpeg" width={630} height={354} />
    <form onSubmit={(e) => handleSubmit(e)}>
      <span>ชื่อ: </span>
      <input type="text" name="name" />
      <button type="submit">Go</button>
    </form>
  </>
);

export default Index;
