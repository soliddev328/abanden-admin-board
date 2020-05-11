import React, { Component } from 'react';
import { Link } from 'gatsby';
import MorganCodesLogo from '../../images/m.jpg';
import NavigationButton from './NavigationMenu/NavigationButton';
import NavigationMenu from './NavigationMenu/NavigationMenu';

const logo = {
	position: 'fixed',
	width: '75px',
	margin: '10px 0px 0px 30px',
};

const navMenu = {
	position: 'fixed',
	left: '0',
	top: '0',
	transform: 'translate3d(-100vw, 0, 0)',
	width: '100vw',
	height: '100vh',
};

class Header extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			visible: false,
		};

		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		this.setState({
			visible: !this.state.visible,
		});
	}

	handleMouseDown(e) {
		this.toggleMenu();
	}

	render() {
		return (
			<div className="navigation-bar-container">
				<NavigationMenu
					handleMouseDown={this.handleMouseDown}
					menuVisibility={this.state.visible}
				/>
				<Link to="/">
					<img src={MorganCodesLogo} style={logo}></img>
				</Link>

				<NavigationButton handleMouseDown={this.handleMouseDown} />
				<div id="theMenu" style={navMenu}></div>
			</div>
		);
	}
}

export default Header;
