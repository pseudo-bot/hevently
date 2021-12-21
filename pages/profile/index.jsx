import Profile from '../../components/Profile/Profile';
import { auth } from '../../lib/firebase/firebase';


const profilePage = () => {
	return <div>{auth.currentUser ? <Profile /> : null}</div>;
};

export default profilePage;
