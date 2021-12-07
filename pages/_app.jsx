import Navbar from "../components/Navbar/Navbar";

import "tailwindcss/tailwind.css";
import "../style/global.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
