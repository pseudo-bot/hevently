import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';

const googleAuthProvider = new GoogleAuthProvider();

export default async function signInWithGoogle() {
	try {
		await signInWithPopup(auth, googleAuthProvider);
	} catch (err) {
		alert('Error signing in. Duplicate email id used. Please try again.');
	}
}
