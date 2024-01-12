import React, { useContext } from 'react';
import LanguageContext from '@context/Lang.js';

function LangSweatcher() {
	const [lang, toggleLang] = useContext(LanguageContext);
	return (
		<button
			type="button"
			onClick={toggleLang}>
			{lang}
		</button>
	);
}
export default LangSweatcher;
