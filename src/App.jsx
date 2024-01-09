import { useEffect, useState } from 'react';
import getFilms from '@helpers/GetFilms.js';
import getRandomInteger from '@helpers/GetRandomInteger';
import Film from '@components/Film';
import '@css/App.scss';

function App() {
	const [film, setFilm] = useState(null);
	const [isLoading, toogleLoading] = useState(true);
	const getFilm = async () => {
		if (!isLoading) {
			toogleLoading(!isLoading);
		}
		const films = await getFilms();
		const film = films.results[getRandomInteger(0, films.results.length - 1)];
		setFilm(film);
		setTimeout(() => toogleLoading(!isLoading), 1000);
	};
	useEffect(() => {
		getFilm();
	}, []);
	return (
					<div className="film-wrapper">
						<div className="film-card">
							{isLoading
											? 'Идет загрузка'
											: <Film title={film.title} overview={film.overview} release_date={film.release_date} />
							}
						</div>
						<button className="film-button change-film" onClick={getFilm}>Другой фильм</button>
					</div>
	);
}

export default App;
