import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@reducers/index';
import authLoginLogoutMiddleware from '@middlewares/AuthLoginLogoutMiddleware';

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware(),
		authLoginLogoutMiddleware,
	],
	devTools: import.meta.env.VITE_BUILD_MODE !== 'production',
});

export default store;
