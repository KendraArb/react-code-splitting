import React from 'react';
import logo from '../logo.svg';

const Page1 = ({ onRouteChange }) => {
	return (
		<div className="App">
			<img src={logo} alt="logo" className="App-logo" />
			<h1 className="App-title">Welcome to React</h1>
			<button className="disabled">Page1</button>
			<button onClick={() => onRouteChange('page2')}>Page2</button>
			<button onClick={() => onRouteChange('page3')}>Page3</button>
		</div>
	);
};

export default Page1;
