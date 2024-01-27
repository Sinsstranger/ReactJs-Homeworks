import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AuthSignIn() {
	const isAuth = useSelector((store) => store.user.isAuth);
	const navigate = useNavigate();
	if (isAuth) {
		return navigate('/');
	}
	return <p>RegisterPage</p>;
}

export default AuthSignIn;
