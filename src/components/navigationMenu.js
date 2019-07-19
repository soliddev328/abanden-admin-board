import React, { Component } from "react";
import { Link } from 'gatsby'
import './menu.css'

class NavigationMenu extends Component {
  render() {
    let visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu" className={visibility}>
        <button onMouseDown={this.props.handleMouseDown}>x</button>
        <div className="box">
          <ul>
            <li><Link to="/projects">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/projects">PROJECTS</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavigationMenu;
