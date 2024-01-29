import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { login } from '@reducers/slices/UserSlice';
import AuthHelper from '@helpers/Auth';
import { useNavigate } from 'react-router-dom';

function AuthSignIn() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorMessage(null);
		const res = await axios.get(
			`${import.meta.env.VITE_BACKEND_URL}/users?email=${email}`,
		);
		const users = res.data;
		if (
			!users.length ||
			!AuthHelper.checkPassword(password, users[0].passwordHash)
		) {
			setErrorMessage('Не верный логин и/или пароль');
			return false;
		}
		dispatch(login(users[0].passwordHash));
		navigate('/');
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-2">
				{errorMessage && (
					<Form.Group>
						<Form.Text className="text-bg-danger">{errorMessage}</Form.Text>
					</Form.Group>
				)}
				<Form.Label>E-Mail:</Form.Label>
				<Form.Control
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-Mail"
				/>
			</Form.Group>
			<Form.Group className="mb-2">
				<Form.Label>Пароль:</Form.Label>
				<Form.Control
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
			</Form.Group>
			<Button
				className="w-100"
				variant="dark"
				type="submit">
				Войти
			</Button>
		</Form>
	);
}

export default AuthSignIn;
