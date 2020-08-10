import React from 'react';

class AddForm extends React.Component {
	handleSubmit(event) {
		event.preventDefault();
		this.props.onAddName(event.target.query.value);
		event.target.query.value = '';
	}

	render() {
		return (
			<form className="add-form" onSubmit={this.handleSubmit.bind(this)}>
				<label className="add-form__group">
					<span className="add-form__name">Введите имя</span>
					<input className="add-form__input" name="query" placeholder="Введите имя" required/>
				</label>
				<button className="add-form__button">Добавить</button>
			</form>
		);
	}
}

export default AddForm;
