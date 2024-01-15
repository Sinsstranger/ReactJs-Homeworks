import { useCallback, useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import MoviesList from '@components/MoviesList.jsx';
import LanguageContext, { supportedLanguages } from '@context/Lang.js';
import '@css/App.scss';
import LangSweatcher from '@components/LangSweatcher';

function App() {
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

	return (
		<LanguageContext.Provider value={[lang, toggleLang]}>
			<LangSweatcher />
			<div className="films-list">
				<Tabs
					id="controlled-tabs"
					activeKey={key}
					onSelect={(k) => setKey(k)}>
					<Tab
						eventKey="tab1"
						title="Фильмы">
						{/* Содержимое первой вкладки */}
						{key === 'tab1' && <MoviesList />}
					</Tab>
					<Tab
						eventKey="tab2"
						title="Сериалы">
						{/* Содержимое второй вкладки */}
						{key === 'tab2' && <MoviesList isSerials />}
					</Tab>
				</Tabs>
			</div>
		</LanguageContext.Provider>
	);
}

export default App;
