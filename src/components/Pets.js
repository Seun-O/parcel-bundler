import React from 'react';

const Pets = ({ name, animal, breed, location, media, id }) => {
	let hero = `http://placecorgi.com/300/300`;
	if (media.length) {
		hero = media[0].small;
	}
	return (
		<a href={`/details/${id}`}>
			<div>
				<img src={hero} alt={name} />
			</div>
			<div className="info">
				<h1>{name}</h1>
				<h2>{`${animal} — ${breed} — ${location}`}</h2>
			</div>
		</a>
	);
};

export default Pets;
