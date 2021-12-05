import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const NavItem = ({ children }) => {
	return (
		<div className="p-3 md:p-0 md:py-2 border md:border-none w-full text-gray-500 uppercase tracking-wider md:text-gray-200 md:hover:text-gray-50 md:text-center transition-all duration-150 hover:text-indigo-500">
			{children}
		</div>
	);
};

export default function NavLinks({ hidden }) {
	const [services, setServices] = useState(0);
	return (
		<div
			className={`${
				hidden
					? 'opacity-0 md:pointer-events-auto pointer-events-none md:opacity-100'
					: ''
			} transition-all duration-300 absolute cursor-pointer bg-gray-50 top-16 right-0 shadow-md flex flex-col w-52 items-center md:relative md:flex-row md:w-[40rem] md:gap-3 md:top-0 md:bg-transparent font-medium md:shadow-none`}
		>
			<NavItem>Home</NavItem>

			<NavItem>About Us</NavItem>
			<div onClick={() => setServices(!services)} className="w-full relative">
				<NavItem>Services</NavItem>
				<div className="absolute top-3 right-4 md:hidden">
					{services ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
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
