import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import React from 'react';

function Error500() {
	return (
		<Container>
			<Helmet>
				<title>Ошибка 500 перезагрузите страницу</title>
			</Helmet>
			<div className="d-flex justify-content-center align-items-center min-vh-100">
				Ошибка 500 перезагрузите страницу
			</div>
		</Container>
	);
}

export default Error500;
