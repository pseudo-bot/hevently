import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';
import { UserContext } from '../../context/Users';
import Link from 'next/link';

import {
	Login as LoginIcon,
	AccountCircle,
	Event as EventIcon,
	Cake as CakeIcon,
	LocalFlorist as Flower,
	LocalBar as Bar,
	KeyboardArrowUp,
	KeyboardArrowDown,
} from '@mui/icons-material';

import LoginInterface from '../Login/Login';
import Alert from '../Misc/Alert';

const NavItem = ({ login, children, href = '', home, profile, onClick }) => {
	return (
		<Link href={href} scroll={false}>
			<div
				className={` ${
					home ? 'lg:ml-auto' : ''
				} p-3 lg:p-0 lg:py-2  lg:w-32 w-full text-gray-500 capitalize tracking-wider lg:text-gray-200 lg:text-center border-b lg:border-0 transition-all duration-150 hover:text-[blue] ${
					login || profile
						? 'bg-gray-50 lg:ml-auto lg:text-[blue] lg:rounded-full border-0 login'
						: ''
				}`}
				onClick={() => (login ? onClick() : null)}
			>
				<div
					className={`${
						login || profile ? 'flex' : ''
					} lg:justify-center gap-3`}
				>
					{login ? <LoginIcon color="primary" /> : null}
					{profile ? <AccountCircle color="primary" /> : null}
					{children}
				</div>
			</div>
		</Link>
	);
};

export default function NavLinks({ hidden }) {
	const user = useContext(UserContext);
	const [services, setServices] = useState(0);
	const [showLogin, setShowLogin] = useState(false);
	const openLogin = () => {
		setShowLogin((prev) => !prev);
	};

	const [open, setOpen] = useState(false);
	const [openFail, setOpenFail] = useState(false);
	const [openSuccess, setOpenSuccess] = useState(false);

	return (
		<>
			<div className="w-screen fixed z-50">
				<Alert
					open={openFail}
					severity={'error'}
					setOpen={setOpenFail}
					msg={'Error logging in, please try again'}
				/>
			</div>
			<div className="w-screen fixed z-50">
				<Alert
					open={openSuccess}
					severity={'success'}
					setOpen={setOpenSuccess}
					msg={'Logged in successfully'}
				/>
			</div>
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
				} flex-auto transition-all duration-300 absolute cursor-pointer bg-gray-50 top-16 right-0 shadow-lg flex flex-col w-56 items-center lg:relative lg:flex-row lg:w-[40rem] lg:gap-6 lg:top-0 lg:bg-transparent font-medium lg:shadow-none nav-links`}
			>
				<NavItem href="/" home={true}>
					Home
				</NavItem>
				<NavItem href="/about">About</NavItem>
				<NavItem href="/#contact">Contact</NavItem>
				<Services
					services={services}
					setServices={setServices}
					setOpen={setOpen}
					setShowLogin={setShowLogin}
				/>
				{user ? (
					<NavItem href="/profile" profile={true}>
						Profile
					</NavItem>
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
				<LoginInterface
					setShowLogin={setShowLogin}
					setOpenSuccess={setOpenSuccess}
					setOpenFail={setOpenFail}
				/>
			</CSSTransition>
		</>
	);
}

const Login = ({ openLogin }) => {
	return (
		<NavItem login={true} onClick={openLogin}>
			<div>Login</div>
		</NavItem>
	);
};

const ServicesItem = ({ children, href = '', setOpen }) => {
	const router = useRouter();
	const user = useContext(UserContext);
	return (
		<div
			className={`p-3 lg:p-0 lg:py-2 border-b w-full text-gray-500 uppercase tracking-wider lg:text-center transition-all duration-150 hover:text-[blue] h-[3rem] flex items-center gap-4 lg:text-gray-600`}
			onClick={(e) => {
				e.preventDefault();
				if (!user) {
					setOpen(true);
				} else router.push(href, null, { scroll: false });
			}}
		>
			{children}
		</div>
	);
};

const Services = ({ services, setServices, setOpen, setShowLogin }) => {
	return (
		<div
			onClick={() => setServices(!services)}
			className="w-full lg:w-32 relative services-div"
		>
			<NavItem>Services</NavItem>
			<div className="absolute top-3 right-4 lg:hidden ">
				{services ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
			</div>
			<div
				className={`${
					services ? 'h-[12rem]' : 'h-0'
				} lg:fixed lg:top-16 lg:w-56 lg:pl-4 overflow-hidden transition-all duration-500 w-full bg-gray-100 font-normal services text-sm`}
			>
				<ServicesItem
					services={1}
					setOpen={setOpen}
					href="/wedding"
					setShowLogin={setShowLogin}
				>
					<Flower />
					Weddings
				</ServicesItem>
				<ServicesItem
					services={1}
					setOpen={setOpen}
					href="/wedding"
					setShowLogin={setShowLogin}
				>
					<Bar />
					Social Gathering
				</ServicesItem>
				<ServicesItem
					services={1}
					setOpen={setOpen}
					href="/wedding"
					setShowLogin={setShowLogin}
				>
					<CakeIcon />
					Birthdays
				</ServicesItem>
				<ServicesItem
					services={1}
					setOpen={setOpen}
					href="/wedding"
					setShowLogin={setShowLogin}
				>
					<EventIcon />
					Corporate Events
				</ServicesItem>
			</div>
		</div>
	);
};
