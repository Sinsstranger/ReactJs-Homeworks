import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import Auth from '@helpers/Auth';
import { login as loginAction } from '@reducers/slices/UserSlice';
import { useNavigate } from 'react-router-dom';

function AuthSignIn() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [login, setLogin] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorRegister, setErrorRegister] = useState('');
	const validateForm = (formData) => {
		const formDataEntries = Object.entries(formData);
		return !!(
						formDataEntries.length === 3 &&
						formDataEntries.every(([key, value]) => key && value?.trim().length >= 3)
		);
	};
	const handleSubmit = useCallback(
					async (e) => {
						e.preventDefault();
						if (validateForm({ login, email, password })) {
							try {
								const passwordHash = Auth.genPasswordHash(password);
								const existingUsers = await axios.get(
												`${import.meta.env.VITE_BACKEND_URL}/users?email=${email}`,
								);
								if (!existingUsers.data.length) {
									await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users`, {
										login,
										email,
										passwordHash,
									});
									dispatch(loginAction(passwordHash));
									navigate('/');
								}else {
									setErrorRegister("Пользователь с таким Email уже существует")
								}
							} catch (er) {
								return er.message;
							}
							return true;
						}
						return false;
					},
					[login, email, password, dispatch],
	);
	return (
					<Form
									onSubmit={handleSubmit}
									method="POST">
						<Form.Group className="mb-2">
							<Form.Label>Логин/Ник:</Form.Label>
							<Form.Control
											value={login}
											onChange={(e) => setLogin(e.target.value)}
											name="login"
											required
											placeholder="Login"
							/>
						</Form.Group>
						<Form.Group className="mb-2">
							<Form.Label>E-Mail:</Form.Label>
							<Form.Control
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											name="email"
											type="email"
											required
											placeholder="E-Mail"
							/>
							{errorRegister && <Form.Text>{errorRegister}</Form.Text>};
						</Form.Group>
						<Form.Group className="mb-2">
							<Form.Label>Пароль:</Form.Label>
							<Form.Control
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											name="password"
											type="password"
											required
											placeholder="Password"
							/>
						</Form.Group>
						<Button
										className="w-100"
										type="submit"
										variant="dark">
							Зарегистрироваться
						</Button>
					</Form>
	);
}

export default AuthSignIn;
