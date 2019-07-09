import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    return (
      <div>
        <header className="desktopMenu">
          <Link to="/">Inicio</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/contacto">Contacto</Link>
        </header>
        <Icon
          className="iconMenu"
          src={require('../static/img/menu.svg')}
          small
          onClick={this.openMenu}
        />
        {this.state.open ? (
          <div className="menuDiv">
            <Link to="/">Inicio</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        ) : null}
      </div>
    );
  }
}
