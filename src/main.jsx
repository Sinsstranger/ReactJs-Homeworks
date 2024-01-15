import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as RouterProvider } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoundary.jsx';
import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ErrorBoundary>
		<React.StrictMode>
			<RouterProvider>
				<App />
			</RouterProvider>
		</React.StrictMode>
	</ErrorBoundary>,
);
if (import.meta.hot) {
	import.meta.hot.accept((newModule) => {
		if (newModule) {
			// newModule is undefined when SyntaxError happened
		}
	});
}
