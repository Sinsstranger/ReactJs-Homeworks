import React, { useEffect } from 'react';
import Header from '@layouts/Header';
import { Container } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '@layouts/Footer';
import { useSelector } from 'react-redux';

function Auth() {
	const isAuth = useSelector((store) => store.user.isAuth);
	const navigate = useNavigate();
	useEffect(() => {
		if (isAuth) {
			navigate('/');
		}
	}, []);

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
