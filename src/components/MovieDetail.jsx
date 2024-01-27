import { useMatch, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

function MovieDetail() {
	const parentMatchFilms = useMatch('/movies/:movieId');
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
