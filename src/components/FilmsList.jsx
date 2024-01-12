import Film from '@components/Film.jsx';
import PropTypes from 'prop-types';

function FilmsList({ filmsList = [] }) {
	return (
		<div className="films-list">
			{filmsList.map((film) => (
				<Film
					key={`${film.id}`}
					title={film.title || film.name}
					overview={film.overview}
					releaseDate={film.release_date || null}
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
			id: PropTypes.number.isRequired,
			title: PropTypes.string,
			name: PropTypes.string,
			overview: PropTypes.string.isRequired,
			releaseDate: PropTypes.string,
		}),
	),
};
export default FilmsList;
