import { useState } from 'react';
import Menubar from './Menubar';
import NavLinks from './NavLinks';

export default function Navbar() {
	const [hidden, setHidden] = useState(1);
	return (
		<>
			<div className="w-full top-0 h-16 layer spacer fixed z-50 navbar-bg transition-opacity duration-500"></div>
			<nav className="bg-transparent h-16 fixed top-0 w-full flex items-center justify-center lg:justify-between px-12 shadow-lg z-50 border-b">
				<div className="text-5xl font-bold text-gray-200 tracking-wider dancing cursor-pointer">
					hevently
				</div>
				<NavLinks hidden={hidden} />
				<Menubar hidden={hidden} click={() => setHidden(!hidden)} />
			</nav>
		</>
	);
}

// bg-gradient-to-r from-indigo-500 to-indigo-700
