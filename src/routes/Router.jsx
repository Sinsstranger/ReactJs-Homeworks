import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@layouts/MainPage.jsx';
import Error from '@layouts/Error.jsx';
import MoviesList from '@components/MoviesList.jsx';
import { Helmet } from 'react-helmet';
import EvaluationPage from '@layouts/Evaluation.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: (
					<>
						<Helmet>
							<title>Главная страница</title>
						</Helmet>
						<h1 className="card-title">Главная страница</h1>
					</>
				),
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
	// First route level
	{
		path: 'evaluation',
		element: <EvaluationPage />,
	},
]);
export default router;
