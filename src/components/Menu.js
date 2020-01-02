import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { withTranslation } from 'react-i18next/dist/es/withTranslation';
import i18next from 'i18next';
import { connect } from 'react-redux';
import reduxActions from '../redux/actions/index';
import Icon from './Icon';

const mapDispatchToProps = dispatch => ({
  changeLanguageRedux: language => {
    dispatch(reduxActions.changeLanguage(language));
  },
  loadAppInfo: cookies => {
    dispatch(reduxActions.loadAppInfo(cookies));
  }
});

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.cookies = new Cookies();
    this.openMenu = this.openMenu.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  componentWillMount() {
    const { loadAppInfo, hasLoadedInfo } = this.props;
    if (loadAppInfo && !hasLoadedInfo) {
      loadAppInfo(this.cookies);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { language } = nextProps;
    const { language: languageProps } = this.props;
    if (language !== languageProps) {
      i18next.changeLanguage(language);
    }
  }

  openMenu() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  changeLanguage() {
    const { language } = this.props;
    const newLanguage = language === 'english' ? 'spanish' : 'english';
    i18next.changeLanguage(newLanguage);
    console.log(newLanguage);
    this.props.changeLanguageRedux(newLanguage);
  }

  render() {
    const { t, language } = this.props;
    const { open } = this.state;
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

const mapStateToProps = ({ hasLoadedInfo, language }) => ({
  hasLoadedInfo,
  language
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Menu));
