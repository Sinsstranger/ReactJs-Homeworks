import PropTypes from 'prop-types';
import React from 'react';

function BannerMovie({ title, overview }) {
	return (
		<div className="films-list__banner">
			<div className="films-list__title">{title}</div>
			<div className="films-list__description">{overview}</div>
		</div>
	);
}

BannerMovie.defaultProps = {
	title: '',
	overview: '',
};

BannerMovie.propTypes = {
	title: PropTypes.string,
	overview: PropTypes.string,
};
export default BannerMovie;
