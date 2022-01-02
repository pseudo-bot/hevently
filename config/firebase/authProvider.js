import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { auth } from './firebase';

const googleAuthProvider = new GoogleAuthProvider();
const fbAuthProvider = new FacebookAuthProvider();

export async function signInWithGoogle() {
	await signInWithPopup(auth, googleAuthProvider);
}

export async function signInWithFb() {
	await signInWithPopup(auth, fbAuthProvider);
}

