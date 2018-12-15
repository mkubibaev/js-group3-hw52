import React, { Component } from 'react';
import Number from './components/Number/Number';

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
	};

	componentDidMount() {
		this.getNewNumbers();
	}

	render() {
		return (
			<div className="App">
				<button onClick={this.getNewNumbers}>New numbers</button>
				<div>
					<Number value={this.state.numbers[0]}/>
					<Number value={this.state.numbers[1]}/>
					<Number value={this.state.numbers[2]}/>
					<Number value={this.state.numbers[3]}/>
					<Number value={this.state.numbers[4]}/>
				</div>
			</div>
		);
	}
}

export default App;
