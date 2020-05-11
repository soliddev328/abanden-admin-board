import React, { Component } from 'react';
import '../../../styles/navButton.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavigationButton extends Component {
	render() {
		return (
			<FontAwesomeIcon
				id="navButton"
				onClick={this.props.handleMouseDown}
				icon={faBars}
			/>
		);
	}
}

export default NavigationButton;
