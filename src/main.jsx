import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from '@components/ErrorBoundary';
import Error500 from '@layouts/Error_500.jsx';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import './i18n';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ErrorBoundary fallback={<Error500 />}>
			<ReduxProvider store={store}>
				<App />
			</ReduxProvider>
		</ErrorBoundary>
	</React.StrictMode>,
);
if (import.meta.hot) {
	import.meta.hot.accept((newModule) => {
		if (newModule) {
			// newModule is undefined when SyntaxError happened
		}
	});
}
