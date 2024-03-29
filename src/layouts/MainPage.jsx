import { Container } from 'react-bootstrap';
import Header from '@layouts/Header.jsx';
import Footer from '@layouts/Footer.jsx';
import { Outlet } from 'react-router-dom';
import React from 'react';

function MainPage() {
	return (
		<>
			<Header />
			<main className="main">
				<Container>
					<Outlet />
				</Container>
			</main>
			<Footer />
		</>
	);
}

export default MainPage;
