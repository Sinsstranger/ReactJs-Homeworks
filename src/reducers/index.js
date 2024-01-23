import { combineReducers } from '@reduxjs/toolkit';
import filmsSlice from '@reducers/slices/FilmsSlice';
import serialsSlice from '@reducers/slices/SerialsSlice';

const rootReducer = combineReducers({
	films: filmsSlice,
	serials: serialsSlice,
});

export default rootReducer;
