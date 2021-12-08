import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const NavItem = ({ children, services=0 }) => {
	return (
		<div className={`p-3 lg:p-0 lg:py-2 border lg:border-none w-full text-gray-500 uppercase tracking-wider lg:text-gray-200 lg:text-center transition-all duration-150 hover:text-[blue] ${services ? 'h-[3rem] flex items-center gap-4 lg:text-gray-600' : ''}`}>
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
					? 'opacity-0 lg:pointer-events-auto pointer-events-none lg:opacity-100'
					: ''
			} transition-all duration-300 absolute cursor-pointer bg-gray-50 top-16 right-0 shadow-lg flex flex-col w-56 items-center lg:relative lg:flex-row lg:w-[40rem] lg:gap-3 lg:top-0 lg:bg-transparent font-medium lg:shadow-none nav-links`}
		>
			<NavItem>Home</NavItem>

			<NavItem>About</NavItem>
			<div onClick={() => setServices(!services)} className="w-full relative services-div">
				<NavItem>Services</NavItem>
				<div className="absolute top-3 right-4 lg:hidden ">
					{services ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
				</div>
				<div
					className={`${
						services ? 'h-[12rem]' : 'h-0'
					} lg:fixed lg:top-16 lg:w-56 lg:pl-4 overflow-hidden transition-all duration-500 w-full bg-gray-100 font-normal services text-sm`}
				>
					<NavItem services={1}><img src="/icons/wedding.png"></img>Weddings</NavItem>
					<NavItem services={1}><img src="/icons/gathering.png"></img>Social Gathering</NavItem>
					<NavItem services={1}><img src="/icons/cake.png"></img>Birthdays</NavItem>
					<NavItem services={1}><img src="/icons/corporate.png"></img>Corporate Events</NavItem>
				</div>
			</div>

			<NavItem>Contact</NavItem>
			<NavItem>Login</NavItem>
		</div>
	);
}
