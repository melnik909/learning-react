import React from 'react';

class MainToolbar extends React.Component {
	render() {
		return (
			<div className="main-toolbar">
				<button className="main-toolbar__button" type="button" onClick={this.props.onClearNames}>Очистить список</button>
				<button className="main-toolbar__button" type="button" onClick={this.props.onGetRandomNames}>Добавить рандомные имена</button>
			</div>
		);
	}
}

export default MainToolbar;
