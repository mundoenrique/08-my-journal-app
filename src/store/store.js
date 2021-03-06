import { configureStore } from '@reduxjs/toolkit';

import handleRequestReducer from '../reducers/handleRequestReducer';
import authReducer from '../reducers/authReducer';
import entriesReducer from '../reducers/entriesReducer';

export const store = configureStore({
	reducer: {
		handleRequest: handleRequestReducer,
		auth: authReducer,
		entries: entriesReducer,
	},
});
