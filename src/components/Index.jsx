import React from 'react';
import { useTranslation } from "react-i18next";
import {Helmet} from 'react-helmet';

const Index = () => {
	const {t} = useTranslation();
	return (<>
		<Helmet>
			<title>{t('mainpage.h1')}</title>
		</Helmet>
		<h1 className="card-title">{t('mainpage.h1')}</h1>
	</>);
};
export default Index;