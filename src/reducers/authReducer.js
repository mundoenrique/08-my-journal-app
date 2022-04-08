import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { googleSignInFirebase } from '../firebase/usersFirebase';
import { endRequest, setError, startRequest } from './handleRequestReducer';

export const AuhtIniState = {
	logged: false,
	uid: '',
	name: '',
	email: '',
	token: '',
	errorCode: false,
	errorMsg: '',
};

const googleSignInThunk = createAsyncThunk('auth/googleSignIn', async () => {
	return await googleSignInFirebase();
});

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
			.addCase(googleSignInThunk.fulfilled, (state, action) => {
				return {
					...state,
					...action.payload,
					logged: action.payload.errorCode === false,
				};
			})
			.addCase(googleSignInThunk.rejected, (state, action) => {
				return {
					...state,
					...action.payload,
				};
			});
	},
});

export const { LoggedIn, LoggedOut } = authReducer.actions;

export const googleSignIn = () => async (dispatch, getState) => {
	dispatch(startRequest());
	await dispatch(googleSignInThunk());
	const { errorCode, errorMsg } = getState().auth;

	if (errorCode) {
		dispatch(setError({ errorMsg }));
	}

	dispatch(endRequest());
};

export default authReducer.reducer;
