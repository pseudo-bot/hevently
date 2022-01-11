import { useState } from 'react';
import Menubar from './Menubar';
import NavLinks from './NavLinks';
import Link from 'next/link'

export default function Navbar() {
	const [hidden, setHidden] = useState(1);
	return (
		<>
			<div className="top-0 border-b w-full fixed h-16 z-50 outer-cover navbar-bg transition-all duration-300 shadow-lg"></div>
			<div className="fixed top-0 w-screen h-16 z-50 flex justify-center">
				<nav className="h-full w-full flex items-center justify-center lg:justify-between px-12 transition-all duration-300 max-w-[80rem]">
					<Link passHref href='/'>
						<div className="text-[2.25rem] font-bold text-gray-200 tracking-wider dancing cursor-pointer logo">
							hevently
						</div>
					</Link>
					<NavLinks hidden={hidden} setHidden={setHidden}/>
					<Menubar hidden={hidden} click={() => setHidden(!hidden)} />
				</nav>
			</div>
		</>
	);
}
