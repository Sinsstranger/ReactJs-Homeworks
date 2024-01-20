import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from '@components/ErrorBoundary';
import Error500 from '@layouts/Error_500.jsx';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ErrorBoundary fallback={<Error500 />}>
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
