import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from "./locales/en/translations"
import ruTranslation from "./locales/ru/translations"
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	en: {
		translation: ruTranslation
	},
	ru: {
		translation: enTranslation
	}
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		fallback: "ru",
		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;