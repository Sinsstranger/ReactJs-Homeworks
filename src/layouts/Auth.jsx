import React from 'react';
import Header from '@layouts/Header';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '@layouts/Footer';

function Auth() {
	return (
		<>
			<Header />
			<main className="main">
				<Container className="h-100">
					<Outlet />
				</Container>
			</main>
			<Footer />
		</>
	);
}
export default Auth;
