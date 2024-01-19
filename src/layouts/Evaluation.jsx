import { Container, Form } from 'react-bootstrap';
import Header from '@layouts/Header.jsx';
import Footer from '@layouts/Footer.jsx';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect, useRef, useState } from 'react';
import EvalStat from '@components/EvalStat.jsx';

const defaultEval = 5;
const initialFormState = {
	name: '',
	evaluation: defaultEval,
	comment: '',
};

function EvaluationPage() {
	const pageHead = (
		<>
			<Helmet>
				<title>Оцените приложение</title>
			</Helmet>
			<Header h1="Оцените приложение" />
		</>
	);
	const [dataState, setDataState] = useState(initialFormState);
	const [isShowResult, setIsShowResult] = useState(false);
	const [isNotReadyToSend, setIsNotReadyToSend] = useState(true);
	const nameRef = useRef();
	const evalRef = useRef();
	const commentRef = useRef();
	useEffect(() => {
		if (nameRef?.current) {
			nameRef.current.focus();
		}
	}, [isShowResult]);
	const checkReadyToSend = () => {
		setIsNotReadyToSend(
			!(
				dataState.name.trim().length !== 0 &&
				dataState.comment.trim().length !== 0
			),
		);
	};

	const nameInputHandler = (e) => {
		setDataState((prevState) => ({
			...prevState,
			name: e.target.value,
		}));
		checkReadyToSend();
	};
	const evalSelectHandler = (e) => {
		setDataState((prevState) => ({
			...prevState,
			evaluation: e.target.value,
		}));
	};
	const commentInputHandler = (e) => {
		setDataState((prevState) => ({
			...prevState,
			comment: e.target.value,
		}));
		checkReadyToSend();
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsShowResult(true);
	};
	if (isShowResult) {
		return (
			<>
				{pageHead}
				<EvalStat
					dataState={dataState}
					setDataState={setDataState}
					setIsShowResult={setIsShowResult}
					initialFormState={initialFormState}
					setIsNotReadyToSend={setIsNotReadyToSend}
				/>
			</>
		);
	}
	return (
		<>
			{pageHead}
			<main className="main">
				<Container>
					<Form
						action="/evaluate"
						className="eval-form"
						onSubmit={handleSubmit}>
						<label htmlFor="name">
							Имя:&nbsp;
							<input
								id="name"
								type="text"
								name="name"
								ref={nameRef}
								onSubmit={handleSubmit}
								value={dataState.name}
								onInput={nameInputHandler}
							/>
						</label>
						<label htmlFor="eval">
							Оценка:&nbsp;
							<select
								name="eval"
								id="eval"
								ref={evalRef}
								value={dataState.evaluation}
								onChange={evalSelectHandler}>
								<option value={1}>1</option>
								<option value={2}>2</option>
								<option value={3}>3</option>
								<option value={4}>4</option>
								<option value={defaultEval}>{defaultEval}</option>
							</select>
						</label>
						<label htmlFor="comment">
							Сообщение
							<br />
							<textarea
								name="comment"
								id="comment"
								cols="30"
								rows="10"
								ref={commentRef}
								onInput={commentInputHandler}
								value={dataState.comment}
							/>
						</label>
						<input
							type="submit"
							value="Отправить форму"
							disabled={isNotReadyToSend}
						/>
					</Form>
					<Outlet />
				</Container>
			</main>
			<Footer />
		</>
	);
}

export default EvaluationPage;
