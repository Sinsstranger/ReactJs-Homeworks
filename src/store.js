import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@reducers/index';
import authLogoutMiddleware from '@middlewares/AuthLogoutMiddleware';

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware(),
		authLogoutMiddleware,
	],
	devTools: import.meta.env.VITE_BUILD_MODE !== 'production',
});

export default store;
