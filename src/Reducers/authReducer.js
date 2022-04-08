import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { googleSignInFirebase } from '../firebase/UsersFirebase';

export const AuhtIniState = {
	loading: false,
	logged: false,
	uid: '',
	name: '',
	email: '',
	token: '',
	errorCode: false,
	errorMsg: '',
};

export const googleSignIn = createAsyncThunk('auth/googleSignIn', async () => {
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
			.addCase(googleSignIn.pending, (state) => {
				return {
					...state,
					loading: true,
				};
			})
			.addCase(googleSignIn.fulfilled, (state, action) => {
				return {
					...state,
					...action.payload,
					loading: false,
					logged: true,
				};
			});
	},
});

export const { LoggedIn, LoggedOut } = authReducer.actions;

export default authReducer.reducer;
