import Navbar from '../components/Navbar/Navbar';
import { UserProvider } from '../context/Users';

import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import '../styles/alpha.css';
import 'swiper/css/bundle';

function App({ Component, pageProps }) {
	return (
		<>
			<UserProvider>
				<Navbar />
				<Component {...pageProps} />
			</UserProvider>
		</>
	);
}

export default App;
