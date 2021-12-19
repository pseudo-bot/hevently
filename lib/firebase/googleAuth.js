import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';

const googleAuthProvider = new GoogleAuthProvider();

export default async function signInWithGoogle() {
	await signInWithPopup(auth, googleAuthProvider);
}
