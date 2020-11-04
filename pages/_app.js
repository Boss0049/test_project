import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";
import "../styles/globals.css";

function MyApp(props) {
  let Component = props.Component;
  return (
    <>
      <Head>
        <title>First Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>
      <Component {...props} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
