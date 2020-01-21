import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next/dist/es/withTranslation';
import Tag from './Tag';
import Icon from './Icon';

class ExperienceItem extends Component {
  state = {
    showInformation: false
  };

  handleInfo = () => {
    this.setState(prevState => ({
      showInformation: !prevState.showInformation
    }));
  };

  render() {
    const {
      item: { slug, company, location, duration, projects, technologies },
      t
    } = this.props;
    const { showInformation } = this.state;
    return (
      <div className="divItem">
        <span className="spanName">
          <a href={slug} target="blank" className="itemName" title={`${t('goTo')} ${company}`}>
            <b>{company}</b> ({location})
          </a>
          {projects && projects.length ? (
            <Icon
              width={15}
              src={
                showInformation
                  ? require('../assets/img/up-arrow.svg')
                  : require('../assets/img/down-arrow.svg')
              }
              title={
                showInformation
                  ? t('experience.close', { company })
                  : t('experience.open', { company })
              }
              className="viewCompanyInfo"
              onClick={this.handleInfo}
            />
          ) : null}
        </span>
        <p className="itemDuration">{duration}</p>
        {technologies && technologies.map((tech, i) => <Tag key={`tag${i}`} tagName={tech} />)}
        {showInformation && projects && projects.length ? (
          <p>
            {t('experience.developed')} {company}
          </p>
        ) : null}
        {showInformation && projects && projects.length ? (
          <ul>
            {projects.map((project, i) => (
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
