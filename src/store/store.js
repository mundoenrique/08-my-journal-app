import { configureStore } from '@reduxjs/toolkit';

import handleRequestReducer from '../Reducers/handleRequestReducer';
import authReducer from '../Reducers/authReducer';
import EntriesReducer from '../Reducers/EntriesReducer';

export const store = configureStore({
	reducer: {
		handleRequest: handleRequestReducer,
		auth: authReducer,
		entries: EntriesReducer,
	},
});
