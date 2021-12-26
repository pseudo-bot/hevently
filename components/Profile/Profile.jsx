import { useContext } from 'react';
import { UserContext } from '../../context/Users';

const Profile = () => {
	const user = useContext(UserContext)
	const {email, uid, displayName} = user
	return (
		<div className="h-screen w-screen flex items-center justify-center text-4xl">
			
		</div>
	);
};

export default Profile;
