import React from 'react';
import Film from '@components/Film.jsx';
import PropTypes from 'prop-types';

function FilmsList({ filmsList = [] }) {
	return (
		<div className="films-list">
			{filmsList.map((film, idx) => (
				<Film
					key={`${idx + 1}`}
					title={film.title}
					overview={film.overview}
					releaseDate={film.release_date}
				/>
			))}
		</div>
	);
}

FilmsList.defaultProps = {
	filmsList: [],
};

FilmsList.propTypes = {
	filmsList: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			overview: PropTypes.string.isRequired,
			releaseDate: PropTypes.string.isRequired,
		}),
	),
};
export default FilmsList;
