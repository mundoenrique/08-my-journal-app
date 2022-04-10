import { createSlice } from '@reduxjs/toolkit';
import { signOutAuthAct, userStateChangedAuthAct } from './authActions';

export const auhtIniState = {
	logged: false,
	uid: null,
	name: null,
	email: null,
	token: null,
};

export const authReducer = createSlice({
	name: 'auth',
	initialState: auhtIniState,
	reducers: {
		authLoggedIn: (state, action) => {
			state.logged = true;
			state.uid = action.payload.uid;
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.token = action.payload.token;
		},
		LoggedOut: () => {
			return {
				...auhtIniState,
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(userStateChangedAuthAct.fulfilled, (state, action) => {
				return {
					...state,
					...action.payload,
				};
			})
			.addCase(userStateChangedAuthAct.rejected, () => {
				return {
					...auhtIniState,
				};
			})
			.addCase(signOutAuthAct.fulfilled, () => {
				return {
					...auhtIniState,
				};
			})
			.addCase(signOutAuthAct.rejected, () => {
				return {
					...auhtIniState,
				};
			});
	},
});

export const { authLoggedIn, LoggedOut } = authReducer.actions;
export default authReducer.reducer;
