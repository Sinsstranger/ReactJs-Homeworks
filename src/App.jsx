import { useEffect, useState } from 'react';
import getFilms from '@helpers/GetFilms.js';
import getRandomInteger from '@helpers/GetRandomInteger';
import Film from '@components/Film.jsx';
import '@css/App.scss';

function App() {
	const [film, setFilm] = useState(null);
	const [isLoading, toogleLoading] = useState(true);
	const getFilm = async () => {
		toogleLoading(true);
		try {
			const films = await getFilms();
			const oneMovie =
				films.results[getRandomInteger(0, films.results.length - 1)];
			setFilm(oneMovie);
		} catch (error) {
			console.log(error);
		} finally {
			setTimeout(() => {
				toogleLoading(false);
			}, 500);
		}
	};
	useEffect(() => {
		getFilm();
	}, []);
	return (
		<div className="film-wrapper">
			<div className="film-card">
				{isLoading ? (
					'Идет загрузка'
				) : (
					<Film
						title={film.title}
						overview={film.overview}
						releaseDate={film.release_date}
					/>
				)}
			</div>
			<button
				type="button"
				className="film-button change-film"
				onClick={getFilm}>
				Другой фильм
			</button>
		</div>
	);
}

export default App;
