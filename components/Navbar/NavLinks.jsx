import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Link from 'next/link';

const NavItem = ({ children }) => {
	return (
		<div className="p-3 md:p-0 md:py-2 border md:border-none w-full text-gray-500 uppercase tracking-wide md:text-gray-200 md:text-center hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-800 md:hover:from-indigo-800 md:hover:to-purple-800 transition-all duration-150">
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
			} transition-all duration-300 absolute cursor-pointer bg-gray-50 top-16 right-0 shadow-md flex flex-col w-52 items-center md:relative md:flex-row md:w-[40rem] md:gap-3 md:top-0 md:bg-transparent font-medium md:border`}
		>
			<NavItem>Home</NavItem>

			<NavItem>About Us</NavItem>
			<div onClick={() => setServices(!services)} className="w-full relative">
				<NavItem>Services</NavItem>
				<div className="absolute top-3 right-4 md:hidden">
					{services ? (
						<KeyboardArrowUpIcon />
					) : (
						<KeyboardArrowDownIcon />
					)}
				</div>
				<div
					className={`${
						services ? 'h-[12rem]' : 'h-0'
					} md:absolute md:w-52 overflow-hidden transition-all duration-300 w-full bg-gray-100 font-normal services `}
				>
					<NavItem>Weddings</NavItem>
					<NavItem>Social Gathering</NavItem>
					<NavItem>Birthdays</NavItem>
					<NavItem>House Warming</NavItem>
				</div>
			</div>

			<NavItem>Contact</NavItem>
			<NavItem>Login</NavItem>
		</div>
	);
}
