import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';

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

EvalStat.propTypes = {
	dataState: PropTypes.objectOf({
		name: PropTypes.string,
		evaluation: PropTypes.string,
		comment: PropTypes.string,
	}).isRequired,
	reEvalHandler: PropTypes.func.isRequired,
};
export default EvalStat;
