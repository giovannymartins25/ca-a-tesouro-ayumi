import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Caça ao Tesouro ❤️</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
