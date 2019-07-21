import React from 'react';
import Search from './components/Search';
import { Router, Link } from '@reach/router';
import Details from './components/Details';

const App = () => {
	const eggPlant = 'Egg Plant';
	return (
		<div>
			<Link to="/">
				<h1>Hello World!</h1>
			</Link>
			<Router>
				<Search path="/" />
				<Details path="/details/:id" />
			</Router>
		</div>
	);
};

export default App;
