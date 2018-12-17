import React, { Component } from 'react';
import Number from './components/Number/Number';

import './App.css';

class App extends Component {
	state = {
		numbers: []
	};

	getNewNumbers = () => {
		const numbers = [];

		while(numbers.length < 5) {
			const randomNum = Math.floor(Math.random() * 31 + 5);
			if (!numbers.includes(randomNum)) {
				numbers.push(randomNum);
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
                    {this.state.numbers.map((number, key) => {
                        return <Number value={number} key={key}/>
                    })}
				</div>
			</div>
		);
	}
}

export default App;
