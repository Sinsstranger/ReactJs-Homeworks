import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Обновляем состояние, чтобы при следующем рендере показать запасной UI
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		// Здесь можно добавить логирование ошибок, отправку отчетов и т.д.
		console.error('Error caught by ErrorBoundary:', error, errorInfo);
	}

	render() {
		const { children } = this.props;
		const { hasError } = this.state;
		if (hasError) {
			// Показываем запасной UI при наличии ошибки
			return <p>Что-то пошло не так.</p>;
		}

		// Если ошибки нет, отображаем дочерние компоненты
		return children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
};

export default ErrorBoundary;
