import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	logged: false,
	uid: '',
	name: '',
};

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
			};
		},
		LoggedOut: (state) => {
			return {
				...state,
				logged: false,
				uid: '',
				name: '',
			};
		},
	},
});

export const { LoggedIn, LoggedOut } = authReducer.actions;

export default authReducer.reducer;
