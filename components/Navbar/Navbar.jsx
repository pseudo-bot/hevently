import { useState } from 'react';
import Menubar from './Menubar';
import NavLinks from './NavLinks';

export default function Navbar() {
	const [hidden, setHidden] = useState(1);
	return (
		<nav className="h-16 gap-20 fixed bg-gradient-to-r from-indigo-500 to-indigo-700 w-full flex items-center justify-center px-5 shadow-xl">
      <div className="text-3xl font-bold text-gray-200 uppercase tracking-wider">hevently</div>
			<NavLinks hidden={hidden}/>
			<Menubar hidden={hidden} click={() => setHidden(!hidden)}/>
		</nav>
	);
}
