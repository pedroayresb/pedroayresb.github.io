import React, { Component } from 'react'
import Loading from './Loading';
import ProjectCard from './ProjectCard';
import { connect } from 'react-redux';
import { miniProjects, trybeCourse } from '../services/course';
import '../styles/styles.css';


class WelcomeProjects extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      language: 'pt',
    };
  }

  componentDidMount() {
    const { language } = this.props
    this.setState({ language }, () => {
      const {
        modules,
      } = trybeCourse;
      const names = [];
      modules.forEach((module) => {
        const { name } = module;
        names.push(name);
      });
      const namesInLanguage = names.map((name) => name[language]);
      this.setState({ modules: namesInLanguage, loading: false });
    });
  }

  titles = () => {
    const { language } = this.state;
    if (language === 'pt-br') {
      return 'Alguns dos meus Projetos: ';
    }
    return 'Some of my Projects: ';
  }
  
  render() { 
    const { loading, language } = this.state;
    if (loading) {
      return <Loading />
    }
    return (
      <div className="container">
        <h1>{this.titles()}</h1>
        <div className="welcome-projects-container">        
        {miniProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            name={ project.name }
            description={ project.description }
            module={ project.module }
            screenshots={ project.screenshots }
            link={ project.link }
            techs={ project.techs }
            startDate={ project.startdate }
            endDate={ project.enddate }
            language={ language }
          />
          ))}
        </div>
      </div>      
    );
  }
}

const mapStateToProps = (state) => ({
  language: state.language.language,
});
 
export default connect(mapStateToProps, null)(WelcomeProjects);