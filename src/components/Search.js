import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';

import useDropdown from './Dropdown';
import Results from './Results';

const Search = () => {
	const [location, setLocation] = useState('Seattle, WA');
	const [breeds, setBreeds] = useState([]);
	const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
	const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
	const [pets, setPets] = useState([]);

	async function requestPets() {
		const { animals } = await pet.animals({
			location,
			breed,
			type: animal
		});
		setPets(animals || []);
	}

	useEffect(() => {
		setBreeds([]);
		setBreed('');
		pet.breeds(animal).then(({ breeds }) => {
			const breedStrings = breeds.map(({ name }) => name);
			setBreeds(breedStrings);
		}, console.error);
	}, [animal, setBreed, setBreeds]);

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
					requestPets();
				}}
			>
				<label htmlFor="location">
					Location
					<input
						onChange={e => setLocation(e.target.value)}
						type="text"
						placeholder="Location"
						value={location}
					/>
				</label>
				<AnimalDropdown />
				<BreedDropdown />
				<button type="submit">Submit</button>
			</form>
			<Results pets={pets} />
		</div>
	);
};

export default Search;
