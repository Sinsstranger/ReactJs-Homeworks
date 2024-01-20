import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import axios from 'axios';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
		this.logsUrl = `${import.meta.env.VITE_BACKEND_URL}/logs`;
	}

	static getDerivedStateFromError(error) {
		// Обновляем состояние, чтобы при следующем рендере показать запасной UI
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		// Здесь можно добавить логирование ошибок, отправку отчетов и т.д.
		axios.get(`${this.logsUrl}?message=${error.message}`).then((result) => {
			if (result.data && result.data.length === 0) {
				axios.post(this.logsUrl, {
					message: error.message,
					stack: errorInfo,
					date: Date.now(),
				});
			}
		});
	}

	render() {
		const { children, fallback } = this.props;
		const { hasError } = this.state;
		if (hasError) {
			// Показываем запасной UI при наличии ошибки
			return fallback;
		}

		// Если ошибки нет, отображаем дочерние компоненты
		return children;
	}
}

ErrorBoundary.defaultProps = {
	children: null,
	fallback: (
		<Container>
			<p>Ошибка 500. Перезагрузите страницу</p>
		</Container>
	),
};
ErrorBoundary.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]),
	fallback: PropTypes.node,
};
export default ErrorBoundary;
