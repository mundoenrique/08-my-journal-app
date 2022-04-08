import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	entries: [],
	activeEntry: false,
};

export const entriesReducer = createSlice({
	name: 'entries',
	initialState,
	reducers: {
		activeEntry: (state, action) => {
			return {
				...state,
				activeEntry: action.payload,
			};
		},
	},
});

export const { activeEntry } = entriesReducer.actions;

export default entriesReducer.reducer;
