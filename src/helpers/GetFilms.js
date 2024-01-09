// import 'dotenv/config';

const getFilms = async () => {
	const filmsRaw = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=ru&page=1`);
	return await filmsRaw.json();
}
export default getFilms;