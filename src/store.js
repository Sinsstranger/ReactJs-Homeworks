import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@reducers/index.js';

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
	devTools: import.meta.env.VITE_BUILD_MODE !== 'production',
});

export default store;
