import React from 'react';

const filmDetail = ({ title, overview, release_date }) => {
	return (<>
		<p className="film-title">{title}</p>
		<p className="film-caption">{overview}</p>
		<p>Релиз: <span>{release_date}</span></p>
	</>);
};
export default filmDetail;