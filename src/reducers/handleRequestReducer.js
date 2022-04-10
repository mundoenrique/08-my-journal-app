import { createSlice } from '@reduxjs/toolkit';

export const handleReqIniState = {
	loading: false,
	success: false,
	errorCode: false,
	errorMsg: null,
};

export const handleRequestReducer = createSlice({
	name: 'handleRequest',
	initialState: handleReqIniState,
	reducers: {
		hReqStartRequest: (state) => {
			state.loading = true;
		},
		hReqEndRequest: (state) => {
			state.loading = false;
		},
		hReqSetError: (state, action) => {
			state.errorMsg = action.payload.errorMsg;
		},
		hReqSetSuccess: (state, action) => {
			state.success = action.payload;
		},
		hReqReset: (state) => {
			state.success = false;
			state.errorCode = false;
			state.errorMsg = null;
		},
	},
});

export const {
	hReqStartRequest,
	hReqEndRequest,
	hReqSetError,
	hReqSetSuccess,
	hReqReset,
} = handleRequestReducer.actions;

export default handleRequestReducer.reducer;
