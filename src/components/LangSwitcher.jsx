import React, { useContext } from 'react';
import LanguageContext from '@context/Lang.js';

function LangSwitcher() {
	const [lang, toggleLang] = useContext(LanguageContext);
	return (
		<button
			type="button"
			onClick={toggleLang}>
			{lang}
		</button>
	);
}
export default LangSwitcher;
