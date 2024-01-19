import { Container } from 'react-bootstrap';

function EvalStat({ dataState, reEvalHandler }) {
	return (
		<main className="main">
			<Container>
				<p>Имя пользователя: {dataState.name}</p>
				<p>Оценка: {dataState.evaluation}</p>
				<p>Комментарий: {dataState.comment}</p>
				<button
					type="button"
					onClick={(e) => {
						reEvalHandler(e);
					}}>
					Оценить еще раз
				</button>
			</Container>
		</main>
	);
}

export default EvalStat;
