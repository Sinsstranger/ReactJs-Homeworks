import { createSlice } from '@reduxjs/toolkit';
import AuthHelper from '@helpers/Auth';
const getUserInitialState = () => ({
	isAuth: AuthHelper.getIsAuth(),
	token: AuthHelper.getToken(),
})
const UserSlice = createSlice({
	name: 'User',
	initialState: getUserInitialState(),
	reducers: {
		login: (state, action) => {
			state.isAuth = true;
			state.token = action.payload;
		},
		logout: () => getUserInitialState(),
	},
});
export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
