import { useRouteError, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
	return (
		<div
			className="d-flex align-content-center justify-content-center"
			style={{ placeItems: 'center', minHeight: '100vh' }}>
			<div className="error">
				Ой! совсем ничего не работает{message ? `: ${message}` : '!'}
				<p>
					Вы будете перенаправлены на главную страницу в течение {seconds}{' '}
					секунд!
				</p>
			</div>
		</div>
	);
}

export default Error;
