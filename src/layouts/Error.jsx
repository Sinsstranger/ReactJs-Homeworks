import {
	useRouteError,
	useNavigate,
	Link,
	isRouteErrorResponse,
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

function Error() {
	const error = useRouteError();
	const navigate = useNavigate();
	let message = '';
	if (error && (error.message || error.statusText)) {
		message = error.message || error.statusText;
	}
	let timer = null;
	const redirectTime = 5000;
	let ticker = redirectTime;
	const [seconds, setSeconds] = useState(redirectTime / 1000);
	useEffect(() => {
		timer = setTimeout(() => {
			navigate('/');
		}, redirectTime);
		ticker = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds - 1);
		}, redirectTime / seconds);
		return () => clearInterval(ticker) || clearTimeout(timer);
	}, []);
	if (isRouteErrorResponse(error) || !error) {
		return (
			<>
				<Helmet>
					<title>Ошибка</title>
				</Helmet>
				<div
					className="d-flex align-content-center justify-content-center"
					style={{ placeItems: 'center', minHeight: '100vh' }}>
					<div className="error">
						Ой! совсем ничего не работает{message ? `: ${message}` : '!'}
						<p>
							Вы будете перенаправлены на{' '}
							<Link
								to="/"
								onClick={() => clearInterval(ticker) || clearTimeout(timer)}>
								главную{' '}
							</Link>
							страницу в течение {seconds} секунд!
						</p>
					</div>
				</div>
			</>
		);
	}
	throw error;
}

export default Error;
