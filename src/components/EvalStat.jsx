import { Container } from 'react-bootstrap';

function EvalStat({
	dataState,
	initialFormState,
	setDataState,
	setIsShowResult,
	setIsNotReadyToSend,
}) {
	return (
		<main className="main">
			<Container>
				<p>Имя пользователя: {dataState.name}</p>
				<p>Оценка: {dataState.evaluation}</p>
				<p>Комментарий: {dataState.comment}</p>
				<button
					type="button"
					onClick={() => {
						setDataState(initialFormState);
						setIsShowResult(false);
						setIsNotReadyToSend(true);
					}}>
					Оценить еще раз
				</button>
			</Container>
		</main>
	);
}

export default EvalStat;
