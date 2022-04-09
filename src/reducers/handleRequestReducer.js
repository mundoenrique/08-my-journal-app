import { createSlice } from '@reduxjs/toolkit';

const handleReqIniState = {
	loading: false,
	success: false,
	errorMsg: false,
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
		hReqSetSuccess: (state) => {
			state.success = true;
		},
		hReqReset: () => {
			return {
				...handleReqIniState,
			};
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
