import React, { Component } from 'react';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'page1',
		};
	}

	onRouteChange = route => {
		this.setState({ route });
	};
	render() {
		return this.state.route === 'page1' ? <Page1 onRouteChange={this.onRouteChange} /> : this.state.route === 'page2' ? <Page2 onRouteChange={this.onRouteChange} /> : <Page3 onRouteChange={this.onRouteChange} />;
	}
}

export default App;