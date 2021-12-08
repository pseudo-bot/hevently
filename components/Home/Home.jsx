import Events from './Events';
import Clients from './Clients';
import Contact from './Contact';

function Home() {
	return (
		<div className="relative top-16">
			<Events />
			<Clients />
			<Contact />
		</div>
	);
}

export default Home;
