import React, { useCallback, useMemo, useState } from 'react';
import LanguageContext, { supportedLanguages } from '@context/Lang.js';
import { RouterProvider } from 'react-router-dom';
import router from '@routes/Router';
import { useTranslation } from 'react-i18next';
import '@css/App.scss';

function App() {
	// eslint-disable-next-line no-underscore-dangle
	const [lang, setLang] = useState(LanguageContext._currentValue);
	const { i18n } = useTranslation();
	const [wasLangChanged, setWasLangChanged] = useState(false);
	const toggleLang = useCallback(() => {
		const langEntries = Object.entries(supportedLanguages);
		const currentLangIdx = langEntries.findIndex((item) => item[0] === lang);
		const nextLangIdx =
			currentLangIdx < langEntries.length &&
			currentLangIdx + 1 !== langEntries.length
				? currentLangIdx + 1
				: 0;
		setLang(langEntries[nextLangIdx][0]);
		setWasLangChanged(true);
		i18n.changeLanguage(langEntries[nextLangIdx][0])
	}, [lang]);

	return (
		<LanguageContext.Provider
			value={useMemo(
				() => [lang, toggleLang, wasLangChanged, setWasLangChanged],
				[lang],
			)}>
			<RouterProvider router={router} />
		</LanguageContext.Provider>
	);
}

export default App;
