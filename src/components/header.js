import React, { Component } from 'react'
import { Link } from 'gatsby'
import headerStyles from '../styles/header.module.scss'
import NavigationButton from './navigationButton'
import NavigationMenu from './navigationMenu'

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }

  render() {
  return (
    <div>
      <NavigationButton handleMouseDown={this.handleMouseDown} />
      <NavigationMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
      <header>
        <h1 className={headerStyles.logo}><Link className={headerStyles.logoLink}to="/">M</Link></h1>
        {/*<nav>
          <ul className={headerStyles.navigationBar}>
            <li className={headerStyles.navigationBarLinks}><Link className={headerStyles.link} to="/projects">PROJECTS</Link></li>
            <li className={headerStyles.navigationBarLinks}><Link className={headerStyles.link} to="/about">ABOUT</Link></li>
            <li className={headerStyles.navigationBarLinks}><Link className={headerStyles.link} to="/">HOME</Link></li>
          </ul>
        </nav>*/}
      </header>
      <div id="theMenu"></div>
    </div>
  );
}
}

export default Header
