import React from 'react';
import MainToolbar from './components/MainToolbar/MainToolbar';
import AddForm from './components/AddForm/AddForm';
import Names from './components/Names/Names';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			persons: [],
      requestURL: 'http://www.filltext.com/?rows=5&fname={username}&pretty=true'
		};
	}

	clearNames() {
		this.state.persons.splice(0, this.state.persons.length);
		this.setState({persons: this.state.persons});
	}

	generateUniqueId() {
		/*
     Алгоритм рахработал Gordon Brander https://gist.github.com/gordonbrander/2230317
		*/

		return '_' + Math.random().toString(36).substr(2, 9);
	}

	createPerson(data) {
		let person = {
			id: this.generateUniqueId(),
			name: data.name,
		}

		return person;
	}

	addPerson(name) {
		this.state.persons.push(this.createPerson({name: name}));
		this.setState({persons: this.state.persons});
	}

	deletePerson(person) {
		this.state.persons.splice(this.state.persons.indexOf(person), 1);
		this.setState({persons: this.state.persons});
	}

	async getRandomNames() {
    let response = await fetch(this.state.requestURL);
    let names = await response.json();

    names.map((object) => this.addPerson(object.fname));
	}

	render() {
		return (
			<>
				<MainToolbar onClearNames = {this.clearNames.bind(this)} onGetRandomNames = {this.getRandomNames.bind(this)}/>
				<AddForm onAddName = {this.addPerson.bind(this)} />
				<Names persons={this.state.persons} onDeleteName = {this.deletePerson.bind(this)} />
			</>
		);
	}
}

export default App;
