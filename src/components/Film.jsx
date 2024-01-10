import React from 'react';

const filmDetail = ({ title, overview, releaseDate }) => {
	return (
		<>
			<p className="film-title">{title}</p>
			<p className="film-caption">{overview}</p>
			<p>
				Релиз: <span>{releaseDate}</span>
			</p>
		</>
	);
};
export default filmDetail;
