import PropTypes from 'prop-types';
import { useEffect } from 'react';

function BannerMovie({ title, overview, changeBannerMovie }) {
	useEffect(() => {
		return () => clearInterval(changeBannerMovie);
	}, []);
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
	changeBannerMovie: 0,
};

BannerMovie.propTypes = {
	title: PropTypes.string,
	overview: PropTypes.string,
	changeBannerMovie: PropTypes.number,
};
export default BannerMovie;
