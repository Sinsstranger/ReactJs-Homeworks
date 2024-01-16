import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@layouts/MainPage.jsx';
import Error from '@layouts/Error.jsx';
import MoviesList from '@components/MoviesList.jsx';
import Header from '@layouts/Header.jsx';
import Footer from '@layouts/Footer.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <Error />,
		children: [
			{ index: true, element: <MainPage /> },
			{
				path: 'movies',
				element: (
					<>
						<Header />
						<MoviesList />
						<Footer />
					</>
				),
			},
			{
				path: 'serials',
				element: (
					<>
						<Header />
						<MoviesList isSerials />
						<Footer />
					</>
				),
			},
			{ path: '*', element: <Error /> },
		],
	},
]);
export default router;
