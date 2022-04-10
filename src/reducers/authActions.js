import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	signInGoogleFirebase,
	signInUserFirebase,
	signOutUserFirebase,
	signUpUserFirebase,
	userStateChangedFirebase,
} from '../firebase/usersFirebase';
import { authLoggedIn } from './authReducer';
import {
	hReqEndRequest,
	hReqSetError,
	hReqSetSuccess,
	hReqStartRequest,
} from './handleRequestReducer';

export const signUpUserAuthAct =
	(email, password, name) => async (dispatch) => {
		dispatch(hReqStartRequest());
		const { auth, handleReq } = await signUpUserFirebase(email, password, name);
		dispatch(hReqSetSuccess(handleReq.success));

		if (handleReq.success) {
			dispatch(authLoggedIn(auth));
			dispatch(hReqSetSuccess(false));
		} else {
			dispatch(hReqSetError(handleReq));
		}

		dispatch(hReqEndRequest());
	};

export const signInUserAuthAct =
	(email, password) => async (dispatch, getState) => {
		dispatch(hReqStartRequest());
		const { auth, handleReq } = await signInUserFirebase(email, password);
		dispatch(hReqSetSuccess(handleReq.success));

		if (handleReq.success) {
			dispatch(authLoggedIn(auth));
			dispatch(hReqSetSuccess(false));
		} else {
			dispatch(hReqSetError(handleReq));
		}

		dispatch(hReqEndRequest());
	};

export const singnInGoogleAuthAct = () => async (dispatch, getState) => {
	dispatch(hReqStartRequest());
	const { auth, handleReq } = await signInGoogleFirebase();
	dispatch(hReqSetSuccess(handleReq.success));

	if (handleReq.success) {
		dispatch(authLoggedIn(auth));
		dispatch(hReqSetSuccess(false));
	} else {
		dispatch(hReqSetError(handleReq));
	}

	dispatch(hReqEndRequest());
};

export const userStateChangedAuthAct = createAsyncThunk(
	'auth/userStateChangedAuth',
	async () => {
		return await userStateChangedFirebase();
	}
);

export const signOutAuthAct = createAsyncThunk('auth/signOutAuth', async () => {
	return await signOutUserFirebase();
});
