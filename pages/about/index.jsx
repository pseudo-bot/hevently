import {useEffect} from 'react'

import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer';

const useScript = (url) => {
	useEffect(() => {
		const script = document.createElement('script');

		script.src = url;
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [url]);
};

function AboutPage() {
	useScript('/scripts/script.js');
	return (
		<div>
			<About />
			<Footer />
		</div>
	);
}

export default AboutPage;
