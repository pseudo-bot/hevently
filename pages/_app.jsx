import Navbar from '../components/Navbar/Navbar';
import { UserProvider } from '../context/Users';
import { useEffect } from 'react';
import Router from 'next/router';

import 'tailwindcss/tailwind.css';
import '../styles/confirm.css';
import '../styles/global.css';
import '../styles/alpha.css';

import 'swiper/css/bundle';

function App({ Component, pageProps }) {

	useEffect(() => {
		Router.events.on('routeChangeComplete', () => {
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth',
			});
		});
	}, []);

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
