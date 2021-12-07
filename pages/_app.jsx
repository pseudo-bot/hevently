import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import 'tailwindcss/tailwind.css';
import '../style/global.css';
import 'swiper/css/bundle';

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
