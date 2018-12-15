import React, { Component } from 'react';

import './App.css';

class App extends Component {
	state = {
		numbers: []
	};

	getNewNumbers = () => {
		const numbers = [];

		while(true) {
			const randomNum = Math.floor(Math.random() * 32 + 5);
			if (!numbers.includes(randomNum)) {
				numbers.push(randomNum);
			}
			if (numbers.length === 5) {
				break;
			}
		}

		numbers.sort((a, b) => a - b);
		this.setState({numbers});

		console.log(this.state.numbers);
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.getNewNumbers}>New numbers</button>
			</div>
		);
	}
}

export default App;
