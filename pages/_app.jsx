import Navbar from '../components/Navbar/Navbar';

import 'tailwindcss/tailwind.css';
import '../style/global.scss';
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
