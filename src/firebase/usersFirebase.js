import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from 'firebase/auth';

import { googleProvider } from './settingsFirebase';
import { AuhtIniState } from '../reducers/authReducer';

const auth = getAuth();
export const signUpUserFirebase = (name, email, password) => {
	return createUserWithEmailAndPassword(auth, email, password)
		.then(async ({ user }) => {
			await updateProfile(user, { displayName: name });

			return {
				...AuhtIniState,
				uid: user.uid,
				email: user.email,
				name: user.displayName,
			};
		})
		.catch((error) => {
			return {
				...AuhtIniState,
				errorCode: error.code,
				errorMsg: error.message,
			};
		});
};

export const signInUserFirebase = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password)
		.then((result) => {
			return {
				...AuhtIniState,
				uid: result.user.uid,
				email: result.user.email,
				name: result.user.displayName,
			};
		})
		.catch((error) => {
			return {
				...AuhtIniState,
				errorCode: error.code,
				errorMsg: error.message,
			};
		});
};

export const signInGoogleFirebase = () => {
	return signInWithPopup(auth, googleProvider)
		.then((result) => {
			const { accessToken } = GoogleAuthProvider.credentialFromResult(result);

			return {
				...AuhtIniState,
				uid: result.user.uid,
				email: result.user.email,
				name: result.user.displayName,
				token: accessToken,
			};
		})
		.catch((error) => {
			return {
				...AuhtIniState,
				email: error.email,
				token: GoogleAuthProvider.credentialFromError(error),
				errorCode: error.code,
				errorMsg: error.message,
			};
		});
};
