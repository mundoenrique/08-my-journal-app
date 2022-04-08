import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { googleProvider } from '../firebase/fireBaseConfig';

const initialState = {
	loading: false,
	logged: false,
	uid: '',
	name: '',
	email: '',
};

export const googleSignIn = createAsyncThunk('auth/googleSignIn', async () => {
	const auth = getAuth();
	const googleUser = await signInWithPopup(auth, googleProvider);
	const user = {
		uid: googleUser.user.uid,
		displayName: googleUser.user.displayName,
		email: googleUser.user.email,
	};
	return user;
});

export const authReducer = createSlice({
	name: 'auth',
	initialState,
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
					loading: false,
					logged: true,
					uid: action.payload.uid,
					name: action.payload.displayName,
					email: action.payload.email,
				};
			});
	},
});

export const { LoggedIn, LoggedOut } = authReducer.actions;

export default authReducer.reducer;
