import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { googleProvider } from './SettingsFirebase';
import { AuhtIniState } from '../Reducers/authReducer';

const auth = getAuth();
export const googleSignInFirebase = () => {
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
