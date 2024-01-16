import { useRouteError } from 'react-router-dom';

function Error() {
	const error = useRouteError();
	return <div>Ой! совсем ничего не работает: {error.message}</div>;
}

export default Error;
