import { useState, useEffect } from 'react';
import MyProfile from './MyProfile/MyProfile';
import MyEvents from './MyEvents/MyEvents';
import MyRegistration from './MyRegistration/MyRegistration';
import MyDrawer from './MyDrawer';
import Navbar from './NavBar/NavBar';
import useUser from '../../hooks/useUser';
import Register from './MyRegistration/Register';
import UserRequests from './MyProfile/Requests/UserRequests';
import HostRequests from './MyRegistration/Requests/HostRequests';

const Drawer = ({ userData }) => {
	const displayName = userData ? userData.displayName : '';
	const photoURL = userData ? userData.photoURL : '';
	const [mobile, setMobile] = useState(false);
	const [register, setRegister] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const sidebar = document.querySelector('.sidebar');
		const body = document.body;

		if (open) {
			body.addEventListener('click', () => {
				setOpen(false);
			});
			sidebar.addEventListener('click', (e) => {
				e.stopPropagation();
			});
		}
	}, [open]);

	return (
		<div className="">
			{/* <div className="h-screen w-screen fixed profile-bg z-0 opacity-50"></div> */}
			<div
				className={`border-r shadow-lg fixed w-[16rem] bg-gray-[#fff] h-screen min-h-max overflow-auto gap-10 overflow-x-hidden z-50 ${
					open ? 'translate-x-0' : '-translate-x-full'
				} transition-all duration-300 sidebar`}
			>
				<MyDrawer
					photoURL={photoURL}
					displayName={displayName}
					register={register}
					setRegister={setRegister}
				/>
			</div>

			<div className="md:ml-[16rem]">
				<div className="bg-blue-500 flex justify-between px-8 items-center">
					<Navbar displayName={displayName} setOpen={setOpen} />
				</div>
				<div>
					{!register ? (
						<>
							<MyProfile />
							<MyEvents />
							<UserRequests />
						</>
					) : (
						<>
							<Register />
							<MyRegistration />
							<HostRequests />
						</>
					)}
				</div>
			</div>
		</div>
	);
};

const Profile = () => {
	const { user } = useUser();
	return (
		<>
			<Drawer userData={user} />
		</>
	);
};

export default Profile;
