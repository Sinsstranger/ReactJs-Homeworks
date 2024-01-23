/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const serialsSlice = createSlice({
	name: 'Serials',
	initialState: {
		serialsList: [],
	},
	reducers: {
		save: (state, action) => {
			state.serialsList = action.payload;
		},
	},
});

export const { save } = serialsSlice.actions;
export default serialsSlice.reducer;
