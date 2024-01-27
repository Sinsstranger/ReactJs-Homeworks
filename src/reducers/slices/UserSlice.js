import { createSlice } from '@reduxjs/toolkit';
import AuthHelper from '@helpers/Auth';

const UserSlice = createSlice({
	name: 'User',
	initialState: {
		isAuth: AuthHelper.getIsAuth(),
		token: AuthHelper.getToken(),
	},
	reducers: {
		login: (state, action) => {
			state.isAuth = true;
			state.token = action.payload;
		},
		logout: () => UserSlice.getInitialState(),
	},
});
export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
