import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Stats extends Component {

	constructor(props) {
		super(props);

		
	}

	render () {
		let allTask = this.props.tasks.length;
		let completeTask = this.props.tasks.filter(task => task.completed).length;
		let noCompletedTask = allTask - completeTask;


		return (
			<section className="stats">
				<div className="stats__item">
					Всего задач: <span className="stats__count">{allTask}</span>
				</div>
				<div className="stats__item">
					Выполнено: <span className="stats__count">{completeTask}</span>
				</div>
				<div className="stats__item">
					Осталось: <span className="stats__count">{noCompletedTask}</span>
				</div>
			</section>
		)
	}
}

Stats.propTypes = {
	tasks: PropTypes.array
}

export default Stats;