import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			task: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	} 

	handleChange(e) {
		let task = e.target.value;
		
		this.setState({ task });
	}

	handleSubmit(e) {
		e.preventDefault();

		let task = this.state.task;

		this.props.onAdd(task);

		this.setState({ task: '' });
	}

	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<input type="text" className="form__field" value={this.state.task} onChange={this.handleChange}/>
				<button className="form__btn" type="submit">Добавить</button>
			</form>
		)
	}
}

Form.propTypes = {
	onAdd: PropTypes.func 
}


export default Form;