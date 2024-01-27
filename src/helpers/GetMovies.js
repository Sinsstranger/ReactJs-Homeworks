import { supportedLanguages } from '@context/Lang';

const getMovies = async (isSerials = false, lang = 'ru') => {
	const srcUrl = `${import.meta.env.VITE_API_BASE_URL}${
		isSerials
			? import.meta.env.VITE_API_SERIALS_SUFFIX
			: import.meta.env.VITE_API_MOVIES_SUFFIX
	}`;
	const moviesRaw = await fetch(
		`${srcUrl}?api_key=${import.meta.env.VITE_API_KEY}&language=${
			supportedLanguages[lang]
		}&page=1`,
	);
	return moviesRaw.json();
};
export default getMovies;
