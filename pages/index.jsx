import Head from "next/head";
import Calender from "../components/Calender/Calender";

import Home from "../components/Home/Home";
export default function Index() {
  return (
    <>
      <Head>
        <script src="/scripts/script.js" defer></script>
      </Head>
      <Home />
    </>
  );
}
