import Navbar from '../components/Navbar/Navbar';

import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import 'swiper/css/bundle';

function App({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default App;
