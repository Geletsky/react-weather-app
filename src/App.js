import React from 'react';
import './styles/App.scss';
import Header from './components/Header/Header';

function App() {

	const handleOnSearchChange = (searchData) => {
		console.log(searchData);
	}

	return (
		<div className="container">
			<Header onSearchChange={handleOnSearchChange}/>
		</div>
	);
}

export default App;