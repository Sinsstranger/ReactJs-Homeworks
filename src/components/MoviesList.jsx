import Film from '@components/Film.jsx';
import PropTypes from 'prop-types';
import { useEffect, useContext, useState } from 'react';
import LanguageContext from '@context/Lang.js';
import getMovies from '@helpers/GetMovies.js';
import getRandomInteger from '@helpers/GetRandomInteger.js';
import BannerMovie from '@components/BannerMovie.jsx';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { save as filmsSave } from '@reducers/slices/FilmsSlice';
import { save as serialsSave } from '@reducers/slices/SerialsSlice';
import Spinner from 'react-bootstrap/Spinner';
import { Outlet, useParams } from 'react-router-dom';

function MoviesList({ isSerials }) {
	const routeParams = useParams();
	const [lang, toggleLang, wasLangChanged, setWasLangChanged] =
		useContext(LanguageContext);
	const [isLoading, toggleLoading] = useState(true);
	const [demoMovie, setDemoMovie] = useState({});
	const moviesList = useSelector((store) =>
		isSerials ? store.serials.serialsList : store.films.filmsList,
	);
	const dispatch = useDispatch();
	let changeBannerMovie = null;

	useEffect(() => {
		if (!isLoading && !moviesList.length) {
			toggleLoading(true);
		}
		const mountMoviesList = async () => {
			const moviesData = await getMovies(isSerials, lang);
			dispatch(
				isSerials
					? serialsSave(moviesData.results)
					: filmsSave(moviesData.results),
			);
		};
		if (wasLangChanged || moviesList.length === 0) {
			mountMoviesList();
			setWasLangChanged(false);
		}
	}, [lang, isSerials]);

	useEffect(() => {
		if (!routeParams?.movieId) {
			changeBannerMovie = setInterval(() => {
				if (!moviesList.length || routeParams?.movieId) {
					return;
				}

				setDemoMovie(moviesList[getRandomInteger(0, moviesList.length)]);
			}, 2000);
		}

		if (isLoading) {
			toggleLoading(false);
		}
		return () => clearInterval(changeBannerMovie);
	}, [moviesList]);

	if (isLoading) {
		return (
			<Spinner
				animation="border"
				role="status">
				<span className="visually-hidden">Идет загрузка...</span>
			</Spinner>
		);
	}
	return (
		<>
			{demoMovie && (
				<Container>
					<Helmet>
						<title>{isSerials ? 'Сериалы' : 'Фильмы'}</title>
					</Helmet>
					{!routeParams?.movieId && (
						<BannerMovie
							title={demoMovie?.title || demoMovie?.name}
							overview={demoMovie?.overview}
							changeBannerMovie={changeBannerMovie}
						/>
					)}
				</Container>
			)}
			<div className="films-list">
				{routeParams?.movieId ? (
					<Outlet id={routeParams.movieId} />
				) : (
					moviesList.map((film) => (
						<Film
							key={`${film.id}`}
							title={film.title || film.name}
							overview={film.overview}
							releaseDate={film.release_date || null}
							isSerial={isSerials}
							id={film.id}
						/>
					))
				)}
			</div>
		</>
	);
}

MoviesList.defaultProps = {
	isSerials: false,
};

MoviesList.propTypes = {
	isSerials: PropTypes.bool,
};
export default MoviesList;
