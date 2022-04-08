import { createSlice } from '@reduxjs/toolkit';

const handleReqIniState = {
	loading: false,
	errorMsg: '',
};

export const handleRequestReducer = createSlice({
	name: 'handleRequest',
	initialState: handleReqIniState,
	reducers: {
		startRequest: (state) => {
			state.loading = true;
		},
		endRequest: (state) => {
			state.loading = false;
		},
		setError: (state, action) => {
			state.errorMsg = action.payload.errorMsg;
		},
		removeError: (state) => {
			state.errorMsg = '';
		},
	},
});

export const { startRequest, endRequest, setError, removeError } =
	handleRequestReducer.actions;

export default handleRequestReducer.reducer;
