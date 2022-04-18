import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';

import { auth, googleProvider } from './settingsFirebase';
import { auhtIniState } from '../reducers/authReducer';
import { handleReqIniState } from '../reducers/handleRequestReducer';

export const signUpUserFirebase = async (name, email, password) => {
	try {
		const { user } = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		updateProfile(user, { displayName: name });
		return {
			auth: {
				...auhtIniState,
				uid: user.uid,
				email: user.email,
				name: user.displayName,
				token: user.accessToken,
			},
			handleReq: {
				...handleReqIniState,
				success: true,
			},
		};
	} catch (error) {
		return {
			auth: {
				...auhtIniState,
			},
			handleReq: {
				...handleReqIniState,
				success: false,
				errorCode: error.code,
				errorMsg: error.message,
			},
		};
	}
};

export const signInUserFirebase = async (email, password) => {
	try {
		const { user } = await signInWithEmailAndPassword(auth, email, password);
		return {
			auth: {
				...auhtIniState,
				uid: user.uid,
				email: user.email,
				name: user.displayName,
				token: user.accessToken,
			},
			handleReq: {
				...handleReqIniState,
				success: true,
			},
		};
	} catch (error) {
		return {
			auth: {
				...auhtIniState,
			},
			handleReq: {
				...handleReqIniState,
				success: false,
				errorCode: error.code,
				errorMsg: error.message,
			},
		};
	}
};

export const signInGoogleFirebase = async () => {
	try {
		const result = await signInWithPopup(auth, googleProvider);
		const { accessToken } = GoogleAuthProvider.credentialFromResult(result);
		return {
			auth: {
				...auhtIniState,
				uid: result.user.uid,
				email: result.user.email,
				name: result.user.displayName,
				token: accessToken,
			},
			handleReq: {
				...handleReqIniState,
				success: true,
			},
		};
	} catch (error) {
		return {
			auth: {
				...auhtIniState,
				email: error.email,
				token: GoogleAuthProvider.credentialFromError(error),
			},
			handleReq: {
				...handleReqIniState,
				success: false,
				errorCode: error.code,
				errorMsg: error.message,
			},
		};
	}
};

export const userStateChangedFirebase = () => {
	return new Promise((resolve) => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				resolve({
					...auhtIniState,
					logged: true,
					uid: user.uid,
					email: user.email,
					name: user.displayName,
					token: user.accessToken,
				});
			} else {
				resolve({
					...auhtIniState,
				});
			}
			console.log(user);
		});
	});
};

export const signOutUserFirebase = async () => {
	try {
		await signOut(auth);
	} catch (error) {}
};
