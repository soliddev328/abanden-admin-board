import React, { Component } from "react";
import { Link } from 'gatsby'
import './menu.css'

class NavigationMenu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu" onMouseDown={this.props.handleMouseDown} className={visibility}>
        <nav>
          <ul>
            <li><Link to="/projects">PROJECTS</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/">HOME</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavigationMenu;
