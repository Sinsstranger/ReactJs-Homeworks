import { useCallback, useEffect, useState } from 'react';
import getFilms from '@helpers/GetFilms.js';
import { Tabs, Tab } from 'react-bootstrap';
import FilmsList from '@components/FilmsList.jsx';
import LanguageContext, { supportedLanguages } from '@context/Lang.js';
import '@css/App.scss';
import LangSweatcher from '@components/LangSweatcher';

function App() {
	const [films, setFilms] = useState(null);
	const [serials, setSerials] = useState(null);
	const [isLoading, toogleLoading] = useState(true);
	const [key, setKey] = useState('tab1');
	// eslint-disable-next-line no-underscore-dangle
	const [lang, setLang] = useState(LanguageContext._currentValue);
	const toggleLang = useCallback(() => {
		const langEntries = Object.entries(supportedLanguages);
		const currentLangIdx = langEntries.findIndex((item) => item[0] === lang);
		const nextLangIdx =
			currentLangIdx < langEntries.length &&
			currentLangIdx + 1 !== langEntries.length
				? currentLangIdx + 1
				: 0;
		setLang(langEntries[nextLangIdx][0]);
	}, [lang]);
	useEffect(() => {
		const mount = async () => {
			const filmsData = await getFilms(
				`${import.meta.env.VITE_API_BASE_URL}${
					import.meta.env.VITE_API_MOVIES_SUFFIX
				}`,
				supportedLanguages[lang],
			);
			const seriesData = await getFilms(
				`${import.meta.env.VITE_API_BASE_URL}${
					import.meta.env.VITE_API_SERIALS_SUFFIX
				}`,
				supportedLanguages[lang],
			);
			setFilms(() => filmsData);
			setSerials(() => seriesData);
			toogleLoading(false);
		};
		mount();
	}, [lang]);
	return (
		<LanguageContext.Provider value={[lang, toggleLang]}>
			<LangSweatcher />
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
							{key === 'tab1' && <FilmsList filmsList={films.results} />}
						</Tab>
						<Tab
							eventKey="tab2"
							title="Сериалы">
							{/* Содержимое второй вкладки */}
							{key === 'tab2' && <FilmsList filmsList={serials.results} />}
						</Tab>
					</Tabs>
				)}
			</div>
		</LanguageContext.Provider>
	);
}

export default App;
