import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
	signInGoogleFirebase,
	signUpUserFirebase,
} from '../firebase/usersFirebase';
import {
	hReqEndRequest,
	hReqSetError,
	hReqSetSuccess,
	hReqStartRequest,
} from './handleRequestReducer';

export const AuhtIniState = {
	logged: false,
	uid: '',
	name: '',
	email: '',
	token: '',
	errorCode: false,
	errorMsg: '',
};

const signUpUserThunk = createAsyncThunk(
	'auth/authSignUpUser',
	async ({ name, email, password }) => {
		return await signUpUserFirebase(name, email, password);
	}
);

const signInGoogleThunk = createAsyncThunk(
	'auth/authSignInGoogle',
	async () => {
		return await signInGoogleFirebase();
	}
);

export const authReducer = createSlice({
	name: 'auth',
	initialState: AuhtIniState,
	reducers: {
		LoggedIn: (state, action) => {
			return {
				...state,
				logged: true,
				uid: action.payload.uid,
				name: action.payload.name,
				email: action.payload.email,
			};
		},
		LoggedOut: (state) => {
			return {
				...state,
				logged: false,
				uid: '',
				name: '',
				email: '',
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signUpUserThunk.fulfilled, (state, action) => {
				return {
					...state,
					...action.payload,
				};
			})
			.addCase(signUpUserThunk.rejected, (state, action) => {
				return {
					...state,
					...action.payload,
				};
			})
			.addCase(signInGoogleThunk.fulfilled, (state, action) => {
				return {
					...state,
					...action.payload,
					logged: action.payload.errorCode === false,
				};
			})
			.addCase(signInGoogleThunk.rejected, (state, action) => {
				return {
					...state,
					...action.payload,
				};
			});
	},
});

export const { LoggedIn, LoggedOut } = authReducer.actions;

export const authSignUpUser =
	(name, email, password) => async (dispatch, getState) => {
		dispatch(hReqStartRequest());
		await dispatch(signUpUserThunk({ name, email, password }));
		const { errorCode, errorMsg } = getState().auth;

		if (errorCode) {
			dispatch(hReqSetError({ errorMsg }));
		} else {
			dispatch(hReqSetSuccess());
		}

		dispatch(hReqEndRequest());
	};

export const authSignInGoogle = () => async (dispatch, getState) => {
	dispatch(hReqStartRequest());
	await dispatch(signInGoogleThunk());
	const { errorCode, errorMsg } = getState().auth;

	if (errorCode) {
		dispatch(hReqSetError({ errorMsg }));
	}

	dispatch(hReqEndRequest());
};

export default authReducer.reducer;
