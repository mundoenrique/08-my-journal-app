import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../Reducers/authReducer';
import EntriesReducer from '../Reducers/EntriesReducer';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		entries: EntriesReducer,
	},
});
