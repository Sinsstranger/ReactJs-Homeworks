import Film from '@components/Film.jsx';
import PropTypes from 'prop-types';
import { useEffect, useContext, useState } from 'react';
import LanguageContext from '@context/Lang.js';
import getMovies from '@helpers/GetMovies.js';
import getRandomInteger from '@helpers/GetRandomInteger.js';
import BannerMovie from '@components/BannerMovie.jsx';

function MoviesList({ isSerials }) {
	const [lang] = useContext(LanguageContext);
	const [isLoading, toggleLoading] = useState(true);
	const [moviesList, setMoviesList] = useState([]);
	const [demoMovie, setDemoMovie] = useState({});
	let changeBannerMovie = null;

	useEffect(() => {
		if (!isLoading && !moviesList.length) {
			toggleLoading(true);
		}
		const mountMoviesList = async () => {
			const moviesData = await getMovies(isSerials, lang);
			setMoviesList(moviesData.results);
			// setDemoMovie(
			// 	moviesData.results[getRandomInteger(0, moviesData.results.length)],
			// );
		};
		mountMoviesList();
	}, [lang]);

	useEffect(() => {
		changeBannerMovie = setInterval(() => {
			if (!moviesList.length) {
				return;
			}

			setDemoMovie(moviesList[getRandomInteger(0, moviesList.length)]);
		}, 2000);

		if (isLoading) {
			toggleLoading(false);
		}
		return () => clearInterval(changeBannerMovie);
	}, [moviesList]);

	if (isLoading) {
		return 'Идет загрузка';
	}
	return (
		<>
			{demoMovie && (
				<BannerMovie
					title={demoMovie?.title || demoMovie?.name}
					overview={demoMovie?.overview}
					changeBannerMovie={changeBannerMovie}
				/>
			)}
			<div className="films-list">
				{moviesList.map((film) => (
					<Film
						key={`${film.id}`}
						title={film.title || film.name}
						overview={film.overview}
						releaseDate={film.release_date || null}
					/>
				))}
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
