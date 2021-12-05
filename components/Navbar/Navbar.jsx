import { useState } from 'react';
import Menubar from './Menubar';
import NavLinks from './NavLinks';

export default function Navbar() {
	const [hidden, setHidden] = useState(1);
	return (
		<>
		<div className="w-full h-16 layer spacer fixed"></div>
			<nav className="bg-transparent h-16 gap-20 lg:gap-60 fixed w-full flex items-center justify-center px-5 shadow-xl">
				<div className="text-5xl font-bold text-gray-200 uppercas tracking-wider dancing">
					hevently
				</div>
				<NavLinks hidden={hidden} />
				<Menubar hidden={hidden} click={() => setHidden(!hidden)} />
			</nav>
		</>
	);
}

// bg-gradient-to-r from-indigo-500 to-indigo-700