import { combineReducers } from '@reduxjs/toolkit';
import filmsSlice from '@reducers/slices/FilmsSlice';
import serialsSlice from '@reducers/slices/SerialsSlice';
import UserSlice from '@reducers/slices/UserSlice';

const rootReducer = combineReducers({
	films: filmsSlice,
	serials: serialsSlice,
	user: UserSlice,
});

export default rootReducer;
