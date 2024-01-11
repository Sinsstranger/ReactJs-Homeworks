import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as RouterProvider } from 'react-router-dom';
import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider>
			<App />
		</RouterProvider>
	</React.StrictMode>,
);
if (import.meta.hot) {
	import.meta.hot.accept((newModule) => {
		if (newModule) {
			// newModule is undefined when SyntaxError happened
		}
	});
}
