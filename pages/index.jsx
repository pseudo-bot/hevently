import Head from 'next/head';
import { useEffect } from 'react';

import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';

const useScript = (url) => {
	useEffect(() => {
		const script = document.createElement('script');

		script.src = url;
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);
};

export default function Index() {
	useScript('/scripts/script.js');

	return (
		<>
			<Head>
				<title>hevently</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Home />
			<Footer />
		</>
	);
}
