import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="Nextjs Events"/>
        <meta name="viewport" content="initial-scale=1.0" width="devic-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
