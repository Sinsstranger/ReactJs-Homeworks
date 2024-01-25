import { useMatch, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import getMovie from '@helpers/GetMovie';
import { useContext, useEffect } from 'react';
import LanguageContext from '@context/Lang.js';
import { save as saveFilms } from '@reducers/slices/FilmsSlice';
import { save as saveSerials } from '@reducers/slices/SerialsSlice';

function MovieDetail() {
	const parentMatchFilms = useMatch('/movies/:movieId');
	const dispatch = useDispatch();
	const [lang] = useContext(LanguageContext);
	const isSerials = !parentMatchFilms;
	const movieRequestParams = useParams();
	if (movieRequestParams.movieId === undefined) {
		throw new Error('Что-то пошло не так, на могу отобразить фильм/сериал.');
	}
	const movieData = useSelector((state) =>
		state[!isSerials ? 'films' : 'serials'][
			!isSerials ? 'filmsList' : 'serialsList'
		].find((movie) => movie?.id === +movieRequestParams.movieId),
	);
	return (
		<>
			<h1>{movieData?.title || movieData?.name}</h1>
			<p>{movieData?.overview}</p>
		</>
	);
}

export default MovieDetail;
