import { useState, useEffect } from 'react';
import {
	Person,
	Event,
	Logout,
	HowToReg,
	PendingActions,
} from '@mui/icons-material/';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import logOut from '../../config/firebase/signOut';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useBadge from '../../hooks/useBadge';
import { mutate } from 'swr';

const SidebarOption = ({
	title,
	icon,
	divider = true,
	register = false,
	setRegister,
	bookmark = '',
	badge = false,
	handleBadge,
}) => {
	return (
		<>
			<Link href={`#${bookmark}`} passHref>
				<div
					onClick={() => {
						setRegister(register);
						if (badge) {
							handleBadge();
						}
					}}
					className="cursor-pointer flex py-2 px-4 gap-4 items-center  hover:text-blue-700 transition-all duration-200 m-2"
				>
					<div>
						{icon} <span>{title}</span>
					</div>
					{badge && (
						<div className="h-3 w-3 relative">
							<div className="absolute w-full h-full inset-0 bg-red-500 opacity-75 animate-ping rounded-full"></div>
							<div className="h-3 w-3 relative rounded-full bg-red-500"></div>
						</div>
					)}
				</div>
			</Link>
			<div className="w-4/5 mx-auto">
				{divider && <Divider variant="middle" />}
			</div>
		</>
	);
};

const SidebarHeading = ({ title }) => {
	return (
		<div className="py-6">
			<Divider variant="middle">
				<div className="text-gray-500 capitalize">{title}</div>
			</Divider>
		</div>
	);
};

const MyDrawer = ({ photoURL, displayName, register, setRegister }) => {
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const router = useRouter();
	const { data, uid } = useBadge();
	const [approval, setApproval] = useState(false);
	const [request, setRequest] = useState(false);

	useEffect(() => {
		if (data && Object.keys(data).length > 0) {
			setApproval(data.approval);
			setRequest(data.request);
		}
	}, [data]);

	const signOut = async () => {
		await logOut();
		router.push('/');
	};

	const fetchBadge = async (approval, request) => {
		await mutate(
			`/api/user/${uid}/badge`,
			{ ...data, approval, request },
			false
		);
		await fetch(`/api/user/${uid}/badge`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				approval,
				request,
			}),
		});
		await mutate(`/api/user/${uid}/badge`);
	};

	const handleApprove = async () => {
		if (uid) {
			setApproval(false);
			fetchBadge(false, request);
		}
	};

	const handleRequest = async () => {
		if (uid) {
			setRequest(false);
			fetchBadge(approval, false);
		}
	};

	return (
		<div className='w-[16rem] bg-[#fff] border-r shadow-lg fixed min-h-max h-screen overflow-auto'>
			<div className="relative z-50 h-max">
				<div className="pt-8 pb-4">
					<div className="w-full flex justify-center">
						<Image
							src={photoURL || '/profile/user.png'}
							alt="Profile picture"
							className="rounded-full"
							width={64}
							height={64}
						/>
					</div>
					<div className="text-center py-2 capitalize">
						{displayName === '' ? 'User' : displayName}
					</div>
				</div>
				<nav>
					<SidebarHeading title="profile" />
					<SidebarOption
						setRegister={setRegister}
						title="Profile"
						icon={<Person />}
					/>
					<SidebarOption
						setRegister={setRegister}
						title="Events"
						icon={<Event />}
						bookmark="events"
					/>
					<SidebarOption
						setRegister={setRegister}
						title="Approval"
						icon={<PendingActions />}
						divider={false}
						bookmark="requests"
						badge={approval}
						handleBadge={handleApprove}
					/>

					<SidebarHeading title="registration" />

					<SidebarOption
						setRegister={setRegister}
						register={true}
						title="Register"
						icon={<HowToReg />}
					/>
					<SidebarOption
						setRegister={setRegister}
						register={true}
						title="Registrations"
						icon={<Event />}
						bookmark="registrations"
					/>
					<SidebarOption
						setRegister={setRegister}
						register={true}
						title="Requests"
						icon={<PendingActions />}
						divider={false}
						bookmark="requests"
						badge={request}
						handleBadge={handleRequest}
					/>

					<div className="my-16">
						<Button
							variant="contained"
							color="error"
							className="flex py-2 hover:cursor-pointer px-6  gap-2 items-center  transition-all duration-200 hover:bg-red-500 left-1/2 -translate-x-1/2  hover:text-[#fff] justify-center"
							onClick={signOut}
						>
							<Logout /> <span>Logout</span>
						</Button>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default MyDrawer;
