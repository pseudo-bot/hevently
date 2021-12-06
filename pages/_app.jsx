import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";

import "tailwindcss/tailwind.css";
import "../style/global.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
