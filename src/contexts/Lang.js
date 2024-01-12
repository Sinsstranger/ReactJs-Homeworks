import { createContext } from 'react';

const supportedLanguages = {
	ru: 'ru',
	en: 'en-US',
};

const LanguageContext = createContext(
	supportedLanguages[import.meta.env.VITE_DEFAULT_LANGUAGE],
);
export default LanguageContext;
export { supportedLanguages };
