import { useState } from 'react';
import Menubar from './Menubar';
import NavLinks from './NavLinks';

export default function Navbar() {
	const [hidden, setHidden] = useState(1);
	return (
		<>
			<nav className="h-14 border-b fixed top-0 w-full flex items-center justify-center navbar lg:justify-between px-12 shadow-lg z-50 transition-all duration-300 out-cover">
				<div className="text-[2.25rem] font-bold text-gray-200 tracking-wider dancing cursor-pointer">
					hevently
				</div>
				<NavLinks hidden={hidden} />
				<Menubar hidden={hidden} click={() => setHidden(!hidden)} />
			</nav>
		</>
	);
}

// bg-gradient-to-r from-indigo-500 to-indigo-700
