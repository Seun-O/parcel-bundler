import React, { useState } from 'react';

const Search = () => {
	const [location, setLocation] = useState('Seattle, WA');
	return (
		<form>
			<label htmlFor="location">
				Location
				<input
					onChange={e => setLocation(e.target.value)}
					type="text"
					placeholder="Location"
					value={location}
				/>
			</label>
		</form>
	);
};

export default Search;
