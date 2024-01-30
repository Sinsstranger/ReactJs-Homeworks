import { createBrowserRouter, Link } from 'react-router-dom';
import MainPage from '@layouts/MainPage';
import Error from '@layouts/Error';
import MoviesList from '@components/MoviesList';
import { Helmet } from 'react-helmet';
import EvaluationPage from '@layouts/Evaluation';
import MovieDetail from '@components/MovieDetail';
import React from 'react';
import Auth from '@layouts/Auth';
import { Button } from 'react-bootstrap';
import ErrorBoundary from '@components/ErrorBoundary';
import AuthSignIn from '@layouts/AuthSignIn';
import AuthSignUp from '@layouts/AuthSignUp';
import Index from '@components/Index.jsx';

const movieDetail = {
	path: ':movieId',
	element: <MovieDetail />,
};
const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Index />,
			},
			{
				path: 'movies',
				element: <MoviesList />,
				children: [movieDetail],
			},
			{
				path: 'serials',
				element: <MoviesList isSerials />,
				children: [movieDetail],
			},
		],
	},
	// First route level
	{
		path: 'auth',
		element: <Auth />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: (
								<div className="h-100 d-flex align-items-center justify-content-center">
									<Button
													className="mx-2"
													as={Link}
													to="/auth/signin">
										Login
									</Button>
									<Button
													className="mx-2"
													as={Link}
													to="/auth/signup">
										SignUp
									</Button>
								</div>
				),
			},
			{ path: 'signin', element: <AuthSignIn /> },
			{ path: 'signup', element: <AuthSignUp /> },
		],
	},
	{
		path: 'evaluation',
		element: <EvaluationPage />,
	},
	{ path: '*', element: <Error /> },
]);
export default router;
