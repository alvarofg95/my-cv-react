import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import Icon from './Icon';
import { withTranslation } from 'react-i18next';

class ExperienceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInformation: false
    };

    this.handleInfo = this.handleInfo.bind(this);
  }

  handleInfo() {
    this.setState(prevState => ({
      showInformation: !prevState.showInformation
    }));
  }

  render() {
    const { item, t } = this.props;
    const { showInformation } = this.state;
    return (
      <div className="divItem">
        <span className="spanName">
          <a
            href={item.slug}
            target="blank"
            className="itemName"
            title={`${t('goTo')} ${item.company}`}
          >
            <b>{item.company}</b> ({item.location})
          </a>
          {item && item.projects && item.projects.length ? (
            <Icon
              width={15}
              src={
                showInformation
                  ? require('../assets/img/up-arrow.svg')
                  : require('../assets/img/down-arrow.svg')
              }
              title={
                showInformation
                  ? `Cerrar información sobre ${item.company}`
                  : `¿Qué hice en ${item.company}?`
              }
              className="viewCompanyInfo"
              onClick={this.handleInfo}
            />
          ) : null}
        </span>
        <p className="itemDuration">{item.duration}</p>
        {item.technologies.map((tech, i) => (
          <Tag key={`tag${i}`} tagName={tech} />
        ))}
        {showInformation && item.projects && item.projects.length ? (
          <p>
            {t('experience.developed')} {item.company}
          </p>
        ) : null}
        {showInformation && item.projects && item.projects.length ? (
          <ul>
            {item.projects.map((project, i) => (
              <li key={`project_${i}`}>
                <b className="projectName">{project.name}</b>
                <p className="projectDescription">{project.description}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

ExperienceItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default withTranslation()(ExperienceItem);
