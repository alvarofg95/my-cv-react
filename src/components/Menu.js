import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
import Icon from './Icon';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      language: 'spanish'
    };
    this.openMenu = this.openMenu.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  openMenu() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  changeLanguage() {
    this.setState(
      prevState => ({
        language: prevState.language === 'english' ? 'spanish' : 'english'
      }),
      () => i18next.changeLanguage(this.state.language)
    );
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <header className="desktopMenu">
          <Link to="/">{t('menu.home')}</Link>
          <Link to="/proyectos">{t('menu.projects')}</Link>
          <Link to="/contacto">{t('menu.contact')}</Link>
        </header>
        <Icon
          className="iconFlat"
          src={
            this.state.language === 'spanish'
              ? require('../static/img/spain.svg')
              : require('../static/img/united-kingdom.svg')
          }
          small
          title={this.state.language === 'spanish' ? 'Cambiar a inglés' : 'Change to Spanish'}
          onClick={this.changeLanguage}
        />
        <Icon
          className="iconMenu"
          src={require('../static/img/menu.svg')}
          small
          onClick={this.openMenu}
        />
        {this.state.open ? (
          <div className="menuDiv">
            <Link to="/">{t('menu.home')}</Link>
            <Link to="/proyectos">{t('menu.projects')}</Link>
            <Link to="/contacto">{t('menu.contact')}</Link>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withTranslation()(Menu);
