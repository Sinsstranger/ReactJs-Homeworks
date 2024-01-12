import { supportedLanguages } from '@context/Lang.js';

const getFilms = async (
	srcUrl = `${import.meta.env.VITE_API_BASE_URL}${
		import.meta.env.VITE_API_MOVIES_SUFFIX
	}`,
	lang = 'ru',
) => {
	const filmsRaw = await fetch(
		`${srcUrl}?api_key=${import.meta.env.VITE_API_KEY}&language=${
			supportedLanguages[lang]
		}&page=1`,
	);
	return filmsRaw.json();
};
export default getFilms;
