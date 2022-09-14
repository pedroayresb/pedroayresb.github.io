import React, { Component } from 'react'
import Loading from './Loading';
import ProjectCard from './ProjectCard';
import { connect } from 'react-redux';
import { trybeCourse } from '../services/course';
import '../styles/ProjectsContainer.css';


class ProjectsContainer extends Component {
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
        projects
      } = trybeCourse;
      const names = [];
      modules.forEach((module) => {
        const { name } = module;
        names.push(name);
      });
      const namesInLanguage = names.map((name) => name[language]);
      this.setState({ modules: namesInLanguage, projects, loading: false });
    });
  }

  handleChange = (event) => {
    const { value } = event.target;
    const { projects } = trybeCourse;
    const { language } = this.state;
    if (value === 'all') {
      this.setState({ projects });
    } else {
      const filteredProjects = projects.filter((project) => project.module[language] === value);
      this.setState({ projects: filteredProjects });
    }
  }

  titles = () => {
    const { language } = this.state;
    if (language === 'pt-br') {
      return 'Projetos Trybe';
    }
    return 'Trybe Projects';
  }

  moduleInLanguade = () => {
    const { language } = this.state;
    if (language === 'pt-br') {
      return 'Módulos: ';
    }
    return 'Modules: ';
  }

  allInLanguage = () => {
    const { language } = this.state;
    if (language === 'pt-br') {
      return 'Todos';
    }
    return 'All';
  }
  
  noProjects = () => {
    const { language } = this.state;
    if (language === 'pt-br') {
      return 'Nenhum projeto encontrado';
    }
    return 'No projects found';
  }

  render() { 
    const { loading, projects, language } = this.state;
    if (loading) {
      return <Loading />
    }
    return (
      <div className="container">
        <h1>{this.titles()}</h1>
        <div className="projects-form-container">
          <form className="module-selector">
            <label htmlFor="module-selector">{this.moduleInLanguade()}</label>
              <label htmlFor="module-selector">
                <input type="radio" name="module" onChange={ this.handleChange } value="all"/>{this.allInLanguage()}
              </label>
              {this.state.modules.map((module, index) => (
                <label htmlFor="module-selector" key={ index }>
                  <input
                    type="radio"
                    name="module"
                    key={index} 
                    value={module}    
                    onChange={this.handleChange}
                  /> {module}
                </label>
                ))}
          </form>
          <div className="projects-container">    
          {projects.length === 0 ? <p>{ this.noProjects() }</p> : projects.map((project) => (
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
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  language: state.language.language,
});
 
export default connect(mapStateToProps, null)(ProjectsContainer);