import React from 'react';
import Name from '../Name/Name';

class Names extends React.Component {
	render() {
		return(
			<ul className="names">
				{
					this.props.persons.map((person) => {
						return (
							<Name person={person} key={person.id} onDeleteName={this.props.onDeleteName} />
						);
					})
				}
			</ul>
		)
	}
}

export default Names;
