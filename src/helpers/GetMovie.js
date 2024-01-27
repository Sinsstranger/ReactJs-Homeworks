import { supportedLanguages } from '@context/Lang';

const getMovie = async (lang, movieId, isSerials) => {
	const srcUrl = 'https://api.themoviedb.org/3/movie/';
	const movieRaw = await fetch(
		`${srcUrl}${movieId}?api_key=${import.meta.env.VITE_API_KEY}&language=${
			supportedLanguages[lang]
		}&page=1`,
	);
	return movieRaw.json();
};
export default getMovie;
