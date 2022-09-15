import React, { Component } from 'react'
import { trybeCourse } from '../services/course';
import { connect } from 'react-redux';
import '../styles/styles.css';

class ProgressBar extends Component {
  constructor() {
    super();
    this.state = {
      progesses: [],
      module: [],
    };
    this.moduleName = this.moduleName.bind(this);
  }

  componentDidMount() {
    this.moduleName();
    const { modules } = trybeCourse;
    const today = new Date();
    const progesses = [];
    modules.forEach((module) => {
      const { startdate, enddate } = module;
      const start = new Date(startdate.year, startdate.month, startdate.day);
      const end = new Date(enddate.year, enddate.month, enddate.day);
      const total = (end - start) / (1000 * 60 * 60 * 24);
      const left = (end - today) / (1000 * 60 * 60 * 24);
      const percentage = 100 - (Math.round((left / total) * 100));
      if (percentage < 0) {
        progesses.push(0);
      } else if (percentage > 100) {
        progesses.push(100);
      } else {
        progesses.push(percentage);
      }
    });
    this.setState({ progesses });
  }

  moduleName = () => {
    const { language } = this.props;
    const { modules } = trybeCourse;
    const module = [];
    if (language === 'pt-br') {
      modules.forEach((m) => {
        module.push(m.name[language]);
      });
    } else {
      modules.forEach((m) => {
        module.push(m.name.en);
      });
    }
    this.setState({ module });
  }
  
  render() {
    const { progesses, module } = this.state;
    return (
      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-bar__progress-fun" aria-label={`${module[0]} / ${progesses[0]}%`} style={{ width: `${progesses[0]/4}%` }} />
          <div className="progress-bar__progress-front" aria-label={`${module[1]} / ${progesses[1]}%`} style={{ width: `${progesses[1]/4}%` }} />
          <div className="progress-bar__progress-back" aria-label={`${module[2]} / ${progesses[2]}%`}style={{ width: `${progesses[2]/4}%` }} />
          <div className="progress-bar__progress-science" aria-label={`${module[3]} / ${progesses[3]}%`} style={{ width: `${progesses[3]/4}%` }} />
        </div>
        <div className="dates">
          <p>20/04/2022</p>
          <p>20/06/2022</p>
          <p>01/10/2022</p>
          <p>20/01/2023</p>
          <p>20/04/2023</p>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  language: state.language.language,
});
 
export default connect(mapStateToProps, null)(ProgressBar);
