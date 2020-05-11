import React, { Component } from 'react';
import { Link } from 'gatsby';
import '../../../styles/menu.css';

class NavigationMenu extends Component {
	render() {
		let visibility = 'hide';

		if (this.props.menuVisibility) {
			visibility = 'show';
		}

		return (
			<div id="flyoutMenu" className={visibility}>
				<button
					className="closeNav"
					id="navButton"
					onMouseDown={this.props.handleMouseDown}
				>
					-
				</button>
				<div className="box">
					<ul>
						<li className="nav-link">
							<Link className="nav-link" to="/">
								HOME
							</Link>
						</li>
						<li className="nav-link">
							<Link className="nav-link" to="/about">
								ABOUT
							</Link>
						</li>
						<li className="nav-link">
							<Link className="nav-link" to="/blogposts">
								BLOG
							</Link>
						</li>
						<li className="nav-link">
							<Link className="nav-link" to="/contact">
								CONTACT
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default NavigationMenu;
