import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@layouts/MainPage.jsx';
import Error from '@layouts/Error.jsx';
import MoviesList from '@components/MoviesList.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <h1 className="card-title">Главная страница</h1>,
			},
			{
				path: 'movies',
				element: <MoviesList />,
			},
			{
				path: 'serials',
				element: <MoviesList isSerials />,
			},
			{ path: '*', element: <Error /> },
		],
	},
]);
export default router;
