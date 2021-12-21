import { auth } from '../../lib/firebase/firebase';
const Profile = () => {
	return (
		<div className="h-screen w-screen flex items-center justify-center text-4xl">
			{auth.currentUser.uid}
		</div>
	);
};

export default Profile;
