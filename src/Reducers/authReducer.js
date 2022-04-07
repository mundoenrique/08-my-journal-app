import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	logged: false,
};

export const authReducer = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logged: (state, action) => {
			state.logged = action.payload;
		},
	},
});

export const { logged } = authReducer.actions;

export default authReducer.reducer;
