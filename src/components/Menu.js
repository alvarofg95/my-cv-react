import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next/dist/es/withTranslation';
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
    const { language, open } = this.state;
    return (
      <Fragment>
        <header className="desktopMenu">
          <Link to="/">{t('menu.home')}</Link>
          <Link to="/proyectos">{t('menu.projects')}</Link>
        </header>
        <Icon
          className="iconFlat"
          src={
            language === 'spanish'
              ? require('../assets/img/spain.svg')
              : require('../assets/img/united-kingdom.svg')
          }
          small
          title={t('languages.change')}
          onClick={this.changeLanguage}
        />
        <Icon
          className="iconMenu"
          src={require('../assets/img/menu.svg')}
          small
          onClick={this.openMenu}
        />
        {open ? (
          <div className="menuDiv">
            <Link to="/">{t('menu.home')}</Link>
            <Link to="/proyectos">{t('menu.projects')}</Link>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

export default withTranslation()(Menu);
