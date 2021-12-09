import { useEffect } from 'react';

import Events from './Events';
import Clients from './Clients';
import Contact from './Contact';
import Cover from './Cover';

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

function Home() {
	useScript('/scripts/script.js');
	return (
		<div className="relative">
			<Cover />
			<Events />
			<Clients />
			<Contact />
		</div>
	);
}

export default Home;
