import { useState } from 'react';
import { useRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Bar from '@mui/icons-material/LocalBar';
import CakeIcon from '@mui/icons-material/Cake';
import EventIcon from '@mui/icons-material/Event';
import Flower from '@mui/icons-material/LocalFlorist';
import LoginInterface from '../Login/Login';
import Alert from '../Misc/Alert';

import { auth } from '../../lib/firebase/firebase';
import signOut from '../../lib/firebase/signOut';

const NavItem = ({ children, services = 0, href = '', setOpen }) => {
	const router = useRouter();
	return (
		<div
			className={`p-3 lg:p-0 lg:py-2 border lg:border-none w-full text-gray-500 uppercase tracking-wider lg:text-gray-200 lg:text-center transition-all duration-150 hover:text-[blue] ${
				services ? 'h-[3rem] flex items-center gap-4 lg:text-gray-600' : ''
			}`}
			onClick={(e) => {
				e.preventDefault();
				if (services && !auth.currentUser) {
					setOpen(true);
				} else router.push(href, null, { scroll: false });
			}}
		>
			{children}
		</div>
	);
};

export default function NavLinks({ hidden }) {
	const [services, setServices] = useState(0);
	const [showLogin, setShowLogin] = useState(false);
	const openLogin = () => {
		setShowLogin((prev) => !prev);
	};

	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="w-screen fixed">
				<Alert
					open={open}
					severity={'warning'}
					setOpen={setOpen}
					msg={'Please login to continue'}
				/>
			</div>

			<div
				className={`${
					hidden
						? 'opacity-0 lg:pointer-events-auto pointer-events-none lg:opacity-100'
						: ''
				} transition-all duration-300 absolute cursor-pointer bg-gray-50 top-16 right-0 shadow-lg flex flex-col w-56 items-center lg:relative lg:flex-row lg:w-[40rem] lg:gap-3 lg:top-0 lg:bg-transparent font-medium lg:shadow-none nav-links`}
			>
				<NavItem href="/">Home</NavItem>

				<NavItem href="/about">About</NavItem>
				<div
					onClick={() => setServices(!services)}
					className="w-full relative services-div"
				>
					<NavItem>Services</NavItem>
					<div className="absolute top-3 right-4 lg:hidden ">
						{services ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</div>
					<div
						className={`${
							services ? 'h-[12rem]' : 'h-0'
						} lg:fixed lg:top-16 lg:w-56 lg:pl-4 overflow-hidden transition-all duration-500 w-full bg-gray-100 font-normal services text-sm`}
					>
						<NavItem
							services={1}
							setOpen={setOpen}
							href="/wedding"
							setShowLogin={setShowLogin}
						>
							<Flower />
							Weddings
						</NavItem>
						<NavItem
							services={1}
							setOpen={setOpen}
							href="/wedding"
							setShowLogin={setShowLogin}
						>
							<Bar />
							Social Gathering
						</NavItem>
						<NavItem
							services={1}
							setOpen={setOpen}
							href="/wedding"
							setShowLogin={setShowLogin}
						>
							<CakeIcon />
							Birthdays
						</NavItem>
						<NavItem
							services={1}
							setOpen={setOpen}
							href="/wedding"
							setShowLogin={setShowLogin}
						>
							<EventIcon />
							Corporate Events
						</NavItem>
					</div>
				</div>
				<NavItem>Contact</NavItem>
				{auth.currentUser ? (
					<NavItem href="/profile">Profile</NavItem>
				) : (
					<Login openLogin={openLogin} />
				)}
			</div>

			<CSSTransition
				unmountOnExit
				in={showLogin}
				timeout={300}
				classNames="modal"
			>
				<LoginInterface setShowLogin={setShowLogin} />
			</CSSTransition>
		</>
	);
}

const Login = ({ openLogin }) => {
	return (
		<NavItem>
			<div onClick={openLogin}>Login</div>
		</NavItem>
	);
};
