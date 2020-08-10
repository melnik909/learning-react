import React from 'react';

class Name extends React.Component {
	render() {
		const {person, onDeleteName} = this.props;

		return(
			<li className="name">
				<span className="name__value">{person.name}</span>
				<button className="name__button" onClick={onDeleteName.bind(this, this.props.person)} type="button">удалить</button>
			</li>
		)
	}
}

export default Name;
