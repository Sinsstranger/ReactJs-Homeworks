import React, { useContext } from 'react';
import LanguageContext from '@context/Lang.js';
import { useTranslation } from 'react-i18next';

function LangSwitcher() {
	const [lang, toggleLang] = useContext(LanguageContext);
	const { i18n } = useTranslation();
	return (
					<button
									type="button"
									onClick={toggleLang}>
						{i18n.language}
					</button>
	);
}

export default LangSwitcher;
