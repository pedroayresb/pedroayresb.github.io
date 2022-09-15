import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import ProjectView from './ProjectView';
import '../styles/styles.css';

class ProjectCard extends Component {
  descriptionLanguage = () => {
    const { description, language } = this.props;
    if(language === 'pt-br') {
      return description[language];
    } else {
      return description.en;
    }
  }

  isImage = () => {
    const { screenshots, name } = this.props;
    if (screenshots === undefined) {
      return null
    } else {
      return (
        <div className="project-card-image">
          <img src={screenshots[0]} alt={name} className="card-img" />
        </div>
      ); 
    }
  }

  moduleLanguage = () => {
    const { module, language } = this.props;
    if(language === 'pt-br') {
      return module[language];
    } else {
      return module.en;
    }
  }

  render() {
    const {
      name,
      screenshots,
      link,
      techs,
      startDate,
      endDate,
    } = this.props;
    return (
      <Popup
        trigger={
      <div className="project-card">
        {this.isImage()}
        <div className="project-card-content">
          <h4>{name}</h4>
          <p>{ this.moduleLanguage() }</p>
          <div className="project-card-techs">
            {techs.map((tech, index) => 
                <img src={tech} alt={tech} key={index} className="tech-img" />
            )}
          </div>
          <div className="project-card-links">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt" />
            </a>
          </div>
          <div className="project-card-footer">
            <p>
              {startDate}
              {' - '}
              {endDate}
            </p>
          </div>
        </div>
      </div>
            }
        modal
        >
        {(close) => (
          <div className="modal">
            <button
              type="button"
              className="close"
              data-testid="close-btn"
              onClick={ close }
            >
              &times;
            </button>
            <ProjectView 
              name={name}
              screenshots={screenshots}
              link={link}
              techs={techs}
              startDate={startDate}
              endDate={endDate}
              module={ this.moduleLanguage() }
              description={ this.descriptionLanguage() }
            />
          </div>
)}
        </Popup>
    );    
  }
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.shape({
    en: PropTypes.string.isRequired,
    'pt-br': PropTypes.string.isRequired,
  }).isRequired,
  module: PropTypes.shape({
    en: PropTypes.string.isRequired,
    'pt-br': PropTypes.string.isRequired,
  }).isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};
 
export default ProjectCard;