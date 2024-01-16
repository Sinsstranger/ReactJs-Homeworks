import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from '@components/ErrorBoundary';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ErrorBoundary>
		<React.StrictMode>
			<App />
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
