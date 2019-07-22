import React, { Component } from "react";
import { Link } from 'gatsby'
import '../styles/menu.css'

class NavigationMenu extends Component {
  render() {
    let visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu" className={visibility}>
        <button className="closeNav" onMouseDown={this.props.handleMouseDown}>-</button>
        <div className="box">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/projects">PROJECTS</Link></li>
            <li><Link to="/projects">BLOG</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavigationMenu;
