import { useEffect, useState } from 'react';
import getFilms from '@helpers/GetFilms.js';
import { Tabs, Tab } from 'react-bootstrap';
import FilmsList from '@components/FilmsList.jsx';
import '@css/App.scss';

function App() {
	const [films, setFilms] = useState(null);
	const [serials, setSerials] = useState(null);
	const [isLoading, toogleLoading] = useState(true);
	const [key, setKey] = useState('tab1');
	useEffect(() => {
		const mount = async () => {
			const filmsData = await getFilms();
			const seriesData = await getFilms(
				`${import.meta.env.VITE_API_BASE_URL}${
					import.meta.env.VITE_API_SERIALS_SUFFIX
				}`,
			);
			setFilms(() => filmsData);
			setSerials(() => seriesData);
			toogleLoading(false);
		};
		mount();
	}, []);
	return (
		<div className="films-list">
			{isLoading ? (
				'Идет загрузка'
			) : (
				<Tabs
					id="controlled-tabs"
					activeKey={key}
					onSelect={(k) => setKey(k)}>
					<Tab
						eventKey="tab1"
						title="Фильмы">
						{/* Содержимое первой вкладки */}
						<FilmsList filmsList={films.results} />
					</Tab>
					<Tab
						eventKey="tab2"
						title="Сериалы">
						{/* Содержимое второй вкладки */}
						<FilmsList filmsList={serials.results} />
					</Tab>
				</Tabs>
			)}
		</div>
	);
}

export default App;
