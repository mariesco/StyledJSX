import React from 'react';
import { pushRotate as Menu } from 'react-burger-menu'
import './styles/menu.css';

class Burguer extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="http://localhost:3000/">Home</a>
        <a id="about" className="menu-item" href="http://localhost:3000/">About</a>
        <a id="contact" className="menu-item" href="http://localhost:3000/">Contact</a>
        <a  onClick={ this.showSettings } className="menu-item--small" href="http://localhost:3000/">Settings</a>
      </Menu>
    );
  }
}
export default Burguer;
