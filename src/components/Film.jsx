import React, {useMemo} from 'react';
import { Link } from 'react-router-dom';

const filmDetail = ({ title, overview, releaseDate, isSerial, id }) => {
  const serialLink = useMemo(() => <Link to={`/${isSerial ? 'serials' : 'movies'}/${id}`}>{title}</Link>, [])
	return (
		<div className="film-card films-list__item">
			<p className="film-title">
				{' '}
        {serialLink}
			</p>
			<p className="film-caption">{overview}</p>
			{releaseDate ? (
				<p>
					Релиз: <span>{releaseDate}</span>
				</p>
			) : (
				releaseDate
			)}
		</div>
	);
};
export default filmDetail;
