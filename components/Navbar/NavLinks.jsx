import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Link from 'next/link';

const NavItem = ({ children }) => {
	return (
		<div className="p-3 md:p-0 md:py-2 border w-full text-center text-blue-700 tracking-wide md:text-gray-200">
			{children}
		</div>
	);
};

export default function NavLinks({ hidden }) {
	const [services, setServices] = useState(0);
	return (
		<div
			className={`${
				hidden ? 'md:right-0 -right-52' : ''
			} transition-all duration-300 absolute cursor-pointer bg-gray-50 top-16 right-0 shadow-md flex flex-col w-52 items-center md:relative md:flex-row md:w-[40rem] md:gap-3 md:top-0 md:bg-transparent font-medium`}
		>
			<NavItem>Home</NavItem>
			<NavItem>About Us</NavItem>
			<div onClick={() => setServices(!services)} className="w-full relative">
				<NavItem>Services</NavItem>
				<div className="absolute top-3 right-4 md:hidden">
					{services ? (
						<KeyboardArrowUpIcon color="primary" />
					) : (
						<KeyboardArrowDownIcon color="primary" />
					)}
				</div>
				<div
					className={`${
						services ? 'md:h-[10.5rem] h-[12.5rem]' : 'h-0'
					} md:absolute md:w-52 overflow-hidden transition-all duration-300 w-full bg-gray-100 italic font-normal`}
				>
					<NavItem>
						<span className="text-blue-700">Weddings</span>
					</NavItem>
					<NavItem>
						<span className="text-blue-700">Social Gathering</span>
					</NavItem>
					<NavItem>
						<span className="text-blue-700">Birthdays</span>
					</NavItem>
					<NavItem>
						<span className="text-blue-700">House Warming</span>
					</NavItem>
				</div>
			</div>

			<NavItem>Contact</NavItem>
			<NavItem>Login</NavItem>

		</div>
	);
}
