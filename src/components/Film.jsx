import React from 'react';

const filmDetail = ({ title, overview, releaseDate }) => {
	return (
		<div className="film-card films-list__item">
			<p className="film-title">{title}</p>
			<p className="film-caption">{overview}</p>
			<p>
				Релиз: <span>{releaseDate}</span>
			</p>
		</div>
	);
};
export default filmDetail;
