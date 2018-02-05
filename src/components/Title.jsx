import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';

class Title extends Component {
	render() {
		return (
			<header>
				<Stats tasks={this.props.task}/>
    	    	<h1>{this.props.title}</h1>
	        </header>
		);
	}
}


Title.propTypes = {
	title: PropTypes.string,
	tasks: PropTypes.array
}

export default Title;