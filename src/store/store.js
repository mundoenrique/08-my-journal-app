import { configureStore } from '@reduxjs/toolkit';

import handleRequestReducer from '../reducers/handleRequestReducer';
import authReducer from '../reducers/authReducer';
import EntriesReducer from '../reducers/EntriesReducer';

export const store = configureStore({
	reducer: {
		handleRequest: handleRequestReducer,
		auth: authReducer,
		entries: EntriesReducer,
	},
});
