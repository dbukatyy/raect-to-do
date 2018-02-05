import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editing: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
		this.onEditTask = this.onEditTask.bind(this);
	}

	handleChange() {
		this.props.onStatusChange(this.props.id)
	}

	deleteTask() {
		this.props.onDeleteTask(this.props.id)
	}

	onEditTask(e) {
		e.preventDefault();

		let task = this.refs.task.value;

		this.refs.task.focus();

		this.props.onEdit(this.props.id, task);

		this.setState({editing: false});
	}

	displayTask() {
		return (
			<div className={`task${this.props.completed ? ' completed' : ''} `}>
            	<button className="btn" onClick={this.handleChange}>
            		<i className={`${this.props.completed ? ' icon-check' : 'icon-check-empty'}`}></i>
            	</button>
            	<span className="task__title">{this.props.task}</span>
            	<button className="btn" onClick={() => this.setState({editing: true})}>
            		<i className="icon-pencil"></i>
            	</button>
            	<button className="btn" onClick={this.deleteTask}>
            		<i className="icon-trash"></i>
            	</button>
        	</div>
		)
	}

	displayField() {
		return (
        	<form className="edit-form">
        		<input type="text" ref="task" defaultValue={this.props.task}/>
        		<button className="btn" onClick={this.onEditTask}>
        			<i className="icon-floppy"></i>
        		</button>
        	</form>
		)
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.editing) {
			this.refs.task.select();
		}
	}

	render() {
	
		return this.state.editing ? this.displayField() : this.displayTask();
	}
}


Task.propTypes = {
	task: PropTypes.string,
	completed: PropTypes.bool,
	onStatusChange: PropTypes.func,
	onDeleteTask: PropTypes.func,
	onEdit: PropTypes.func
}

export default Task;