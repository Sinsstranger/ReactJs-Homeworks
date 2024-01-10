import { useEffect, useState } from 'react';
import getFilms from '@helpers/GetFilms.js';
import FilmsList from '@components/FilmsList.jsx';
import '@css/App.scss';

function App() {
	const [films, setFilms] = useState(null);
	const [isLoading, toogleLoading] = useState(true);
	useEffect(() => {
		const mount = async () => {
			const filmsData = await getFilms();
			setFilms(filmsData);
			toogleLoading(false);
		};
		mount();
	}, []);
	return (
		<div className="films-list">
			{isLoading ? 'Идет загрузка' : <FilmsList filmsList={films.results} />}
		</div>
	);
}

export default App;
