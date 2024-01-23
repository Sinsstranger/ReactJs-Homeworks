/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const filmsSlice = createSlice({
	name: 'Films',
	initialState: {
		filmsList: [],
	},
	reducers: {
		save: (state, action) => {
			state.filmsList = action.payload;
		},
	},
});
export const { save } = filmsSlice.actions;
export default filmsSlice.reducer;
